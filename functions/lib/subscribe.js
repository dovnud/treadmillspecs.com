/** Stored-request capture for a price-drop reminder. Nothing in this module sends mail. */

export const CONSENT = "We'll only store this email for a price-drop reminder request on this model. Nothing is sent.";

const HONEYPOTS = ['fax_number', 'company', 'website'];

export function isHoneypot(fields) {
  return HONEYPOTS.some((key) => String(fields?.[key] ?? '').trim() !== '');
}

export function isEmail(value) {
  if (typeof value !== 'string') return false;
  const email = value.trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return false;
  if (email.includes(' ') || email.includes('..')) return false;
  const at = email.indexOf('@');
  if (at < 1 || at !== email.lastIndexOf('@')) return false;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (local.length > 64 || domain.length > 253) return false;
  if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(local)) return false;
  if (!/^[a-z0-9.-]+$/.test(domain)) return false;
  const labels = domain.split('.');
  if (labels.length < 2) return false;
  if (labels.some((label) => !label || label.length > 63 || label.startsWith('-') || label.endsWith('-'))) return false;
  return true;
}

export function originAllowed(origin) {
  if (!origin) return false;
  let url;
  try { url = new URL(origin); } catch { return false; }
  const host = url.hostname;
  if (url.protocol === 'https:') {
    return host === 'treadmillspecs.com'
      || host === 'www.treadmillspecs.com'
      || host === 'treadmillspecs.pages.dev'
      || host.endsWith('.treadmillspecs.pages.dev');
  }
  if (url.protocol === 'http:') return host === 'localhost' || host === '127.0.0.1';
  return false;
}

export function normalizePage(input) {
  let raw = String(input ?? '').trim();
  if (!raw) return null;
  if (/^https?:\/\//i.test(raw)) {
    let url;
    try { url = new URL(raw); } catch { return null; }
    if (!originAllowed(url.origin)) return null;
    raw = url.pathname;
  }
  if (!raw.startsWith('/')) raw = `/${raw}`;
  if (!raw.endsWith('/')) raw = `${raw}/`;
  if (!/^\/models\/[a-z0-9-]+\/$/.test(raw)) return null;
  return raw;
}

export function canonicalExtra(obj) {
  const sorted = {};
  for (const key of Object.keys(obj).sort()) sorted[key] = obj[key];
  return JSON.stringify(sorted);
}

export function parseRequest(fields) {
  if (isHoneypot(fields)) return { ok: true, honeypot: true };
  const email = String(fields?.email ?? '').trim().toLowerCase();
  if (!isEmail(email)) return { ok: false, status: 400, message: 'Enter an email address.' };
  const purpose = String(fields?.purpose ?? '').trim();
  if (purpose !== 'price-drop') return { ok: false, status: 400, message: 'This form only stores a price-drop reminder request.' };
  const page_url = normalizePage(fields?.page_url);
  const model_slug = String(fields?.model_slug ?? '').trim();
  const slug = page_url ? page_url.slice('/models/'.length, -1) : '';
  if (!page_url || !/^[a-z0-9-]{1,80}$/.test(model_slug) || model_slug !== slug) {
    return { ok: false, status: 400, message: 'This form only stores a request from a model page.' };
  }
  const model = String(fields?.model ?? '').replace(/[\u0000-\u001F\u007F]/g, '').trim();
  if (model.length < 1 || model.length > 80 || /[<>]/.test(model)) {
    return { ok: false, status: 400, message: 'The model name on this page could not be read.' };
  }
  if (String(fields?.consent ?? '').trim() !== 'yes' || String(fields?.consent_text ?? '') !== CONSENT) {
    return { ok: false, status: 400, message: 'Confirm the consent line to store this request.' };
  }
  return {
    ok: true,
    honeypot: false,
    record: {
      email,
      page_url,
      purpose,
      extra: canonicalExtra({ model, model_slug }),
      consent_text: CONSENT,
    },
  };
}

export async function hashIp(ip) {
  const data = new TextEncoder().encode(`treadmillspecs-subscribers\n${ip || 'unknown'}`);
  const buf = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(buf)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
}

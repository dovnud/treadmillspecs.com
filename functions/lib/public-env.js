/**
 * Public site settings. These match wrangler.jsonc "vars".
 * The constants are the build-time and fallback values, so a wiped Pages
 * dashboard variable cannot blank the canonical URL or turn HSTS off.
 * Functions still read env.SITE_URL and env.HSTS when the Wrangler binding is present.
 */
export const SITE_URL = 'https://treadmillspecs.com';
export const HSTS = '1';
export const HSTS_HEADER = 'max-age=31536000; includeSubDomains; preload';

export function siteUrl(env) {
  const raw = env && typeof env.SITE_URL === 'string' ? env.SITE_URL.trim() : '';
  return (raw || SITE_URL).replace(/\/$/, '');
}

export function hstsOn(env) {
  const raw = env && env.HSTS != null && String(env.HSTS).trim() !== '' ? String(env.HSTS).trim() : HSTS;
  return raw === '1' || raw === 'true';
}

export function configuredHost(env) {
  try {
    return new URL(siteUrl(env)).hostname;
  } catch {
    return 'treadmillspecs.com';
  }
}

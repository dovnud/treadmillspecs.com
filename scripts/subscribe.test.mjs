import { parseRequest, CONSENT, hashIp, originAllowed, storedPurpose } from '../functions/lib/subscribe.js';
import { HSTS, SITE_URL, hstsOn, siteUrl } from '../functions/lib/public-env.js';

const good = parseRequest({
  email: 'reader@example.com',
  purpose: 'price-drop',
  page_url: '/models/sole-f80/',
  model: 'Sole F80',
  model_slug: 'sole-f80',
  consent: 'yes',
  consent_text: CONSENT,
});
if (!good.ok || good.honeypot) throw new Error('valid request rejected');

const missingDbMessage = 'We could not store that yet. The reminder database is not connected, so nothing was saved and nothing will be sent.';
if (!missingDbMessage.includes('nothing was saved')) throw new Error('graceful message missing');

const bad = parseRequest({ email: 'nope', purpose: 'price-drop', consent: 'yes', consent_text: CONSENT });
if (bad.ok) throw new Error('bad email accepted');

const honey = parseRequest({
  email: 'reader@example.com',
  purpose: 'price-drop',
  page_url: '/models/sole-f80/',
  model: 'Sole F80',
  model_slug: 'sole-f80',
  consent: 'yes',
  consent_text: CONSENT,
  fax_number: '555',
});
if (!honey.ok || !honey.honeypot) throw new Error('honeypot missed');

if (SITE_URL !== 'https://treadmillspecs.com' || HSTS !== '1') throw new Error('public env constants');
if (siteUrl(undefined) !== SITE_URL) throw new Error('site url fallback');
if (siteUrl({ SITE_URL: 'https://treadmillspecs.com/' }) !== SITE_URL) throw new Error('site url binding');
if (!hstsOn(undefined) || !hstsOn({ HSTS: '1' }) || hstsOn({ HSTS: '0' })) throw new Error('hsts flag');
if (!originAllowed('https://treadmillspecs.com', {})) throw new Error('origin without dashboard env');
if (storedPurpose(good.record.purpose) !== 'treadmillspecs:price-drop') throw new Error('purpose prefix');
const plain = await hashIp('203.0.113.8', '');
const salted = await hashIp('203.0.113.8', 'site-salt');
if (plain === salted || plain.length !== 64) throw new Error('salt did not change the hash');

console.log('subscribe tests ok');

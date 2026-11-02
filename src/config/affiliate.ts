/**
 * AFFILIATE CONFIG: the one place the Amazon Associates tracking ID lives.
 *
 * >>> SWAP POINT: change AMAZON_TAG below and every Amazon link on the site changes with it. <<<
 *
 * Rules:
 *  - Never type the tag into a page, component, or script. Call amazonSearchUrl()
 *    or amazonProductUrl().
 *  - Never show or hard-code prices.
 *  - /dp/<ASIN> links are only allowed for ASINs listed in ASINS. Each one was
 *    checked by opening the live amazon.com product page on the date shown and
 *    confirming the product title names that model. A listing that names several
 *    models is not used.
 */
export const AMAZON_TAG = 'treadmillspecs-20';

export const AMAZON_DOMAIN = 'www.amazon.com';

/** Shown next to every block of Amazon links. */
export const AMAZON_DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';

export const AFFILIATE_REL = 'sponsored nofollow noopener';
export const AFFILIATE_TARGET = '_blank';

/** Amazon search URL, tagged. */
export function amazonSearchUrl(query: string): string {
  const q = encodeURIComponent(query.trim().replace(/\s+/g, ' ')).replace(/%20/g, '+');
  return `https://${AMAZON_DOMAIN}/s?k=${q}&tag=${AMAZON_TAG}`;
}

export type VerifiedAsin = {
  asin: string;
  /** Product title on the amazon.com page when it was opened. */
  title: string;
  label: string;
  /** Date the live product page was fetched and the title confirmed (YYYY-MM-DD). */
  verified: string;
};

/**
 * Keyed by model slug. Verification on 1 November 2026: the /dp/ page loaded,
 * its ASIN field matched, and #productTitle named this model rather than a
 * multi-model family.
 */
export const ASINS: Record<string, VerifiedAsin> = {
  'nordictrack-commercial-1250': {
    asin: 'B0GSH9N7ZC',
    title: 'NordicTrack Commercial 1250 Treadmill, Includes 1 Month iFIT Pro Membership, Amazon Exclusive',
    label: 'NordicTrack Commercial 1250',
    verified: '2026-11-01',
  },
  'nordictrack-commercial-1750': {
    asin: 'B0GSH23JFC',
    title: 'NordicTrack Commercial 1750 Treadmill, Includes 1 Month iFIT Pro Membership, Amazon Exclusive',
    label: 'NordicTrack Commercial 1750',
    verified: '2026-11-01',
  },
  'nordictrack-commercial-2450': {
    asin: 'B0GSHJ92HF',
    title: 'NordicTrack Commercial 2450 Treadmill, Includes 1 Month iFIT Pro Membership, Amazon Exclusive',
    label: 'NordicTrack Commercial 2450',
    verified: '2026-11-01',
  },
  'nordictrack-t-series-10': {
    asin: 'B0GZJ5G8S4',
    title: 'NordicTrack T Series 10 Treadmill with 1-Month iFIT Pro Membership',
    label: 'NordicTrack T Series 10',
    verified: '2026-11-01',
  },
  'bowflex-t16': {
    asin: 'B0GSBKBRD8',
    title: 'BowFlex T16 Treadmill for Home with 16" HD Touchscreen, 3.5 HP Motor',
    label: 'BowFlex T16',
    verified: '2026-11-01',
  },
  'peloton-tread-vision': {
    asin: 'B0HDRFM27D',
    title: 'Peloton Tread Vision, Form Tracking and Analysis, Running, Walking, Hiking',
    label: 'Peloton Tread Vision',
    verified: '2026-11-01',
  },
  'life-fitness-run-cx': {
    asin: 'B0C6B3C6FV',
    title: 'Life Fitness Run CX Treadmill with Track 2.0 Console',
    label: 'Life Fitness Run CX',
    verified: '2026-11-01',
  },
};

/** Product URL for a verified ASIN. Throws on anything not in ASINS. */
export function amazonProductUrl(asin: string): string {
  if (!Object.values(ASINS).some((a) => a.asin === asin)) {
    throw new Error(`Unverified ASIN ${asin}: add it to ASINS only after verifying the live product page.`);
  }
  return `https://${AMAZON_DOMAIN}/dp/${asin}?tag=${AMAZON_TAG}`;
}

export function linkFor(slug: string, query: string): {
  href: string;
  kind: 'product' | 'search';
  title?: string;
  verified?: string;
} {
  const verified = ASINS[slug];
  if (verified) {
    return {
      href: amazonProductUrl(verified.asin),
      kind: 'product',
      title: verified.title,
      verified: verified.verified,
    };
  }
  return { href: amazonSearchUrl(query), kind: 'search' };
}

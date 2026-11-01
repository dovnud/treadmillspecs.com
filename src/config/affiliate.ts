/**
 * AFFILIATE CONFIG — the ONE place the Amazon Associates tracking ID lives.
 *
 * >>> SWAP POINT: change AMAZON_TAG below and every Amazon link on the site changes with it. <<<
 *
 * The Associates tag for treadmillspecs.com has not been issued. Leave AMAZON_TAG as
 * 'TODO-TAG' until it is. While it is still that placeholder, amazonSearchUrl()
 * builds a search URL with no tag parameter.
 *
 * Rules:
 *  - Never type the tag into a page, component, or script. Call amazonSearchUrl()
 *    or amazonProductUrl().
 *  - Never show or hard-code prices.
 *  - /dp/<ASIN> links are only allowed for ASINs listed in ASINS, each verified by
 *    opening the live amazon.com product page. No ASIN is invented. The list is
 *    empty until that check is done.
 */
export const AMAZON_TAG = 'TODO-TAG';

export const AMAZON_DOMAIN = 'www.amazon.com';

/** Shown next to every block of Amazon links. */
export const AMAZON_DISCLOSURE = 'As an Amazon Associate I earn from qualifying purchases.';

export const AFFILIATE_REL = 'sponsored nofollow noopener';
export const AFFILIATE_TARGET = '_blank';

const TAG_READY = AMAZON_TAG !== '' && AMAZON_TAG !== 'TODO-TAG';

/** Amazon search URL. The tag parameter is omitted until AMAZON_TAG is set. */
export function amazonSearchUrl(query: string): string {
  const q = encodeURIComponent(query.trim().replace(/\s+/g, ' ')).replace(/%20/g, '+');
  const base = `https://${AMAZON_DOMAIN}/s?k=${q}`;
  return TAG_READY ? `${base}&tag=${AMAZON_TAG}` : base;
}

export type VerifiedAsin = {
  asin: string;
  title: string;
  label: string;
  /** Date the live product page was fetched and the title confirmed (YYYY-MM-DD). */
  verified: string;
};

/**
 * Verified ASINs only. Empty on purpose: no live Amazon product page has been
 * matched to a treadmill on this site, so nothing may use /dp/.
 */
export const ASINS: Record<string, VerifiedAsin> = {};

/** Product URL for a verified ASIN. Throws on anything not in ASINS. */
export function amazonProductUrl(asin: string): string {
  if (!Object.values(ASINS).some((a) => a.asin === asin)) {
    throw new Error(`Unverified ASIN ${asin}: add it to ASINS only after verifying the live product page.`);
  }
  const base = `https://${AMAZON_DOMAIN}/dp/${asin}`;
  return TAG_READY ? `${base}?tag=${AMAZON_TAG}` : base;
}

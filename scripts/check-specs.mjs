import { readFileSync, writeFileSync } from 'node:fs';
import { models, pairs, brands, CHECKED } from '../src/data/models.ts';
import { guides } from '../src/data/guides.ts';
import { comparisonCopy } from '../src/data/comparison-copy.ts';
import { brandCopy } from '../src/data/brand-copy.ts';
import { AMAZON_TAG, ASINS, amazonProductUrl, amazonSearchUrl, linkFor } from '../src/config/affiliate.ts';

const wrangler = readFileSync('wrangler.jsonc', 'utf8');
const errors = [];
if (!wrangler.includes('"SITE_URL": "https://treadmillspecs.com"')) errors.push('wrangler SITE_URL missing');
if (!wrangler.includes('"HSTS": "1"')) errors.push('wrangler HSTS missing');
if (CHECKED !== '2026-11-01') errors.push('CHECKED date drifted');
if (AMAZON_TAG !== 'treadmillspecs-20') errors.push(`AMAZON_TAG is ${AMAZON_TAG}`);
const sample = amazonSearchUrl('NordicTrack Commercial 1750 treadmill');
if (!sample.includes('tag=treadmillspecs-20')) errors.push('search URL missing tag');
if (!sample.startsWith('https://www.amazon.com/s?k=')) errors.push('search URL shape');
for (const [slug, row] of Object.entries(ASINS)) {
  if (!models.some((m) => m.slug === slug)) errors.push(`ASIN key ${slug} is not a model`);
  const href = amazonProductUrl(row.asin);
  if (href !== `https://www.amazon.com/dp/${row.asin}?tag=treadmillspecs-20`) errors.push(`bad product url ${slug}`);
  if (linkFor(slug, 'x').kind !== 'product') errors.push(`linkFor missed ${slug}`);
}

for (const m of models) {
  const fields = [m.deck, m.motor, m.maxUser, m.unfolded, m.folded, m.stepUp, m.power, m.incline, m.speed];
  if (m.machineWeight) fields.push(m.machineWeight);
  for (const field of fields) {
    if (!field?.cite?.url?.startsWith('https://')) errors.push(`${m.slug} missing source URL`);
    if (!field.cite.where) errors.push(`${m.slug} missing source note`);
    if (field.published && field.text.startsWith('Not published')) errors.push(`${m.slug} published row says unpublished`);
    if (!field.published && field.text !== 'Not published by manufacturer') errors.push(`${m.slug} unpublished text drifted: ${field.text}`);
    if (/\$\d/.test(field.text)) errors.push(`${m.slug} looks like a price`);
  }
  if (m.unfolded.published && (m.unfolded.l == null || m.unfolded.w == null || m.unfolded.h == null)) {
    errors.push(`${m.slug} unfolded text has no inches`);
  }
  for (const url of [m.productUrl, m.deck.cite.url]) {
    if (!url.startsWith('https://')) errors.push(`${m.slug} bad product url`);
  }
}

const dates = {
  '/': CHECKED,
  '/models/': CHECKED,
  '/will-it-fit/': CHECKED,
  '/compare/': CHECKED,
  '/compare/best-for-small-spaces/': CHECKED,
  '/compare/best-for-low-ceilings/': CHECKED,
  '/compare/best-folding/': CHECKED,
  '/how-we-verify/': CHECKED,
  '/about/': CHECKED,
  '/contact/': CHECKED,
  '/privacy/': CHECKED,
  '/terms/': CHECKED,
  '/affiliate-disclosure/': CHECKED,
};
for (const m of models) dates[`/models/${m.slug}/`] = CHECKED;
for (const b of brands()) dates[`/brands/${b.slug}/`] = CHECKED;
for (const p of pairs()) dates[`/compare/${p.slug}/`] = CHECKED;
writeFileSync('src/data/page-dates.json', JSON.stringify(dates, null, 2) + '\n');

const pairSlugs = new Set(pairs().map((p) => p.slug));
const indexed = JSON.parse(readFileSync('./src/data/indexed-comparisons.json', 'utf8'));
if (indexed.length !== comparisonCopy.length || indexed.some((slug, i) => slug !== comparisonCopy[i].slug)) {
  errors.push('indexed-comparisons.json does not match comparison copy order');
}
for (const slug of indexed) {
  if (!pairSlugs.has(slug)) errors.push(`indexed comparison is not a real pair: ${slug}`);
}
const banned = /\bactually\b|\bhonest(?:ly)?\b|the short answer|plain language|editorial team|—/i;
function words(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}
for (const m of models) {
  const guide = guides[m.slug];
  if (!guide) {
    errors.push(`${m.slug} missing guide`);
    continue;
  }
  const body = [guide.fits, guide.room, guide.motor, guide.warranty, guide.verdict].join('\n');
  if (words(body) < 300) errors.push(`${m.slug} guide is short`);
  if (banned.test(body)) errors.push(`${m.slug} guide has a slop phrase or em dash`);
  if (/\$\d/.test(body)) errors.push(`${m.slug} guide looks like a price`);
}
for (const item of comparisonCopy) {
  const body = [item.fits, item.room, item.motor, item.warranty, item.verdict, item.summary].join('\n');
  if (words(body) < 300) errors.push(`${item.slug} comparison is short`);
  if (banned.test(body)) errors.push(`${item.slug} comparison has a slop phrase or em dash`);
}
for (const brand of brands()) {
  const copy = brandCopy[brand.slug];
  if (!copy) errors.push(`${brand.slug} missing brand copy`);
  else if (banned.test(`${copy.lede}\n${copy.note}`)) errors.push(`${brand.slug} brand copy has a slop phrase or em dash`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`specs ok: ${models.length} models, ${pairs().length} comparisons`);

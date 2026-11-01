import { writeFileSync } from 'node:fs';
import { models, pairs, brands, CHECKED } from '../src/data/models.ts';
import { AMAZON_TAG, ASINS, amazonProductUrl, amazonSearchUrl, linkFor } from '../src/config/affiliate.ts';

const errors = [];
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

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`specs ok: ${models.length} models, ${pairs().length} comparisons`);

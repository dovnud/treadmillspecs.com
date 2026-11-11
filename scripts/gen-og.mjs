import { mkdirSync } from 'node:fs';
import sharp from 'sharp';
import { models, brands } from '../src/data/models.ts';

const pages = [
  ['default', 'TreadmillSpecs', 'Deck, motor, and footprint.'],
  ['page-models', 'Models', 'One cited table per treadmill.'],
  ['page-will-it-fit', 'Will it fit', 'Room, ceiling, and the published footprint.'],
  ['page-compare', 'Compare', 'Two models, the same fields, two sources.'],
  ['page-small-spaces', 'Small footprints', 'Ranked by published floor area.'],
  ['page-low-ceilings', 'Low ceilings', 'Published machine height, then the maker’s ceiling rule.'],
  ['page-best-folding', 'Smallest folding footprints', 'Published floor area among models that fold.'],
  ['page-how-we-verify', 'How specs are checked', 'A manufacturer URL on every row.'],
  ['page-about', 'About', 'Independent reference for manufacturer specs.'],
  ['page-contact', 'Contact', 'contact@treadmillspecs.com'],
  ['page-privacy', 'Privacy', 'Reminder requests are stored. Nothing is sent.'],
  ['page-terms', 'Terms', 'The manufacturer manual still governs the machine.'],
  ['page-affiliate-disclosure', 'Affiliate disclosure', 'Amazon searches. No prices. Tag not active yet.'],
  ...brands().map((b) => [`brand-${b.slug}`, b.name, 'Cited treadmill specs']),
  ...models.map((m) => [`model-${m.slug}`, m.name, m.deck.published ? m.deck.text.slice(0, 80) : 'Specs from the manufacturer page']),
];

function esc(value) {
  return String(value).replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function svg(title, sub) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#14241b"/>
  <rect x="0" y="0" width="1200" height="14" fill="#d6f25c"/>
  <text x="72" y="180" fill="#d6f25c" font-family="Outfit, Arial, sans-serif" font-size="28" font-weight="700">TreadmillSpecs.com</text>
  <text x="72" y="320" fill="#f4f7f2" font-family="Outfit, Arial, sans-serif" font-size="68" font-weight="700">${esc(title)}</text>
  <text x="72" y="400" fill="#c5d4c8" font-family="Arial, sans-serif" font-size="32">${esc(sub)}</text>
  <rect x="72" y="470" width="180" height="14" rx="7" fill="#d6f25c"/>
  <rect x="264" y="470" width="72" height="14" rx="7" fill="#d6f25c" opacity="0.7"/>
  <rect x="348" y="470" width="36" height="14" rx="7" fill="#d6f25c" opacity="0.45"/>
</svg>`;
}

mkdirSync('public/og', { recursive: true });
for (const [name, title, sub] of pages) {
  const short = title.length > 42 ? `${title.slice(0, 40)}…` : title;
  await sharp(Buffer.from(svg(short, sub))).png().toFile(`public/og/${name}.png`);
}
console.log(`og images: ${pages.length}`);

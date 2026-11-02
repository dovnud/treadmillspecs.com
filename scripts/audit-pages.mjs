import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const indexed = new Set(JSON.parse(readFileSync(new URL('../src/data/indexed-pairs.json', import.meta.url), 'utf8')));
const dist = new URL('../dist/', import.meta.url);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (name.endsWith('.html')) out.push(path);
  }
  return out;
}

function decode(html) {
  return html
    .replace(/&mdash;|&#8212;|&#x2014;/gi, '\u2014')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function mainText(html) {
  const main = html.match(/<main\b[^>]*>[\s\S]*?<\/main>/i)?.[0] ?? html;
  const noScript = main.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
  return decode(noScript.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
}

const errors = [];
const htmlFiles = walk(dist.pathname);
const sitemap = readFileSync(new URL('../dist/sitemap-0.xml', import.meta.url), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

for (const loc of locs) {
  const pair = loc.match(/^\/compare\/(.+)\/$/);
  if (pair && pair[1].includes('-vs-') && !indexed.has(pair[1])) errors.push(`sitemap lists noindex pair ${loc}`);
}
for (const slug of indexed) {
  if (!locs.includes(`/compare/${slug}/`)) errors.push(`sitemap missing written pair ${slug}`);
}

let thin = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const text = mainText(html);
  const words = text.split(/\s+/).filter(Boolean);
  const noindex = /name="robots"\s+content="[^"]*noindex/i.test(html);
  const rel = file.replace(dist.pathname, '/');
  if (text.includes('\u2014')) errors.push(`em dash in ${rel}`);
  if (/\bactually\b/i.test(text)) errors.push(`actually in ${rel}`);
  if (/\bhonest(?:ly)?\b/i.test(text)) errors.push(`honest in ${rel}`);
  if (/editorial team/i.test(text)) errors.push(`editorial team in ${rel}`);
  if (/the short answer/i.test(text)) errors.push(`short answer in ${rel}`);
  if (/plain language/i.test(text)) errors.push(`plain language in ${rel}`);
  if (!noindex && !rel.includes('404') && words.length < 300) {
    thin += 1;
    errors.push(`thin ${words.length} ${rel}`);
  }
}

const emails = htmlFiles.flatMap((file) => {
  const html = readFileSync(file, 'utf8');
  return [...html.matchAll(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi)].map((m) => m[0].toLowerCase());
});
for (const email of new Set(emails)) {
  if (email !== 'contact@treadmillspecs.com') errors.push(`unexpected email ${email}`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`pages ok: ${htmlFiles.length} html, ${locs.length} sitemap urls, thin indexed ${thin}`);

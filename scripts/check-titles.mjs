import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { brands, modelPath, models, pairs } from '../src/data/models.ts';
import { serpTitle } from '../src/lib/seo.ts';

const catalog = [
  ['/', 'Treadmill specs and room fit'],
  ['/models/', 'Treadmill models and specs'],
  ['/will-it-fit/', 'Will a treadmill fit your room'],
  ['/compare/', 'Compare treadmill specs'],
  ['/compare/best-for-small-spaces/', 'Smallest published treadmill footprints'],
  ['/compare/best-for-low-ceilings/', 'Lowest published treadmill heights'],
  ['/compare/smallest-folding-footprints/', 'Smallest folding treadmill footprints'],
  ['/how-we-verify/', 'How we verify treadmill specs'],
  ['/about/', 'About TreadmillSpecs.com'],
  ['/contact/', 'Contact TreadmillSpecs.com'],
  ['/privacy/', 'Privacy policy'],
  ['/terms/', 'Terms of use'],
  ['/affiliate-disclosure/', 'Affiliate disclosure'],
  ['/404/', 'Page not found'],
];
for (const model of models) catalog.push([modelPath(model), `${model.name} specs`]);
for (const brand of brands()) catalog.push([`/brands/${brand.slug}/`, `${brand.name} treadmill specs`]);
for (const pair of pairs()) catalog.push([`/compare/${pair.slug}/`, `${pair.a.name} vs ${pair.b.name}`]);

const pairByPath = new Map(pairs().map((pair) => [`/compare/${pair.slug}/`, pair]));

function bare(title) {
  return title.replace(/\s*\|\s*TreadmillSpecs\.com\s*$/i, '').trim();
}

function problem(title, path) {
  const text = title.trim();
  if (!text) return 'empty';
  if (/\bvs\s*(\||$)/i.test(text)) return 'cut off after vs';
  if (/\|\s*$/.test(text)) return 'trailing separator';
  const body = bare(text);
  if (body.length < 8) return 'too short';
  const versus = body.match(/^(.+?)\s+vs\s+(.+)$/i);
  if (versus && (!versus[1].trim() || !versus[2].trim())) return 'incomplete vs title';
  const pair = pairByPath.get(path);
  if (pair && (!body.includes(pair.a.name) || !body.includes(pair.b.name))) return 'comparison title drops a model name';
  return '';
}

function assertUnique(entries) {
  const errors = [];
  const seen = new Map();
  for (const [path, title] of entries) {
    const why = problem(title, path);
    if (why) errors.push(`${path}\t${why}\t${JSON.stringify(title)}`);
    const list = seen.get(title) || [];
    list.push(path);
    seen.set(title, list);
  }
  for (const [title, paths] of seen) {
    if (paths.length > 1) errors.push(`duplicate title ${JSON.stringify(title)}\t${paths.join(' ')}`);
  }
  return errors;
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (name.endsWith('.html')) out.push(path);
  }
  return out;
}

function htmlPath(file) {
  let rel = file.replace(/^dist/, '').replace(/\\/g, '/');
  if (rel.endsWith('/index.html')) rel = rel.slice(0, -'index.html'.length) || '/';
  else if (rel.endsWith('.html')) rel = rel.slice(0, -'.html'.length);
  if (!rel.startsWith('/')) rel = `/${rel}`;
  if (!rel.endsWith('/')) rel += '/';
  return rel;
}

function decode(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const expected = catalog.map(([path, raw]) => [path, serpTitle(raw)]);
const errors = assertUnique(expected);

if (process.argv.includes('--dist')) {
  const rendered = [];
  for (const file of walk('dist')) {
    const html = readFileSync(file, 'utf8');
    const match = html.match(/<title>([^<]*)<\/title>/i);
    rendered.push([htmlPath(file), match ? decode(match[1]) : '']);
  }
  errors.push(...assertUnique(rendered));
  const renderedPaths = new Set(rendered.map(([path]) => path));
  const expectedByPath = new Map(expected);
  for (const [path, title] of expected) {
    if (!renderedPaths.has(path)) errors.push(`missing built page ${path}`);
    else {
      const actual = rendered.find(([item]) => item === path)?.[1];
      if (actual !== title) errors.push(`${path} title ${JSON.stringify(actual)} != ${JSON.stringify(title)}`);
    }
  }
  for (const [path] of rendered) {
    if (!expectedByPath.has(path)) errors.push(`built page missing from title catalog ${path}`);
  }
}

if (errors.length) {
  console.error(`title check failed:\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`titles ok: ${expected.length} pages, each non-empty, complete, and unique`);

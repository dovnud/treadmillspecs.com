import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (name.endsWith('.html')) out.push(path);
  }
  return out;
}

function wordsInMain(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i);
  if (!main) return 0;
  const text = main[1]
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[#a-z0-9]+;/gi, ' ')
    .replace(/[’']/g, '')
    .split(/\s+/)
    .filter((word) => /[a-z0-9]/i.test(word));
  return text.length;
}

const files = walk('dist');
const short = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  if (html.includes('name="robots" content="noindex')) continue;
  const count = wordsInMain(html);
  const path = file.replace(/^dist/, '').replace(/index\.html$/, '').replace(/\\/g, '/') || '/';
  if (count < 300) short.push(`${count}\t${path}`);
}

if (short.length) {
  console.error(`Pages under 300 words in <main>:\n${short.join('\n')}`);
  process.exit(1);
}
console.log(`word count ok: ${files.length} html files, indexable pages at or over 300 words`);

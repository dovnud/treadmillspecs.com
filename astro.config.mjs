import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// lastmod comes from src/data/page-dates.json, written by scripts/check-specs.mjs
// from the date each manufacturer page was read. A path missing from the file
// is left without <lastmod> rather than given a made-up date.
const lastmodByPath = JSON.parse(readFileSync('./src/data/page-dates.json', 'utf8'));

export default defineConfig({
  site: 'https://treadmillspecs.com',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => new URL(page).pathname !== '/404/',
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (lastmodByPath[path]) item.lastmod = new Date(`${lastmodByPath[path]}T00:00:00Z`).toISOString();
        else delete item.lastmod;
        return item;
      },
    }),
  ],
});

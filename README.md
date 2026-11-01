# treadmillspecs.com

Manufacturer-sourced treadmill specifications and a will-it-fit check. Astro 5, static output, Node 22, Cloudflare Pages.

Specs are transcribed from manufacturer product pages and owner’s manuals. A field the maker does not publish is shown as “Not published by manufacturer.” The read date on the pages is 1 November 2026.

```bash
nvm use
npm install
npm test
npm run build
```

`npm run build` checks citations, writes sitemap dates, generates Open Graph images, then builds `dist/`.

## Cloudflare Pages

Connect this Git repository. Production branch: `main`.

- Build command: `npm run build`
- Build output: `dist` (`pages_build_output_dir` in `wrangler.jsonc`)
- Environment variable: `NODE_VERSION` = `22`
- Secret: `TURNSTILE_SECRET` (Turnstile secret for site key `0x4AAAAAAFu5Ih5ew1LcB0Xy`)
- Custom domain: `treadmillspecs.com`

### D1

The subscribers database could not be created because of an account limit. `functions/api/subscribe.js` looks for binding `DB` and returns a friendly message, without a 500, when the binding is missing. Nothing is emailed.

When a database can be created:

1. Create a D1 database named `treadmillspecs-subscribers`.
2. Bind it on the Pages project as `DB`.
3. Apply `migrations/0001_subscribers.sql`.
4. Put the real `database_id` in `wrangler.jsonc` if you deploy with Wrangler. Do not invent an id.

### Amazon Associates

`src/config/affiliate.ts` holds `AMAZON_TAG`. It is `TODO-TAG` until a tag is issued. Search links omit the tag parameter until that constant changes. No ASIN is linked until one is verified on a live Amazon page.

### IndexNow

Key file: `public/356cec0508e507950261c6f8f75ea296.txt`.

After the production deploy:

```bash
npm run indexnow
```

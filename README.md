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
- Environment variable: `NODE_VERSION` = `22` (also in `wrangler.jsonc` `vars`)
- `SITE_URL` and `HSTS` are `wrangler.jsonc` vars (`https://treadmillspecs.com` and `1`). Do not rely on copies in the Pages dashboard; those get wiped. The build imports the same values from `functions/lib/public-env.js`, and Functions fall back to that file when the binding is missing.
- Secret: `TURNSTILE_SECRET` (Turnstile secret for site key `0x4AAAAAAFu5Ih5ew1LcB0Xy`)
- Custom domain: `treadmillspecs.com`

### D1

Reminder requests are stored in the shared D1 database `minisplitzip-subscribers` (`2f5bdf97-e759-4e64-83bc-ae3537f0ed10`), bound as `DB`. Rows set `site` to `treadmillspecs.com` and prefix `purpose` with `treadmillspecs:`. Inserts use `ON CONFLICT(email, purpose) DO NOTHING`, so another site's row is left as it is.

Do not apply anything in `migrations/` to that database. `functions/api/subscribe.js` returns a friendly message, without a 500, when `DB` is missing. Nothing is emailed.

Optional Pages secret: `IP_HASH_SALT`, mixed into the IP hash when set.

### Amazon Associates

`src/config/affiliate.ts` holds `AMAZON_TAG` (`treadmillspecs-20`). Search links and verified `/dp/` links both include it. A `/dp/` link is used only when a live Amazon title named that one model.

### IndexNow

Key file: `public/356cec0508e507950261c6f8f75ea296.txt`.

After the production deploy:

```bash
npm run indexnow
```

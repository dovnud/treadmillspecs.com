# Do not apply these files

Signup storage uses the shared D1 database `minisplitzip-subscribers` (`2f5bdf97-e759-4e64-83bc-ae3537f0ed10`), already bound as `DB`.

That database already has `subscribers` and `subscribe_attempts`. Do not run a migration from this repo against it. `0001_subscribers.sql` was removed so Wrangler cannot create a private table or a `subscribe_hits` table on the shared database.

`wrangler.jsonc` points at the shared database and does not set `migrations_dir`.

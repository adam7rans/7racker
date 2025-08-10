# 2025-08-10 - Purge Worker Remnants and Fix Base Path for GitHub Pages

**Date:** 2025-08-10
**Title:** Purge Worker Remnants and Fix Base Path for GitHub Pages

**Problem:**
The repo still had local (ignored) Cloudflare Worker sources and unused Cloudflare-related dependencies. Additionally, GitHub Pages asset resolution broke due to incorrect `basePath` and unprefixed asset URLs (logo paths), risking missing assets when deployed under `/7racker`.

**Root Cause:**
- Legacy leftovers from the previous combined codebase and migration to a separate Worker repo left an ignored `cloudflare/` directory and Cloudflare-specific packages installed.
- `next.config.ts` used an old base path (`/nextjs-blog`) and didn’t set `assetPrefix` or a public base path env var. Components referenced assets with root-relative URLs, which don’t work correctly when the site is served from a subpath on GitHub Pages.

**Solution:**
1. Deleted the untracked `cloudflare/` directory to avoid confusion (it was ignored by `.gitignore`).
2. Uninstalled unused Cloudflare dependencies (`hono`, `wrangler`) and refreshed the lockfile.
3. Updated `next.config.ts`:
   - Set `basePath` to `/7racker` in production.
   - Set `assetPrefix` to `/7racker` in production.
   - Exposed `NEXT_PUBLIC_BASE_PATH` for client components to build correct URLs.
   - Kept static export, unoptimized images, trailingSlash, and ignored ESLint during builds.
4. Updated `src/components/ui/logo.tsx` to prefix logo asset URLs with `process.env.NEXT_PUBLIC_BASE_PATH`.
5. Ensured GitHub Pages deploy keeps dotfiles (adds `.nojekyll`) via `predeploy` and `deploy` scripts.
6. Built the project to validate changes and pushed to branch `chore/remove-work-private`.

**Files Modified:**
- `/Users/7racker/Documents/7racker/.gitignore`
- `/Users/7racker/Documents/7racker/package.json`
- `/Users/7racker/Documents/7racker/package-lock.json`
- `/Users/7racker/Documents/7racker/next.config.ts`
- `/Users/7racker/Documents/7racker/src/components/ui/logo.tsx`

**Outcome:**
- 7racker repo contains no tracked Cloudflare Worker code; local ignored `cloudflare/` removed.
- Unused Cloudflare dependencies removed; build passes with static export.
- Assets (e.g., logos) resolve correctly under GitHub Pages subpath `/7racker`.
- Branch `chore/remove-work-private` pushed and ready for PR and deploy.

# GNOA Website

Greater Naples Officials Association. Astro static site served by a Cloudflare Worker.

Built from the design kit in `design-kit/` (DESIGN.md is the rulebook, preview.html shows every section).

## Status

Draft. Pages show yellow SAMPLE items where GNOA has not supplied content yet, and the whole site is hidden from search engines and AI crawlers (noindex, robots.txt blocks all). Photos are stand-ins cut from the mockup; the real ones are listed in `design-kit/IMAGE-CHECKLIST.md`.

## Where things live

- Page content: `src/content/pages/*.json` (one file per page)
- Site details (phone, email, social links, nav, domain): `src/content/site.json`
- News & Recognition posts: `src/content/blog/*.md`
- Photos: `public/images/` (replace a file with the same name to swap a photo)

## Commands

```
npm install
npm run check        # draft build + QA gate (use this for the draft worker)
npm run check:live   # live build + QA; fails while any SAMPLE item remains
```

## Cloudflare

Workers & Pages > Create > Import a repository > this repo.
- Build command: `npm run check`
- Deploy command: `npx wrangler deploy`

Every push to main rebuilds and redeploys. A failing QA check stops the deploy and the last good version stays up.

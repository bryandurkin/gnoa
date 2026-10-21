# GNOA Website: notes for Claude Code

Greater Naples Officials Association site. Astro static site, deployed by a Cloudflare Worker
on every push to `main`. Repo: github.com/bryandurkin/gnoa.

## Where things live

| What | Where |
|---|---|
| Page content (one JSON file per page) | `src/content/pages/*.json` |
| Site details: phone, email, nav, social, domain | `src/content/site.json` |
| Section components | `src/components/sections/*.astro` |
| Styles | `src/styles/kit.css` (keep in sync with `design-kit/kit.css`) |
| Photos | `public/images/` (swap a photo by replacing the file with the same name) |
| Design rules | `design-kit/DESIGN.md` (the rulebook), `design-kit/preview.html` (every section) |
| Photo checklist sent to GNOA | `design-kit/IMAGE-CHECKLIST.md` |
| New handoff packs to build | `handoff/inbox/` |
| Packs already built | `handoff/completed/<date>-<page>/` |
| Loose mockups, logo, old site | `handoff/reference/` |
| Build log and project docs | `docs/` |

## Processing a handoff pack

When asked to "build the handoff" or a new pack appears in `handoff/inbox/`:

1. Unzip it in place if it is a zip. Read its `README.md` and `docs/agent-build-brief.md` first.
2. Authorities: `reference-images/00-full-page-mockup.png` for layout, `docs/page-content.md` for copy.
   Section crops are composition references only, not production photos.
3. Build with the existing section components and kit. Extend a section before adding a new one;
   record any new section, variant or token in `design-kit/DESIGN.md` and bump its version.
4. Stand-in photos go in `public/images/` with names that match the shot list. Add the page's
   photo rows to `design-kit/IMAGE-CHECKLIST.md`.
5. Run `npm run check`. It must pass.
6. Move the pack to `handoff/completed/<YYYY-MM-DD>-<page>/`, keeping README, docs, tokens, icons
   and `00-full-page-mockup.png`. Drop the section crops and photo-crops (too big for git, and
   the stand-ins are already cut into `public/images/`). Delete the zip.
7. Add an entry to `docs/build-log.md`.

The `client-site-builder` skill covers this workflow in more depth; use it when it is available.

## House rules

- Copy: no em dashes (use commas), straight apostrophes. Keep the client's wording otherwise.
- Content GNOA has not supplied yet is marked SAMPLE (yellow). Never remove a SAMPLE marker
  without real content to replace it.
- Site stays in draft mode (noindex, robots.txt blocks all) until Bryan says it goes live.
- Officials, not players, are the main subjects in photos. Alt text describes the officiating action.

## Commands

```
npm install
npm run dev          # local preview
npm run check        # draft build + QA gate (must pass before pushing)
npm run check:live   # live build + QA; fails while any SAMPLE item remains
```

## Git

- Start every session with `git pull` on `main`. Other people make small edits directly on GitHub
  (through ChatGPT), so the local copy is often behind. Pull again before opening a PR.
- If a file you are changing was also changed on `main`, keep their edit and apply yours on top.
- Work on a branch, open a PR, merge to `main`. Pushing to `main` redeploys the live draft site,
  so ask before pushing or merging to `main`.

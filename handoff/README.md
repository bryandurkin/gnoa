# Handoff packs

How to hand a new page design to Claude Code.

1. Drop the pack (zip or unzipped folder) into `handoff/inbox/`.
2. In Claude Code, opened on this project folder, say: "Build the handoff pack in the inbox."
3. Claude builds the page, runs the QA check, moves the pack to `completed/` and logs it in
   `docs/build-log.md`.

A pack should contain at least:
- `reference-images/00-full-page-mockup.png` (the approved design)
- `docs/page-content.md` (the approved copy)
- `docs/agent-build-brief.md` and `docs/production-image-shot-list.md` if you have them

## Folders

- `inbox/` new packs waiting to be built. Not committed to git, so large zips are fine here.
- `completed/` packs already built, one folder per page (`<date>-<page>`). Kept slim: docs,
  tokens, icons and the full mockup. Section crops are left out.
- `reference/` loose files: the original homepage mockup, logo, old site screenshot.

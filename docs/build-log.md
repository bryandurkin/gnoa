# Build log

What was built, from which source. Newest first.

| Date | What | Source | Notes |
|---|---|---|---|
| 2026-10-21 | Volleyball page | `handoff/completed/2026-10-21-volleyball` | 3 stand-in photos cut from the mockup, band borrows the sport tile, 5 photo slots marked SAMPLE (V4 to V8). Keep Developing has 3 cards (varsity, postseason, championship, from the copy). |
| 2026-10-21 | Softball page | `handoff/completed/2026-10-21-softball` | Top half only: hero, benefits, training, steps, What Makes a Good Umpire (5 items with tagline), closing banner. The pack has no copy for The Game Starts to Slow Down, Experienced Umpire, Keep Developing, What Will I Need, FAQs or the closing banner text; add them when GNOA sends it. |
| 2026-10-21 | Soccer page | `handoff/completed/2026-10-21-soccer` | 3 stand-in photos cut from the mockup, band borrows the sport tile, 5 photo slots marked SAMPLE (S4 to S8). Keep Developing has 3 cards (varsity, postseason, championship, from the copy). |
| 2026-10-21 | Wrestling page | `handoff/completed/2026-10-21-wrestling` | Design kit v1.4: benefits allows 5 items, info-faq takes a list, new wrestling and shoe icons. 3 stand-in photos cut from the mockup, 6 photo slots marked SAMPLE (W4 to W9 in the image checklist). |
| 2026-10-21 | Repo organized for Claude Code handoffs | | Added `CLAUDE.md`, `handoff/`, `docs/`. Archived the three built packs. |
| 2026-10-21 | Branding switched to Florida Officials logo | | `logo-gnoa-officials.svg` and footer variant |
| 2026-09-30 | About GNOA page | `handoff/completed/2026-09-30-about` | Design kit v1.3. 14 stand-in photos cut from mockup. |
| 2026-09-30 | Baseball page | `handoff/completed/2026-09-30-baseball` | Design kit v1.2.1. Pack's own crops were misaligned; stand-ins cut from the full mockup. |
| 2026-09-30 | Football page | `handoff/completed/2026-09-30-football` | Design kit v1.2. Fonts Barlow Condensed and Inter, self-hosted. |
| 2026-09-30 | Draft site and homepage | `handoff/reference/homepage-mockup-v1.0.png` | Inner pages carry SAMPLE content. Draft mode (noindex). |

## Pages still on SAMPLE content

Whole pages: Basketball, Become an Official,
Training and Development, Contact, Privacy Policy. These need a handoff pack or copy from GNOA.

Softball: lower half missing (The Game Starts to Slow Down, Experienced Umpire, Keep Developing,
What Will I Need, FAQs, closing banner text). The pack referred to copy it did not include.

A few SAMPLE items also remain on Home and About (stats, testimonials, contact details) and photos on
Wrestling (6), Soccer (5) and Volleyball (5).
`npm run check:live` lists every one.

## 2026-10-29 Baseball path photos recut

The four "From Your First Game to Your Biggest Assignment" photos on the Baseball page had mixed shapes
(1.34 to 1.80), so the center crop cut off heads, badly on phones. Recut all four to 1200 x 800 (3:2)
from the GNOA source photos and added an optional `image.position` focus to the path section
(Design Kit v1.6). Training and Recognition anchor to the top, the others sit slightly above center.

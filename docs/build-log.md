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

Whole pages: Become an Official,
Training and Development, Contact, Privacy Policy. These need a handoff pack or copy from GNOA.

Softball: lower half missing (The Game Starts to Slow Down, Experienced Umpire, Keep Developing,
What Will I Need, FAQs, closing banner text). The pack referred to copy it did not include.

A few SAMPLE items also remain on Home and About (stats, testimonials, contact details) and photos on
Soccer (5) and Volleyball (5).
`npm run check:live` lists every one.

## 2026-10-29 Baseball path photos recut

The four "From Your First Game to Your Biggest Assignment" photos on the Baseball page had mixed shapes
(1.34 to 1.80), so the center crop cut off heads, badly on phones. Recut all four to 1200 x 800 (3:2)
from the GNOA source photos and added an optional `image.position` focus to the path section
(Design Kit v1.6). Training and Recognition anchor to the top, the others sit slightly above center.

## 2026-10-29 Baseball "What Will I Need?" photo on phones

The portrait equipment photo was center-cropped into a 16:10 strip on phones, cutting off the
umpire's masked head. Added an optional `info.image.position` focus to info-faq (Design Kit v1.7)
and set the baseball photo to "center 10%". Desktop framing is unchanged apart from keeping the mask in view.

## 2026-11-01 Wrestling removed

GNOA no longer officiates wrestling. Deleted the Wrestling page and its photos, and removed Wrestling from
the homepage (sport strip, Choose Your Sport tiles, FAQ answer, search description), the Sports hub,
About (now "Six Sports. One Officiating Community."), Become an Official and the Site Map. Photo checklist
rows H10, A8 and W1 to W10 removed. The built pack stays in `handoff/completed/2026-10-21-wrestling`
as history. /sports/wrestling/ now returns the page-not-found page.

## 2026-11-01 Basketball page

Full Basketball page from the "GNOA website - pictures and copy" Word doc (Drive folder "GNOA site").
No mockup: same layout as the other sport pages, plus prose sections for "You Become Part of a Crew",
"Giving Back to Local Basketball" and "Keep Getting Better". "The Game Starts to Slow Down" band and the
closing banner run without photos (plain navy). cta-band gained `after` so "There's room for you here."
follows the list (Design Kit v1.8). Photos still needed: BK3, BK4 (SAMPLE); BK2 is a low-res stand-in.
Source doc saved in `handoff/completed/2026-11-01-basketball/`.

## 2026-11-01 Drive photos: closing banners, About, Training

From the "GNOA site" Drive folder. "Your Next Game Could Look Different From This Side" replaces
cta-home.jpg (the closing banner shared by most pages). "Morethanagame" replaces about-community.jpg.
Training & Development: "Recruit.train.develop" as its banner (training-hero.jpg), one football training
photo on the New Official Training card (training-new-official.jpg, the homepage card keeps its photo),
and the other in a new gallery photo row under the training text (Design Kit v1.9).

## 2026-11-01 Homepage rewritten

New homepage copy from the GNOA copy doc, laid out with kit sections following the reference mockup.
Wrestling left out of the sport list. Removed from the homepage because the new copy doesn't include
them: How It Works steps, Development and Recognition path, sample testimonials and the FAQ (their
content lives on Become an Official, Training & Development and the sport pages). The "More Than the
Game" group photo is also used for "You Become Part of a Community". Kit v1.10: sport-tiles intro,
optional split checklist heading, dollar icon.

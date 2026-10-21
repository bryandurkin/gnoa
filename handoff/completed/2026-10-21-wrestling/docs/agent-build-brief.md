# Agent Build Brief — GNOA Wrestling Recruiting Page

Use `reference-images/00-full-page-mockup.png` as the primary visual authority and `docs/page-content.md` as the exact copy authority.

## Design direction
Build this page in the same clean GNOA sport-page system used for soccer and volleyball:
- generous white space
- large athletic headings
- navy/teal/white palette
- fewer bordered cards
- image-led sections
- short readable content blocks
- clear CTA hierarchy
- restrained decoration

Do **not** revert to the earlier busier sport-page style.

## Critical process rule
Do not add numbered `1 / 2 / 3 / 4 / 5` markers to the “How Do I Get Started?” section. Use icons, arrows, cards, or simple progression cues only.

## Hero
- Strong split hero with copy on the left and a wrestling official actively working on the mat on the right.
- Officials should remain the visual focus.
- Primary CTA: `Become a Wrestling Official`.
- Secondary CTA: `Experienced Official? Connect With GNOA`.

## Benefits
- Four lightweight benefit blocks with large circular icons.
- Avoid heavy card chrome; white space should do most of the separation.

## Training section
- Split-image treatment like the mockup.
- Match/action photo on the left; copy + checklist on the right.
- Checklist can be shortened visually at desktop if needed, but retain all copy in accessible HTML.

## Getting started
- Five milestones across desktop.
- No numeric step labels.
- Mobile: stacked cards or horizontal snap-scroller.

## Sections below mockup
The source copy includes additional sections beyond the visible mockup: `What Makes a Good Wrestling Official`, `The Match Starts to Look Different`, `Experienced Official`, `Keep Developing`, `What Will I Need`, and FAQs. Continue them in the same simplified visual language rather than creating dense grids.

Suggested continuation:
- Good official: five icon-led columns/cards with minimal borders.
- Match starts to look different: wide navy/photo story band.
- Experienced official: mature split section with crew/official image and concise experience checklist.
- Keep developing: simple four-stage photo progression without numbers.
- Equipment + FAQ: two-column desktop, stacked mobile.
- Closing CTA: image-led band with one dominant action.

## Wrestling-specific imagery
- Use authentic wrestling officiating images: official low to the mat, checking control, signaling, observing near-fall situations, tournament environment.
- Show proper wrestling official uniform and wristbands where appropriate.
- Avoid generic player-only wrestling images.
- Safety, positioning, and close observation should be visible themes.

## Accessibility
- WCAG AA contrast.
- Keyboard-visible focus.
- Semantic heading order.
- Accessible accordion controls for FAQ.
- Decorative SVGs `aria-hidden="true"`.
- Do not bake required copy into images.

## Performance
- AVIF/WebP production images.
- Responsive `srcset`/`sizes`.
- Lazy-load below-the-fold images.
- Reserve intrinsic image dimensions.

## Asset note
Photo crops are extracted from an AI-generated composite and are reference/prototype assets only. Replace with GNOA-owned or properly licensed photography before production launch.

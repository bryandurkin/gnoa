# Agent Build Brief — GNOA Volleyball Recruiting Page

Use `reference-images/00-full-page-mockup.png` as the primary visual authority and `docs/page-content.md` as the copy authority.

## Scope
Build the complete volleyball recruiting page using the same cleaner GNOA design language approved for the simplified softball and soccer pages.

## Important visual direction
The user rejected the earlier busy/card-heavy sport-page approach. Keep this page lighter and easier to scan:
- generous white space
- fewer bordered cards
- shorter visible text blocks
- larger image-led sections
- clear hierarchy
- restrained icon use
- no crowded grids

## No numbered process styling
Do not introduce visible 1 / 2 / 3 / 4 / 5 labels in the getting-started section. Use icons, spacing, arrows, or alignment to convey progression.

## Visual system
- Deep navy for anchors and large headings.
- Bright teal for primary CTAs and small accents.
- White/light-neutral backgrounds.
- Bold condensed athletic-style headings with clean body typography.
- Suggested implementation: `Roboto Condensed` headings + `Inter` body, unless the existing GNOA site already defines approved fonts.
- Moderate corner radius, subtle borders, minimal shadows.

## Hero
Match the approved mockup: strong dark navy text zone on left, volleyball official image on right, two CTAs. The official should be the visual subject, not the players.

## Benefits
Use four lightweight icon/text benefits with lots of breathing room. Avoid turning them into heavy card boxes unless needed responsively.

## Training
Use a strong volleyball image on one side and short training copy + checklist on the other. Keep the list digestible; consider progressive disclosure on mobile if needed.

## Getting started
Five milestones, visually separated but not numbered. Desktop can be horizontal; tablet may wrap; mobile should stack or horizontally scroll.

## Remaining full-page sections
The approved mockup only visually covers the upper/primary pattern and final CTA. Extend the same design language to the remaining copy in `page-content.md`:
- `What Makes a Good Volleyball Official?` — icon-led skill band or two-column section, not five dense cards.
- `The Match Starts to Look Different` — strong dark/image transition section with the key line emphasized.
- `Already an Experienced Volleyball Official?` — mature split section with crew/referee image, short checklist, CTA.
- `Keep Developing` — simple progression using 3–4 image moments, not numbered steps.
- `What Will I Need?` + `FAQs` — clean two-column utility section on desktop; stack on mobile.
- final CTA — mirror the approved visual tone from the mockup.

## Volleyball-specific image rules
- Show volleyball officials in proper officiating attire.
- Favor first-referee / second-referee / crew interaction imagery.
- Avoid making players the main subject.
- Use scorer-table or line-judge context only when it helps explain crew coordination.

## Production photos
See `docs/production-image-shot-list.md`.

## Asset note
The included photo crops are extracted from the AI-composited mockup. They are visual references/prototype assets, not original source photos. Replace them with GNOA-owned or properly licensed photography for production.

## Accessibility
- WCAG AA color contrast.
- Visible keyboard focus.
- Semantic heading order.
- Real text, not text baked into images.
- Meaningful alt text for documentary photos.
- Accordion FAQs must be keyboard accessible.

## Performance
- Responsive `srcset`/`sizes`.
- AVIF/WebP where practical.
- Lazy-load below-the-fold imagery.
- Reserve image dimensions to prevent layout shift.

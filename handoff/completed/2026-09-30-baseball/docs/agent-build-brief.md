# Agent Build Brief — GNOA Baseball Recruiting Page

Use `reference-images/00-full-page-mockup.png` as the primary visual authority.

## Build intent
Reproduce the approved desktop design faithfully while making the implementation responsive, accessible, fast, and easy to maintain. The baseball page should live in the same component/design system as the main GNOA site and football recruiting page.

## Important asset note
The approved mockup is a single AI-composited image. The `photo-crops/` files are extracted reference/prototype crops, **not original standalone source photographs**. They are useful for layout matching and can be used temporarily, but replace them with GNOA-owned or properly licensed photography before production whenever possible.

## Visual system
- Deep navy anchors, teal CTA accent, white/light-neutral page backgrounds.
- Bold condensed/athletic-looking sans-serif headings; highly readable sans-serif body text.
- Moderate corner radius, subtle 1px borders, very restrained shadows.
- Section spacing should be generous and consistent.
- Photos should prioritize umpires, not players.
- Use the full-page mockup to tune exact proportions rather than overfitting to the approximate token values.

## Header
Desktop horizontal nav; collapse to accessible menu on mobile. Keep ArbiterSports as a distinct utility CTA.

## Hero
Use a 2-column text/image or full-bleed background treatment matching the mockup. Maintain strong text contrast. Primary CTA solid teal; secondary CTA outlined/dark.

## Section behavior
- Benefit cards: 4 across desktop, 2x2 tablet, stacked/mobile.
- Training checklist: 2 columns desktop/tablet, 1 column mobile.
- 5-step process: horizontal on desktop; vertical stepper on mobile.
- Learning cards: 6 across desktop or 3x2 at narrower widths; 1–2 columns mobile.
- Timing/first-game band: preserve image/text balance; avoid putting long copy over busy photo on mobile.
- Experienced umpire section: image + text + checklist card; stack logically on mobile.
- Progression: horizontal 4-step desktop, 2x2 tablet, vertical mobile.
- Equipment + FAQ: 2-column desktop, stacked mobile.
- FAQ: semantic buttons with aria-expanded and keyboard interaction.

## Photography
Preferred replacements are real GNOA people whenever available. Prioritize:
1. Plate umpire working behind catcher.
2. Veteran mentoring newer umpire.
3. Base umpire positioning/mechanics.
4. Crew meeting/discussion.
5. Umpire under lights at dusk/night.
6. Training / rules / film-review moment.
7. Local baseball assignment.
8. Postseason/championship crew.
9. Umpire equipment flat lay.

## Accessibility
- AA contrast minimum.
- Visible keyboard focus.
- Meaningful alt text for documentary photos.
- Decorative icons aria-hidden.
- Do not bake important page copy into images.

## Content
Use `docs/page-content.md` as copy authority. Do not use any accidental text artifacts from the generated mockup image.

# GNOA Football Website Handoff Pack

This pack is built from the approved football-page mockup and is intended for the web-building agent/developer.

## Folder contents
- `reference-images/` — full approved mockup plus section-level layout crops.
- `icons-svg/` — reusable, editable SVG icons in the same navy/teal visual family.
- `tokens/` — approximate color, type, radius, spacing, and CSS variables taken from the mockup.
- `docs/page-content.md` — approved football landing-page copy.
- `docs/production-image-shot-list.md` — exact replacement-photo requirements for production.
- `docs/asset-manifest.csv` — asset inventory and usage notes.

## Important implementation note
The section images are crops from the generated mockup. They are supplied to preserve composition and art direction; they are **not separate original photos**. For production, replace the photo areas with GNOA-owned or properly licensed photography matching the shot list.

## Suggested implementation system
- Desktop content max: ~1180px.
- Hero and major image bands can extend full viewport width.
- Primary CTA: teal background / white type.
- Secondary CTA: navy or transparent with white/navy border depending on section background.
- Use white/light gray sections with navy headings.
- Maintain generous vertical spacing and visible section rhythm.
- Use cards sparingly; emphasize photography and typography.
- Keep officials, not players, as the dominant visual subjects.

## Responsive behavior
- 4/5-card rows collapse to 2 columns on tablet and 1 column on mobile.
- Five-step timeline becomes a vertical stepper on mobile.
- Split image/text bands stack with text first on recruiting/educational sections.
- Hero CTAs stack on narrow mobile widths.
- FAQ remains accordion-based at all sizes.

## Accessibility
- Keep body text minimum 16px on desktop and mobile.
- Ensure CTA color contrast meets WCAG AA.
- Use real HTML headings in document order.
- All photography needs descriptive alt text focused on the officiating action, not appearance.
- Do not embed copy into production images.

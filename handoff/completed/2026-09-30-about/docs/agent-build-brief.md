# Build Brief — GNOA About Page (Concise Version)

## Objective
Build the concise About page for Greater Naples Officials Association so it visually matches the approved mockup and the existing GNOA page family.

## Authorities
- **Visual authority:** `../reference-images/00-full-page-mockup.png`
- **Copy authority:** `page-content.md`
- **Design starting point:** `../design-tokens/tokens.css`

Do not use OCR text from the mockup as final copy. Use `page-content.md`.

## Design system
- Primary anchor: deep navy.
- CTA/accent: teal/cyan.
- Backgrounds: white, very light neutral, pale sky blue.
- Display type: condensed athletic sans serif. The supplied tokens use `Roboto Condensed` as the closest implementation starting point.
- Body type: clean sans serif. Tokens use `Inter` as the starting point.
- Cards: thin borders, subtle/near-zero shadows, restrained corner radius.
- Avoid heavy gradients, glass effects, oversized shadows, patriotic visual treatment, and generic corporate styling.

## Page order
1. Header + hero
2. Slim value strip
3. Recruit / Train / Develop
4. Seven Sports
5. More Than the Game
6. From New Official to Experienced Veteran
7. Final CTA — Want to Be Part of It?
8. Current GNOA Officials / ArbiterSports
9. Footer

## Header
Use the same shared GNOA header component used on the sport pages.
- Logo left.
- Main navigation centered/right.
- `About GNOA` active state.
- `Current Officials – Go to ArbiterSports` utility CTA on the far right.

## Hero
Desktop layout is image-led with copy on the left and a group-of-officials composition occupying the right half.
- Preserve a strong navy image overlay behind the text.
- Keep the hero compact enough that the user sees the value strip without excessive scrolling.
- Primary CTA = filled teal.
- Secondary CTA = transparent/dark with white border.

Recommended desktop hero height: ~520–620px at production width.

## Value strip
A compact horizontal navy strip with icon + label items:
- Recruit
- Train
- Develop
- Community
- Opportunity

On mobile, allow wrapping into 2 rows or convert to a horizontally scrollable strip.

## Recruit. Train. Develop.
Three equal cards on desktop. Stack at tablet/mobile.
Keep the cards visually simple: icon, short title, short body. Do not add extra marketing copy.

## Seven Sports
Use seven compact sport tiles with official-centered imagery.
Desktop may use all seven in a single row if the container is wide enough; otherwise use a 4/3 grid. Tablet should use 3 or 4 columns; mobile 2 columns or 1 column depending on label fit.

Sports order:
1. Football
2. Basketball
3. Baseball
4. Softball
5. Soccer
6. Volleyball
7. Wrestling

Keep the section visually lighter than the individual sport landing pages. The About page is a hub, not a detailed sport index.

## More Than the Game
Desktop: text/skill cards on the left, community photo on the right.
Six small icon cards:
- Make decisions under pressure
- Communicate clearly
- Work as part of a team
- Accept feedback
- Stay composed
- Keep improving

On mobile, stack image after the intro copy and render skills in 2 columns.

## From New Official to Experienced Veteran
Use a four-stage progression:
1. New Official
2. Crew Member
3. Varsity Assignment
4. Postseason Opportunity

The mockup includes illustrative stage captions. Treat `page-content.md` as the required copy and the progression labels as UI/supporting copy. Keep them short.

Desktop: 4 cards with arrows between.
Mobile: vertical timeline or 2x2 grid; do not shrink text to preserve the horizontal layout.

## Final CTA
Full-width navy/photo banner with an official facing the field at sunset.
Copy left, image/action atmosphere right.
Primary CTA teal; secondary outlined.

## Current Officials strip
Keep separate from the recruiting CTA. Use a light background and a clear ArbiterSports button. This is a utility area, not a major content section.

## Footer
Reuse the GNOA site-wide footer. Include:
- GNOA identity
- Location line
- Main nav
- `Recruit. Train. Develop.`
- Social icons if already supported by the site

## Responsive guidance
- Desktop reference is approximately a 1440px concept scaled into the mockup.
- Main content max width: ~1180px.
- Standard content gutter: 24–48px.
- Tablet breakpoint: ~768–1024px.
- Mobile: ~390px target.
- Hero becomes a stacked/overlay composition on smaller screens.
- Keep all tap targets >=44px.
- Do not let the seven-sport row force horizontal page overflow.

## Accessibility
- All body text should meet WCAG AA contrast.
- Do not use the generated text embedded in reference crops as live text.
- Add descriptive alt text to production photography.
- Use semantic heading hierarchy.
- Keyboard-focus states must be clearly visible.
- ArbiterSports external link should be identified as external if the site convention does so.

## Production photography
Reference crops are layout guides only. Prefer real GNOA officials, real meetings, real games, and recognizable Southwest Florida environments where practical.

## Build priority
1. Match section proportions and hierarchy.
2. Match color and typography family.
3. Match card/button treatment.
4. Use approved copy exactly.
5. Replace reference imagery with production assets without altering the intended crop/composition.

# GNOA Design Kit v1

Source: GNOA homepage mockup v1.0 (Greater Naples Officials Association).
Purpose: the Builder agent reads this file plus kit.css and assembles pages ONLY from the sections below. It does not invent new layouts, colors or fonts. Copy markup from preview.html.

## 1. Style tokens (locked)

| Token | Value | Use |
|---|---|---|
| navy | #0a2342 | Headings, icons, sport strip, hero, band, page-hero |
| navy-deep | #06223f | Footer |
| cyan | #03a9c6 | Primary buttons, step numbers, heading underline bar |
| cyan-hover | #0291ad | Primary button hover |
| teal | #0189a8 | Buttons on white sections |
| teal-deep | #066a86 | ArbiterSports button, subheads, section taglines, post dates |
| mist | #f4f8fb | Tinted section background |
| line | #e2e9ef | Card borders, dividers |
| line-blue | #c4dce6 | How It Works connector line |
| text | #2b3340 | Long-form body text (prose) |
| muted | #53565e | Supporting text in cards and sections |
| sky | #86d4e8 | Hero eyebrow word 1 only |
| sand | #e8c28a | Hero eyebrow word 2 only |
| white | #ffffff | Main background, text on dark |

Type: Figtree (headings, 700 to 800, sentence or title case as the team writes it, never all caps except the eyebrow) and Nunito Sans (body). These are the closest Google Fonts to the mockup. The hero eyebrow is small, uppercase, widely spaced, three words split by dots, colored sky, sand, white.

Buttons (all in kit.css):
- `btn--cyan`: primary. Hero, band, cta-band, page-hero.
- `btn--teal`: primary on white sections (split).
- `btn--outline`: secondary, dark sections only (hero).
- `btn--deep`: the ArbiterSports button only (header and footer), with the external link icon.
- Every internal link button ends with the arrow icon. Max two buttons per section.

Section rhythm: alternate mist and white. Dark sections are hero, sport-strip, page-hero, band, cta-band and footer. Never two dark sections in a row, except hero into sport-strip and cta-band into footer. When two sections in a row share a background, add `sec--join` to the second one.

Radius: 8px cards, 5px buttons, 6px small photo cards.

## 2. Section library

Fields marked * are required.

| id | What it is | Fields | Limits |
|---|---|---|---|
| site-header | Logo, 5 nav links, ArbiterSports button | from site config | Same on every page. Collapses to a Menu button below 1200px |
| hero | Home hero, navy with photo on the right | eyebrow (3 words)*, title (2 lines)*, lead*, 1 to 2 buttons*, image* | Home only. Title max 8 words |
| sport-strip | Navy band of sport links | 3 to 8 sport names with links* | Home only, directly under hero |
| benefits | White cards with navy icon | heading*, 3 to 4 items (icon*, title*, text*) | Text max 15 words. Title must differ from text |
| sport-tiles | Photo link tiles, label and arrow | heading*, 3 to 8 tiles (label*, link*, image*) | Layout adapts to count. 7 tiles = 4 over 3, as in mockup |
| split | Text left, photo right fading into white | heading*, subhead*, paragraph* (max 45 words), button*, image* | Max twice per page |
| steps | Numbered process on a connector line | heading*, 3 to 6 steps (icon*, title*, text*) | Only for a real sequence. Text max 15 words |
| band | Navy panel, photo right | heading*, paragraph* (max 45 words), button*, image* | Never directly after another dark section |
| path | Photo cards joined by arrows | heading*, tagline*, 3 to 5 cards (label*, image*) | Only for a progression. Labels max 4 words |
| testimonials | Quote cards with headshot | heading*, 1 to 3 quotes (photo*, quote*, name*, role*) | Real, approved quotes only. SAMPLE tag until GNOA approves |
| faq | Two-column accordion | heading*, 3 to 10 questions with answers* | Answers from GNOA only, never invented |
| cta-band | Closing banner, same style as band | title (2 lines)*, subline*, button*, image* | Last section on every page |
| site-footer | White logo, tagline, nav, social, ArbiterSports, legal row | from site config | Social links must be GNOA's real profile URLs. Copyright year is the current year |
| page-hero | Inner page top (derived, not in mockup) | eyebrow (page or parent name)*, title*, lead*, 0 to 1 button, image | Every inner page starts with it. No image = plain navy |
| prose | Rich text (derived) | h2, h3, paragraphs, lists, link lists | Keep the team's wording |
| post-cards | News and blog cards (derived) | 1 to 12 posts (image*, date*, title*, excerpt*, link*) | Pulls from News & Recognition posts |
| contact | Contact details plus form (derived) | details (real only)*, form embed* | Contact page only. Form provider to be confirmed |

Icons: the SVG sprite at the top of preview.html (arrow, external, menu, group, community, chart, whistle, doc, clipboard, cap, facebook, instagram, youtube). Include the sprite once in the site layout. Benefits use the filled navy icons. New icons must match: 24px grid, filled or 2px stroke, navy.

SAMPLE flag: any text GNOA has not confirmed (testimonials, missing FAQ answers, post placeholders, contact details) carries `<span class="sample-tag">`. Pages can go live on the draft worker with visible SAMPLE tags. None may remain at final launch.

## 3. Page recipes (GNOA)

Page list read from the mockup nav and footer. Sports list (7) confirmed by Bryan on Sept 30, 2026. The Builder asks before creating pages beyond this list.

| Page | Sections in order |
|---|---|
| Home | hero, sport-strip, benefits, sport-tiles (join), split (new officials), steps, band, split (experienced), path, testimonials, faq (join), cta-band |
| Become an Official | page-hero (new officials message), benefits, steps, split (experienced officials), faq, cta-band |
| Sports (hub) | page-hero, sport-tiles, cta-band |
| Sport page (x7: Football, Basketball, Baseball, Softball, Soccer, Volleyball, Wrestling) | page-hero (uses sport-NAME.jpg), prose, steps (only if the team gives sport-specific steps), faq (sport-specific, optional), cta-band |
| Training & Development | page-hero, prose, path, testimonials, cta-band |
| About GNOA | page-hero, prose, benefits (optional), testimonials (optional), cta-band |
| News & Recognition (blog index, at /blog/) | page-hero, post-cards, cta-band |
| Blog post | page-hero (date as eyebrow, post image), prose, post-cards (3 related, optional), cta-band |
| Contact | page-hero, contact, faq (optional), cta-band |
| Privacy Policy | page-hero (no image), prose (policy text from GNOA), cta-band |
| Site Map | page-hero (no image), prose (link list of every page), cta-band |

Links: "Experienced Official? Connect With GNOA" and "Connect With GNOA" go to /contact/ until Bryan confirms otherwise. "Current Officials - Go to ArbiterSports" opens https://www.arbitersports.com/ in a new tab (confirm GNOA's exact ArbiterSports group URL).

## 4. Images

Every photo slot uses a real `<img class="cover">` with width, height and descriptive alt text.

The files in `images/` are stand-ins cut from the mockup. They are low resolution (the mockup is 724px wide) and were cropped from the clean side of each photo, since the mockup has text baked into the left side. That is why hero, band, split and cta-band photos sit on the right with a fade: real photos only need their subject on the right half.

When GNOA sends real files, they use the same file names (see IMAGE-CHECKLIST.md) and drop straight in. The build step resizes and converts them. Do not change a file name without updating the checklist.

| File | Slot |
|---|---|
| logo-color (svg or png) | site-header |
| logo-white (svg or png) | site-footer |
| hero-home.jpg | hero |
| sport-football.jpg, sport-basketball.jpg, sport-baseball.jpg, sport-softball.jpg, sport-soccer.jpg, sport-volleyball.jpg, sport-wrestling.jpg | sport-tiles and each sport page's page-hero |
| split-new-officials.jpg | split (Never Officiated Before?) |
| band-recruit-train-develop.jpg | band (Recruit. Train. Develop.) |
| split-experienced-officials.jpg | split (Already an Experienced Official?) |
| path-new-official-training.jpg, path-local-varsity-game.jpg, path-playoff-assignment.jpg, path-state-championship-crew.jpg | path |
| testimonial-1.jpg, testimonial-2.jpg, testimonial-3.jpg | testimonials |
| cta-home.jpg | cta-band |
| page-hero-PAGE.jpg (optional) | page-hero on inner pages. If not supplied, reuse a homepage photo that fits the page |
| og-share.jpg (optional) | social share image, 1200 x 630 |
| favicon.png (optional) | browser tab icon, 512 x 512 |
| post-SLUG.jpg | each blog post (post-cards and post page-hero) |

## 5. What the Builder may and may not decide

Locked: colors, fonts, button styles, section designs, page recipes above, header and footer, image file names.

Flexible: which optional sections to include when the team supplies content for them, picking icons from the sprite, choosing which homepage photo to reuse for an inner page hero, trimming a heading to fit (and flagging the change).

Never: invent facts, prices, dates, stats, testimonials, names or FAQ answers. Never add a section type that is not in this file. Never remove a SAMPLE tag unless GNOA confirmed that content.

## 6. QA checklist (must pass before deploy)

1. No placeholder or template text anywhere, including meta descriptions. SAMPLE tags are allowed on the draft site only, and none at final launch.
2. Every page has a unique title and meta description written from its own content.
3. No card or list item where the title and body text are the same words.
4. No internal notes, build comments or instructions visible on the page (the preview's yellow divider and "Form embed goes here" text never ship).
5. Every image has descriptive alt text.
6. No dummy links (#, bare facebook.com, example.com). Social icons use GNOA's real profile URLs or are removed.
7. Headings keep their punctuation (commas, ampersands, periods in "Recruit. Train. Develop.").
8. Every element in the inventory below is present (icons, arrows, heading bars, step numbers, connector line, path arrows), not just the text.
9. Each page starts with hero or page-hero and ends with cta-band.
10. Correct at 390, 1024, 1280 and 1440px, with nothing running past the screen edge (render_check.py passes). Header ArbiterSports button fully visible at every width it shows.
11. No em dashes in any copy.
12. Page counts match the client's confirmed page list, not just the number of items shown in the mockup.
13. Copyright year is the current year (the mockup shows 2024).
14. The ArbiterSports button opens in a new tab.
15. Image files match the names in IMAGE-CHECKLIST.md.

## 7. Element inventory (from the mockup, top to bottom)

| Section | Elements |
|---|---|
| site-header | White bar, logo lockup (palm over the A, GNOA, divider, association name, small tagline), 5 nav links, ArbiterSports button (two lines, deep teal, external icon) |
| hero | Photo with dark left fade, eyebrow (Integrity sky, Opportunity sand, Community white, dot separators), 2-line white title, lead line, cyan button with arrow, outline button (two lines, white border) |
| sport-strip | Navy band, 7 sport names, dot separators |
| benefits | Centered heading, cyan underline bar, 4 bordered white cards, navy filled icons (group, rising chart, community, whistle), bold title, gray text |
| sport-tiles | Centered heading and bar, 4 tiles over 3 wider tiles, rounded corners, dark bottom fade, white label with arrow |
| split (new) | Photo right fading into white, navy heading, teal subhead, gray paragraph, teal button with arrow |
| steps | Heading and bar, 5 steps, cyan number circles, white icon discs with shadow, light blue connector line through the discs, bold title, gray text |
| band | Navy left panel fading into photo, white heading, white paragraph, cyan button with arrow |
| split (experienced) | Same as split (new), teal button "Connect With GNOA" with arrow |
| path | Heading, teal tagline (no bar), 4 photo cards with navy bottom fade and centered white label, navy arrows between cards |
| testimonials | Heading and bar, 3 bordered cards, rounded headshot left, quote, bold navy name, gray role |
| faq | Heading and bar, two columns of bordered question rows, plus and minus toggles, first question open with answer |
| cta-band | Photo with dark left fade, 2-line white title, white subline, cyan button with arrow |
| site-footer | Navy, white logo, tagline, 5 nav links, Facebook, Instagram, YouTube icons, ArbiterSports button, divider line, copyright left, Contact, Privacy Policy, Site Map right with pipe separators |

## 8. Files in this kit

- DESIGN.md: this spec (rules for the Builder).
- kit.css: all styles. Pages use only these classes.
- preview.html: every section rendered with GNOA mockup content, then a sample inner page. Copy markup from here.
- images/: stand-in photos and logos cut from the mockup, named to match the checklist.
- IMAGE-CHECKLIST.md: the photo and logo list to send GNOA, with file names and sizes.

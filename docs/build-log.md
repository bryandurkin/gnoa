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

## 2026-11-01 Homepage community photo shows the whole group

The "You Become Part of a Community" band cropped the group selfie to the panel's wide strip, cutting
heads at the top and bottom. Added `image.fit: "contain"` to the band (Design Kit v1.11): the whole photo
sits on the right at its own shape, centered vertically, and the text column narrows to stay clear of it.
Phones keep the photo as the dimmed background, as before.

## 2026-11-02 Homepage change list (copy and order)

Applied the GNOA homepage change list: hero headline is now "There's Still a Place for You in the Game",
new Find Your Sport intro, the community band is renamed "Come for the Game. Stay for the People.",
gains the crew line and moves above "Never Officiated Before?", and the training band becomes
"Recruit. Train. Develop." with new copy and an "Explore Training & Development" button. The group
photo's screenshot bars are trimmed (`home-community.jpg`); the top-center official's head is outside
the original frame, so a better photo is needed to show it. Waiting on the new photos for Softball,
Never Officiated Before and Local Sports Need Officials.

## 2026-11-06 Homepage photos from the Drive folder

Added the seven photos in the Drive folder "GNOA Home" to their matching homepage sections. Local Sports,
Part-Time and What Will I Need were text only, so they became split sections with the same words. Kit v1.12:
optional split subhead, `image.fade: "short"`, `image.focus` and `image.focusPhone` crop positions, and navy
bands now show the photo above the text on tablets and phones (on every page; the closing cta-band is unchanged). `image.stack` does the same for a split on tablets. New
photos use `home-*` file names so other pages keep theirs. Open items: GNOA to confirm permission for the
students in the Local Sports photo, a sharper Never Officiated photo, an uncut community group photo.

## 2026-11-06 Basketball page photos from the Drive folder

Added the eight photos in the Drive folder "GNOA Sports > Basketball" to their matching sections and removed
the two SAMPLE photo markers. Crew, Giving Back and Keep Getting Better were text only, so they became split
sections with the same words. The Experienced photo moved to the narrow left spot because the file is small,
and the What Will I Need photo is trimmed to remove a drink can. Keep Getting Better reuses the homepage
photo. Kit v1.13: split `list.columns`, multi-paragraph `after`, cta-band `image.focus`, and narrower cta-band text on tablets (every page). Open: sharper copies
of the five soft photos.

## 2026-11-06 Homepage crew hero and sharper Never Officiated photo

The homepage hero now shows the supplied football crew photo in full (`image.fit: "contain"`, Kit v1.14), to
the right of the text on desktop and above it on tablets and phones. `home-never-officiated.jpg` was replaced
with the sharper copy, which updates Home and Basketball's Keep Getting Better. That copy's polo logo reads
"GHSA" where the older copy read GNOA, so a corrected copy is on the better-copies list.

## 2026-11-06 Become an Official photo and closing button

Added the supplied photo from the Drive folder to "Already an Experienced Official?", replacing the stand-in.
The changes doc named the page but not the spot, so the spot is our choice. The closing banner button linked
to its own page and now goes to Contact. The hero poster still lists Wrestling; it stays for now and a
corrected poster is on the better-copies list.

## 2026-11-06 About page photos from the Drive folder

The hero now uses the football crew photo, the same one as the homepage (the Drive file "About greater Naples
officials association" is that photo). The closing banner uses the four officials at the state volleyball
championships, shown whole because the file is small. Kit v1.15: cta-band `image.fit: "contain"`, above the
text on phones. The Drive folder held only these two photos, so the rest of the page is unchanged.

## 2026-11-06 Training & Development shows training only

Per Bryan, this page now shows only images and text about people getting trained. Removed the Development and
Recognition section with its Local Varsity Game, Playoff Assignment and State Championship Crew cards. Its New
Official Training photo moved to the photo row, now a 2 by 2 grid of four training photos with the new clinic
photo and the mentoring photo (Kit v1.16, gallery `columns`). IMG_0191 and IMG_4922 from the Drive folder are not
used here; IMG_0143 is held for the Soccer page.

## 2026-11-06 Sports page photos from the Drive folder

The top of the Sports page now shows the eight-official banner across the full width, above the text (Kit v1.17,
hero `image.fit: "banner"`). The Softball tile uses the same photo as the homepage tile.

## 2026-11-06 Soccer page photos from the Drive folder

The two photos in the Drive folder "GNOA Sports > Softball" are soccer photos, confirmed by Bryan, so they went on
the Soccer page. "Become a soccer referee" is the hero (shown whole, cropped at the waist). "Never refereed before"
is in "Never Refereed Before?", which moved to the wide photo spot on the right so all three referees fit. The
band photo's phone crop now starts at the top so the referee's cap stays in frame. Other Soccer SAMPLE photos remain.

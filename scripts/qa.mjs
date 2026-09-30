// QA gate: run after `astro build`. Exits 1 on any FAIL. PENDING = link to a page on the site plan not built yet.
import fs from 'node:fs'; import path from 'node:path';
import { MODE } from '../src/mode.mjs';
const site = JSON.parse(fs.readFileSync('src/content/site.json', 'utf8'));
const DIST = 'dist';
const files = []; (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p); } })(DIST);
const out = { FAIL: [], WARN: [], PENDING: new Set(), SAMPLE: [] };
const fail = (f, m) => out.FAIL.push(`${f}: ${m}`), warn = (f, m) => out.WARN.push(`${f}: ${m}`);
const text = h => h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ');
const BAD = [/\bTBD\b/i, /lorem ipsum/i, /\[team/i, /placeholder/i, /coming soon/i, /thoughts on building for the web/i, /\bTODO\b/, /carried forward/i, /\bNOTE:/];
const titles = new Map(), descs = new Map();
for (const file of files) {
  const f = '/' + path.relative(DIST, file).replace(/index\.html$/, '');
  const raw = fs.readFileSync(file, 'utf8');
  // Draft mode checks
  const noindex = /<meta name="robots" content="noindex/.test(raw);
  const samples = [...raw.matchAll(/<mark class="sample">([\s\S]*?)<span class="sample-tag">/g)].map(m => text(m[1]).trim());
  for (const m of raw.matchAll(/(?:alt|content)="([^"]*?) \(sample\)"/g)) samples.push(m[1]);
  const photos = (raw.match(/sample-photo\.svg/g) || []).length;
  if (raw.includes('[[sample')) fail(f, 'unconverted [[sample]] marker');
  if (samples.length || photos) out.SAMPLE.push(`${f}  ${[...samples.map(x => `"${x}"`), ...(photos ? [`${photos} sample photo(s)`] : [])].join(', ')}`);
  if (MODE === 'draft') { if (!noindex) fail(f, 'draft page is missing noindex'); }
  else {
    if (noindex) fail(f, 'live page still has noindex');
    if (raw.includes('draft-bar')) fail(f, 'draft bar on a live page');
    if (samples.length || photos) fail(f, 'SAMPLE content on a live page');
  }
  const html = raw.replace(/<div class="draft-bar">[\s\S]*?<\/div>/, '').replace(/<mark class="sample">|<span class="sample-tag">Sample<\/span><\/mark>/g, '');
  const body = text(html);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
  if (!title) fail(f, 'missing <title>'); else { if (title.length > 65) warn(f, `title is ${title.length} chars (aim for 60 or less)`); titles.has(title) ? fail(f, `title duplicates ${titles.get(title)}`) : titles.set(title, f); }
  if (!desc) fail(f, 'missing meta description'); else { if (desc.length > 160) fail(f, `meta description is ${desc.length} chars (max 160)`); if (desc.length < 70) warn(f, 'meta description is short'); descs.has(desc) ? fail(f, `meta description duplicates ${descs.get(desc)}`) : descs.set(desc, f); }
  const h1s = (html.match(/<h1[\s>]/g) || []).length; if (h1s !== 1) fail(f, `${h1s} h1 tags (need exactly 1)`);
  for (const re of BAD) { const m = (body + ' ' + (desc || '')).match(re); if (m) fail(f, `placeholder or internal text found: "${m[0]}"`); }
  if (/\u2014/.test(body + (desc || '') + (title || ''))) fail(f, 'em dash found');
  if (html.includes('<!--')) warn(f, 'HTML comment in output');
  for (const m of html.matchAll(/<h3>([^<]+)<\/h3>\s*<p>([^<]+)<\/p>/g)) if (m[1].trim().toLowerCase() === m[2].trim().toLowerCase()) fail(f, `card title and text are identical: "${m[1]}"`);
  for (const m of html.matchAll(/<img\b[^>]*>/g)) { const alt = m[0].match(/alt="([^"]*)"/)?.[1]; if (!alt || alt.length < 10) fail(f, `image missing descriptive alt: ${m[0].slice(0, 80)}`); }
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    const href = m[1];
    if (!href || href === '#' || /^https?:\/\/(www\.)?(facebook|instagram|linkedin|youtube|twitter|x)\.com\/?$/.test(href) || /example\.com/.test(href)) { fail(f, `dummy link: "${href}"`); continue; }
    if (href.startsWith('/')) { const clean = href.split('#')[0]; const target = path.join(DIST, clean, clean.endsWith('/') ? 'index.html' : ''); if (!fs.existsSync(target)) site.pendingPages.includes(clean) ? out.PENDING.add(clean) : fail(f, `broken internal link: ${href}`); }
  }
}
if (/\.example$/.test(new URL(site.url).hostname)) (MODE === 'live' ? out.FAIL : out.WARN).push('site.json: sample domain in use, replace before launch');
const robots = fs.existsSync(path.join(DIST, 'robots.txt')) ? fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8') : '';
if (MODE === 'draft' && !/Disallow: \/\s*$/m.test(robots)) out.FAIL.push('robots.txt: draft site must block all crawlers');
if (MODE === 'live' && /Disallow: \/\s*$/m.test(robots)) out.FAIL.push('robots.txt: live site is blocking crawlers');
if (out.PENDING.size && MODE === 'live') out.FAIL.push(`links to pages not built yet: ${[...out.PENDING].join(', ')}`);
if (!fs.existsSync(path.join(DIST, '404.html'))) out.FAIL.push('404.html missing: unknown addresses would show a blank page');
console.log(`QA checked ${files.length} pages in ${MODE.toUpperCase()} mode`);
for (const l of out.FAIL) console.log('FAIL   ', l);
for (const l of out.WARN) console.log('WARN   ', l);
if (out.SAMPLE.length) { console.log(`\nSAMPLE items still needed from the client (${out.SAMPLE.length} page(s)):`); for (const l of out.SAMPLE) console.log('  ', l); console.log(''); }
if (out.PENDING.size && MODE === 'draft') console.log('PENDING', [...out.PENDING].join(', '), '(linked, on the page plan, not built yet)');
console.log(out.FAIL.length ? `\n${out.FAIL.length} failure(s). Do not deploy.` : '\nPASS');
process.exit(out.FAIL.length ? 1 : 0);

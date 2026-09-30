"""Check every built page at 390, 1024, 1280 and 1440px. Fails if anything runs past the screen edge.
Usage: python scripts/width_check.py <base_url> <out_dir> /path1/ /path2/ ..."""
import os, sys
from playwright.sync_api import sync_playwright
WIDTHS = (("mobile", 390), ("tablet", 1024), ("laptop", 1280), ("desktop", 1440))
FIND = """(w) => { document.documentElement.style.overflow='visible'; document.body.style.overflow='visible';
 const o=[]; document.querySelectorAll('body *').forEach(e=>{const r=e.getBoundingClientRect(); if(r.width && r.right>w+1) o.push(e.tagName.toLowerCase()+'.'+e.className+' ends at '+Math.round(r.right)+'px')}); return o.slice(0,5) }"""
base, out, paths = sys.argv[1].rstrip('/'), sys.argv[2], sys.argv[3:]
os.makedirs(out, exist_ok=True); failed = False
with sync_playwright() as p:
    b = p.chromium.launch()
    for path in paths:
        slug = path.strip('/').replace('/', '_') or 'home'
        for name, w in WIDTHS:
            pg = b.new_page(viewport={"width": w, "height": 900}); pg.goto(base + path); pg.wait_for_timeout(400)
            pg.screenshot(path=os.path.join(out, f"{slug}-{name}.png"), full_page=True)
            over = pg.evaluate(FIND, w)
            if over: failed = True; print(f"FAIL {path} {name} ({w}px):", *over, sep="\n    ")
            pg.close()
        print(f"checked {path}")
    b.close()
print("FAIL" if failed else "PASS: no overflow at any width")
sys.exit(1 if failed else 0)

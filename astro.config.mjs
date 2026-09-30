import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import { MODE } from './src/mode.mjs';
// Draft builds also send a noindex header on every file (Cloudflare reads dist/_headers).
const draftHeaders = {
  name: 'draft-headers',
  hooks: { 'astro:build:done': ({ dir }) => {
    const f = new URL('_headers', dir);
    if (MODE === 'draft') fs.writeFileSync(f, '/*\n  X-Robots-Tag: noindex, nofollow\n');
    else if (fs.existsSync(f)) fs.unlinkSync(f);
  } },
};
export default defineConfig({ site: 'https://gnoa-sample.example', trailingSlash: 'always', build: { format: 'directory' }, integrations: [draftHeaders] });

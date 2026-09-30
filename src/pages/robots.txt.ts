import { MODE } from '../mode.mjs';
export function GET({ site }) {
  const body = MODE === 'live'
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'content-type': 'text/plain' } });
}

import { getCollection } from 'astro:content';
export async function GET({ site }) {
  const pages = Object.values(import.meta.glob('../content/pages/*.json', { eager: true })).map(m => m.default.slug ? `/${m.default.slug}/` : '/');
  const posts = (await getCollection('blog')).map(p => `/blog/${p.id}/`);
  const urls = [...pages, '/blog/', ...posts].map(u => `  <url><loc>${new URL(u, site).href}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, { headers: { 'content-type': 'application/xml' } });
}

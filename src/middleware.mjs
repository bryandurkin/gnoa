// Turns [[sample]]text[[/sample]] markers into visible SAMPLE tags on the page,
// and into plain "text (sample)" inside titles, attributes and JSON-LD, where HTML tags cannot go.
import { defineMiddleware } from 'astro:middleware';
const RE = /\[\[sample\]\]([\s\S]*?)\[\[\/sample\]\]/g;
const plain = s => s.replace(RE, '$1 (sample)');
export const onRequest = defineMiddleware(async (_ctx, next) => {
  const res = await next();
  if (!(res.headers.get('content-type') || '').includes('text/html')) return res;
  let html = await res.text();
  if (html.includes('[[sample]]')) {
    html = html
      .replace(/<title>([\s\S]*?)<\/title>/, (_m, t) => `<title>${plain(t)}</title>`)
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, plain)
      .replace(/<[^>]+>/g, plain)
      .replace(RE, '<mark class="sample">$1<span class="sample-tag">Sample</span></mark>')
      // open any collapsed FAQ that holds a sample, so reviewers see it
      .replace(/<details(?![^>]*\bopen\b)([^>]*)>(?=(?:(?!<\/details>)[\s\S])*?<mark class="sample">)/g, '<details open$1>');
  }
  return new Response(html, { status: res.status, headers: res.headers });
});

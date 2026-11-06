// Maps an EmDash post to the shape the blog cards and post page use.
const FALLBACK_IMAGE = { src: '/images/home-hero-crew.jpg', alt: 'A large GNOA football officiating crew in striped shirts posed together on the field' };

export function postImage(image) {
  const key = image?.meta?.storageKey;
  const src = image?.src || (key && `/_emdash/api/media/file/${key}`);
  return src ? { src, alt: image.alt || FALLBACK_IMAGE.alt } : FALLBACK_IMAGE;
}

export function toPost(entry) {
  const d = entry.data;
  return {
    slug: entry.id,
    title: d.title,
    date: (d.publishedAt ? new Date(d.publishedAt) : new Date()).toISOString().slice(0, 10),
    category: d.terms?.category?.[0]?.label,
    image: postImage(d.featured_image),
    summary: d.excerpt ?? '',
  };
}

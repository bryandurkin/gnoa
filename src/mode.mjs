// Site mode. Draft = staging worker (noindex, SAMPLE markers shown). Live = real domain (QA blocks any SAMPLE).
// Set SITE_MODE=live in the production build. Anything else, or unset, builds draft.
export const MODE = process.env.SITE_MODE === 'live' ? 'live' : 'draft';
export const SAMPLE_PHOTO = '/images/sample-photo.svg';

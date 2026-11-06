// Lets Astro read EmDash content from the database. File-based collections in content.config.ts keep working.
import { defineLiveCollection } from 'astro:content';
import { emdashLoader } from 'emdash/runtime';

export const collections = {
	_emdash: defineLiveCollection({ loader: emdashLoader() }),
};

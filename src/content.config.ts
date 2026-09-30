import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(), date: z.string(), author: z.string(), category: z.string().optional(),
    image: z.object({ src: z.string(), alt: z.string().min(10) }),
    summary: z.string(), description: z.string().max(160),
  }),
});
export const collections = { blog };

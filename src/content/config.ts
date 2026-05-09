import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    sourceUrl: z.string().url().optional(),
    sourcePublisher: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const personas = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    bio: z.string(),
    voice: z.string(),
  }),
});

export const collections = { posts, personas };

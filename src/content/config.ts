import { defineCollection, z } from 'astro:content';

const CATEGORIES = [
  'foreign',
  'tweets',
  'presser',
  'orders',
  'public',
  'economy',
  'health',
  'staffing',
] as const;

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      headline: z.string(),
      deck: z.string(),
      date: z.coerce.date(),
      author: z.string(),
      score: z.number().min(0).max(100),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()).default([]),
      sourceUrl: z.string().url(),
      sourcePublisher: z.string(),
      pull: z.string().optional(),
      photo: image().optional(),
      photoAlt: z.string().optional(),
      photoCaption: z.string().optional(),
      rubric: z
        .array(
          z.object({
            label: z.string(),
            score: z.number(),
            cap: z.number(),
            note: z.string(),
          })
        )
        .optional(),
      featured: z.boolean().default(false),
      blurb: z.string().optional(),
      readTime: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const personas = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      shortName: z.string(),
      beat: z.string(),
      location: z.string().optional(),
      bio: z.string(),
      voice: z.string(),
      portrait: image().optional(),
    }),
});

export const collections = { articles, personas };

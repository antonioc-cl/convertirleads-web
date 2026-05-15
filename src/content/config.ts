import { defineCollection, z } from 'astro:content';

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    industry: z.string(),
    year: z.string(),
    problem: z.string(),
    finding: z.string().optional(),
    change: z.string().optional(),
    result: z.string().optional(),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    whenGood: z.string(),
    whenBad: z.string(),
  }),
});

const process = defineCollection({
  type: 'content',
  schema: z.object({
    step: z.number(),
    title: z.string(),
    price: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { cases, services, process, blog };

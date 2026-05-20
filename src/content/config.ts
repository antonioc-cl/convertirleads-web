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
    order: z.number(),
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

const landings = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    h1: z.string(),
    type: z.enum(['service', 'geo', 'aeo', 'compare']),
    city: z.string().optional(),
    region: z.string().optional(),
    ogImage: z.string().optional(),
    noindex: z.boolean().optional(),
  }),
});

export const collections = { cases, services, process, blog, landings };

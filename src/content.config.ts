import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    whenGood: z.string(),
    whenBad: z.string(),
    order: z.number(),
  }),
});

const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    step: z.number(),
    title: z.string(),
    price: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
  }),
});

const landings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landings' }),
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

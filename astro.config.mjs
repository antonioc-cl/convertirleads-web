// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://convertirleads.cl',
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes('/blog/') && !page.includes('/gracias/') && !page.includes('/agendar/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

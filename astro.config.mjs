// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://AdiCodes032.github.io',
  base: '/aditi-website',
  vite: {
    plugins: [tailwindcss()],
  },
});


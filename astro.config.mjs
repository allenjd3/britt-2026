// @ts-check
import { defineConfig, envField } from 'astro/config';

import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  adapter: node({
    mode: 'standalone'
  }),

  env: {
    schema: {
      API_URL: envField.string({context: "client", access: "public", optional: true}),
    }
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()]
});
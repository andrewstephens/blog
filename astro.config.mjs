import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-tutorial-kohl.vercel.app",
  integrations: [mdx(), react()]
});
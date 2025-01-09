// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://sansepio.github.io',
  base: 'astro_github_pages_ejemplo',
  integrations: [tailwind()]
});


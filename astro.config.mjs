import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()]
    site: 'https://josearciniegas14.github.io',
  base: 'https://github.com/JoseArciniegas14/JoseArciniegas14.github.io',
});

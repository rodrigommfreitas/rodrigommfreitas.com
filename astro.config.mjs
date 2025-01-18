// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rodrigommfreitas.com",
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "pt",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    tailwind(),
    react(),
    sitemap({
      lastmod: new Date(),
      i18n: {
        defaultLocale: "pt",
        locales: {
          en: "en",
          pt: "pt",
        },
      },
    }),
  ],
});

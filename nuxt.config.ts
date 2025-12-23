// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/image", "shadcn-nuxt", "@vueuse/nuxt"],

  css: [join(currentDir, "./app/assets/css/tailwind.css")],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": join(currentDir, "./app"),
      },
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: join(currentDir, "./app/components/ui"),
  },

  // Layer configuration - expose components for auto-import
  components: [
    {
      path: join(currentDir, "./app/components/ui"),
      pathPrefix: false,
      global: true,
    },
    {
      path: join(currentDir, "./app/components/sample"),
      pathPrefix: false,
    },
  ],

  // Auto-import composables and utilities
  imports: {
    dirs: [
      join(currentDir, "./app/composables"),
      join(currentDir, "./app/utils"),
      join(currentDir, "./app/lib"),
    ],
  },

  // Alias configuration for consuming projects
  alias: {
    "@": join(currentDir, "./app"),
    "@tdm-digitalteam/design-system": currentDir,
  },

  routeRules: {
    "/": {
      ssr: false,
    },
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_BASE_API_URL,
    },
  },

  // Transpile external dependencies to prevent hydration errors
  build: {
    transpile: ["reka-ui", "vee-validate"],
  },
});

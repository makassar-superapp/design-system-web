// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/image", "shadcn-nuxt", "@vueuse/nuxt"],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
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
    componentDir: "./components/ui",
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
});

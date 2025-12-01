import type { StorybookConfig } from "@storybook/vue3-vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../app/components/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...(config.plugins || []), vue(), tailwindcss()],
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@": path.resolve(__dirname, "../app"),
        },
      },
    };
  },
};

export default config;

import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../apps/frontend/**/stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: { builder: { viteConfigPath: "./.storybook/vite.config.mts" } },
  },
};

export default config;

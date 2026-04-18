import path from "path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/react-vite",
  viteFinal: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@rel-ui/components": path.resolve(import.meta.dirname, "../packages/components/src/index.ts"),
      "#styled-system": path.resolve(import.meta.dirname, "../packages/components/src/styled-system"),
    };
    return config;
  },
};
export default config;

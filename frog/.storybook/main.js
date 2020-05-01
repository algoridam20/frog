// TODO: wrap theme provider and fonts to stories
module.exports = {
  stories: [
    "../src/**/*.stories.jsx",
    "../src/**/*.stories.js",
    "../src/**/*.stories.tsx",
    "../src/**/*.stories.ts",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};

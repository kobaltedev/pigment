/* @refresh reload */

import "./index.css";

import { themes } from "@storybook/theming";

import { render } from "solid-js/web";

let disposeStory;

export const decorators = [
  Story => {
    disposeStory?.();

    const solidRoot = document.createElement("div");

    disposeStory = render(Story, solidRoot);

    return solidRoot;
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  decorators,
  darkMode: {
    darkClass: "dark",
    lightClass: "light",
    classTarget: "html",
    stylePreview: true,
    light: themes.normal,
    dark: { ...themes.dark, barBg: "#27272a", appBg: "#27272a", appContentBg: "#18181b" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

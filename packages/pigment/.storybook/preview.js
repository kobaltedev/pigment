/* @refresh reload */

import "../dev/index.css";

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
    darkClass: "ui-dark",
    lightClass: "ui-light",
    // TODO: override `appBg` and `appContentBg` in light and dark mode.
    light: { ...themes.normal },
    dark: { ...themes.dark },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

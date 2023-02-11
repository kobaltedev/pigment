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

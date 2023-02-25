/* @refresh reload */

import "../styles/themes/default.css";
import "../styles/index.css";

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
    darkClass: "pg-dark",
    lightClass: "pg-light",
    classTarget: "html",
    stylePreview: true,
    light: themes.normal,
    dark: { ...themes.dark, barBg: "#1e293b", appBg: "#1e293b", appContentBg: "#0f172a" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

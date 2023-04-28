/* @refresh reload */

import "./index.css";

import { themes } from "@storybook/theming";

import { render } from "solid-js/web";

import { ThemeProvider } from "../src";

let disposeStory;

export const decorators = [
  Story => {
    disposeStory?.();

    const solidRoot = document.createElement("div");

    disposeStory = render(() => ThemeProvider({ children: Story }), solidRoot);

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
    dark: { ...themes.dark, barBg: "#1e293b", appBg: "#1e293b", appContentBg: "#0f172a" },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

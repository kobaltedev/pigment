import { createContext, JSX, useContext } from "solid-js";

import { ComponentsConfig } from "./components-config";

export interface ThemeContextValue {
  errorIcon: string | JSX.Element | (() => JSX.Element);
  components: ComponentsConfig;
}

const DEFAULT_THEME: ThemeContextValue = {
  errorIcon: "i-tabler-alert-circle-filled",
  components: {},
};

export const ThemeContext = createContext<ThemeContextValue>(DEFAULT_THEME);

export function useThemeContext() {
  return useContext(ThemeContext);
}

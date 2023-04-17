import { createContext, useContext } from "solid-js";

import { ComponentsConfig } from "./components-config";

export interface ThemeContextValue {
  components: ComponentsConfig;
}

const DEFAULT_THEME: ThemeContextValue = {
  components: {},
};

export const ThemeContext = createContext<ThemeContextValue>(DEFAULT_THEME);

export function useThemeContext() {
  return useContext(ThemeContext);
}

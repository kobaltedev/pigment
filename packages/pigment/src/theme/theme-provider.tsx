import { ParentProps } from "solid-js";

import { Theme, ThemeContext } from "./theme-context";

export interface ThemeProviderProps extends ParentProps {
  /** The theme to use. */
  theme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>;
}

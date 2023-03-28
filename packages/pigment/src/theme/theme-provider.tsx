import { ParentProps } from "solid-js";

import { ComponentsConfig } from "./components-config";
import { ThemeContext } from "./theme-context";

export interface ThemeProviderProps extends ParentProps {
  /** A custom components configuration to use. */
  components?: ComponentsConfig;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeContext.Provider value={props.components}>{props.children}</ThemeContext.Provider>;
}

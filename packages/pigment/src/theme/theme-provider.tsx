import { ParentProps } from "solid-js";

import { ComponentsConfig } from "./components-config";
import { ThemeContext } from "./theme-context";

export interface ThemeProviderProps extends ParentProps {
  /** Custom components configuration such as default props and additional CSS classes. */
  components?: ComponentsConfig;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <ThemeContext.Provider
      value={{
        components: props.components ?? {},
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

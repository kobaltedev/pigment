import { JSX, ParentProps } from "solid-js";

import { ComponentsConfig } from "./components-config";
import { ThemeContext } from "./theme-context";

export interface ThemeProviderProps extends ParentProps {
  /**
   * The icon to show next to error message of form related components (text-field, select, checkbox, etc).
   * Can be an Iconify icon name following the pattern `i-{collection_name}-{icon_name}`.
   */
  errorIcon?: string | JSX.Element | (() => JSX.Element);

  /** Custom components configuration such as default props and additional CSS classes. */
  components?: ComponentsConfig;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return (
    <ThemeContext.Provider
      value={{
        errorIcon: props.errorIcon ?? "i-tabler-alert-circle-filled",
        components: props.components ?? {},
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

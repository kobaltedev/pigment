import { createContext, mergeProps, ParentProps, useContext } from "solid-js";

import { Components } from "../components";

interface Theme {
  components?: Components;
}

const ThemeContext = createContext<Theme | undefined>({});

function useTheme() {
  return useContext(ThemeContext);
}

export function useComponentTheme<T extends keyof Components>(component: T) {
  return useTheme()?.components?.[component] ?? undefined;
}

/**
 * Merge default, theme and component props into a single props object.
 * @param component The name of the component to look for in the theme.
 * @param defaultProps The default props, will be overridden by theme and component props.
 * @param props The component `props` object.
 * @example
 * // mergedProps = defaultProps <== themeProps <== props
 */
export function mergeThemeProps<T extends Record<string, any>>(
  component: keyof Components,
  defaultProps: Partial<T>,
  props: T
): T {
  const themeProps = () => useComponentTheme(component)?.defaultProps ?? {};

  return mergeProps(defaultProps, themeProps, props);
}

export interface ThemeProviderProps extends ParentProps {
  /** The theme to use. */
  theme?: Theme;
}

export function ThemeProvider(props: ThemeProviderProps) {
  return <ThemeContext.Provider value={props.theme}>{props.children}</ThemeContext.Provider>;
}

export function extendTheme(theme: Theme) {
  return theme;
}

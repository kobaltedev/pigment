import { createSimpleTheme } from "./create-theme";
import { PredefinedTheme, ThemeTokens } from "./types";

export const DEFAULT_THEME_NAME: PredefinedTheme = "base";

const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeTokens> = {
  base: createSimpleTheme({
    neutral: "slate",
    primary: "blue",
    success: "green",
    info: "blue",
    warning: "amber",
    danger: "red",
    discovery: "violet",
  }),
};

export function isValidTheme(theme: string) {
  return theme in PREDEFINED_THEMES;
}

export function resolveTheme(theme: PredefinedTheme) {
  return PREDEFINED_THEMES[theme];
}

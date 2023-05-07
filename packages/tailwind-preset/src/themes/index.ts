import { PredefinedTheme, ThemeTokens } from "../types";
import { baseTheme } from "./base";

export const DEFAULT_THEME_NAME: PredefinedTheme = "base";

const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeTokens> = {
  base: baseTheme,
};

export function isValidTheme(theme: string) {
  return theme in PREDEFINED_THEMES;
}

export function resolveTheme(theme: PredefinedTheme) {
  return PREDEFINED_THEMES[theme];
}

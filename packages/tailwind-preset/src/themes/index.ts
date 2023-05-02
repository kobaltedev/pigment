import { PredefinedTheme, ThemeTokens } from "../types";
import { blueTheme } from "./blue";

export const DEFAULT_THEME_NAME: PredefinedTheme = "blue";

const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeTokens> = {
  blue: blueTheme,
};

export function isValidTheme(theme: string) {
  return theme in PREDEFINED_THEMES;
}

export function resolveTheme(theme: PredefinedTheme) {
  return PREDEFINED_THEMES[theme];
}

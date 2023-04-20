import { PredefinedTheme, ThemeTokensGetter, VarsFn } from "../types";
import { getBaseThemeTokens } from "./base";
import { getEmeraldThemeTokens } from "./emerald";
import { getMoonThemeTokens } from "./moon";
import { getScarletThemeTokens } from "./scarlet";
import { getSunThemeTokens } from "./sun";
import { getVioletThemeTokens } from "./violet";

const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeTokensGetter> = {
  base: getBaseThemeTokens,
  violet: getVioletThemeTokens,
  scarlet: getScarletThemeTokens,
  sun: getSunThemeTokens,
  moon: getMoonThemeTokens,
  emerald: getEmeraldThemeTokens,
};

export function isValidTheme(theme: string) {
  return theme in PREDEFINED_THEMES;
}

export function createThemeResolver(vars: VarsFn) {
  return (theme: PredefinedTheme) => {
    return PREDEFINED_THEMES[theme](vars);
  };
}

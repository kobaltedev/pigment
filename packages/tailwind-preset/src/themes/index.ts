import { PredefinedTheme, ThemeTokensGetter, VarsFn } from "../types";
import { getEmeraldThemeTokens } from "./emerald";
import { getMoonThemeTokens } from "./moon";
import { getSapphireThemeTokens } from "./sapphire";
import { getScarletThemeTokens } from "./scarlet";
import { getSunThemeTokens } from "./sun";
import { getVioletThemeTokens } from "./violet";

export const DEFAULT_THEME_NAME: PredefinedTheme = "sapphire";

const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeTokensGetter> = {
  sapphire: getSapphireThemeTokens,
  emerald: getEmeraldThemeTokens,
  sun: getSunThemeTokens,
  moon: getMoonThemeTokens,
  scarlet: getScarletThemeTokens,
  violet: getVioletThemeTokens,
};

export function isValidTheme(theme: string) {
  return theme in PREDEFINED_THEMES;
}

export function createThemeResolver(vars: VarsFn) {
  return (theme: PredefinedTheme) => {
    return PREDEFINED_THEMES[theme](vars);
  };
}

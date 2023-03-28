import { PredefinedTheme, ThemeGetter } from "../types";
import { getBaseTheme } from "./base";

export const PREDEFINED_THEMES: Record<PredefinedTheme, ThemeGetter> = {
  base: getBaseTheme,
};

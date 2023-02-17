import { PredefinedThemeNames, Theme } from "../types";
import { defaultTheme } from "./default";

export const themes: Record<PredefinedThemeNames, Theme> = {
  default: defaultTheme,
};

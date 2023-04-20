import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { createThemeResolver, DEFAULT_THEME_NAME, isValidTheme } from "./themes";
import {
  PigmentOptions,
  PredefinedTheme,
  ThemeTokens,
  themeTokensShapeValue,
  TokenKey,
} from "./types";
import {
  ALPHA_COLOR_CSS_VAR_SUFFIX,
  createVarsFn,
  DARK_DATA_ATTR_SELECTOR,
  flatten,
  getCssVarsPrefix,
  isHexColor,
  isString,
  removeDefaultSuffix,
  rgbColorChannel,
  runIfFn,
  toKebabCase,
} from "./utils";

export function pigmentPreset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarPrefix);
  const resolveTheme = createThemeResolver(vars);

  return {
    darkMode: ["class", DARK_DATA_ATTR_SELECTOR],
    theme: {
      extend: {
        fontFamily: {
          body: vars("typography.fontFamily.body"),
          display: vars("typography.fontFamily.display"),
          code: vars("typography.fontFamily.code"),
        },
        fontSize: {
          "2xs": ["10px", "14px"],
        },
        colors: {
          ...Object.keys(flatten(themeTokensShapeValue.colors, "-")).reduce((acc, key) => {
            const formattedKey = toKebabCase(removeDefaultSuffix(key));
            acc[formattedKey] = `rgb(${vars(`colors-${key}` as TokenKey)} / <alpha-value>)`;
            return acc;
          }, {} as any),
          "content-disabled": vars(ALPHA_COLOR_CSS_VAR_SUFFIX.contentDisabled as TokenKey),
          "surface-disabled": vars(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceDisabled as TokenKey),
          "line-disabled": vars(ALPHA_COLOR_CSS_VAR_SUFFIX.lineDisabled as TokenKey),
          "surface-highlighted-hover": vars(
            ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedHover as TokenKey
          ),
          "surface-highlighted-active": vars(
            ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedActive as TokenKey
          ),
        },
        boxShadow: {
          ...Object.keys(flatten(themeTokensShapeValue.shadows, "-")).reduce((acc, key) => {
            const formattedKey = toKebabCase(removeDefaultSuffix(key));
            acc[formattedKey] = vars(`shadows-${key}` as TokenKey);
            return acc;
          }, {} as any),
        },
        borderRadius: {
          ...Object.keys(flatten(themeTokensShapeValue.radii, "-")).reduce((acc, key) => {
            const formattedKey = toKebabCase(removeDefaultSuffix(key));
            acc[formattedKey] = vars(`radii-${key}` as TokenKey);
            return acc;
          }, {} as any),
        },
        data: {
          "placeholder-shown": "placeholder-shown",
        },
      },
    },
    plugins: [
      animatePlugin,
      kobaltePlugin,
      plugin(({ addBase, addUtilities }) => {
        const themes: Array<[PredefinedTheme | string, ThemeTokens]> = [];

        const cssVarName = (key: string) => {
          return `--${cssVarPrefix}${toKebabCase(removeDefaultSuffix(key))}`;
        };

        if (options.themes != null && options?.themes.length > 0) {
          options?.themes.forEach(theme => {
            if (isString(theme)) {
              // Add the predefined theme if exists.
              if (isValidTheme(theme)) {
                themes.push([theme, resolveTheme(theme)]);
              }
            } else if ("extend" in theme) {
              // Create a custom theme by extending a predefined theme.
              if (isValidTheme(theme.extend)) {
                const mergedTheme = { value: resolveTheme(theme.extend) };
                dset(mergedTheme, "value", runIfFn(theme.tokens, vars));
                themes.push([theme.name, mergedTheme.value]);
              }
            } else {
              // Create a custom theme from scratch.
              themes.push([theme.name, runIfFn(theme.tokens, vars)]);
            }
          });
        } else {
          // Fallback to default theme.
          themes.push([DEFAULT_THEME_NAME, resolveTheme(DEFAULT_THEME_NAME)]);
        }

        themes.forEach(([name, theme], index) => {
          const dataThemeSelector = `[data-pg-theme='${name}']`;

          let lightThemeSelector = dataThemeSelector;
          let darkThemeSelector = `${dataThemeSelector}.dark, ${dataThemeSelector}${DARK_DATA_ATTR_SELECTOR}`;

          // Allow applying the first theme without the need to set a `[data-pg-theme]` attribute.
          if (index === 0) {
            lightThemeSelector = `:root, .light, ${lightThemeSelector}`;
            darkThemeSelector = `.dark, ${DARK_DATA_ATTR_SELECTOR}, ${darkThemeSelector}`;
          }

          addBase({
            [lightThemeSelector]: {
              ...(
                Object.entries(flatten(theme.common ?? {}, "-")) as Array<[string, string]>
              ).reduce((acc, [key, value]) => {
                acc[cssVarName(key)] = value;
                return acc;
              }, {} as any),
              ...(
                Object.entries(flatten(theme.light ?? {}, "-")) as Array<[string, string]>
              ).reduce((acc, [key, value]) => {
                acc[cssVarName(key)] = isHexColor(value) ? rgbColorChannel(value) : value;
                return acc;
              }, {} as any),
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.contentDisabled)]: `rgb(${vars(
                "colors.neutral.950"
              )} / 0.3)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceDisabled)]: `rgb(${vars(
                "colors.neutral.950"
              )} / 0.03)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.lineDisabled)]: `rgb(${vars(
                "colors.neutral.950"
              )} / 0.06)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedHover)]: `rgb(${vars(
                "colors.neutral.950"
              )} / 0.06)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedActive)]: `rgb(${vars(
                "colors.neutral.950"
              )} / 0.14)`,
            },
          });

          addBase({
            [darkThemeSelector]: {
              ...(Object.entries(flatten(theme.dark ?? {}, "-")) as Array<[string, string]>).reduce(
                (acc, [key, value]) => {
                  acc[cssVarName(key)] = isHexColor(value) ? rgbColorChannel(value) : value;
                  return acc;
                },
                {} as any
              ),
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.contentDisabled)]: `rgb(${vars(
                "colors.neutral.300"
              )} / 0.3)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceDisabled)]: `rgb(${vars(
                "colors.neutral.300"
              )} / 0.04)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.lineDisabled)]: `rgb(${vars(
                "colors.neutral.300"
              )} / 0.08)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedHover)]: `rgb(${vars(
                "colors.neutral.300"
              )} / 0.08)`,
              [cssVarName(ALPHA_COLOR_CSS_VAR_SUFFIX.surfaceHighlightedActive)]: `rgb(${vars(
                "colors.neutral.300"
              )} / 0.16)`,
            },
          });
        });

        addBase({
          html: {
            WebkitTapHighlightColor: "transparent",
          },
          body: {
            // Use theme background and foreground colors.
            backgroundColor: `rgb(${vars("colors.surface.body")})`,
            color: `rgb(${vars("colors.content.DEFAULT")})`,
          },
        });

        addUtilities({
          ".reset-svg": {
            "> svg": {
              width: "1em",
              height: "1em",
              color: "currentColor",
              lineHeight: "1em",
            },
          },
        });
      }),
    ],
  };
}

export { PIGMENT_COLORS } from "./colors";
export { PIGMENT_RADII } from "./radii";
export type { CustomTheme, PigmentOptions } from "./types";

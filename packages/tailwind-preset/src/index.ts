import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { colors } from "./colors";
import { DEFAULT_THEME_NAME, isValidTheme, resolveTheme } from "./themes";
import {
  PigmentOptions,
  PredefinedTheme,
  ThemeTokens,
  themeTokensShapeValue,
  TokenKey,
} from "./types";
import {
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

export function pigment(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarPrefix);

  return {
    darkMode: ["class", DARK_DATA_ATTR_SELECTOR],
    theme: {
      extend: {
        fontFamily: {
          sans: vars("typography.fontFamily.sans"),
          mono: vars("typography.fontFamily.mono"),
        },
        fontSize: {
          "2xs": ["10px", "14px"],
        },
        colors: {
          ...colors,
          ...Object.keys(flatten(themeTokensShapeValue.colors, "-")).reduce((acc, key) => {
            const formattedKey = toKebabCase(removeDefaultSuffix(key));
            acc[formattedKey] = `rgb(${vars(`colors-${key}` as TokenKey)} / <alpha-value>)`;
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
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
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

export { colors } from "./colors";
export type { CustomTheme, PigmentOptions } from "./types";

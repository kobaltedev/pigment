import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { PREDEFINED_THEMES } from "./themes";
import {
  PartialTheme,
  PigmentOptions,
  PredefinedTheme,
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
  toKebabCase,
} from "./utils";

export function pigmentPreset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarPrefix);

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
        },
        boxShadow: {
          ...Object.keys(flatten(themeTokensShapeValue.shadows, "-")).reduce((acc, key) => {
            const formattedKey = toKebabCase(removeDefaultSuffix(key));
            acc[formattedKey] = vars(`shadows-${key}` as TokenKey);
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
        const themes: Array<[PredefinedTheme | string, PartialTheme]> = [];

        const cssVarName = (key: string) => {
          return `--${cssVarPrefix}${toKebabCase(removeDefaultSuffix(key))}`;
        };

        if (options.themes != null && options?.themes.length > 0) {
          options?.themes.forEach(theme => {
            if (isString(theme)) {
              // Add the predefined theme.
              themes.push([theme, PREDEFINED_THEMES[theme](vars)]);
            } else if (theme.extend != null) {
              // Create a custom theme by extending a predefined theme.
              const mergedTheme = { value: PREDEFINED_THEMES[theme.extend](vars) };
              dset(mergedTheme, "value", theme.tokens(vars));
              themes.push([theme.name, mergedTheme.value]);
            } else {
              // Create a custom theme from scratch.
              themes.push([theme.name, theme.tokens(vars)]);
            }
          });
        } else {
          // Fallback to base theme.
          themes.push(["base", PREDEFINED_THEMES.base(vars)]);
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
export type { CustomTheme, PigmentOptions } from "./types";

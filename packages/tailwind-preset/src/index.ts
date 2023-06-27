import kobaltePlugin from "@kobalte/tailwindcss";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons";

import { baseTheme } from "./base-theme";
import { colors } from "./colors";
import { createTheme } from "./create-theme";
import { PigmentOptions, Theme, themeTokensShapeValue, TokenKey } from "./types";
import {
  createVarsFn,
  DARK_DATA_ATTR_SELECTOR,
  flatten,
  getCssVarsPrefix,
  isHexColor,
  removeDefaultSuffix,
  rgbColorChannel,
  toKebabCase,
} from "./utils";

function preset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarPrefix);

  return {
    darkMode: ["class", DARK_DATA_ATTR_SELECTOR],
    theme: {
      extend: {
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
        data: {
          "placeholder-shown": "placeholder-shown",
        },
      },
    },
    plugins: [
      animatePlugin,
      kobaltePlugin,
      iconsPlugin({
        collections: getIconCollections(options?.iconCollections ?? ["tabler"]),
      }),
      plugin(({ addBase, addUtilities }) => {
        const themes: Array<Theme> = options.themes ?? [baseTheme];

        const cssVarName = (key: string) => {
          return `--${cssVarPrefix}${toKebabCase(removeDefaultSuffix(key))}`;
        };

        themes.forEach((theme, index) => {
          const dataThemeSelector = `[data-pg-theme='${theme.name}']`;

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
                Object.entries(flatten(theme.tokens.light ?? {}, "-")) as Array<[string, string]>
              ).reduce((acc, [key, value]) => {
                acc[cssVarName(key)] = isHexColor(value) ? rgbColorChannel(value) : value;
                return acc;
              }, {} as any),
            },
          });

          addBase({
            [darkThemeSelector]: {
              ...(
                Object.entries(flatten(theme.tokens.dark ?? {}, "-")) as Array<[string, string]>
              ).reduce((acc, [key, value]) => {
                acc[cssVarName(key)] = isHexColor(value) ? rgbColorChannel(value) : value;
                return acc;
              }, {} as any),
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
          ".display-inherit": {
            display: "inherit",
          },
        });
      }),
    ],
  };
}

export default {
  preset,
  colors,
  createTheme,
};
export type { PigmentOptions, Theme } from "./types";

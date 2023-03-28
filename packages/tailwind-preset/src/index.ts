import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { PREDEFINED_THEMES } from "./themes";
import { PartialTheme, PigmentOptions, PredefinedTheme } from "./types";
import {
  createVarsFn,
  DARK_DATA_ATTR_SELECTOR,
  flattenKebabCase,
  getCssVarsPrefix,
  isString,
} from "./utils";

export default function preset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarPrefix);

  // The theme doesn't matter here, we only care about the object shape.
  const themeShape = PREDEFINED_THEMES.base(vars);

  return {
    darkMode: ["class", DARK_DATA_ATTR_SELECTOR],
    theme: {
      extend: {
        fontFamily: {
          sans: vars("typography.fontFamilySans"),
          serif: vars("typography.fontFamilySerif"),
          mono: vars("typography.fontFamilyMono"),
        },
        fontSize: {
          "2xs": ["10px", "14px"],
        },
        spacing: {
          13: "3.25rem",
          15: "3.75rem",
        },
        colors: flattenKebabCase(
          themeShape.light.colors,
          // Don't support Tailwind opacity modifier since token value can be anything.
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarPrefix}colors-`,
          ""
        ),
        boxShadow: flattenKebabCase(
          themeShape.light.shadows,
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarPrefix}shadows-`,
          ""
        ),
        data: {
          "placeholder-shown": "placeholder-shown",
        },
      },
    },
    plugins: [
      animatePlugin,
      kobaltePlugin,
      plugin(({ addBase, addUtilities, theme }) => {
        const themes: Array<[PredefinedTheme | string, PartialTheme]> = [];

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

          // Apply first theme by default.
          if (index === 0) {
            lightThemeSelector = `:root, ${lightThemeSelector}`;
            darkThemeSelector = `.dark, ${DARK_DATA_ATTR_SELECTOR}, ${darkThemeSelector}`;
          }

          addBase({
            [lightThemeSelector]: {
              ...flattenKebabCase(
                theme.common ?? {},
                (_, value) => value,
                `--${cssVarPrefix}`,
                cssVarPrefix,
                ""
              ),
              ...flattenKebabCase(
                theme.light ?? {},
                (_, value) => value,
                `--${cssVarPrefix}`,
                cssVarPrefix,
                ""
              ),
            },
          });

          addBase({
            [darkThemeSelector]: flattenKebabCase(
              theme.dark ?? {},
              (_, value) => value,
              `--${cssVarPrefix}`,
              cssVarPrefix,
              ""
            ),
          });
        });

        addBase({
          body: {
            // Use theme background and foreground colors.
            backgroundColor: theme("colors.body-bg"),
            color: theme("colors.text"),
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

export * from "./types";

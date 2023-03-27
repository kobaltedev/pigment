import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { PREDEFINED_THEMES } from "./themes";
import { PigmentOptions, PredefinedTheme, Theme } from "./types";
import {
  createVarsFn,
  DARK_DATA_ATTR_SELECTOR,
  flattenKebabCase,
  getCssVarsPrefix,
  isString,
} from "./utils";

export default function preset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarsPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarsPrefix);

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
          themeShape.light.color,
          // Don't support Tailwind opacity modifier since token value can be anything.
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarsPrefix}color-`,
          ""
        ),
        boxShadow: flattenKebabCase(
          themeShape.light.shadow,
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarsPrefix}shadow-`,
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
        const themes: Record<PredefinedTheme | string, Theme> = {};

        if (options.themes != null && options?.themes.length > 0) {
          options?.themes.forEach(theme => {
            if (isString(theme)) {
              // Add the predefined theme.
              themes[theme] = PREDEFINED_THEMES[theme](vars);
            } else {
              // Create a custom theme by extending a predefined theme.
              const mergedTheme = { value: PREDEFINED_THEMES[theme.extend](vars) };
              dset(mergedTheme, "value", theme.tokens(vars));
              themes[theme.name] = mergedTheme.value;
            }
          });
        } else {
          // Fallback to base theme.
          themes.base = PREDEFINED_THEMES.base(vars);
        }

        Object.keys(themes).forEach(key => {
          const theme = themes[key];
          const themeSelector = `[data-pg-theme='${key}']`;

          addBase({
            [themeSelector]: {
              ...flattenKebabCase(
                theme.common,
                (_, value) => value,
                `--${cssVarsPrefix}`,
                cssVarsPrefix,
                ""
              ),
              ...flattenKebabCase(
                theme.light,
                (_, value) => value,
                `--${cssVarsPrefix}`,
                cssVarsPrefix,
                ""
              ),
            },
          });

          addBase({
            [`${themeSelector}.dark,
              ${themeSelector} .dark,
              ${themeSelector}${DARK_DATA_ATTR_SELECTOR},
              ${themeSelector} ${DARK_DATA_ATTR_SELECTOR}`]: flattenKebabCase(
              theme.dark,
              (_, value) => value,
              `--${cssVarsPrefix}`,
              cssVarsPrefix,
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

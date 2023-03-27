import kobaltePlugin from "@kobalte/tailwindcss";
import { dset } from "dset/merge";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { getDefaultTheme } from "./default-theme";
import { PigmentOptions, Theme } from "./types";
import { createVarsFn, DARK_DATA_ATTR_SELECTOR, flattenKebabCase, getCssVarsPrefix } from "./utils";

export default function preset(options: PigmentOptions | undefined = {}): Partial<Config> {
  const cssVarsPrefix = getCssVarsPrefix(options);

  const vars = createVarsFn(cssVarsPrefix);

  const baseTheme = getDefaultTheme(vars);

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
          // The theme doesn't matter here, we only care about the object shape.
          baseTheme.light.color,
          // Don't support Tailwind opacity modifier since token value can be anything.
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarsPrefix}color-`,
          ""
        ),
        boxShadow: flattenKebabCase(
          // The theme doesn't matter here, we only care about the object shape.
          baseTheme.light.shadow,
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
        let finalTheme: Theme = baseTheme;

        if (options.theme != null) {
          const mergedTheme = { value: baseTheme };

          dset(mergedTheme, "value", options.theme(vars));

          finalTheme = mergedTheme.value;
        }

        addBase({
          ":root": {
            ...flattenKebabCase(
              finalTheme.common,
              (_, value) => value,
              `--${cssVarsPrefix}`,
              cssVarsPrefix,
              ""
            ),
            ...flattenKebabCase(
              finalTheme.light,
              (_, value) => value,
              `--${cssVarsPrefix}`,
              cssVarsPrefix,
              ""
            ),
          },
        });

        addBase({
          [`.dark, ${DARK_DATA_ATTR_SELECTOR}`]: flattenKebabCase(
            finalTheme.dark,
            (_, value) => value,
            `--${cssVarsPrefix}`,
            cssVarsPrefix,
            ""
          ),
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

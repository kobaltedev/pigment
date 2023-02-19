import kobaltePlugin from "@kobalte/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import { dset } from "dset/merge";
import plugin from "tailwindcss/plugin";
import type { Config, PluginCreator } from "tailwindcss/types/config";
import animatePlugin from "tailwindcss-animate";

import { themes } from "./themes";
import { PigmentOptions, Theme } from "./types";
import { flattenKebabCase } from "./utils/flatten";

function getCssVarPrefix(options: PigmentOptions) {
  return options.cssVarPrefix ?? "kb-";
}

function pigmentPlugin(options: PigmentOptions | undefined = {}): PluginCreator {
  return function ({ addBase, addUtilities, config }) {
    const cssVarPrefix = getCssVarPrefix(options);

    const baseTheme = themes[options?.baseTheme ?? "default"];

    let finalTheme: Theme;

    if (options.themeOverride != null) {
      const mergedTheme = { value: baseTheme };

      dset(mergedTheme, "value", options.themeOverride);

      finalTheme = mergedTheme.value;
    } else {
      finalTheme = baseTheme;
    }

    addBase({
      ":root": {
        ...flattenKebabCase(
          finalTheme.light,
          (_, value) => value,
          `--${cssVarPrefix}`,
          cssVarPrefix,
          ""
        ),
      },
    });

    const darkBaseStyle = flattenKebabCase(
      finalTheme.dark,
      (_, value) => value,
      `--${cssVarPrefix}`,
      cssVarPrefix,
      ""
    );

    const configDarkMode = config().darkMode;

    if (configDarkMode === "media") {
      addBase({
        "@media (prefers-color-scheme: dark)": {
          ":root": darkBaseStyle,
        },
      });
    } else if (configDarkMode != null) {
      const defaultDarkModeClassSelector = `.${config().prefix}dark`;

      let darkModeSelector = defaultDarkModeClassSelector;

      if (Array.isArray(configDarkMode)) {
        const otherDarkModeSelectors = [...configDarkMode.slice(1)];
        darkModeSelector = `${defaultDarkModeClassSelector}, ${otherDarkModeSelectors.join(", ")}`;
      }

      addBase({
        [darkModeSelector]: darkBaseStyle,
      });
    }

    addUtilities({
      ".reset-svg": {
        "> svg": {
          width: "1em",
          height: "1em",
        },
      },
    });
  };
}

function pigmentConfig(options: PigmentOptions): Partial<Config> {
  const cssVarPrefix = getCssVarPrefix(options);

  // The theme doesn't matter here, we only care about the object shape.
  const theme = themes.default.light;

  return {
    theme: {
      extend: {
        colors: flattenKebabCase(
          theme.color,
          // Don't support Tailwind opacity modifier since token value can be anything.
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarPrefix}color-`,
          ""
        ),
        boxShadow: flattenKebabCase(
          theme.shadow,
          prefixedKey => `var(--${prefixedKey})`,
          "",
          `${cssVarPrefix}shadow-`,
          ""
        ),
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--kb-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--kb-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [formsPlugin({ strategy: "class" }), animatePlugin, kobaltePlugin],
  };
}

export default plugin.withOptions(pigmentPlugin, pigmentConfig);

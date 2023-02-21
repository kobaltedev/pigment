import { dset } from "dset/merge";
import plugin from "tailwindcss/plugin";
import type { Config, PluginCreator } from "tailwindcss/types/config";

import { themes } from "./themes";
import { PigmentOptions, Theme } from "./types";
import { flattenKebabCase } from "./utils/flatten";

function getCssVarPrefix(options: PigmentOptions) {
  return options.cssVarPrefix ?? "ui-";
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
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
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
      },
    },
  };
}

export default plugin.withOptions(pigmentPlugin, pigmentConfig);

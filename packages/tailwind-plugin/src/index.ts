import kobaltePlugin from "@kobalte/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import { dset } from "dset/merge";
import plugin from "tailwindcss/plugin";
import type { Config, PluginCreator } from "tailwindcss/types/config";
import animatePlugin from "tailwindcss-animate";

import { themes } from "./themes";
import { PigmentOptions } from "./types";
import { flattenKebabCase } from "./utils/flatten";

function getCssVarPrefix(options: PigmentOptions) {
  return options.cssVarPrefix ?? "kb-";
}

function pigmentPlugin(options: PigmentOptions | undefined = {}): PluginCreator {
  return function ({ addBase, addUtilities, config }) {
    const cssVarPrefix = getCssVarPrefix(options);

    let pigmentTheme = themes.default;

    if (options.theme != null) {
      if (typeof options.theme === "object") {
        const mergedTheme = {
          value: themes[options.theme.base],
        };

        dset(mergedTheme, "value", options.theme.override);

        pigmentTheme = mergedTheme.value;
      } else {
        pigmentTheme = themes[options.theme];
      }
    }

    const commonBase = {
      ":root": {
        ...flattenKebabCase(
          pigmentTheme.common.borderRadius,
          (_, value) => value,
          `--${cssVarPrefix}border-radius-`,
          `${cssVarPrefix}border-radius-`,
          ""
        ),
      },
    };

    const lightBase = {
      ":root": {
        ...flattenKebabCase(
          pigmentTheme.light,
          (_, value) => value,
          `--${cssVarPrefix}-`,
          `${cssVarPrefix}-`,
          ""
        ),
      },
    };

    let darkBase = {};

    const darkBaseContent = {
      ...flattenKebabCase(
        pigmentTheme.dark,
        (_, value) => value,
        `--${cssVarPrefix}-`,
        `${cssVarPrefix}-`,
        ""
      ),
    };

    const configDarkMode = config().darkMode;
    const defaultDarkModeClassSelector = `.${config().prefix}dark`;

    if (configDarkMode === "media") {
      darkBase = {
        "@media (prefers-color-scheme: dark)": {
          ":root": darkBaseContent,
        },
      };
    } else if (configDarkMode === "class") {
      darkBase = {
        [defaultDarkModeClassSelector]: darkBaseContent,
      };
    } else if (Array.isArray(configDarkMode)) {
      const otherDarkModeSelectors = [...configDarkMode.slice(1)];
      darkBase = {
        [`${defaultDarkModeClassSelector}, ${otherDarkModeSelectors.join(", ")}`]: darkBaseContent,
      };
    }

    addBase({
      commonBase,
      lightBase,
      darkBase,
    });

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
          // Don't care about Tailwind opacity modifier
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

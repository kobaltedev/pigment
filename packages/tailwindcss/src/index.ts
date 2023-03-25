import kobaltePlugin from "@kobalte/tailwindcss";
import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

import { defaultTheme } from "./themes/default";

function colorToken(suffix: string) {
  return {
    [suffix]: `var(--pg-color-${suffix})`,
  };
}

function globalVariantTokens(variant: string, color: string) {
  return {
    ...colorToken(`${variant}-${color}-text`),
    ...colorToken(`${variant}-${color}-icon`),
    ...colorToken(`${variant}-${color}-bg`),
    ...colorToken(`${variant}-${color}-border`),

    ...colorToken(`${variant}-${color}-text-hover`),
    ...colorToken(`${variant}-${color}-icon-hover`),
    ...colorToken(`${variant}-${color}-bg-hover`),
    ...colorToken(`${variant}-${color}-border-hover`),

    ...colorToken(`${variant}-${color}-text-active`),
    ...colorToken(`${variant}-${color}-icon-active`),
    ...colorToken(`${variant}-${color}-bg-active`),
    ...colorToken(`${variant}-${color}-border-active`),
  };
}

export default function preset(): Partial<Config> {
  return {
    darkMode: ["class", "[data-pg-color-scheme='dark']"],
    theme: {
      extend: {
        fontFamily: {
          sans: "var(--pg-font-family-sans)",
          serif: "var(--pg-font-family-serif)",
          mono: "var(--pg-font-family-mono)",
        },
        fontSize: {
          "2xs": ["10px", "14px"],
        },
        spacing: {
          13: "3.25rem",
          15: "3.75rem",
        },
        colors: {
          ...colorToken("text"),
          ...colorToken("text-subtle"),
          ...colorToken("text-subtlest"),
          ...colorToken("text-dimmed"),
          ...colorToken("text-inverse"),
          ...colorToken("text-warning-inverse"),
          ...colorToken("text-success"),
          ...colorToken("text-danger"),

          ...colorToken("icon"),
          ...colorToken("icon-subtle"),
          ...colorToken("icon-subtlest"),
          ...colorToken("icon-dimmed"),
          ...colorToken("icon-inverse"),
          ...colorToken("icon-warning-inverse"),
          ...colorToken("icon-success"),
          ...colorToken("icon-danger"),

          ...colorToken("body-bg"),

          ...colorToken("subtle-bg"),
          ...colorToken("subtle-bg-hover"),
          ...colorToken("subtle-bg-active"),

          ...colorToken("inverse-bg"),
          ...colorToken("inverse-bg-hover"),
          ...colorToken("inverse-bg-active"),

          ...colorToken("surface-bg"),
          ...colorToken("surface-bg-hover"),
          ...colorToken("surface-bg-active"),
          ...colorToken("surface-raised-bg"),
          ...colorToken("surface-raised-bg-hover"),
          ...colorToken("surface-raised-bg-active"),
          ...colorToken("surface-overlay-bg"),
          ...colorToken("surface-overlay-bg-hover"),
          ...colorToken("surface-overlay-bg-active"),
          ...colorToken("surface-sunken-bg"),

          ...colorToken("border"),

          ...colorToken("focus-ring"),
          ...colorToken("backdrop"),

          ...colorToken("disabled-text"),
          ...colorToken("disabled-icon"),
          ...colorToken("disabled-bg"),
          ...colorToken("disabled-border"),

          ...globalVariantTokens("solid", "selected"),
          ...globalVariantTokens("soft", "selected"),

          ...globalVariantTokens("soft", "input"),
          ...globalVariantTokens("outlined", "input"),

          ...globalVariantTokens("solid", "primary"),
          ...globalVariantTokens("solid", "neutral"),
          ...globalVariantTokens("solid", "success"),
          ...globalVariantTokens("solid", "info"),
          ...globalVariantTokens("solid", "warning"),
          ...globalVariantTokens("solid", "danger"),
          ...globalVariantTokens("solid", "help"),

          ...globalVariantTokens("soft", "primary"),
          ...globalVariantTokens("soft", "neutral"),
          ...globalVariantTokens("soft", "success"),
          ...globalVariantTokens("soft", "info"),
          ...globalVariantTokens("soft", "warning"),
          ...globalVariantTokens("soft", "danger"),
          ...globalVariantTokens("soft", "help"),

          ...globalVariantTokens("outlined", "primary"),
          ...globalVariantTokens("outlined", "neutral"),
          ...globalVariantTokens("outlined", "success"),
          ...globalVariantTokens("outlined", "info"),
          ...globalVariantTokens("outlined", "warning"),
          ...globalVariantTokens("outlined", "danger"),
          ...globalVariantTokens("outlined", "help"),

          ...globalVariantTokens("ghost", "primary"),
          ...globalVariantTokens("ghost", "neutral"),
          ...globalVariantTokens("ghost", "success"),
          ...globalVariantTokens("ghost", "info"),
          ...globalVariantTokens("ghost", "warning"),
          ...globalVariantTokens("ghost", "danger"),
          ...globalVariantTokens("ghost", "help"),
        },
        boxShadow: {
          "surface-raised": "var(--pg-shadow-surface-raised)",
          "surface-overlay": "var(--pg-shadow-surface-overlay)",
        },
        data: {
          "placeholder-shown": "placeholder-shown",
        },
      },
    },
    plugins: [
      animatePlugin,
      kobaltePlugin,
      plugin(({ addBase, addUtilities, theme }) => {
        addBase({
          body: {
            // Use theme background and foreground colors.
            backgroundColor: theme("colors.body-bg"),
            color: theme("colors.text"),
          },
        });

        addBase(defaultTheme);

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

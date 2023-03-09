const kobaltePlugin = require("@kobalte/tailwindcss");
const animatePlugin = require("tailwindcss-animate");

const plugin = require("tailwindcss/plugin");

function colorToken(suffix) {
  return {
    [suffix]: `var(--pg-color-${suffix})`,
  };
}

function globalVariantTokens(variant, color) {
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

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "pg-",
  darkMode: ["class", "[data-pg-theme='dark']"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--pg-font-family-sans)"],
        mono: ["var(--pg-font-family-mono)"],
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
        ...colorToken("text-success"),
        ...colorToken("text-danger"),

        ...colorToken("icon"),
        ...colorToken("icon-subtle"),
        ...colorToken("icon-subtlest"),
        ...colorToken("icon-dimmed"),
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
        ...colorToken("border-success"),
        ...colorToken("border-danger"),

        ...colorToken("focus-ring"),
        ...colorToken("backdrop"),

        ...colorToken("disabled-text"),
        ...colorToken("disabled-icon"),
        ...colorToken("disabled-bg"),
        ...colorToken("disabled-border"),

        ...globalVariantTokens("solid", "primary"),
        ...globalVariantTokens("solid", "neutral"),
        ...globalVariantTokens("solid", "success"),
        ...globalVariantTokens("solid", "info"),
        ...globalVariantTokens("solid", "warning"),
        ...globalVariantTokens("solid", "danger"),
        ...globalVariantTokens("solid", "help"),
        ...globalVariantTokens("solid", "selected"),

        ...globalVariantTokens("soft", "primary"),
        ...globalVariantTokens("soft", "neutral"),
        ...globalVariantTokens("soft", "success"),
        ...globalVariantTokens("soft", "info"),
        ...globalVariantTokens("soft", "warning"),
        ...globalVariantTokens("soft", "danger"),
        ...globalVariantTokens("soft", "help"),
        ...globalVariantTokens("soft", "selected"),
        ...globalVariantTokens("soft", "input"),

        ...globalVariantTokens("outlined", "primary"),
        ...globalVariantTokens("outlined", "neutral"),
        ...globalVariantTokens("outlined", "success"),
        ...globalVariantTokens("outlined", "info"),
        ...globalVariantTokens("outlined", "warning"),
        ...globalVariantTokens("outlined", "danger"),
        ...globalVariantTokens("outlined", "help"),
        ...globalVariantTokens("outlined", "input"),

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
    },
  },
  plugins: [
    animatePlugin,
    kobaltePlugin({ prefix: "pg" }),
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        "*, *::before, *::after": {
          // Use a more-intuitive box-sizing model.
          boxSizing: "border-box",
        },

        html: {
          // Improve text rendering.
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",

          // Fix font resize problem in iOS.
          WebkitTextSizeAdjust: "100%",
        },

        body: {
          // Remove the margin in all browsers.
          margin: 0,

          // Use theme background and foreground colors.
          backgroundColor: theme("colors.body-bg"),
          color: theme("colors.text"),

          // Use theme sans-serif font-family and accessible line-height.
          fontFamily: theme("fontFamily.sans"),
          lineHeight: "1.5",
          fontSize: "16px",
        },
      });

      addUtilities({
        ".reset-svg": {
          "> svg": {
            display: "block",
            maxWidth: "100%",
            width: "1em",
            height: "1em",
          },
        },
      });
    }),
  ],
};

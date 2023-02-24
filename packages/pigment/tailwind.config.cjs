const kobaltePlugin = require("@kobalte/tailwindcss");
const formsPlugin = require("@tailwindcss/forms");
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
    ...colorToken(`${variant}-${color}-bg`),
    ...colorToken(`${variant}-${color}-border`),
    ...colorToken(`${variant}-${color}-text-hover`),
    ...colorToken(`${variant}-${color}-bg-hover`),
    ...colorToken(`${variant}-${color}-border-hover`),
    ...colorToken(`${variant}-${color}-text-active`),
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
        sans: ["var(--pg-font-family)"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
      colors: {
        ...colorToken("text"),
        ...colorToken("text-subtle"),
        ...colorToken("text-subtlest"),
        ...colorToken("text-success"),
        ...colorToken("text-danger"),

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

        ...colorToken("focus-ring"),
        ...colorToken("backdrop"),
        ...colorToken("separator"),

        ...colorToken("disabled-text"),
        ...colorToken("disabled-bg"),
        ...colorToken("disabled-border"),

        ...globalVariantTokens("solid", "primary"),
        ...globalVariantTokens("solid", "secondary"),
        ...globalVariantTokens("solid", "success"),
        ...globalVariantTokens("solid", "info"),
        ...globalVariantTokens("solid", "warning"),
        ...globalVariantTokens("solid", "danger"),
        ...globalVariantTokens("solid", "help"),
        ...globalVariantTokens("solid", "selected"),

        ...globalVariantTokens("soft", "primary"),
        ...globalVariantTokens("soft", "secondary"),
        ...globalVariantTokens("soft", "success"),
        ...globalVariantTokens("soft", "info"),
        ...globalVariantTokens("soft", "warning"),
        ...globalVariantTokens("soft", "danger"),
        ...globalVariantTokens("soft", "help"),
        ...globalVariantTokens("soft", "selected"),
        ...globalVariantTokens("soft", "input"),

        ...globalVariantTokens("outlined", "primary"),
        ...globalVariantTokens("outlined", "secondary"),
        ...globalVariantTokens("outlined", "success"),
        ...globalVariantTokens("outlined", "info"),
        ...globalVariantTokens("outlined", "warning"),
        ...globalVariantTokens("outlined", "danger"),
        ...globalVariantTokens("outlined", "help"),
        ...globalVariantTokens("outlined", "input"),

        ...globalVariantTokens("ghost", "primary"),
        ...globalVariantTokens("ghost", "secondary"),
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
    formsPlugin({ strategy: "class" }),
    animatePlugin,
    kobaltePlugin,
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        // Use a more-intuitive box-sizing model.
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        // Remove default margin.
        "*": {
          margin: 0,
        },

        // Use theme sans-serif font-family and accessible line-height.
        html: {
          fontFamily: theme("fontFamily.sans"),
          lineHeight: "1.5",
          fontSize: "16px",
        },

        // Use theme background and foreground colors, improve text rendering.
        body: {
          backgroundColor: theme("colors.body-bg"),
          color: theme("colors.text"),
          fontFamily: "inherit",
          lineHeight: "inherit",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },

        // Improve media defaults.
        "img, picture, video, canvas, svg": {
          display: "block",
          maxWidth: "100%",
        },

        // Remove built-in form typography styles.
        "button, input, textarea, select, optgroup": {
          font: "inherit",
        },

        // Remove built-in headings typography styles.
        "h1, h2, h3, h4, h5, h6": {
          font: "inherit",
        },

        // Avoid text overflows.
        "p, h1, h2, h3, h4, h5, h6": {
          overflowWrap: "break-word",
        },
      });

      addUtilities({
        ".reset-svg": {
          "> svg": {
            width: "1em",
            height: "1em",
          },
        },
      });
    }),
  ],
};

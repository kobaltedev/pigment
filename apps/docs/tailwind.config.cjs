const defaultTheme = require("tailwindcss/defaultTheme");
const pigment = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@kobalte/pigment/dist/**/*.{js,cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  presets: [
    pigment({
      themes: [
        /** @type {import('@kobalte/pigment-tailwind-preset').CustomTheme} */
        {
          name: "docs",
          extend: "base",
          tokens: vars => ({
            common: {
              typography: {
                fontFamilySans: `Inter, ${vars("typography.fontFamilyFallback")}`,
              },
            },
          }),
        },
        /** @type {import('@kobalte/pigment-tailwind-preset').CustomTheme} */
        {
          name: "github",
          tokens: vars => ({
            common: {
              typography: {
                fontFamilySans: vars("typography.fontFamilyFallback"),
              },
            },
            light: {
              colors: {
                solidPrimaryText: "#ffffff",
                solidPrimaryBg: "#2da44e",
                solidPrimaryBorder: "#1a1e2326",
                solidPrimaryTextHover: "#ffffff",
                solidPrimaryBgHover: "#2c974b",
                solidPrimaryBorderHover: "#1b1f2426",
                solidPrimaryTextActive: "#ffffff",
                solidPrimaryBgActive: "#298e46",
                solidPrimaryBorderActive: "#1b1f2426",
              },
            },
          }),
        },
      ],
    }),
  ],
  plugins: [require("@tailwindcss/typography")],
};

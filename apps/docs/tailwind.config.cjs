const { pigmentPreset } = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@kobalte/pigment/dist/**/*.{js,cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  presets: [
    pigmentPreset({
      themes: [
        /** @type {import('@kobalte/pigment-tailwind-preset').CustomTheme} */
        {
          name: "docs",
          extend: "base",
          tokens: vars => ({
            common: {
              typography: {
                fontFamily: {
                  body: `Inter, ${vars("typography.fontFamily.fallback")}`,
                  display: `Lexend, ${vars("typography.fontFamily.fallback")}`,
                }
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
                fontFamily: {
                  body: vars("typography.fontFamily.fallback"),
                }
              },
            },
            light: {
              colors: {
                solid: {
                  primary: {
                    content: "#ffffff",
                    surface: "#2da44e",
                    surfaceHover: "#2c974b",
                    surfaceActive: "#298e46",
                  }
                }
              },
            },
          }),
        },
        "base",
      ],
    }),
  ],
  plugins: [require("@tailwindcss/typography")],
};

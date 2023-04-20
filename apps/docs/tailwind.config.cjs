const twTheme = require('tailwindcss/defaultTheme')
const { pigmentPreset } = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@kobalte/pigment/dist/**/*.{js,cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", ...twTheme.fontFamily.sans],
        display: ["Lexend", ...twTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  presets: [
    pigmentPreset({
      themes: [
        "base",
        "violet",
        "scarlet",
        "sun",
        "moon",
        "emerald",
        /** @type {import('@kobalte/pigment-tailwind-preset').CustomTheme} */
        {
          name: "github",
          tokens: {
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
          },
        },
      ],
    }),
  ],
  plugins: [require("@tailwindcss/typography")],
};

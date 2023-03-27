const defaultTheme = require("tailwindcss/defaultTheme");
const pigment = require("@kobalte/pigment-tailwindcss");

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
        {
          name: "pigment-docs",
          extend: "default",
          tokens: vars => ({
            common: {
              typography: {
                fontFamilySans: `Inter, ${vars("typography.fontFamilyFallback")}`,
              },
            },
          }),
        },
      ],
    }),
  ],
  plugins: [require("@tailwindcss/typography")],
};

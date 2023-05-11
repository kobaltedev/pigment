const twTheme = require("tailwindcss/defaultTheme");
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
        sans: ["Inter", ...twTheme.fontFamily.sans],
        display: ["Lexend", ...twTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      colors: {
        ...pigment.colors
      }
    },
  },
  presets: [pigment.preset()],
  plugins: [require("@tailwindcss/typography")],
};

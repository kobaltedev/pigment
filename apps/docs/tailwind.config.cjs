const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@kobalte/pigment/dist/*.{js,cjs}",
    "./src/**/*.{html,js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  presets: [require("@kobalte/pigment-tailwindcss")],
  plugins: [require("@tailwindcss/typography")],
};

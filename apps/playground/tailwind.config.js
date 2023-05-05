// eslint-disable-next-line @typescript-eslint/no-var-requires
const { pigment, colors } = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@kobalte/pigment/dist/**/*.{js,cjs,mjs}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  presets: [pigment()],
};

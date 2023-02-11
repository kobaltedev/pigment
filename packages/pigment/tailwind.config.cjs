const { pigmentPreset } = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // array syntax not working with storybook
  presets: [pigmentPreset()],
};

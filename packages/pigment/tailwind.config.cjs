const { pigmentPreset } = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // Override the Pigment preset because array syntax doesn't work with storybook
  presets: [pigmentPreset()],
};

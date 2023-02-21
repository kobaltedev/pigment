const pigmentPlugin = require("@kobalte/pigment-tailwind-plugin");
const kobaltePlugin = require("@kobalte/tailwindcss");
const formsPlugin = require("@tailwindcss/forms");
const animatePlugin = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  plugins: [
    formsPlugin({ strategy: "class" }),
    animatePlugin,
    kobaltePlugin,
    pigmentPlugin({ theme: "default" }),
  ],
};

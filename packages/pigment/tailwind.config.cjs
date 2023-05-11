const pigment = require("@kobalte/pigment-tailwind-preset");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    process.env.NODE_ENV !== "production" ? "./dev/**/*.{js,jsx,ts,tsx}" : "",
  ],
  darkMode: "class",
  presets: [pigment.preset()],
};

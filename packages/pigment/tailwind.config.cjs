const pigment = require("@kobalte/pigment-tailwind-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./dev/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  plugins: [
    pigment({
      cssVarPrefix: "pg-",
      theme: "default",
    }),
  ],
};

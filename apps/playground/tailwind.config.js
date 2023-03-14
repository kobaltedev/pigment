/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@kobalte/pigment/dist/*.{js,cjs}", "./src/**/*.{html,js,jsx,ts,tsx}"],
  presets: [require("@kobalte/pigment-tailwindcss")],
};

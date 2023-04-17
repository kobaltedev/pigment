/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    process.env.NODE_ENV !== "production" ? "./dev/**/*.{js,jsx,ts,tsx}": ""
  ],
  presets: [require("@kobalte/pigment-tailwind-preset")],
};

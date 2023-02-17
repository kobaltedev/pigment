const pigment = require("@kobalte/pigment-tailwind-plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  plugins: [
    pigment({
      cssVarPrefix: "hope-",
      theme: {
        base: "default",
        override: {
          light: {
            color: {
              text: {
                base: "#121212",
              },
            },
          },
        },
      },
    }),
  ],
};

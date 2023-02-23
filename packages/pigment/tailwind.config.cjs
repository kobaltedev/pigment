import kobaltePlugin from "@kobalte/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  prefix: "pg-",
  darkMode: ["class", "[data-pg-theme='dark']"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [formsPlugin({ strategy: "class" }), animatePlugin, kobaltePlugin],
};

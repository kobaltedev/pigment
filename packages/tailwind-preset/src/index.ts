import kobaltePlugin from "@kobalte/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import animatePlugin from "tailwindcss-animate";

type Scale = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
type Palette = Record<Scale, string>;

interface PresetConfig {
  colors?: Partial<{
    primary: Palette;
    secondary: Palette;
    success: Palette;
    info: Palette;
    warning: Palette;
    danger: Palette;
  }>;
}

export function pigmentPreset(config?: PresetConfig): Partial<Config> {
  return {
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
      extend: {
        colors: {
          primary: config?.colors?.primary ?? {
            50: "#f0f5fa",
            100: "#dde9f5",
            200: "#bdd4eb",
            300: "#8aa4c4",
            400: "#566b89",
            500: "#1e293b",
            600: "#151f32",
            700: "#0f172a",
            800: "#091022",
            900: "#050a1c",
          },
          secondary: config?.colors?.secondary ?? colors.zinc,
          success: config?.colors?.success ?? colors.green,
          info: config?.colors?.info ?? colors.sky,
          warning: config?.colors?.warning ?? colors.amber,
          danger: config?.colors?.danger ?? colors.red,
        },
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--kb-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--kb-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [formsPlugin({ strategy: "class" }), animatePlugin, kobaltePlugin],
  };
}

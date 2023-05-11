import { colors } from "./colors";
import { grayscales } from "./grayscales";
import { ThemeTokens } from "./types";

const GRAYSCALES = ["gray", "mauve", "slate", "sage", "olive", "sand"] as const;

const BRIGHT_COLORS = ["amber", "yellow", "lime"] as const;

const COLORS = [
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
  "red",
  "orange",
  ...BRIGHT_COLORS,
] as const;

type Grayscale = (typeof GRAYSCALES)[number];
type BrightColor = (typeof BRIGHT_COLORS)[number];
type Color = (typeof COLORS)[number];
type GrayscaleStep = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
type ColorStep =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

interface SemanticColors {
  neutral: Grayscale;
  primary: Color;
  success: Color;
  info: Color;
  warning: Color;
  danger: Color;
  discovery: Color;
}

interface CreateThemeOptions {
  light: SemanticColors;
  dark: SemanticColors;
}

const COLOR_GRAYSCALE_MAP: Record<Color, Grayscale> = {
  green: "sage",
  emerald: "sage",
  teal: "sage",
  cyan: "slate",
  sky: "slate",
  blue: "slate",
  indigo: "slate",
  violet: "mauve",
  purple: "mauve",
  fuchsia: "mauve",
  pink: "mauve",
  rose: "mauve",
  red: "mauve",
  orange: "sand",
  amber: "sand",
  yellow: "sand",
  lime: "olive",
};

function isGrayscaleColor(color: Color | Grayscale): color is Grayscale {
  return GRAYSCALES.includes(color as any);
}

function isBrightColor(color: Color): color is BrightColor {
  return BRIGHT_COLORS.includes(color as any);
}

function inverseGrayscaleValueOf(
  color: Color,
  darkGrayscaleStep: GrayscaleStep,
  fallback: string
): string {
  if (isBrightColor(color)) {
    return darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[color], darkGrayscaleStep);
  }

  return fallback;
}

function grayscaleValueOf(grayscale: Grayscale, step: GrayscaleStep): string {
  return grayscales[grayscale][step];
}

function darkGrayscaleValueOf(grayscale: Grayscale, step: GrayscaleStep): string {
  return grayscales[`${grayscale}Dark`][step];
}

function colorValueOf(color: Color, step: ColorStep, brightStep: ColorStep = step): string {
  return colors[color][isBrightColor(color) ? brightStep : step];
}

const white = "#ffffff";

/* -----------------------------------------------------------------------------------------------------------------------------------
 * NOTE ABOUT COLORS:
 * We use @radix/colors for the `neutral` palette because it offers more possibilities than Tailwind's grays, specially in dark mode.
 * We use Tailwind colors for `statuses` palettes because contrast is better than Radix's steps 9 and 10.
 * ---------------------------------------------------------------------------------------------------------------------------------*/

// TODO: support grayscale as primary color

/** Create a theme based on Pigment color palettes. */
export function createTheme(options: CreateThemeOptions): ThemeTokens {
  return {
    light: {
      colors: {
        content: {
          DEFAULT: grayscaleValueOf(options.light.neutral, "12"),
          subtle: grayscaleValueOf(options.light.neutral, "11"),
          subtler: grayscaleValueOf(options.light.neutral, "10"),
          subtlest: grayscaleValueOf(options.light.neutral, "9"),
          disabled: grayscaleValueOf(options.light.neutral, "8"),
          link: {
            DEFAULT: colorValueOf(options.light.primary, "700"),
            hover: colorValueOf(options.light.primary, "800"),
            active: colorValueOf(options.light.primary, "900"),
          },

          primary: colorValueOf(options.light.primary, "700"),
          success: colorValueOf(options.light.success, "700"),
          info: colorValueOf(options.light.info, "700"),
          warning: colorValueOf(options.light.warning, "700"),
          danger: colorValueOf(options.light.danger, "700"),
          discovery: colorValueOf(options.light.discovery, "700"),

          onPrimary: inverseGrayscaleValueOf(options.light.primary, "2", white),
          onSuccess: inverseGrayscaleValueOf(options.light.success, "2", white),
          onInfo: inverseGrayscaleValueOf(options.light.info, "2", white),
          onWarning: inverseGrayscaleValueOf(options.light.warning, "2", white),
          onDanger: inverseGrayscaleValueOf(options.light.danger, "2", white),
          onDiscovery: inverseGrayscaleValueOf(options.light.discovery, "2", white),

          onPrimarySubtle: colorValueOf(options.light.primary, "800"),
          onSuccessSubtle: colorValueOf(options.light.success, "800"),
          onInfoSubtle: colorValueOf(options.light.info, "800"),
          onWarningSubtle: colorValueOf(options.light.warning, "800"),
          onDangerSubtle: colorValueOf(options.light.danger, "800"),
          onDiscoverySubtle: colorValueOf(options.light.discovery, "800"),
        },

        surface: {
          DEFAULT: white,
          body: white,
          raised: white,
          overlay: white,
          sunken: grayscaleValueOf(options.light.neutral, "1"),
          disabled: grayscaleValueOf(options.light.neutral, "5"),
          tooltip: darkGrayscaleValueOf(options.light.neutral, "3"),

          neutral: {
            subtle: {
              DEFAULT: grayscaleValueOf(options.light.neutral, "3"),
              hover: grayscaleValueOf(options.light.neutral, "4"),
              active: grayscaleValueOf(options.light.neutral, "5"),
            },
          },

          ...(["primary", "success", "info", "warning", "danger", "discovery"] as const).reduce(
            (acc, color) => {
              acc[color] = {
                DEFAULT: colorValueOf(options.light[color], "600", "400"),
                hover: colorValueOf(options.light[color], "700", "500"),
                active: colorValueOf(options.light[color], "800", "600"),
                subtle: {
                  DEFAULT: colorValueOf(options.light[color], "100"),
                  hover: colorValueOf(options.light[color], "200"),
                  active: colorValueOf(options.light[color], "300"),
                },
              };

              return acc;
            },
            {} as any
          ),
        },

        line: {
          DEFAULT: grayscaleValueOf(options.light.neutral, "7"),
          subtle: grayscaleValueOf(options.light.neutral, "6"),
          disabled: grayscaleValueOf(options.light.neutral, "5"),
          primary: colorValueOf(options.light.primary, "500"),
          success: colorValueOf(options.light.success, "500"),
          info: colorValueOf(options.light.info, "500"),
          warning: colorValueOf(options.light.warning, "500"),
          danger: colorValueOf(options.light.danger, "500"),
          discovery: colorValueOf(options.light.discovery, "500"),
        },

        ring: colorValueOf(options.light.primary, "500"),
      },
    },
    dark: {
      colors: {
        content: {
          DEFAULT: darkGrayscaleValueOf(options.dark.neutral, "12"),
          subtle: darkGrayscaleValueOf(options.dark.neutral, "11"),
          subtler: darkGrayscaleValueOf(options.dark.neutral, "10"),
          subtlest: darkGrayscaleValueOf(options.dark.neutral, "9"),
          disabled: darkGrayscaleValueOf(options.dark.neutral, "8"),
          link: {
            DEFAULT: colorValueOf(options.dark.primary, "400"),
            hover: colorValueOf(options.dark.primary, "300"),
            active: colorValueOf(options.dark.primary, "200"),
          },

          primary: colorValueOf(options.dark.primary, "400"),
          success: colorValueOf(options.dark.success, "400"),
          info: colorValueOf(options.dark.info, "400"),
          warning: colorValueOf(options.dark.warning, "400"),
          danger: colorValueOf(options.dark.danger, "400"),
          discovery: colorValueOf(options.dark.discovery, "400"),

          onPrimary: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.primary], "2"),
          onSuccess: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.success], "2"),
          onInfo: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.info], "2"),
          onWarning: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.warning], "2"),
          onDanger: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.danger], "2"),
          onDiscovery: darkGrayscaleValueOf(COLOR_GRAYSCALE_MAP[options.dark.discovery], "2"),

          onPrimarySubtle: colorValueOf(options.dark.primary, "200"),
          onSuccessSubtle: colorValueOf(options.dark.success, "200"),
          onInfoSubtle: colorValueOf(options.dark.info, "200"),
          onWarningSubtle: colorValueOf(options.dark.warning, "200"),
          onDangerSubtle: colorValueOf(options.dark.danger, "200"),
          onDiscoverySubtle: colorValueOf(options.dark.discovery, "200"),
        },

        surface: {
          DEFAULT: darkGrayscaleValueOf(options.dark.neutral, "2"),
          body: darkGrayscaleValueOf(options.dark.neutral, "2"),
          raised: darkGrayscaleValueOf(options.dark.neutral, "3"),
          overlay: darkGrayscaleValueOf(options.dark.neutral, "4"),
          sunken: darkGrayscaleValueOf(options.dark.neutral, "1"),
          disabled: darkGrayscaleValueOf(options.dark.neutral, "5"),
          tooltip: grayscaleValueOf(options.dark.neutral, "1"),

          neutral: {
            subtle: {
              DEFAULT: darkGrayscaleValueOf(options.dark.neutral, "3"),
              hover: darkGrayscaleValueOf(options.dark.neutral, "4"),
              active: darkGrayscaleValueOf(options.dark.neutral, "5"),
            },
          },

          ...(["primary", "success", "info", "warning", "danger", "discovery"] as const).reduce(
            (acc, color) => {
              acc[color] = {
                DEFAULT: colorValueOf(options.dark[color], "400"),
                hover: colorValueOf(options.dark[color], "300"),
                active: colorValueOf(options.dark[color], "200"),
                subtle: {
                  DEFAULT: colorValueOf(options.dark[color], "900"),
                  hover: colorValueOf(options.dark[color], "800"),
                  active: colorValueOf(options.dark[color], "700"),
                },
              };

              return acc;
            },
            {} as any
          ),
        },

        line: {
          DEFAULT: darkGrayscaleValueOf(options.dark.neutral, "7"),
          subtle: darkGrayscaleValueOf(options.dark.neutral, "6"),
          disabled: darkGrayscaleValueOf(options.dark.neutral, "5"),
          primary: colorValueOf(options.dark.primary, "500"),
          success: colorValueOf(options.dark.success, "500"),
          info: colorValueOf(options.dark.info, "500"),
          warning: colorValueOf(options.dark.warning, "500"),
          danger: colorValueOf(options.dark.danger, "500"),
          discovery: colorValueOf(options.dark.discovery, "500"),
        },

        ring: colorValueOf(options.dark.primary, "500"),
      },
    },
  };
}

/** Create a theme with the same light and dark palette, based on Pigment color palettes. */
export function createSimpleTheme(colors: SemanticColors) {
  return createTheme({
    light: {
      ...colors,
    },
    dark: {
      ...colors,
    },
  });
}

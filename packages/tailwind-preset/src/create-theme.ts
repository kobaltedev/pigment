/* -----------------------------------------------------------------------------------------------------------------------------------
 * NOTE ABOUT COLORS:
 * We use @radix/colors for the `neutral` palette because it offers more possibilities than Tailwind's grays, specially in dark mode.
 * We use customized Tailwind colors for `statuses` palettes because contrast is better than Radix's steps 9 and 10.
 * ----------------------------------------------------------------------------------------------------------------------------------*/

import {
  BRIGHT_COLOR_NAMES,
  BrightColor,
  Color,
  colors,
  ColorStep,
  DARK_COLOR_NAMES,
  DarkColor,
} from "./colors";
import { Grayscale, grayscales, GrayscaleStep } from "./grayscales";
import { Theme } from "./types";

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
  name: string;
  lightColors: SemanticColors;
  darkColors?: Partial<SemanticColors>;
}

const COLOR_TO_GRAYSCALE_MAP: Record<Color, Grayscale> = {
  gray: "gray",
  mauve: "mauve",
  slate: "slate",
  sage: "sage",
  olive: "olive",
  sand: "sand",
  maroon: "mauve",
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

function isDarkColor(color: Color): color is DarkColor {
  return DARK_COLOR_NAMES.includes(color as any);
}

function isBrightColor(color: Color): color is BrightColor {
  return BRIGHT_COLOR_NAMES.includes(color as any);
}

function colorValueOf(
  color: Color,
  step: ColorStep,
  brightStep: ColorStep = step,
  darkStep: ColorStep = step
): string {
  if (isBrightColor(color)) {
    return colors[color][brightStep];
  }

  if (isDarkColor(color)) {
    return colors[color][darkStep];
  }

  return colors[color][step];
}

function inverseGrayscaleValueOf(
  color: Color,
  darkGrayscaleStepOnBrightColor: GrayscaleStep,
  fallback: string
): string {
  if (isBrightColor(color)) {
    return darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[color], darkGrayscaleStepOnBrightColor);
  }

  return fallback;
}

function grayscaleValueOf(grayscale: Grayscale, step: GrayscaleStep): string {
  return grayscales[grayscale][step];
}

function darkGrayscaleValueOf(grayscale: Grayscale, step: GrayscaleStep): string {
  return grayscales[`${grayscale}Dark`][step];
}

const white = "#ffffff";

/** Create a theme based on Pigment color palettes. */
export function createTheme(options: CreateThemeOptions): Theme {
  const { name, lightColors } = options;

  const darkColors: SemanticColors = {
    neutral: options.darkColors?.neutral ?? lightColors.neutral,
    primary: options.darkColors?.primary ?? lightColors.primary,
    success: options.darkColors?.success ?? lightColors.success,
    info: options.darkColors?.info ?? lightColors.info,
    warning: options.darkColors?.warning ?? lightColors.warning,
    danger: options.darkColors?.danger ?? lightColors.danger,
    discovery: options.darkColors?.discovery ?? lightColors.discovery,
  };

  return {
    name,
    tokens: {
      light: {
        colors: {
          content: {
            DEFAULT: grayscaleValueOf(lightColors.neutral, "12"),
            subtle: grayscaleValueOf(lightColors.neutral, "11"),
            subtler: grayscaleValueOf(lightColors.neutral, "10"),
            subtlest: grayscaleValueOf(lightColors.neutral, "9"),
            disabled: grayscaleValueOf(lightColors.neutral, "8"),

            link: {
              DEFAULT: colorValueOf(lightColors.primary, "700", "700", "800"),
              hover: colorValueOf(lightColors.primary, "700", "700", "800"),
              active: colorValueOf(lightColors.primary, "800", "800", "900"),
            },

            primary: colorValueOf(lightColors.primary, "700", "700", "800"),
            success: colorValueOf(lightColors.success, "700", "700", "800"),
            info: colorValueOf(lightColors.info, "700", "700", "800"),
            warning: colorValueOf(lightColors.warning, "700", "700", "800"),
            danger: colorValueOf(lightColors.danger, "700", "700", "800"),
            discovery: colorValueOf(lightColors.discovery, "700", "700", "800"),

            onPrimary: inverseGrayscaleValueOf(lightColors.primary, "2", white),
            onSuccess: inverseGrayscaleValueOf(lightColors.success, "2", white),
            onInfo: inverseGrayscaleValueOf(lightColors.info, "2", white),
            onWarning: inverseGrayscaleValueOf(lightColors.warning, "2", white),
            onDanger: inverseGrayscaleValueOf(lightColors.danger, "2", white),
            onDiscovery: inverseGrayscaleValueOf(lightColors.discovery, "2", white),

            onPrimarySubtle: colorValueOf(lightColors.primary, "800"),
            onSuccessSubtle: colorValueOf(lightColors.success, "800"),
            onInfoSubtle: colorValueOf(lightColors.info, "800"),
            onWarningSubtle: colorValueOf(lightColors.warning, "800"),
            onDangerSubtle: colorValueOf(lightColors.danger, "800"),
            onDiscoverySubtle: colorValueOf(lightColors.discovery, "800"),
          },

          icon: {
            DEFAULT: grayscaleValueOf(lightColors.neutral, "11"),
            subtle: grayscaleValueOf(lightColors.neutral, "10"),
            subtler: grayscaleValueOf(lightColors.neutral, "9"),
            subtlest: grayscaleValueOf(lightColors.neutral, "8"),
            disabled: grayscaleValueOf(lightColors.neutral, "7"),

            primary: colorValueOf(lightColors.primary, "600", "600", "700"),
            success: colorValueOf(lightColors.success, "600", "600", "700"),
            info: colorValueOf(lightColors.info, "600", "600", "700"),
            warning: colorValueOf(lightColors.warning, "600", "600", "700"),
            danger: colorValueOf(lightColors.danger, "600", "600", "700"),
            discovery: colorValueOf(lightColors.discovery, "600", "600", "700"),
          },

          surface: {
            DEFAULT: white,
            body: white,
            raised: white,
            overlay: white,
            sunken: grayscaleValueOf(lightColors.neutral, "2"),
            disabled: grayscaleValueOf(lightColors.neutral, "5"),
            tooltip: darkGrayscaleValueOf(lightColors.neutral, "3"),

            neutral: {
              subtle: {
                DEFAULT: grayscaleValueOf(lightColors.neutral, "3"),
                hover: grayscaleValueOf(lightColors.neutral, "4"),
                active: grayscaleValueOf(lightColors.neutral, "5"),
              },
            },

            ...(["primary", "success", "info", "warning", "danger", "discovery"] as const).reduce(
              (acc, color) => {
                acc[color] = {
                  DEFAULT: colorValueOf(lightColors[color], "600", "400", "800"),
                  hover: colorValueOf(lightColors[color], "700", "500", "900"),
                  active: colorValueOf(lightColors[color], "800", "600", "950"),
                  subtle: {
                    DEFAULT: colorValueOf(lightColors[color], "100"),
                    hover: colorValueOf(lightColors[color], "200"),
                    active: colorValueOf(lightColors[color], "300"),
                  },
                };

                return acc;
              },
              {} as any
            ),
          },

          line: {
            DEFAULT: grayscaleValueOf(lightColors.neutral, "7"),
            subtle: grayscaleValueOf(lightColors.neutral, "6"),
            disabled: grayscaleValueOf(lightColors.neutral, "5"),
            primary: colorValueOf(lightColors.primary, "500", "500", "600"),
            success: colorValueOf(lightColors.success, "500", "500", "600"),
            info: colorValueOf(lightColors.info, "500", "500", "600"),
            warning: colorValueOf(lightColors.warning, "500", "500", "600"),
            danger: colorValueOf(lightColors.danger, "500", "500", "600"),
            discovery: colorValueOf(lightColors.discovery, "500", "500", "600"),
          },

          ring: colorValueOf(lightColors.primary, "500", "500", "600"),
        },
      },
      dark: {
        colors: {
          content: {
            DEFAULT: darkGrayscaleValueOf(darkColors.neutral, "12"),
            subtle: darkGrayscaleValueOf(darkColors.neutral, "11"),
            subtler: darkGrayscaleValueOf(darkColors.neutral, "10"),
            subtlest: darkGrayscaleValueOf(darkColors.neutral, "9"),
            disabled: darkGrayscaleValueOf(darkColors.neutral, "8"),

            link: {
              DEFAULT: colorValueOf(darkColors.primary, "400", "400", "200"),
              hover: colorValueOf(darkColors.primary, "400", "400", "200"),
              active: colorValueOf(darkColors.primary, "300", "300", "100"),
            },

            primary: colorValueOf(darkColors.primary, "400", "400", "200"),
            success: colorValueOf(darkColors.success, "400", "400", "200"),
            info: colorValueOf(darkColors.info, "400", "400", "200"),
            warning: colorValueOf(darkColors.warning, "400", "400", "200"),
            danger: colorValueOf(darkColors.danger, "400", "400", "200"),
            discovery: colorValueOf(darkColors.discovery, "400", "400", "200"),

            onPrimary: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.primary], "2"),
            onSuccess: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.success], "2"),
            onInfo: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.info], "2"),
            onWarning: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.warning], "2"),
            onDanger: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.danger], "2"),
            onDiscovery: darkGrayscaleValueOf(COLOR_TO_GRAYSCALE_MAP[darkColors.discovery], "2"),

            onPrimarySubtle: colorValueOf(darkColors.primary, "200"),
            onSuccessSubtle: colorValueOf(darkColors.success, "200"),
            onInfoSubtle: colorValueOf(darkColors.info, "200"),
            onWarningSubtle: colorValueOf(darkColors.warning, "200"),
            onDangerSubtle: colorValueOf(darkColors.danger, "200"),
            onDiscoverySubtle: colorValueOf(darkColors.discovery, "200"),
          },

          icon: {
            DEFAULT: darkGrayscaleValueOf(darkColors.neutral, "11"),
            subtle: darkGrayscaleValueOf(darkColors.neutral, "10"),
            subtler: darkGrayscaleValueOf(darkColors.neutral, "9"),
            subtlest: darkGrayscaleValueOf(darkColors.neutral, "8"),
            disabled: darkGrayscaleValueOf(darkColors.neutral, "7"),

            primary: colorValueOf(darkColors.primary, "500", "500", "300"),
            success: colorValueOf(darkColors.success, "500", "500", "300"),
            info: colorValueOf(darkColors.info, "500", "500", "300"),
            warning: colorValueOf(darkColors.warning, "500", "500", "300"),
            danger: colorValueOf(darkColors.danger, "500", "500", "300"),
            discovery: colorValueOf(darkColors.discovery, "500", "500", "300"),
          },

          surface: {
            DEFAULT: darkGrayscaleValueOf(darkColors.neutral, "2"),
            body: darkGrayscaleValueOf(darkColors.neutral, "2"),
            raised: darkGrayscaleValueOf(darkColors.neutral, "3"),
            overlay: darkGrayscaleValueOf(darkColors.neutral, "4"),
            sunken: darkGrayscaleValueOf(darkColors.neutral, "1"),
            disabled: darkGrayscaleValueOf(darkColors.neutral, "5"),
            tooltip: grayscaleValueOf(darkColors.neutral, "1"),

            neutral: {
              subtle: {
                DEFAULT: darkGrayscaleValueOf(darkColors.neutral, "3"),
                hover: darkGrayscaleValueOf(darkColors.neutral, "4"),
                active: darkGrayscaleValueOf(darkColors.neutral, "5"),
              },
            },

            ...(["primary", "success", "info", "warning", "danger", "discovery"] as const).reduce(
              (acc, color) => {
                acc[color] = {
                  DEFAULT: colorValueOf(darkColors[color], "400", "400", "200"),
                  hover: colorValueOf(darkColors[color], "300", "300", "100"),
                  active: colorValueOf(darkColors[color], "200", "200", "50"),
                  subtle: {
                    DEFAULT: colorValueOf(darkColors[color], "900"),
                    hover: colorValueOf(darkColors[color], "800"),
                    active: colorValueOf(darkColors[color], "700"),
                  },
                };

                return acc;
              },
              {} as any
            ),
          },

          line: {
            DEFAULT: darkGrayscaleValueOf(darkColors.neutral, "7"),
            subtle: darkGrayscaleValueOf(darkColors.neutral, "6"),
            disabled: darkGrayscaleValueOf(darkColors.neutral, "5"),
            primary: colorValueOf(darkColors.primary, "500", "500", "400"),
            success: colorValueOf(darkColors.success, "500", "500", "400"),
            info: colorValueOf(darkColors.info, "500", "500", "400"),
            warning: colorValueOf(darkColors.warning, "500", "500", "400"),
            danger: colorValueOf(darkColors.danger, "500", "500", "400"),
            discovery: colorValueOf(darkColors.discovery, "500", "500", "400"),
          },

          ring: colorValueOf(darkColors.primary, "500", "500", "400"),
        },
      },
    },
  };
}

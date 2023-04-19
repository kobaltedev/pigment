import twDefaultTheme from "tailwindcss/defaultTheme";

import { PIGMENT_COLORS } from "../colors";
import { Theme, VarsFn } from "../types";

/** Pigment base/default theme. */
export function getBaseTheme(vars: VarsFn): Theme {
  return {
    common: {
      typography: {
        fontFamily: {
          fallback: twDefaultTheme.fontFamily.sans.join(", "),
          body: vars("typography.fontFamily.fallback"),
          display: vars("typography.fontFamily.body"),
          code: twDefaultTheme.fontFamily.mono.join(", "),
        },
      },
    },
    light: {
      colors: {
        neutral: PIGMENT_COLORS.slate,
        primary: PIGMENT_COLORS.slate,
        accent: PIGMENT_COLORS.slate,
        success: PIGMENT_COLORS.green,
        info: PIGMENT_COLORS.blue,
        warning: PIGMENT_COLORS.amber,
        danger: PIGMENT_COLORS.red,

        ring: vars("colors.accent.500"),
        tooltip: vars("colors.neutral.900"),
        backdrop: vars("colors.neutral.950"),

        content: {
          DEFAULT: vars("colors.neutral.900"),
          subtle: vars("colors.neutral.700"),
          subtler: vars("colors.neutral.600"),
          subtlest: vars("colors.neutral.500"),
          disabled: vars("colors.neutral.200"),
          inverse: PIGMENT_COLORS.white,
          warningInverse: PIGMENT_COLORS.sand["900"],
          primary: vars("colors.primary.600"),
          accent: vars("colors.accent.600"),
          success: vars("colors.success.600"),
          info: vars("colors.info.600"),
          warning: vars("colors.warning.800"),
          danger: vars("colors.danger.600"),
        },

        surface: {
          body: PIGMENT_COLORS.white,

          DEFAULT: PIGMENT_COLORS.white,
          hover: vars("colors.neutral.100"),
          active: vars("colors.neutral.200"),
          disabled: vars("colors.neutral.50"),

          raised: PIGMENT_COLORS.white,
          raisedHover: vars("colors.neutral.100"),
          raisedActive: vars("colors.neutral.200"),

          overlay: PIGMENT_COLORS.white,
          overlayHover: vars("colors.neutral.100"),
          overlayActive: vars("colors.neutral.200"),

          sunken: vars("colors.neutral.50"),

          highlightedHover: vars("colors.neutral.100"),
          highlightedActive: vars("colors.neutral.200"),
        },

        line: {
          DEFAULT: vars("colors.neutral.300"),
          disabled: vars("colors.neutral.100"),
        },

        solid: {
          neutral: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.neutral.800"),
            surfaceHover: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.900"),
          },
          primary: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.primary.800"),
            surfaceHover: vars("colors.primary.900"),
            surfaceActive: vars("colors.primary.900"),
          },
          accent: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.accent.800"),
            surfaceHover: vars("colors.accent.900"),
            surfaceActive: vars("colors.accent.900"),
          },
          success: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.success.600"),
            surfaceHover: vars("colors.success.700"),
            surfaceActive: vars("colors.success.700"),
          },
          info: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.info.600"),
            surfaceHover: vars("colors.info.700"),
            surfaceActive: vars("colors.info.700"),
          },
          warning: {
            content: PIGMENT_COLORS.sand["900"],
            surface: vars("colors.warning.400"),
            surfaceHover: vars("colors.warning.500"),
            surfaceActive: vars("colors.warning.500"),
          },
          danger: {
            content: PIGMENT_COLORS.white,
            surface: vars("colors.danger.600"),
            surfaceHover: vars("colors.danger.700"),
            surfaceActive: vars("colors.danger.700"),
          },
        },

        soft: {
          neutral: {
            content: vars("colors.neutral.900"),
            surface: vars("colors.neutral.100"),
            surfaceHover: vars("colors.neutral.200"),
            surfaceActive: vars("colors.neutral.200"),
          },
          primary: {
            content: vars("colors.primary.900"),
            surface: vars("colors.primary.100"),
            surfaceHover: vars("colors.primary.200"),
            surfaceActive: vars("colors.primary.200"),
          },
          accent: {
            content: vars("colors.accent.900"),
            surface: vars("colors.accent.100"),
            surfaceHover: vars("colors.accent.200"),
            surfaceActive: vars("colors.accent.200"),
          },
          success: {
            content: vars("colors.success.900"),
            surface: vars("colors.success.100"),
            surfaceHover: vars("colors.success.200"),
            surfaceActive: vars("colors.success.200"),
          },
          info: {
            content: vars("colors.info.900"),
            surface: vars("colors.info.100"),
            surfaceHover: vars("colors.info.200"),
            surfaceActive: vars("colors.info.200"),
          },
          warning: {
            content: PIGMENT_COLORS.sand["900"],
            surface: vars("colors.warning.100"),
            surfaceHover: vars("colors.warning.200"),
            surfaceActive: vars("colors.warning.200"),
          },
          danger: {
            content: vars("colors.danger.900"),
            surface: vars("colors.danger.100"),
            surfaceHover: vars("colors.danger.200"),
            surfaceActive: vars("colors.danger.200"),
          },
        },

        outlined: {
          neutral: {
            content: vars("colors.neutral.900"),
            line: vars("colors.neutral.600"),
            surfaceHover: vars("colors.neutral.50"),
            lineHover: vars("colors.neutral.600"),
            surfaceActive: vars("colors.neutral.50"),
            lineActive: vars("colors.neutral.600"),
          },
          primary: {
            content: vars("colors.primary.900"),
            line: vars("colors.primary.600"),
            surfaceHover: vars("colors.primary.50"),
            lineHover: vars("colors.primary.600"),
            surfaceActive: vars("colors.primary.50"),
            lineActive: vars("colors.primary.600"),
          },
          accent: {
            content: vars("colors.accent.900"),
            line: vars("colors.accent.600"),
            surfaceHover: vars("colors.accent.50"),
            lineHover: vars("colors.accent.600"),
            surfaceActive: vars("colors.accent.50"),
            lineActive: vars("colors.accent.600"),
          },
          success: {
            content: vars("colors.success.900"),
            line: vars("colors.success.600"),
            surfaceHover: vars("colors.success.50"),
            lineHover: vars("colors.success.600"),
            surfaceActive: vars("colors.success.50"),
            lineActive: vars("colors.success.600"),
          },
          info: {
            content: vars("colors.info.900"),
            line: vars("colors.info.600"),
            surfaceHover: vars("colors.info.50"),
            lineHover: vars("colors.info.600"),
            surfaceActive: vars("colors.info.50"),
            lineActive: vars("colors.info.600"),
          },
          warning: {
            content: PIGMENT_COLORS.sand["900"],
            line: vars("colors.warning.600"),
            surfaceHover: vars("colors.warning.50"),
            lineHover: vars("colors.warning.600"),
            surfaceActive: vars("colors.warning.50"),
            lineActive: vars("colors.warning.600"),
          },
          danger: {
            content: vars("colors.danger.900"),
            line: vars("colors.danger.600"),
            surfaceHover: vars("colors.danger.50"),
            lineHover: vars("colors.danger.600"),
            surfaceActive: vars("colors.danger.50"),
            lineActive: vars("colors.danger.600"),
          },
        },

        ghost: {
          neutral: {
            content: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.50"),
            surfaceActive: vars("colors.neutral.50"),
          },
          primary: {
            content: vars("colors.primary.900"),
            surfaceHover: vars("colors.primary.50"),
            surfaceActive: vars("colors.primary.50"),
          },
          accent: {
            content: vars("colors.accent.900"),
            surfaceHover: vars("colors.accent.50"),
            surfaceActive: vars("colors.accent.50"),
          },
          success: {
            content: vars("colors.success.900"),
            surfaceHover: vars("colors.success.50"),
            surfaceActive: vars("colors.success.50"),
          },
          info: {
            content: vars("colors.info.900"),
            surfaceHover: vars("colors.info.50"),
            surfaceActive: vars("colors.info.50"),
          },
          warning: {
            content: PIGMENT_COLORS.sand["900"],
            surfaceHover: vars("colors.warning.50"),
            surfaceActive: vars("colors.warning.50"),
          },
          danger: {
            content: vars("colors.danger.900"),
            surfaceHover: vars("colors.danger.50"),
            surfaceActive: vars("colors.danger.50"),
          },
        },
      },
      shadows: {
        raised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        overlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    dark: {
      colors: {},
      shadows: {
        raised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        overlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}

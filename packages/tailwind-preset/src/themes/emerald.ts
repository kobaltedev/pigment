import twDefaultTheme from "tailwindcss/defaultTheme";

import { PIGMENT_COLORS } from "../colors";
import { ThemeTokens, VarsFn } from "../types";

export function getEmeraldThemeTokens(vars: VarsFn): ThemeTokens {
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
        neutral: {
          ...PIGMENT_COLORS.sage,
        },
        primary: {
          ...PIGMENT_COLORS.emerald,
        },
        success: {
          ...PIGMENT_COLORS.lime,
        },
        info: {
          ...PIGMENT_COLORS.blue,
        },
        warning: {
          ...PIGMENT_COLORS.amber,
        },
        danger: {
          ...PIGMENT_COLORS.red,
        },

        ring: vars("colors.primary.500"),
        line: vars("colors.neutral.300"),
        tooltip: vars("colors.neutral.900"),
        backdrop: vars("colors.neutral.950"),

        content: {
          DEFAULT: vars("colors.neutral.900"),
          subtle: vars("colors.neutral.700"),
          subtler: vars("colors.neutral.600"),
          subtlest: vars("colors.neutral.500"),
          inverse: PIGMENT_COLORS.white,
          warningInverse: PIGMENT_COLORS.sand["900"],
          primary: vars("colors.primary.600"),
          success: vars("colors.success.700"),
          info: vars("colors.info.600"),
          warning: vars("colors.warning.700"),
          danger: vars("colors.danger.600"),
        },

        surface: {
          DEFAULT: PIGMENT_COLORS.white,
          body: PIGMENT_COLORS.white,
          raised: PIGMENT_COLORS.white,
          overlay: PIGMENT_COLORS.white,
          sunken: vars("colors.neutral.50"),
        },

        solid: {
          neutral: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.neutral.800"),
            line: vars("colors.neutral.800"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.neutral.900"),
            lineHover: vars("colors.neutral.900"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.neutral.900"),
            lineActive: vars("colors.neutral.900"),
          },
          primary: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.primary.600"),
            line: vars("colors.primary.600"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.primary.700"),
            lineHover: vars("colors.primary.700"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.primary.700"),
            lineActive: vars("colors.primary.700"),
          },
          success: {
            content: PIGMENT_COLORS.olive["900"],
            surface: vars("colors.success.400"),
            line: vars("colors.success.400"),

            contentHover: PIGMENT_COLORS.olive["900"],
            surfaceHover: vars("colors.success.500"),
            lineHover: vars("colors.success.500"),

            contentActive: PIGMENT_COLORS.olive["900"],
            surfaceActive: vars("colors.success.500"),
            lineActive: vars("colors.success.500"),
          },
          info: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.info.600"),
            line: vars("colors.info.600"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.info.700"),
            lineHover: vars("colors.info.700"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.info.700"),
            lineActive: vars("colors.info.700"),
          },
          warning: {
            content: vars("colors.content.warningInverse"),
            surface: vars("colors.warning.400"),
            line: vars("colors.warning.400"),

            contentHover: vars("colors.content.warningInverse"),
            surfaceHover: vars("colors.warning.500"),
            lineHover: vars("colors.warning.500"),

            contentActive: vars("colors.content.warningInverse"),
            surfaceActive: vars("colors.warning.500"),
            lineActive: vars("colors.warning.500"),
          },
          danger: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.danger.600"),
            line: vars("colors.danger.600"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.danger.700"),
            lineHover: vars("colors.danger.700"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.danger.700"),
            lineActive: vars("colors.danger.700"),
          },
        },

        soft: {
          neutral: {
            content: vars("colors.neutral.900"),
            surface: vars("colors.neutral.100"),
            line: vars("colors.neutral.100"),

            contentHover: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.200"),
            lineHover: vars("colors.neutral.200"),

            contentActive: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.200"),
            lineActive: vars("colors.neutral.200"),
          },
          primary: {
            content: vars("colors.primary.900"),
            surface: vars("colors.primary.100"),
            line: vars("colors.primary.100"),

            contentHover: vars("colors.primary.900"),
            surfaceHover: vars("colors.primary.200"),
            lineHover: vars("colors.primary.200"),

            contentActive: vars("colors.primary.900"),
            surfaceActive: vars("colors.primary.200"),
            lineActive: vars("colors.primary.200"),
          },
          success: {
            content: vars("colors.success.900"),
            surface: vars("colors.success.100"),
            line: vars("colors.success.100"),

            contentHover: vars("colors.success.900"),
            surfaceHover: vars("colors.success.200"),
            lineHover: vars("colors.success.200"),

            contentActive: vars("colors.success.900"),
            surfaceActive: vars("colors.success.200"),
            lineActive: vars("colors.success.200"),
          },
          info: {
            content: vars("colors.info.900"),
            surface: vars("colors.info.100"),
            line: vars("colors.info.100"),

            contentHover: vars("colors.info.900"),
            surfaceHover: vars("colors.info.200"),
            lineHover: vars("colors.info.200"),

            contentActive: vars("colors.info.900"),
            surfaceActive: vars("colors.info.200"),
            lineActive: vars("colors.info.200"),
          },
          warning: {
            content: vars("colors.warning.900"),
            surface: vars("colors.warning.100"),
            line: vars("colors.warning.100"),

            contentHover: vars("colors.warning.900"),
            surfaceHover: vars("colors.warning.200"),
            lineHover: vars("colors.warning.200"),

            contentActive: vars("colors.warning.900"),
            surfaceActive: vars("colors.warning.200"),
            lineActive: vars("colors.warning.200"),
          },
          danger: {
            content: vars("colors.danger.900"),
            surface: vars("colors.danger.100"),
            line: vars("colors.danger.100"),

            contentHover: vars("colors.danger.900"),
            surfaceHover: vars("colors.danger.200"),
            lineHover: vars("colors.danger.200"),

            contentActive: vars("colors.danger.900"),
            surfaceActive: vars("colors.danger.200"),
            lineActive: vars("colors.danger.200"),
          },
        },

        outlined: {
          neutral: {
            content: vars("colors.neutral.900"),
            line: vars("colors.neutral.600"),

            contentHover: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.50"),
            lineHover: vars("colors.neutral.600"),

            contentActive: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.50"),
            lineActive: vars("colors.neutral.600"),
          },
          primary: {
            content: vars("colors.primary.700"),
            line: vars("colors.primary.600"),

            contentHover: vars("colors.primary.700"),
            surfaceHover: vars("colors.primary.50"),
            lineHover: vars("colors.primary.600"),

            contentActive: vars("colors.primary.700"),
            surfaceActive: vars("colors.primary.50"),
            lineActive: vars("colors.primary.600"),
          },
          success: {
            content: vars("colors.success.700"),
            line: vars("colors.success.600"),

            contentHover: vars("colors.success.700"),
            surfaceHover: vars("colors.success.50"),
            lineHover: vars("colors.success.600"),

            contentActive: vars("colors.success.700"),
            surfaceActive: vars("colors.success.50"),
            lineActive: vars("colors.success.600"),
          },
          info: {
            content: vars("colors.info.700"),
            line: vars("colors.info.600"),

            contentHover: vars("colors.info.700"),
            surfaceHover: vars("colors.info.50"),
            lineHover: vars("colors.info.600"),

            contentActive: vars("colors.info.700"),
            surfaceActive: vars("colors.info.50"),
            lineActive: vars("colors.info.600"),
          },
          warning: {
            content: vars("colors.warning.700"),
            line: vars("colors.warning.600"),

            contentHover: vars("colors.warning.700"),
            surfaceHover: vars("colors.warning.50"),
            lineHover: vars("colors.warning.600"),

            contentActive: vars("colors.warning.700"),
            surfaceActive: vars("colors.warning.50"),
            lineActive: vars("colors.warning.600"),
          },
          danger: {
            content: vars("colors.danger.700"),
            line: vars("colors.danger.600"),

            contentHover: vars("colors.danger.700"),
            surfaceHover: vars("colors.danger.50"),
            lineHover: vars("colors.danger.600"),

            contentActive: vars("colors.danger.700"),
            surfaceActive: vars("colors.danger.50"),
            lineActive: vars("colors.danger.600"),
          },
        },

        ghost: {
          neutral: {
            content: vars("colors.neutral.900"),

            contentHover: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.50"),
            lineHover: vars("colors.neutral.50"),

            contentActive: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.50"),
            lineActive: vars("colors.neutral.50"),
          },
          primary: {
            content: vars("colors.primary.700"),

            contentHover: vars("colors.primary.700"),
            surfaceHover: vars("colors.primary.50"),
            lineHover: vars("colors.primary.50"),

            contentActive: vars("colors.primary.700"),
            surfaceActive: vars("colors.primary.50"),
            lineActive: vars("colors.primary.50"),
          },
          success: {
            content: vars("colors.success.700"),

            contentHover: vars("colors.success.700"),
            surfaceHover: vars("colors.success.50"),
            lineHover: vars("colors.success.50"),

            contentActive: vars("colors.success.700"),
            surfaceActive: vars("colors.success.50"),
            lineActive: vars("colors.success.50"),
          },
          info: {
            content: vars("colors.info.700"),

            contentHover: vars("colors.info.700"),
            surfaceHover: vars("colors.info.50"),
            lineHover: vars("colors.info.50"),

            contentActive: vars("colors.info.700"),
            surfaceActive: vars("colors.info.50"),
            lineActive: vars("colors.info.50"),
          },
          warning: {
            content: vars("colors.warning.700"),

            contentHover: vars("colors.warning.700"),
            surfaceHover: vars("colors.warning.50"),
            lineHover: vars("colors.warning.50"),

            contentActive: vars("colors.warning.700"),
            surfaceActive: vars("colors.warning.50"),
            lineActive: vars("colors.warning.50"),
          },
          danger: {
            content: vars("colors.danger.700"),

            contentHover: vars("colors.danger.700"),
            surfaceHover: vars("colors.danger.50"),
            lineHover: vars("colors.danger.50"),

            contentActive: vars("colors.danger.700"),
            surfaceActive: vars("colors.danger.50"),
            lineActive: vars("colors.danger.50"),
          },
        },

        accent: {
          solid: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.primary.600"),
            line: vars("colors.primary.600"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.primary.700"),
            lineHover: vars("colors.primary.700"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.primary.700"),
            lineActive: vars("colors.primary.700"),
          },
          soft: {
            content: vars("colors.primary.900"),
            surface: vars("colors.primary.100"),
            line: vars("colors.primary.100"),

            contentHover: vars("colors.primary.900"),
            surfaceHover: vars("colors.primary.200"),
            lineHover: vars("colors.primary.200"),

            contentActive: vars("colors.primary.900"),
            surfaceActive: vars("colors.primary.200"),
            lineActive: vars("colors.primary.200"),
          },
        },

        input: {
          soft: {
            content: vars("colors.neutral.900"),
            surface: vars("colors.neutral.200"),
            line: vars("colors.neutral.200"),

            contentHover: vars("colors.neutral.900"),
            surfaceHover: vars("colors.neutral.200"),
            lineHover: vars("colors.neutral.200"),

            contentActive: vars("colors.neutral.900"),
            surfaceActive: vars("colors.neutral.200"),
            lineActive: vars("colors.neutral.200"),
          },
          outlined: {
            content: vars("colors.neutral.900"),

            line: vars("colors.neutral.300"),
            lineHover: vars("colors.neutral.300"),
            lineActive: vars("colors.neutral.300"),
          },
        },
      },
      shadows: {
        raised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        overlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    dark: {
      colors: {
        ring: vars("colors.primary.500"),
        line: vars("colors.neutral.700"),
        tooltip: vars("colors.neutral.50"),
        backdrop: vars("colors.neutral.100"),

        content: {
          DEFAULT: vars("colors.neutral.100"),
          subtle: vars("colors.neutral.300"),
          subtler: vars("colors.neutral.400"),
          subtlest: vars("colors.neutral.500"),
          inverse: vars("colors.neutral.950"),
          warningInverse: PIGMENT_COLORS.sand["900"],
          primary: vars("colors.primary.500"),
          success: vars("colors.success.500"),
          info: vars("colors.info.500"),
          warning: vars("colors.warning.500"),
          danger: vars("colors.danger.500"),
        },

        surface: {
          DEFAULT: vars("colors.neutral.950"),
          body: vars("colors.neutral.950"),
          raised: vars("colors.neutral.900"),
          overlay: vars("colors.neutral.900"),
          sunken: vars("colors.neutral.900"),
        },

        solid: {
          neutral: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.neutral.200"),
            line: vars("colors.neutral.200"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.neutral.100"),
            lineHover: vars("colors.neutral.100"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.neutral.100"),
            lineActive: vars("colors.neutral.100"),
          },
          primary: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.primary.400"),
            line: vars("colors.primary.400"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.primary.300"),
            lineHover: vars("colors.primary.300"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.primary.300"),
            lineActive: vars("colors.primary.300"),
          },
          success: {
            content: PIGMENT_COLORS.olive["900"],
            surface: vars("colors.success.600"),
            line: vars("colors.success.600"),

            contentHover: PIGMENT_COLORS.olive["900"],
            surfaceHover: vars("colors.success.500"),
            lineHover: vars("colors.success.500"),

            contentActive: PIGMENT_COLORS.olive["900"],
            surfaceActive: vars("colors.success.500"),
            lineActive: vars("colors.success.500"),
          },
          info: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.info.400"),
            line: vars("colors.info.400"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.info.300"),
            lineHover: vars("colors.info.300"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.info.300"),
            lineActive: vars("colors.info.300"),
          },
          warning: {
            content: vars("colors.content.warningInverse"),
            surface: vars("colors.warning.600"),
            line: vars("colors.warning.600"),

            contentHover: vars("colors.content.warningInverse"),
            surfaceHover: vars("colors.warning.500"),
            lineHover: vars("colors.warning.500"),

            contentActive: vars("colors.content.warningInverse"),
            surfaceActive: vars("colors.warning.500"),
            lineActive: vars("colors.warning.500"),
          },
          danger: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.danger.400"),
            line: vars("colors.danger.400"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.danger.300"),
            lineHover: vars("colors.danger.300"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.danger.300"),
            lineActive: vars("colors.danger.300"),
          },
        },

        soft: {
          neutral: {
            content: vars("colors.neutral.100"),
            surface: vars("colors.neutral.900"),
            line: vars("colors.neutral.900"),

            contentHover: vars("colors.neutral.100"),
            surfaceHover: vars("colors.neutral.800"),
            lineHover: vars("colors.neutral.800"),

            contentActive: vars("colors.neutral.100"),
            surfaceActive: vars("colors.neutral.800"),
            lineActive: vars("colors.neutral.800"),
          },
          primary: {
            content: vars("colors.primary.100"),
            surface: vars("colors.primary.900"),
            line: vars("colors.primary.900"),

            contentHover: vars("colors.primary.100"),
            surfaceHover: vars("colors.primary.800"),
            lineHover: vars("colors.primary.800"),

            contentActive: vars("colors.primary.100"),
            surfaceActive: vars("colors.primary.800"),
            lineActive: vars("colors.primary.800"),
          },
          success: {
            content: vars("colors.success.100"),
            surface: vars("colors.success.900"),
            line: vars("colors.success.900"),

            contentHover: vars("colors.success.100"),
            surfaceHover: vars("colors.success.800"),
            lineHover: vars("colors.success.800"),

            contentActive: vars("colors.success.100"),
            surfaceActive: vars("colors.success.800"),
            lineActive: vars("colors.success.800"),
          },
          info: {
            content: vars("colors.info.100"),
            surface: vars("colors.info.900"),
            line: vars("colors.info.900"),

            contentHover: vars("colors.info.100"),
            surfaceHover: vars("colors.info.800"),
            lineHover: vars("colors.info.800"),

            contentActive: vars("colors.info.100"),
            surfaceActive: vars("colors.info.800"),
            lineActive: vars("colors.info.800"),
          },
          warning: {
            content: vars("colors.warning.100"),
            surface: vars("colors.warning.900"),
            line: vars("colors.warning.900"),

            contentHover: vars("colors.warning.100"),
            surfaceHover: vars("colors.warning.800"),
            lineHover: vars("colors.warning.800"),

            contentActive: vars("colors.warning.100"),
            surfaceActive: vars("colors.warning.800"),
            lineActive: vars("colors.warning.800"),
          },
          danger: {
            content: vars("colors.danger.100"),
            surface: vars("colors.danger.900"),
            line: vars("colors.danger.900"),

            contentHover: vars("colors.danger.100"),
            surfaceHover: vars("colors.danger.800"),
            lineHover: vars("colors.danger.800"),

            contentActive: vars("colors.danger.100"),
            surfaceActive: vars("colors.danger.800"),
            lineActive: vars("colors.danger.800"),
          },
        },

        outlined: {
          neutral: {
            content: vars("colors.neutral.300"),
            line: vars("colors.neutral.600"),

            contentHover: vars("colors.neutral.300"),
            surfaceHover: vars("colors.neutral.800"),
            lineHover: vars("colors.neutral.600"),

            contentActive: vars("colors.neutral.300"),
            surfaceActive: vars("colors.neutral.800"),
            lineActive: vars("colors.neutral.600"),
          },
          primary: {
            content: vars("colors.primary.500"),
            line: vars("colors.primary.600"),

            contentHover: vars("colors.primary.500"),
            surfaceHover: vars("colors.primary.950"),
            lineHover: vars("colors.primary.600"),

            contentActive: vars("colors.primary.500"),
            surfaceActive: vars("colors.primary.950"),
            lineActive: vars("colors.primary.600"),
          },
          success: {
            content: vars("colors.success.500"),
            line: vars("colors.success.600"),

            contentHover: vars("colors.success.500"),
            surfaceHover: vars("colors.success.950"),
            lineHover: vars("colors.success.600"),

            contentActive: vars("colors.success.500"),
            surfaceActive: vars("colors.success.950"),
            lineActive: vars("colors.success.600"),
          },
          info: {
            content: vars("colors.info.500"),
            line: vars("colors.info.600"),

            contentHover: vars("colors.info.500"),
            surfaceHover: vars("colors.info.950"),
            lineHover: vars("colors.info.600"),

            contentActive: vars("colors.info.500"),
            surfaceActive: vars("colors.info.950"),
            lineActive: vars("colors.info.600"),
          },
          warning: {
            content: vars("colors.warning.500"),
            line: vars("colors.warning.600"),

            contentHover: vars("colors.warning.500"),
            surfaceHover: vars("colors.warning.950"),
            lineHover: vars("colors.warning.600"),

            contentActive: vars("colors.warning.500"),
            surfaceActive: vars("colors.warning.950"),
            lineActive: vars("colors.warning.600"),
          },
          danger: {
            content: vars("colors.danger.500"),
            line: vars("colors.danger.600"),

            contentHover: vars("colors.danger.500"),
            surfaceHover: vars("colors.danger.950"),
            lineHover: vars("colors.danger.600"),

            contentActive: vars("colors.danger.500"),
            surfaceActive: vars("colors.danger.950"),
            lineActive: vars("colors.danger.600"),
          },
        },

        ghost: {
          neutral: {
            content: vars("colors.neutral.300"),

            contentHover: vars("colors.neutral.300"),
            surfaceHover: vars("colors.neutral.800"),
            lineHover: vars("colors.neutral.800"),

            contentActive: vars("colors.neutral.300"),
            surfaceActive: vars("colors.neutral.800"),
            lineActive: vars("colors.neutral.800"),
          },
          primary: {
            content: vars("colors.primary.500"),

            contentHover: vars("colors.primary.500"),
            surfaceHover: vars("colors.primary.950"),
            lineHover: vars("colors.primary.950"),

            contentActive: vars("colors.primary.500"),
            surfaceActive: vars("colors.primary.950"),
            lineActive: vars("colors.primary.950"),
          },
          success: {
            content: vars("colors.success.500"),

            contentHover: vars("colors.success.500"),
            surfaceHover: vars("colors.success.950"),
            lineHover: vars("colors.success.950"),

            contentActive: vars("colors.success.500"),
            surfaceActive: vars("colors.success.950"),
            lineActive: vars("colors.success.950"),
          },
          info: {
            content: vars("colors.info.500"),

            contentHover: vars("colors.info.500"),
            surfaceHover: vars("colors.info.950"),
            lineHover: vars("colors.info.950"),

            contentActive: vars("colors.info.500"),
            surfaceActive: vars("colors.info.950"),
            lineActive: vars("colors.info.950"),
          },
          warning: {
            content: vars("colors.warning.500"),

            contentHover: vars("colors.warning.500"),
            surfaceHover: vars("colors.warning.950"),
            lineHover: vars("colors.warning.950"),

            contentActive: vars("colors.warning.500"),
            surfaceActive: vars("colors.warning.950"),
            lineActive: vars("colors.warning.950"),
          },
          danger: {
            content: vars("colors.danger.500"),

            contentHover: vars("colors.danger.500"),
            surfaceHover: vars("colors.danger.950"),
            lineHover: vars("colors.danger.950"),

            contentActive: vars("colors.danger.500"),
            surfaceActive: vars("colors.danger.950"),
            lineActive: vars("colors.danger.950"),
          },
        },

        accent: {
          solid: {
            content: vars("colors.content.inverse"),
            surface: vars("colors.primary.400"),
            line: vars("colors.primary.400"),

            contentHover: vars("colors.content.inverse"),
            surfaceHover: vars("colors.primary.300"),
            lineHover: vars("colors.primary.300"),

            contentActive: vars("colors.content.inverse"),
            surfaceActive: vars("colors.primary.300"),
            lineActive: vars("colors.primary.300"),
          },
          soft: {
            content: vars("colors.primary.100"),
            surface: vars("colors.primary.900"),
            line: vars("colors.primary.900"),

            contentHover: vars("colors.primary.100"),
            surfaceHover: vars("colors.primary.800"),
            lineHover: vars("colors.primary.800"),

            contentActive: vars("colors.primary.100"),
            surfaceActive: vars("colors.primary.800"),
            lineActive: vars("colors.primary.800"),
          },
        },

        input: {
          soft: {
            content: vars("colors.neutral.100"),
            surface: vars("colors.neutral.800"),
            line: vars("colors.neutral.800"),

            contentHover: vars("colors.neutral.100"),
            surfaceHover: vars("colors.neutral.800"),
            lineHover: vars("colors.neutral.800"),

            contentActive: vars("colors.neutral.100"),
            surfaceActive: vars("colors.neutral.800"),
            lineActive: vars("colors.neutral.800"),
          },
          outlined: {
            content: vars("colors.neutral.100"),

            line: vars("colors.neutral.800"),
            lineHover: vars("colors.neutral.800"),
            lineActive: vars("colors.neutral.800"),
          },
        },
      },
      shadows: {
        raised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        overlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}

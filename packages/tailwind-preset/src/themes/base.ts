import { colors } from "../colors";
import { createSimpleTheme, createTheme } from "../create-theme";
import { grayscales } from "../grayscales";
import { ThemeTokens } from "../types";

const white = "#ffffff";

/** Pigment default theme tokens. */
export const baseTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: grayscales.slate["12"],
        subtle: grayscales.slate["11"],
        subtler: grayscales.slate["10"],
        subtlest: grayscales.slate["9"],
        disabled: grayscales.slate["8"],
        link: {
          DEFAULT: grayscales.slateDark["3"],
          hover: grayscales.slateDark["2"],
          active: grayscales.slateDark["1"],
        },

        primary: grayscales.slateDark["3"],
        success: colors.green["700"],
        info: colors.blue["700"],
        warning: colors.amber["700"],
        danger: colors.red["700"],
        discovery: colors.violet["700"],

        onPrimary: white,
        onSuccess: white,
        onInfo: white,
        onWarning: grayscales.sandDark["2"],
        onDanger: white,
        onDiscovery: white,

        onPrimarySubtle: grayscales.slateDark["2"],
        onSuccessSubtle: colors.green["800"],
        onInfoSubtle: colors.blue["800"],
        onWarningSubtle: colors.amber["800"],
        onDangerSubtle: colors.red["800"],
        onDiscoverySubtle: colors.violet["800"],
      },

      surface: {
        DEFAULT: white,
        body: white,
        raised: white,
        overlay: white,
        sunken: grayscales.slate["1"],
        disabled: grayscales.slate["5"],
        tooltip: grayscales.slateDark["3"],

        neutral: {
          subtle: {
            DEFAULT: grayscales.slate["3"],
            hover: grayscales.slate["4"],
            active: grayscales.slate["5"],
          },
        },

        primary: {
          DEFAULT: grayscales.slateDark["3"],
          hover: grayscales.slateDark["2"],
          active: grayscales.slateDark["1"],
          subtle: {
            DEFAULT: grayscales.slate["3"],
            hover: grayscales.slate["4"],
            active: grayscales.slate["5"],
          },
        },
        success: {
          DEFAULT: colors.green["600"],
          hover: colors.green["700"],
          active: colors.green["800"],
          subtle: {
            DEFAULT: colors.green["100"],
            hover: colors.green["200"],
            active: colors.green["300"],
          },
        },
        info: {
          DEFAULT: colors.blue["600"],
          hover: colors.blue["700"],
          active: colors.blue["800"],
          subtle: {
            DEFAULT: colors.blue["100"],
            hover: colors.blue["200"],
            active: colors.blue["300"],
          },
        },
        warning: {
          DEFAULT: colors.amber["400"],
          hover: colors.amber["500"],
          active: colors.amber["600"],
          subtle: {
            DEFAULT: colors.amber["100"],
            hover: colors.amber["200"],
            active: colors.amber["300"],
          },
        },
        danger: {
          DEFAULT: colors.red["600"],
          hover: colors.red["700"],
          active: colors.red["800"],
          subtle: {
            DEFAULT: colors.red["100"],
            hover: colors.red["200"],
            active: colors.red["300"],
          },
        },
        discovery: {
          DEFAULT: colors.violet["600"],
          hover: colors.violet["700"],
          active: colors.violet["800"],
          subtle: {
            DEFAULT: colors.violet["100"],
            hover: colors.violet["200"],
            active: colors.violet["300"],
          },
        },
      },

      line: {
        DEFAULT: grayscales.slate["7"],
        subtle: grayscales.slate["6"],
        disabled: grayscales.slate["5"],
        primary: grayscales.slate["7"],
        success: colors.green["500"],
        info: colors.blue["500"],
        warning: colors.amber["500"],
        danger: colors.red["500"],
        discovery: colors.violet["500"],
      },

      ring: grayscales.slate["7"],
    },
  },
  dark: {
    colors: {
      content: {
        DEFAULT: grayscales.slateDark["12"],
        subtle: grayscales.slateDark["11"],
        subtler: grayscales.slateDark["10"],
        subtlest: grayscales.slateDark["9"],
        disabled: grayscales.slateDark["8"],
        link: {
          DEFAULT: colors.teal["400"],
          hover: colors.teal["300"],
          active: colors.teal["200"],
        },

        primary: colors.teal["400"],
        success: colors.green["400"],
        info: colors.blue["400"],
        warning: colors.amber["400"],
        danger: colors.red["400"],
        discovery: colors.violet["400"],

        onPrimary: grayscales.sageDark["2"],
        onSuccess: grayscales.sageDark["2"],
        onInfo: grayscales.slateDark["2"],
        onWarning: grayscales.sandDark["2"],
        onDanger: grayscales.mauveDark["2"],
        onDiscovery: grayscales.mauveDark["2"],

        onPrimarySubtle: colors.teal["200"],
        onSuccessSubtle: colors.green["200"],
        onInfoSubtle: colors.blue["200"],
        onWarningSubtle: colors.amber["200"],
        onDangerSubtle: colors.red["200"],
        onDiscoverySubtle: colors.violet["200"],
      },

      surface: {
        DEFAULT: grayscales.slateDark["2"],
        body: grayscales.slateDark["2"],
        raised: grayscales.slateDark["3"],
        overlay: grayscales.slateDark["4"],
        sunken: grayscales.slateDark["1"],
        disabled: grayscales.slateDark["5"],
        tooltip: grayscales.slate["1"],

        neutral: {
          subtle: {
            DEFAULT: grayscales.slateDark["3"],
            hover: grayscales.slateDark["4"],
            active: grayscales.slateDark["5"],
          },
        },

        primary: {
          DEFAULT: colors.teal["400"],
          hover: colors.teal["300"],
          active: colors.teal["200"],
          subtle: {
            DEFAULT: colors.teal["900"],
            hover: colors.teal["800"],
            active: colors.teal["700"],
          },
        },
        success: {
          DEFAULT: colors.green["400"],
          hover: colors.green["300"],
          active: colors.green["200"],
          subtle: {
            DEFAULT: colors.green["900"],
            hover: colors.green["800"],
            active: colors.green["700"],
          },
        },
        info: {
          DEFAULT: colors.blue["400"],
          hover: colors.blue["300"],
          active: colors.blue["200"],
          subtle: {
            DEFAULT: colors.blue["900"],
            hover: colors.blue["800"],
            active: colors.blue["700"],
          },
        },
        warning: {
          DEFAULT: colors.amber["400"],
          hover: colors.amber["300"],
          active: colors.amber["200"],
          subtle: {
            DEFAULT: colors.amber["900"],
            hover: colors.amber["800"],
            active: colors.amber["700"],
          },
        },
        danger: {
          DEFAULT: colors.red["400"],
          hover: colors.red["300"],
          active: colors.red["200"],
          subtle: {
            DEFAULT: colors.red["900"],
            hover: colors.red["800"],
            active: colors.red["700"],
          },
        },
        discovery: {
          DEFAULT: colors.violet["400"],
          hover: colors.violet["300"],
          active: colors.violet["200"],
          subtle: {
            DEFAULT: colors.violet["900"],
            hover: colors.violet["800"],
            active: colors.violet["700"],
          },
        },
      },

      line: {
        DEFAULT: grayscales.slateDark["7"],
        subtle: grayscales.slateDark["6"],
        disabled: grayscales.slateDark["5"],
        primary: colors.teal["500"],
        success: colors.green["500"],
        info: colors.blue["500"],
        warning: colors.amber["500"],
        danger: colors.red["500"],
        discovery: colors.violet["500"],
      },

      ring: colors.teal["500"],
    },
  },
};

import { colors } from "../colors";
import { ThemeTokens } from "../types";

/** Pigment default theme tokens. */
export const blueTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: colors.slate["900"],
        subtle: colors.slate["700"],
        subtler: colors.slate["600"],
        subtlest: colors.slate["500"],
        disabled: colors.slate["400"],
        link: {
          DEFAULT: colors.blue["600"],
          hover: colors.blue["700"],
          active: colors.blue["800"],
        },

        primary: colors.blue["600"],
        success: colors.green["600"],
        info: colors.blue["600"],
        warning: colors.amber["700"],
        danger: colors.red["600"],
        discovery: colors.violet["600"],

        onPrimary: colors.white,
        onNeutral: colors.white,
        onSuccess: colors.white,
        onInfo: colors.white,
        onWarning: colors.sand["900"],
        onDanger: colors.white,
        onDiscovery: colors.white,

        onPrimarySubtle: colors.blue["800"],
        onNeutralSubtle: colors.slate["800"],
        onSuccessSubtle: colors.green["800"],
        onInfoSubtle: colors.blue["800"],
        onWarningSubtle: colors.amber["800"],
        onDangerSubtle: colors.red["800"],
        onDiscoverySubtle: colors.violet["800"],
      },

      surface: {
        DEFAULT: colors.white,
        body: colors.white,
        overlay: colors.white,
        disabled: colors.slate["200"],
        tooltip: colors.slate["900"],

        subtle: {
          DEFAULT: colors.slate["50"],
          hover: colors.slate["100"],
          active: colors.slate["200"],
        },

        primary: {
          DEFAULT: colors.blue["600"],
          hover: colors.blue["700"],
          active: colors.blue["800"],
          subtle: {
            DEFAULT: colors.blue["100"],
            hover: colors.blue["200"],
            active: colors.blue["300"],
          },
        },
        neutral: {
          DEFAULT: colors.slate["600"],
          hover: colors.slate["700"],
          active: colors.slate["800"],
          subtle: {
            DEFAULT: colors.slate["100"],
            hover: colors.slate["200"],
            active: colors.slate["300"],
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
        DEFAULT: colors.slate["200"],
        disabled: colors.slate["200"],
        primary: colors.blue["500"],
        neutral: colors.slate["500"],
        success: colors.green["500"],
        info: colors.blue["500"],
        warning: colors.amber["500"],
        danger: colors.red["500"],
        discovery: colors.violet["500"],
      },

      ring: colors.blue["500"],
    },
  },
  dark: {
    colors: {
      content: {
        DEFAULT: colors.slate["100"],
        subtle: colors.slate["300"],
        subtler: colors.slate["400"],
        subtlest: colors.slate["500"],
        disabled: colors.slate["600"],
        link: {
          DEFAULT: colors.blue["400"],
          hover: colors.blue["300"],
          active: colors.blue["200"],
        },

        primary: colors.blue["400"],
        success: colors.green["400"],
        info: colors.blue["400"],
        warning: colors.amber["300"],
        danger: colors.red["400"],
        discovery: colors.violet["400"],

        onPrimary: colors.slate["950"],
        onNeutral: colors.slate["950"],
        onSuccess: colors.sage["950"],
        onInfo: colors.slate["950"],
        onWarning: colors.sand["950"],
        onDanger: colors.maroon["950"],
        onDiscovery: colors.mauve["950"],

        onPrimarySubtle: colors.blue["200"],
        onNeutralSubtle: colors.slate["200"],
        onSuccessSubtle: colors.green["200"],
        onInfoSubtle: colors.blue["200"],
        onWarningSubtle: colors.amber["200"],
        onDangerSubtle: colors.red["200"],
        onDiscoverySubtle: colors.violet["200"],
      },

      surface: {
        DEFAULT: colors.slate["950"],
        body: colors.slate["950"],
        overlay: colors.slate["900"],
        disabled: colors.slate["800"],
        tooltip: colors.slate["50"],

        subtle: {
          DEFAULT: colors.slate["900"],
          hover: colors.slate["800"],
          active: colors.slate["700"],
        },

        primary: {
          DEFAULT: colors.blue["400"],
          hover: colors.blue["300"],
          active: colors.blue["200"],
          subtle: {
            DEFAULT: colors.blue["900"],
            hover: colors.blue["800"],
            active: colors.blue["700"],
          },
        },
        neutral: {
          DEFAULT: colors.slate["400"],
          hover: colors.slate["300"],
          active: colors.slate["200"],
          subtle: {
            DEFAULT: colors.slate["900"],
            hover: colors.slate["800"],
            active: colors.slate["700"],
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
          DEFAULT: colors.amber["500"],
          hover: colors.amber["400"],
          active: colors.amber["300"],
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
        DEFAULT: colors.slate["800"],
        disabled: colors.slate["800"],
        primary: colors.blue["500"],
        neutral: colors.slate["500"],
        success: colors.green["500"],
        info: colors.blue["500"],
        warning: colors.amber["500"],
        danger: colors.red["500"],
        discovery: colors.violet["500"],
      },

      ring: colors.blue["500"],
    },
  },
};

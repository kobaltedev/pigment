import { colors } from "../colors";
import { ThemeTokens } from "../types";

/* -----------------------------------------------------------------------------------------------------------------------------------
 * NOTE ABOUT COLORS:
 * We use @radix/colors for the `neutral` palette because it offers more possibilities than Tailwind's grays, specially in dark mode.
 * We use Tailwind colors for `statuses` palettes because contrast is better than Radix's steps 9 and 10.
 * ---------------------------------------------------------------------------------------------------------------------------------*/

/** primary AND neutral color palette. */
const neutral = {
  // @radix/colors - slate
  light1: "#fbfcfd",
  light2: "#f8f9fa",
  light3: "#f1f3f5",
  light4: "#eceef0",
  light5: "#e6e8eb",
  light6: "#dfe3e6",
  light7: "#d7dbdf",
  light8: "#c1c8cd",
  light9: "#889096",
  light10: "#7e868c",
  light11: "#687076",
  light12: "#11181c",

  // @radix/colors - slateDark
  dark1: "#151718",
  dark2: "#1a1d1e",
  dark3: "#202425",
  dark4: "#26292b",
  dark5: "#2b2f31",
  dark6: "#313538",
  dark7: "#3a3f42",
  dark8: "#4c5155",
  dark9: "#697177",
  dark10: "#787f85",
  dark11: "#9ba1a6",
  dark12: "#ecedee",
};

/** Pigment default theme tokens. */
export const baseTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: neutral.light12,
        subtle: neutral.light11,
        subtler: neutral.light10,
        subtlest: neutral.light9,
        disabled: neutral.light8,
        link: {
          DEFAULT: neutral.dark3,
          hover: neutral.dark2,
          active: neutral.dark1,
        },

        primary: neutral.dark3,
        success: colors.green["700"],
        info: colors.blue["700"],
        warning: colors.amber["700"],
        danger: colors.red["700"],
        discovery: colors.violet["700"],

        onPrimary: colors.white,
        onSuccess: colors.white,
        onInfo: colors.white,
        onWarning: colors.sand["900"],
        onDanger: colors.white,
        onDiscovery: colors.white,

        onPrimarySubtle: neutral.dark2,
        onSuccessSubtle: colors.green["800"],
        onInfoSubtle: colors.blue["800"],
        onWarningSubtle: colors.amber["800"],
        onDangerSubtle: colors.red["800"],
        onDiscoverySubtle: colors.violet["800"],
      },

      surface: {
        DEFAULT: colors.white,
        body: colors.white,
        raised: colors.white,
        overlay: colors.white,
        sunken: neutral.light1,
        disabled: neutral.light5,
        tooltip: neutral.dark3,

        neutral: {
          subtle: {
            DEFAULT: neutral.light3,
            hover: neutral.light4,
            active: neutral.light5,
          },
        },

        primary: {
          DEFAULT: neutral.dark3,
          hover: neutral.dark2,
          active: neutral.dark1,
          subtle: {
            DEFAULT: neutral.light3,
            hover: neutral.light4,
            active: neutral.light5,
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
        DEFAULT: neutral.light7,
        subtle: neutral.light6,
        disabled: neutral.light5,
        primary: neutral.light7,
        success: colors.green["500"],
        info: colors.blue["500"],
        warning: colors.amber["500"],
        danger: colors.red["500"],
        discovery: colors.violet["500"],
      },

      ring: neutral.light7,
    },
  },
  dark: {
    colors: {
      content: {
        DEFAULT: neutral.dark12,
        subtle: neutral.dark11,
        subtler: neutral.dark10,
        subtlest: neutral.dark9,
        disabled: neutral.dark8,
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

        onPrimary: colors.sage["900"],
        onSuccess: colors.sage["900"],
        onInfo: colors.slate["900"],
        onWarning: colors.sand["900"],
        onDanger: colors.maroon["900"],
        onDiscovery: colors.mauve["900"],

        onPrimarySubtle: colors.teal["200"],
        onSuccessSubtle: colors.green["200"],
        onInfoSubtle: colors.blue["200"],
        onWarningSubtle: colors.amber["200"],
        onDangerSubtle: colors.red["200"],
        onDiscoverySubtle: colors.violet["200"],
      },

      surface: {
        DEFAULT: neutral.dark2,
        body: neutral.dark2,
        raised: neutral.dark3,
        overlay: neutral.dark4,
        sunken: neutral.dark1,
        disabled: neutral.dark5,
        tooltip: neutral.light1,

        neutral: {
          subtle: {
            DEFAULT: neutral.dark3,
            hover: neutral.dark4,
            active: neutral.dark5,
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
        DEFAULT: neutral.dark7,
        subtle: neutral.dark6,
        disabled: neutral.dark5,
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

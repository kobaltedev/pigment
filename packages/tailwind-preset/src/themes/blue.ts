import { colors } from "../colors";
import { ThemeTokens } from "../types";

/** Pigment default theme tokens. */
export const blueTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: colors.slate["800"],
        subtle: colors.slate["600"],
        subtler: colors.slate["500"],
        subtlest: colors.slate["400"],
        disabled: colors.slate["300"],
        link: colors.blue["600"],

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
        disabled: colors.slate["50"],
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
          subtle: colors.slate["100"],
        },
        success: {
          DEFAULT: colors.green["600"],
          hover: colors.green["700"],
          active: colors.green["800"],
          subtle: colors.green["100"],
        },
        info: {
          DEFAULT: colors.blue["600"],
          hover: colors.blue["700"],
          active: colors.blue["800"],
          subtle: colors.blue["100"],
        },
        warning: {
          DEFAULT: colors.amber["400"],
          hover: colors.amber["500"],
          active: colors.amber["600"],
          subtle: colors.amber["100"],
        },
        danger: {
          DEFAULT: colors.red["600"],
          hover: colors.red["700"],
          active: colors.red["800"],
          subtle: colors.red["100"],
        },
        discovery: {
          DEFAULT: colors.violet["600"],
          hover: colors.violet["700"],
          active: colors.violet["800"],
          subtle: colors.violet["100"],
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
    colors: {},
  },
};

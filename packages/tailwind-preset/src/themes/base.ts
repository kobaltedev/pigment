//import { colors } from "../colors";
import { ThemeTokens } from "../types";

const white = "#ffffff";

const sand = {
  sand1: "#fdfdfc",
  sand2: "#f9f9f8",
  sand3: "#f3f3f2",
  sand4: "#eeeeec",
  sand5: "#e9e9e6",
  sand6: "#e3e3e0",
  sand7: "#dbdbd7",
  sand8: "#c8c7c1",
  sand9: "#90908c",
  sand10: "#868682",
  sand11: "#706f6c",
  sand12: "#1b1b18",
};

const slate = {
  slate1: "#fbfcfd",
  slate2: "#f8f9fa",
  slate3: "#f1f3f5",
  slate4: "#eceef0",
  slate5: "#e6e8eb",
  slate6: "#dfe3e6",
  slate7: "#d7dbdf",
  slate8: "#c1c8cd",
  slate9: "#889096",
  slate10: "#7e868c",
  slate11: "#687076",
  slate12: "#11181c",
};

const blue = {
  blue1: "#fbfdff",
  blue2: "#f5faff",
  blue3: "#edf6ff",
  blue4: "#e1f0ff",
  blue5: "#cee7fe",
  blue6: "#b7d9f8",
  blue7: "#96c7f2",
  blue8: "#5eb0ef",
  blue9: "#0091ff",
  blue10: "#0081f1",
  blue11: "#006adc",
  blue12: "#00254d",
};

const green = {
  green1: "#fbfefc",
  green2: "#f2fcf5",
  green3: "#e9f9ee",
  green4: "#ddf3e4",
  green5: "#ccebd7",
  green6: "#b4dfc4",
  green7: "#92ceac",
  green8: "#5bb98c",
  green9: "#30a46c",
  green10: "#299764",
  green11: "#18794e",
  green12: "#153226",
};

const amber = {
  amber1: "#fefdfb",
  amber2: "#fff9ed",
  amber3: "#fff4d5",
  amber4: "#ffecbc",
  amber5: "#ffe3a2",
  amber6: "#ffd386",
  amber7: "#f3ba63",
  amber8: "#ee9d2b",
  amber9: "#ffb224",
  amber10: "#ffa01c",
  amber11: "#ad5700",
  amber12: "#4e2009",
};

const red = {
  red1: "#fffcfc",
  red2: "#fff8f8",
  red3: "#ffefef",
  red4: "#ffe5e5",
  red5: "#fdd8d8",
  red6: "#f9c6c6",
  red7: "#f3aeaf",
  red8: "#eb9091",
  red9: "#e5484d",
  red10: "#dc3d43",
  red11: "#cd2b31",
  red12: "#381316",
};

const violet = {
  violet1: "#fdfcfe",
  violet2: "#fbfaff",
  violet3: "#f5f2ff",
  violet4: "#ede9fe",
  violet5: "#e4defc",
  violet6: "#d7cff9",
  violet7: "#c4b8f3",
  violet8: "#aa99ec",
  violet9: "#6e56cf",
  violet10: "#644fc1",
  violet11: "#5746af",
  violet12: "#20134b",
};

//

const slateDark = {
  slate1: "#151718",
  slate2: "#1a1d1e",
  slate3: "#202425",
  slate4: "#26292b",
  slate5: "#2b2f31",
  slate6: "#313538",
  slate7: "#3a3f42",
  slate8: "#4c5155",
  slate9: "#697177",
  slate10: "#787f85",
  slate11: "#9ba1a6",
  slate12: "#ecedee",
};

const mintDark = {
  mint1: "#081917",
  mint2: "#05201e",
  mint3: "#052926",
  mint4: "#04312c",
  mint5: "#033a34",
  mint6: "#01453d",
  mint7: "#00564a",
  mint8: "#006d5b",
  mint9: "#70e1c8",
  mint10: "#95f3d9",
  mint11: "#25d0ab",
  mint12: "#e7fcf7",
};

const blueDark = {
  blue1: "#0f1720",
  blue2: "#0f1b2d",
  blue3: "#10243e",
  blue4: "#102a4c",
  blue5: "#0f3058",
  blue6: "#0d3868",
  blue7: "#0a4481",
  blue8: "#0954a5",
  blue9: "#0091ff",
  blue10: "#369eff",
  blue11: "#52a9ff",
  blue12: "#eaf6ff",
};

const greenDark = {
  green1: "#0d1912",
  green2: "#0c1f17",
  green3: "#0f291e",
  green4: "#113123",
  green5: "#133929",
  green6: "#164430",
  green7: "#1b543a",
  green8: "#236e4a",
  green9: "#30a46c",
  green10: "#3cb179",
  green11: "#4cc38a",
  green12: "#e5fbeb",
};

const amberDark = {
  amber1: "#1f1300",
  amber2: "#271700",
  amber3: "#341c00",
  amber4: "#3f2200",
  amber5: "#4a2900",
  amber6: "#573300",
  amber7: "#693f05",
  amber8: "#824e00",
  amber9: "#ffb224",
  amber10: "#ffcb47",
  amber11: "#f1a10d",
  amber12: "#fef3dd",
};

const redDark = {
  red1: "#1f1315",
  red2: "#291415",
  red3: "#3c181a",
  red4: "#481a1d",
  red5: "#541b1f",
  red6: "#671e22",
  red7: "#822025",
  red8: "#aa2429",
  red9: "#e5484d",
  red10: "#f2555a",
  red11: "#ff6369",
  red12: "#feecee",
};

const violetDark = {
  violet1: "#17151f",
  violet2: "#1c172b",
  violet3: "#251e40",
  violet4: "#2c2250",
  violet5: "#32275f",
  violet6: "#392c72",
  violet7: "#443592",
  violet8: "#5842c3",
  violet9: "#6e56cf",
  violet10: "#7c66dc",
  violet11: "#9e8cfc",
  violet12: "#f1eefe",
};

/** Pigment default theme tokens. */
export const baseTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: slate.slate12,
        subtle: slate.slate11,
        subtler: slate.slate10,
        subtlest: slate.slate9,
        disabled: slate.slate8,
        link: {
          DEFAULT: slate.slate12,
          hover: slate.slate12,
          active: slate.slate12,
        },

        primary: slate.slate12,
        success: green.green11,
        info: blue.blue11,
        warning: amber.amber11,
        danger: red.red11,
        discovery: violet.violet11,

        onPrimary: white,
        onSuccess: white,
        onInfo: white,
        onWarning: sand.sand12,
        onDanger: white,
        onDiscovery: white,

        onPrimarySubtle: slate.slate12,
        onSuccessSubtle: green.green11,
        onInfoSubtle: blue.blue11,
        onWarningSubtle: amber.amber11,
        onDangerSubtle: red.red11,
        onDiscoverySubtle: violet.violet11,
      },

      surface: {
        DEFAULT: white,
        body: white,
        raised: white,
        overlay: white,
        sunken: slate.slate1,
        disabled: slate.slate5,
        tooltip: slate.slate12,

        neutral: {
          subtle: {
            DEFAULT: slate.slate3,
            hover: slate.slate4,
            active: slate.slate5,
          },
        },

        primary: {
          DEFAULT: slateDark.slate3,
          hover: slateDark.slate2,
          active: slateDark.slate2,
          subtle: {
            DEFAULT: slate.slate3,
            hover: slate.slate4,
            active: slate.slate5,
          },
        },
        success: {
          DEFAULT: green.green9,
          hover: green.green10,
          active: green.green10,
          subtle: {
            DEFAULT: green.green3,
            hover: green.green4,
            active: green.green5,
          },
        },
        info: {
          DEFAULT: blue.blue9,
          hover: blue.blue10,
          active: blue.blue10,
          subtle: {
            DEFAULT: blue.blue3,
            hover: blue.blue4,
            active: blue.blue5,
          },
        },
        warning: {
          DEFAULT: amber.amber9,
          hover: amber.amber10,
          active: amber.amber10,
          subtle: {
            DEFAULT: amber.amber3,
            hover: amber.amber4,
            active: amber.amber5,
          },
        },
        danger: {
          DEFAULT: red.red9,
          hover: red.red10,
          active: red.red10,
          subtle: {
            DEFAULT: red.red3,
            hover: red.red4,
            active: red.red5,
          },
        },
        discovery: {
          DEFAULT: violet.violet9,
          hover: violet.violet10,
          active: violet.violet10,
          subtle: {
            DEFAULT: violet.violet3,
            hover: violet.violet4,
            active: violet.violet5,
          },
        },
      },

      line: {
        DEFAULT: slate.slate7,
        subtle: slate.slate6,
        disabled: slate.slate5,
        primary: slate.slate7,
        success: green.green7,
        info: blue.blue7,
        warning: amber.amber7,
        danger: red.red7,
        discovery: violet.violet7,
      },

      ring: slate.slate7,
    },
  },
  dark: {
    colors: {
      content: {
        DEFAULT: slateDark.slate12,
        subtle: slateDark.slate11,
        subtler: slateDark.slate10,
        subtlest: slateDark.slate9,
        disabled: slateDark.slate8,
        link: {
          DEFAULT: mintDark.mint9,
          hover: mintDark.mint10,
          active: mintDark.mint10,
        },

        primary: mintDark.mint11,
        success: greenDark.green11,
        info: blueDark.blue11,
        warning: amberDark.amber11,
        danger: redDark.red11,
        discovery: violetDark.violet11,

        onPrimary: slate.slate12,
        onSuccess: white,
        onInfo: white,
        onWarning: sand.sand12,
        onDanger: white,
        onDiscovery: white,

        onPrimarySubtle: mintDark.mint11,
        onSuccessSubtle: greenDark.green11,
        onInfoSubtle: blueDark.blue11,
        onWarningSubtle: amberDark.amber11,
        onDangerSubtle: redDark.red11,
        onDiscoverySubtle: violetDark.violet11,
      },

      surface: {
        DEFAULT: slateDark.slate2,
        body: slateDark.slate2,
        raised: slateDark.slate3,
        overlay: slateDark.slate4,
        sunken: slateDark.slate1,
        disabled: slateDark.slate5, // TODO: verify this
        tooltip: slateDark.slate12,

        neutral: {
          subtle: {
            DEFAULT: slateDark.slate3,
            hover: slateDark.slate4,
            active: slateDark.slate5,
          },
        },

        primary: {
          DEFAULT: mintDark.mint9,
          hover: mintDark.mint10,
          active: mintDark.mint10,
          subtle: {
            DEFAULT: mintDark.mint3,
            hover: mintDark.mint4,
            active: mintDark.mint5,
          },
        },
        success: {
          DEFAULT: greenDark.green9,
          hover: greenDark.green10,
          active: greenDark.green10,
          subtle: {
            DEFAULT: greenDark.green3,
            hover: greenDark.green4,
            active: greenDark.green5,
          },
        },
        info: {
          DEFAULT: blueDark.blue9,
          hover: blueDark.blue10,
          active: blueDark.blue10,
          subtle: {
            DEFAULT: blueDark.blue3,
            hover: blueDark.blue4,
            active: blueDark.blue5,
          },
        },
        warning: {
          DEFAULT: amberDark.amber9,
          hover: amberDark.amber10,
          active: amberDark.amber10,
          subtle: {
            DEFAULT: amberDark.amber3,
            hover: amberDark.amber4,
            active: amberDark.amber5,
          },
        },
        danger: {
          DEFAULT: redDark.red9,
          hover: redDark.red10,
          active: redDark.red10,
          subtle: {
            DEFAULT: redDark.red3,
            hover: redDark.red4,
            active: redDark.red5,
          },
        },
        discovery: {
          DEFAULT: violetDark.violet9,
          hover: violetDark.violet10,
          active: violetDark.violet10,
          subtle: {
            DEFAULT: violetDark.violet3,
            hover: violetDark.violet4,
            active: violetDark.violet5,
          },
        },
      },

      line: {
        DEFAULT: slateDark.slate7,
        subtle: slateDark.slate6,
        disabled: slateDark.slate5,
        primary: mintDark.mint7,
        success: greenDark.green7,
        info: blueDark.blue7,
        warning: amberDark.amber7,
        danger: redDark.red7,
        discovery: violetDark.violet7,
      },

      ring: mintDark.mint7,
    },
  },
};

/*
export const baseTheme: ThemeTokens = {
  light: {
    colors: {
      content: {
        DEFAULT: colors.slate["800"],
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
        subtle: colors.slate["100"],
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
        subtle: colors.slate["200"],
        subtler: colors.slate["300"],
        subtlest: colors.slate["400"],
        disabled: colors.slate["500"],
        link: {
          DEFAULT: colors.blue["300"],
          hover: colors.blue["200"],
          active: colors.blue["100"],
        },

        primary: colors.blue["300"],
        success: colors.green["300"],
        info: colors.blue["300"],
        warning: colors.amber["200"],
        danger: colors.red["300"],
        discovery: colors.violet["300"],

        onPrimary: colors.slate["900"],
        onNeutral: colors.slate["900"],
        onSuccess: colors.sage["900"],
        onInfo: colors.slate["900"],
        onWarning: colors.sand["900"],
        onDanger: colors.maroon["900"],
        onDiscovery: colors.mauve["900"],

        onPrimarySubtle: colors.blue["100"],
        onNeutralSubtle: colors.slate["100"],
        onSuccessSubtle: colors.green["100"],
        onInfoSubtle: colors.blue["100"],
        onWarningSubtle: colors.amber["100"],
        onDangerSubtle: colors.red["100"],
        onDiscoverySubtle: colors.violet["100"],
      },

      surface: {
        DEFAULT: colors.slate["900"],
        body: colors.slate["900"],
        overlay: colors.slate["800"],
        disabled: colors.slate["700"],
        tooltip: colors.slate["50"],

        subtle: {
          DEFAULT: colors.slate["800"],
          hover: colors.slate["700"],
          active: colors.slate["600"],
        },

        primary: {
          DEFAULT: colors.blue["300"],
          hover: colors.blue["200"],
          active: colors.blue["100"],
          subtle: {
            DEFAULT: colors.blue["800"],
            hover: colors.blue["700"],
            active: colors.blue["600"],
          },
        },
        neutral: {
          DEFAULT: colors.slate["300"],
          hover: colors.slate["200"],
          active: colors.slate["100"],
          subtle: {
            DEFAULT: colors.slate["800"],
            hover: colors.slate["700"],
            active: colors.slate["600"],
          },
        },
        success: {
          DEFAULT: colors.green["300"],
          hover: colors.green["200"],
          active: colors.green["100"],
          subtle: {
            DEFAULT: colors.green["800"],
            hover: colors.green["700"],
            active: colors.green["600"],
          },
        },
        info: {
          DEFAULT: colors.blue["300"],
          hover: colors.blue["200"],
          active: colors.blue["100"],
          subtle: {
            DEFAULT: colors.blue["800"],
            hover: colors.blue["700"],
            active: colors.blue["600"],
          },
        },
        warning: {
          DEFAULT: colors.amber["500"],
          hover: colors.amber["400"],
          active: colors.amber["300"],
          subtle: {
            DEFAULT: colors.amber["800"],
            hover: colors.amber["700"],
            active: colors.amber["600"],
          },
        },
        danger: {
          DEFAULT: colors.red["300"],
          hover: colors.red["200"],
          active: colors.red["100"],
          subtle: {
            DEFAULT: colors.red["800"],
            hover: colors.red["700"],
            active: colors.red["600"],
          },
        },
        discovery: {
          DEFAULT: colors.violet["300"],
          hover: colors.violet["200"],
          active: colors.violet["100"],
          subtle: {
            DEFAULT: colors.violet["800"],
            hover: colors.violet["700"],
            active: colors.violet["600"],
          },
        },
      },

      line: {
        DEFAULT: colors.slate["700"],
        subtle: colors.slate["800"],
        disabled: colors.slate["700"],
        primary: colors.blue["400"],
        neutral: colors.slate["400"],
        success: colors.green["400"],
        info: colors.blue["400"],
        warning: colors.amber["400"],
        danger: colors.red["400"],
        discovery: colors.violet["400"],
      },

      ring: colors.blue["400"],
    },
  },
};
*/

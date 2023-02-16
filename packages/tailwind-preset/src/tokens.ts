import tailwindColors from "tailwindcss/colors";
import tailwindTheme from "tailwindcss/defaultTheme";

const ref = {
  palette: {
    white: tailwindColors.white,
    black: tailwindColors.black,
    // semantic
    brand: tailwindColors.blue,
    neutral: tailwindColors.slate,
    success: tailwindColors.green,
    information: tailwindColors.sky,
    warning: tailwindColors.amber,
    danger: tailwindColors.red,
    discovery: tailwindColors.violet,
    // decorative
    gray: tailwindColors.gray,
    red: tailwindColors.red,
    orange: tailwindColors.orange,
    yellow: tailwindColors.yellow,
    green: tailwindColors.green,
    blue: tailwindColors.blue,
    violet: tailwindColors.violet,
  },
  typeface: {
    plain: tailwindTheme.fontFamily.sans,
    brand: tailwindTheme.fontFamily.sans,
  },
};

const sys = {
  color: {},
  typography: {
    body: {
      sm: {
        fontFamily: ref.typeface.plain,
        fontWeight: "400",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.32px",
      },
      md: {
        fontFamily: ref.typeface.plain,
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.16px",
      },
      lg: {
        fontFamily: ref.typeface.plain,
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0",
      },
    },
    label: {
      sm: {
        fontFamily: ref.typeface.plain,
        fontWeight: "500",
        fontSize: "10px",
        lineHeight: "14px",
        letterSpacing: "0.40px",
      },
      md: {
        fontFamily: ref.typeface.plain,
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "0.32px",
      },
      lg: {
        fontFamily: ref.typeface.plain,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.16px",
      },
    },
    title: {
      sm: {
        fontFamily: ref.typeface.plain,
        fontWeight: "500",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.16px",
      },
      md: {
        fontFamily: ref.typeface.plain,
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0",
      },
      lg: {
        fontFamily: ref.typeface.brand,
        fontWeight: "400",
        fontSize: "20px",
        lineHeight: "28px",
        letterSpacing: "0",
      },
    },
    headline: {
      sm: {
        fontFamily: ref.typeface.brand,
        fontWeight: "400",
        fontSize: "24px",
        lineHeight: "32px",
        letterSpacing: "0",
      },
      md: {
        fontFamily: ref.typeface.brand,
        fontWeight: "400",
        fontSize: "30px",
        lineHeight: "36px",
        letterSpacing: "0",
      },
      lg: {
        fontFamily: ref.typeface.brand,
        fontWeight: "400",
        fontSize: "36px",
        lineHeight: "40px",
        letterSpacing: "0",
      },
    },
    display: {
      sm: {
        fontFamily: ref.typeface.brand,
        fontWeight: "400",
        fontSize: "48px",
        lineHeight: "1",
        letterSpacing: "0",
      },
      md: {
        fontFamily: ref.typeface.brand,
        fontWeight: "300",
        fontSize: "60px",
        lineHeight: "1",
        letterSpacing: "0",
      },
      lg: {
        fontFamily: ref.typeface.brand,
        fontWeight: "300",
        fontSize: "72px",
        lineHeight: "1",
        letterSpacing: "0",
      },
    },
  },
  elevation: {
    surface: {
      sunken: ref.palette.neutral["50"],
      flat: ref.palette.white,
      flatHovered: ref.palette.neutral["100"],
      flatPressed: ref.palette.neutral["200"],
      raised: ref.palette.white,
      raisedHovered: ref.palette.neutral["100"],
      raisedPressed: ref.palette.neutral["200"],
      overlay: ref.palette.white,
      overlayHovered: ref.palette.neutral["100"],
      overlayPressed: ref.palette.neutral["200"],
    },
    shadow: {
      sunken: tailwindTheme.boxShadow.none,
      flat: tailwindTheme.boxShadow.none,
      raised: tailwindTheme.boxShadow.DEFAULT,
      overlay: tailwindTheme.boxShadow.lg,
    },
  },
  state: {
    focused: {
      ringColor: ref.palette.brand["600"],
      ringWidth: tailwindTheme.ringWidth["2"],
      ringOffsetWidth: tailwindTheme.ringOffsetWidth["2"],
    },
    disabled: {
      opacity: tailwindTheme.opacity["50"],
      cursor: tailwindTheme.cursor["not-allowed"],
    },
  },
};

const comp = {
  button: {
    variant: {
      filled: {
        primary: {
          text: "",
          textHovered: "",
          textPressed: "",
          textDisabled: "",
          bg: "",
          bgHovered: "",
          bgPressed: "",
          bgDisabled: "",
          border: "",
          borderHovered: "",
          borderPressed: "",
          borderDisabled: "",
          shadow: "",
          shadowHovered: "",
          shadowPressed: "",
          shadowDisabled: "",
        },
        neutral: {},
        danger: {},
      },
      tonal: {
        primary: {},
        neutral: {},
        danger: {},
      },
      outlined: {
        primary: {},
        neutral: {},
        danger: {},
      },
      text: {
        primary: {},
        neutral: {},
        danger: {},
      },
    },
    size: {
      xs: {
        fontFamily: ref.typeface.plain,
        fontWeight: "",
        fontSize: "",
        lineHeight: "",
        letterSpacing: "",
        height: "",
        paddingX: "",
        gap: "",
        radii: "",
      },
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
  },
};

export const LIGHT_THEME = {
  ref,
  sys,
  comp,
};

//

const PIGMENT_CSS_VAR_PREFIX = "--p-";

function toKebabCase(value: string) {
  return (
    value
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      ?.map(x => x.toLowerCase())
      .join("-") ?? value
  );
}

function toFlattenCssVarsObject(obj: Record<any, any>, prefix = "") {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + "-" : PIGMENT_CSS_VAR_PREFIX;

    if (typeof obj[key] === "object") {
      Object.assign(acc, toFlattenCssVarsObject(obj[key], pre + toKebabCase(key)));
    } else {
      acc[pre + toKebabCase(key)] = obj[key];
    }

    return acc;
  }, {} as any);
}

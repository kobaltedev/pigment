export type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const semanticColorValues = [
  "neutral",
  "primary",
  "accent",
  "success",
  "info",
  "warning",
  "danger",
] as const;

export type SemanticColor = (typeof semanticColorValues)[number];

const paletteRangeValues = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

export type PaletteRange = (typeof paletteRangeValues)[number];

function getGlobalVariantTokenShape<T extends string>(properties: T[]) {
  return semanticColorValues.reduce((acc, color) => {
    acc[color] = properties.reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<T, string>);
    return acc;
  }, {} as Record<SemanticColor, Record<T, string>>);
}

export const themeTokensShapeValue = {
  colors: {
    ...semanticColorValues.reduce((acc, color) => {
      acc[color] = paletteRangeValues.reduce((acc, scale) => {
        acc[scale] = "";
        return acc;
      }, {} as Record<PaletteRange, string>);
      return acc;
    }, {} as Record<SemanticColor, Record<PaletteRange, string>>),

    ring: "",
    backdrop: "",
    tooltip: "",

    content: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      disabled: "",
      inverse: "",
      warningInverse: "",
      primary: "",
      accent: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },

    surface: {
      body: "",

      DEFAULT: "",
      hover: "",
      active: "",
      disabled: "",

      raised: "",
      raisedHover: "",
      raisedActive: "",

      overlay: "",
      overlayHover: "",
      overlayActive: "",

      sunken: "",

      highlightedHover: "",
      highlightedActive: "",
    },

    line: {
      DEFAULT: "",
      disabled: "",
    },

    solid: getGlobalVariantTokenShape(["content", "surface", "surfaceHover", "surfaceActive"]),
    soft: getGlobalVariantTokenShape(["content", "surface", "surfaceHover", "surfaceActive"]),
    outlined: getGlobalVariantTokenShape([
      "content",
      "line",
      "surfaceHover",
      "lineHover",
      "surfaceActive",
      "lineActive",
    ]),
    ghost: getGlobalVariantTokenShape(["content", "surfaceHover", "surfaceActive"]),

    input: {
      filled: {
        content: "",
        surface: "",
        line: "",
        surfaceHover: "",
        lineHover: "",
        surfaceActive: "",
        lineActive: "",
      },
      outlined: {
        content: "",
        line: "",
        lineHover: "",
        lineActive: "",
      },
    },
  },
  shadows: {
    raised: "",
    overlay: "",
  },
  typography: {
    fontFamily: {
      fallback: "",
      body: "",
      display: "",
      code: "",
    },
  },
};

export type ColorSchemeTokens = Pick<typeof themeTokensShapeValue, "colors" | "shadows">;

export type CommonTokens = Pick<typeof themeTokensShapeValue, "typography">;

export interface Theme {
  /** Color scheme independent tokens. */
  common: CommonTokens;

  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: DeepPartial<ColorSchemeTokens>;
}

export type PartialTheme = DeepPartial<Theme>;

export type PredefinedTheme = "base";

export type TokenKey = FlattenObjectKeys<ColorSchemeTokens> | FlattenObjectKeys<CommonTokens>;

/** A function to get the css variable of a token. */
export type VarsFn = (token: TokenKey) => string;

export type ThemeGetter = (vars: VarsFn) => Theme;

export interface CustomTheme {
  /** The name of the custom theme. */
  name: string;

  /** If provided, the custom theme will be merged with the predefined theme. */
  extend?: PredefinedTheme;

  /** A function that return the design tokens of the custom theme. */
  tokens: (vars: VarsFn) => PartialTheme;
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** The themes available in the application. */
  themes?: Array<PredefinedTheme | CustomTheme>;
}

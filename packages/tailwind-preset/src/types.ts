export type FlattenObjectKeys<T extends Record<string, unknown>, Key = keyof T> = Key extends string
  ? T[Key] extends Record<string, unknown>
    ? `${Key}.${FlattenObjectKeys<T[Key]>}`
    : `${Key}`
  : never;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

const semanticColorValues = ["neutral", "primary", "success", "info", "warning", "danger"] as const;

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

function getGlobalVariantTokenShape<T extends string, U extends string>(
  variants: readonly T[],
  properties: readonly U[]
) {
  return variants.reduce((acc, color) => {
    acc[color] = properties.reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {} as Record<U, string>);
    return acc;
  }, {} as Record<T, Record<U, string>>);
}

const ghostVariantProperties = [
  "content",
  "contentHover",
  "surfaceHover",
  "lineHover",
  "contentActive",
  "surfaceActive",
  "lineActive",
] as const;

const outlinedVariantProperties = [...ghostVariantProperties, "line"] as const;

const solidVariantProperties = [...outlinedVariantProperties, "surface"] as const;

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
    line: "",
    backdrop: "",
    tooltip: "",

    content: {
      DEFAULT: "",
      subtle: "",
      subtler: "",
      subtlest: "",
      inverse: "",
      warningInverse: "",
      primary: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },

    surface: {
      DEFAULT: "",
      body: "",
      raised: "",
      overlay: "",
      sunken: "",
    },

    solid: getGlobalVariantTokenShape(semanticColorValues, solidVariantProperties),
    soft: getGlobalVariantTokenShape(semanticColorValues, solidVariantProperties),
    outlined: getGlobalVariantTokenShape(semanticColorValues, outlinedVariantProperties),
    ghost: getGlobalVariantTokenShape(semanticColorValues, ghostVariantProperties),

    accent: getGlobalVariantTokenShape(["solid", "soft"], solidVariantProperties),

    input: {
      ...getGlobalVariantTokenShape(["soft"], solidVariantProperties),
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

export interface ThemeTokens {
  /** Color scheme independent tokens. */
  common: CommonTokens;

  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: DeepPartial<ColorSchemeTokens>;
}

export type PartialThemeTokens = DeepPartial<ThemeTokens>;

export type TokenKey = FlattenObjectKeys<ColorSchemeTokens> | FlattenObjectKeys<CommonTokens>;

/** A function to get the css variable of a token. */
export type VarsFn = (token: TokenKey) => string;

export type ThemeTokensGetter = (vars: VarsFn) => ThemeTokens;

export type PredefinedTheme = "sapphire" | "emerald" | "sun" | "moon" | "scarlet" | "violet";

export interface ExtendedTheme {
  /** The name of the extended theme. */
  name: string;

  /** The predefined theme to extend. */
  extend: PredefinedTheme;

  /** The design tokens of the extended theme. */
  tokens: PartialThemeTokens | ((vars: VarsFn) => PartialThemeTokens);
}

export interface CustomTheme {
  /** The name of the custom theme. */
  name: string;

  /** The design tokens of the custom theme. */
  tokens: ThemeTokens | ((vars: VarsFn) => ThemeTokens);
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** The themes available in the application. */
  themes?: Array<PredefinedTheme | ExtendedTheme | CustomTheme>;
}

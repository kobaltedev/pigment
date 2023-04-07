export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;

type ReferenceColor = "neutral" | "primary" | "success" | "info" | "warning" | "danger";
type ReferenceColorScale =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";
type ReferenceColorTokens = Record<Prefixed<ReferenceColor, ReferenceColorScale>, string>;

type GlobalVariant = "solid" | "soft" | "outlined" | "ghost";
type GlobalVariantColor = "Neutral" | "Primary" | "Success" | "Info" | "Warning" | "Danger";
type GlobalVariantKey =
  | "Content"
  | "Surface"
  | "Line"
  | "ContentHover"
  | "SurfaceHover"
  | "LineHover"
  | "ContentActive"
  | "SurfaceActive"
  | "LineActive";
type GlobalVariantTokens = Record<
  Prefixed<GlobalVariant, Prefixed<GlobalVariantColor, GlobalVariantKey>>,
  string
>;
type InputVariantTokens = Record<Prefixed<"softInput" | "outlinedInput", GlobalVariantKey>, string>;
type SelectionVariantTokens = Record<
  Prefixed<"solidSelected" | "softSelected", GlobalVariantKey>,
  string
>;

export interface ColorTokens
  extends ReferenceColorTokens,
    GlobalVariantTokens,
    InputVariantTokens,
    SelectionVariantTokens {
  neutral100A: string;
  neutral200A: string;
  neutral300A: string;
  neutral400A: string;
  neutral500A: string;

  content: string;
  contentSubtle: string;
  contentSubtler: string;
  contentSubtlest: string;
  contentDisabled: string;
  contentInverse: string;
  contentWarningInverse: string;
  contentSuccess: string;
  contentDanger: string;

  body: string;

  surface: string;
  surfaceHover: string;
  surfaceActive: string;
  surfaceDisabled: string;

  raisedSurface: string;
  raisedSurfaceHover: string;
  raisedSurfaceActive: string;

  overlaySurface: string;
  overlaySurfaceHover: string;
  overlaySurfaceActive: string;

  sunkenSurface: string;

  subtleSurface: string;
  subtleSurfaceHover: string;
  subtleSurfaceActive: string;

  line: string;
  lineDisabled: string;

  focusRing: string;
  backdrop: string;
  tooltip: string;
}

export interface ShadowTokens {
  raised: string;
  overlay: string;
}

export interface TypographyTokens {
  fontFamilyFallback: string;
  fontFamilySans: string;
  fontFamilySerif: string;
  fontFamilyMono: string;
}

export interface CommonTokens {
  typography: TypographyTokens;
}

export interface ColorSchemeTokens {
  colors: ColorTokens;
  shadows: ShadowTokens;
}

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

export type TokenKey =
  | Prefixed<"typography.", keyof CommonTokens["typography"]>
  | Prefixed<"colors.", keyof ColorSchemeTokens["colors"]>
  | Prefixed<"shadows.", keyof ColorSchemeTokens["shadows"]>;

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

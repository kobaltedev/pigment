export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;

export interface TypographyTokens {
  fontFamilyFallback: string;
  fontFamilySans: string;
  fontFamilySerif: string;
  fontFamilyMono: string;
}

export interface CommonTokens {
  typography: TypographyTokens;
}

export interface ColorTokens {
  /* -------------------------------------------------------------------------------------------------
   * Reference tokens
   * -----------------------------------------------------------------------------------------------*/

  neutral0: string;
  neutral50: string;
  neutral100: string;
  neutral200: string;
  neutral300: string;
  neutral400: string;
  neutral500: string;
  neutral600: string;
  neutral700: string;
  neutral800: string;
  neutral900: string;
  neutral950: string;

  neutral100A: string;
  neutral200A: string;
  neutral300A: string;
  neutral400A: string;
  neutral500A: string;

  primary50: string;
  primary100: string;
  primary200: string;
  primary300: string;
  primary400: string;
  primary500: string;
  primary600: string;
  primary700: string;
  primary800: string;
  primary900: string;

  info50: string;
  info100: string;
  info200: string;
  info300: string;
  info400: string;
  info500: string;
  info600: string;
  info700: string;
  info800: string;
  info900: string;

  success50: string;
  success100: string;
  success200: string;
  success300: string;
  success400: string;
  success500: string;
  success600: string;
  success700: string;
  success800: string;
  success900: string;

  warning50: string;
  warning100: string;
  warning200: string;
  warning300: string;
  warning400: string;
  warning500: string;
  warning600: string;
  warning700: string;
  warning800: string;
  warning900: string;

  danger50: string;
  danger100: string;
  danger200: string;
  danger300: string;
  danger400: string;
  danger500: string;
  danger600: string;
  danger700: string;
  danger800: string;
  danger900: string;

  help50: string;
  help100: string;
  help200: string;
  help300: string;
  help400: string;
  help500: string;
  help600: string;
  help700: string;
  help800: string;
  help900: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Texts
   * -----------------------------------------------------------------------------------------------*/

  textBold: string;
  text: string;
  textSubtle: string;
  textSubtler: string;
  textSubtlest: string;
  textInverse: string;
  textWarningInverse: string;
  textSuccess: string;
  textDanger: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Icons
   * -----------------------------------------------------------------------------------------------*/

  iconBold: string;
  icon: string;
  iconSubtle: string;
  iconSubtler: string;
  iconSubtlest: string;
  iconInverse: string;
  iconWarningInverse: string;
  iconSuccess: string;
  iconDanger: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Backgrounds
   * -----------------------------------------------------------------------------------------------*/

  bodyBg: string;

  /* Subtle */
  subtleBg: string;
  subtleBgHover: string;
  subtleBgActive: string;

  /* Surface */
  surfaceBg: string;
  surfaceBgHover: string;
  surfaceBgActive: string;
  surfaceRaisedBg: string;
  surfaceRaisedBgHover: string;
  surfaceRaisedBgActive: string;
  surfaceOverlayBg: string;
  surfaceOverlayBgHover: string;
  surfaceOverlayBgActive: string;
  surfaceSunkenBg: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Border
   * -----------------------------------------------------------------------------------------------*/

  border: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Misc.
   * -----------------------------------------------------------------------------------------------*/

  focusRing: string;
  backdrop: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global - Disabled
   * -----------------------------------------------------------------------------------------------*/

  disabledText: string;
  disabledIcon: string;
  disabledBg: string;
  disabledBorder: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global - Selected
   * -----------------------------------------------------------------------------------------------*/

  /* Solid */
  solidSelectedText: string;
  solidSelectedIcon: string;
  solidSelectedBg: string;
  solidSelectedBorder: string;
  solidSelectedTextHover: string;
  solidSelectedIconHover: string;
  solidSelectedBgHover: string;
  solidSelectedBorderHover: string;
  solidSelectedTextActive: string;
  solidSelectedIconActive: string;
  solidSelectedBgActive: string;
  solidSelectedBorderActive: string;

  /* Soft */
  softSelectedText: string;
  softSelectedIcon: string;
  softSelectedBg: string;
  softSelectedBorder: string;
  softSelectedTextHover: string;
  softSelectedIconHover: string;
  softSelectedBgHover: string;
  softSelectedBorderHover: string;
  softSelectedTextActive: string;
  softSelectedIconActive: string;
  softSelectedBgActive: string;
  softSelectedBorderActive: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global - Input
   * -----------------------------------------------------------------------------------------------*/

  /* Soft */
  softInputText: string;
  softInputIcon: string;
  softInputBg: string;
  softInputBorder: string;
  softInputTextHover: string;
  softInputIconHover: string;
  softInputBgHover: string;
  softInputBorderHover: string;
  softInputTextActive: string;
  softInputIconActive: string;
  softInputBgActive: string;
  softInputBorderActive: string;

  /* Outlined */
  outlinedInputText: string;
  outlinedInputIcon: string;
  outlinedInputBg: string;
  outlinedInputBorder: string;
  outlinedInputTextHover: string;
  outlinedInputIconHover: string;
  outlinedInputBgHover: string;
  outlinedInputBorderHover: string;
  outlinedInputTextActive: string;
  outlinedInputIconActive: string;
  outlinedInputBgActive: string;
  outlinedInputBorderActive: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global variants - Solid
   * -----------------------------------------------------------------------------------------------*/

  /* Primary */
  solidPrimaryText: string;
  solidPrimaryIcon: string;
  solidPrimaryBg: string;
  solidPrimaryBorder: string;
  solidPrimaryTextHover: string;
  solidPrimaryIconHover: string;
  solidPrimaryBgHover: string;
  solidPrimaryBorderHover: string;
  solidPrimaryTextActive: string;
  solidPrimaryIconActive: string;
  solidPrimaryBgActive: string;
  solidPrimaryBorderActive: string;

  /* Neutral */
  solidNeutralText: string;
  solidNeutralIcon: string;
  solidNeutralBg: string;
  solidNeutralBorder: string;
  solidNeutralTextHover: string;
  solidNeutralIconHover: string;
  solidNeutralBgHover: string;
  solidNeutralBorderHover: string;
  solidNeutralTextActive: string;
  solidNeutralIconActive: string;
  solidNeutralBgActive: string;
  solidNeutralBorderActive: string;

  /* Success */
  solidSuccessText: string;
  solidSuccessIcon: string;
  solidSuccessBg: string;
  solidSuccessBorder: string;
  solidSuccessTextHover: string;
  solidSuccessIconHover: string;
  solidSuccessBgHover: string;
  solidSuccessBorderHover: string;
  solidSuccessTextActive: string;
  solidSuccessIconActive: string;
  solidSuccessBgActive: string;
  solidSuccessBorderActive: string;

  /* Info */
  solidInfoText: string;
  solidInfoIcon: string;
  solidInfoBg: string;
  solidInfoBorder: string;
  solidInfoTextHover: string;
  solidInfoIconHover: string;
  solidInfoBgHover: string;
  solidInfoBorderHover: string;
  solidInfoTextActive: string;
  solidInfoIconActive: string;
  solidInfoBgActive: string;
  solidInfoBorderActive: string;

  /* Warning */
  solidWarningText: string;
  solidWarningIcon: string;
  solidWarningBg: string;
  solidWarningBorder: string;
  solidWarningTextHover: string;
  solidWarningIconHover: string;
  solidWarningBgHover: string;
  solidWarningBorderHover: string;
  solidWarningTextActive: string;
  solidWarningIconActive: string;
  solidWarningBgActive: string;
  solidWarningBorderActive: string;

  /* Danger */
  solidDangerText: string;
  solidDangerIcon: string;
  solidDangerBg: string;
  solidDangerBorder: string;
  solidDangerTextHover: string;
  solidDangerIconHover: string;
  solidDangerBgHover: string;
  solidDangerBorderHover: string;
  solidDangerTextActive: string;
  solidDangerIconActive: string;
  solidDangerBgActive: string;
  solidDangerBorderActive: string;

  /* Help */
  solidHelpText: string;
  solidHelpIcon: string;
  solidHelpBg: string;
  solidHelpBorder: string;
  solidHelpTextHover: string;
  solidHelpIconHover: string;
  solidHelpBgHover: string;
  solidHelpBorderHover: string;
  solidHelpTextActive: string;
  solidHelpIconActive: string;
  solidHelpBgActive: string;
  solidHelpBorderActive: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global variants - Soft
   * -----------------------------------------------------------------------------------------------*/

  /* Primary */
  softPrimaryText: string;
  softPrimaryIcon: string;
  softPrimaryBg: string;
  softPrimaryBorder: string;
  softPrimaryTextHover: string;
  softPrimaryIconHover: string;
  softPrimaryBgHover: string;
  softPrimaryBorderHover: string;
  softPrimaryTextActive: string;
  softPrimaryIconActive: string;
  softPrimaryBgActive: string;
  softPrimaryBorderActive: string;

  /* Neutral */
  softNeutralText: string;
  softNeutralIcon: string;
  softNeutralBg: string;
  softNeutralBorder: string;
  softNeutralTextHover: string;
  softNeutralIconHover: string;
  softNeutralBgHover: string;
  softNeutralBorderHover: string;
  softNeutralTextActive: string;
  softNeutralIconActive: string;
  softNeutralBgActive: string;
  softNeutralBorderActive: string;

  /* Success */
  softSuccessText: string;
  softSuccessIcon: string;
  softSuccessBg: string;
  softSuccessBorder: string;
  softSuccessTextHover: string;
  softSuccessIconHover: string;
  softSuccessBgHover: string;
  softSuccessBorderHover: string;
  softSuccessTextActive: string;
  softSuccessIconActive: string;
  softSuccessBgActive: string;
  softSuccessBorderActive: string;

  /* Info */
  softInfoText: string;
  softInfoIcon: string;
  softInfoBg: string;
  softInfoBorder: string;
  softInfoTextHover: string;
  softInfoIconHover: string;
  softInfoBgHover: string;
  softInfoBorderHover: string;
  softInfoTextActive: string;
  softInfoIconActive: string;
  softInfoBgActive: string;
  softInfoBorderActive: string;

  /* Warning */
  softWarningText: string;
  softWarningIcon: string;
  softWarningBg: string;
  softWarningBorder: string;
  softWarningTextHover: string;
  softWarningIconHover: string;
  softWarningBgHover: string;
  softWarningBorderHover: string;
  softWarningTextActive: string;
  softWarningIconActive: string;
  softWarningBgActive: string;
  softWarningBorderActive: string;

  /* Danger */
  softDangerText: string;
  softDangerIcon: string;
  softDangerBg: string;
  softDangerBorder: string;
  softDangerTextHover: string;
  softDangerIconHover: string;
  softDangerBgHover: string;
  softDangerBorderHover: string;
  softDangerTextActive: string;
  softDangerIconActive: string;
  softDangerBgActive: string;
  softDangerBorderActive: string;

  /* Help */
  softHelpText: string;
  softHelpIcon: string;
  softHelpBg: string;
  softHelpBorder: string;
  softHelpTextHover: string;
  softHelpIconHover: string;
  softHelpBgHover: string;
  softHelpBorderHover: string;
  softHelpTextActive: string;
  softHelpIconActive: string;
  softHelpBgActive: string;
  softHelpBorderActive: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global variants - Outlined
   * -----------------------------------------------------------------------------------------------*/

  /* Primary */
  outlinedPrimaryText: string;
  outlinedPrimaryIcon: string;
  outlinedPrimaryBg: string;
  outlinedPrimaryBorder: string;
  outlinedPrimaryTextHover: string;
  outlinedPrimaryIconHover: string;
  outlinedPrimaryBgHover: string;
  outlinedPrimaryBorderHover: string;
  outlinedPrimaryTextActive: string;
  outlinedPrimaryIconActive: string;
  outlinedPrimaryBgActive: string;
  outlinedPrimaryBorderActive: string;

  /* Neutral */
  outlinedNeutralText: string;
  outlinedNeutralIcon: string;
  outlinedNeutralBg: string;
  outlinedNeutralBorder: string;
  outlinedNeutralTextHover: string;
  outlinedNeutralIconHover: string;
  outlinedNeutralBgHover: string;
  outlinedNeutralBorderHover: string;
  outlinedNeutralTextActive: string;
  outlinedNeutralIconActive: string;
  outlinedNeutralBgActive: string;
  outlinedNeutralBorderActive: string;

  /* Success */
  outlinedSuccessText: string;
  outlinedSuccessIcon: string;
  outlinedSuccessBg: string;
  outlinedSuccessBorder: string;
  outlinedSuccessTextHover: string;
  outlinedSuccessIconHover: string;
  outlinedSuccessBgHover: string;
  outlinedSuccessBorderHover: string;
  outlinedSuccessTextActive: string;
  outlinedSuccessIconActive: string;
  outlinedSuccessBgActive: string;
  outlinedSuccessBorderActive: string;

  /* Info */
  outlinedInfoText: string;
  outlinedInfoIcon: string;
  outlinedInfoBg: string;
  outlinedInfoBorder: string;
  outlinedInfoTextHover: string;
  outlinedInfoIconHover: string;
  outlinedInfoBgHover: string;
  outlinedInfoBorderHover: string;
  outlinedInfoTextActive: string;
  outlinedInfoIconActive: string;
  outlinedInfoBgActive: string;
  outlinedInfoBorderActive: string;

  /* Warning */
  outlinedWarningText: string;
  outlinedWarningIcon: string;
  outlinedWarningBg: string;
  outlinedWarningBorder: string;
  outlinedWarningTextHover: string;
  outlinedWarningIconHover: string;
  outlinedWarningBgHover: string;
  outlinedWarningBorderHover: string;
  outlinedWarningTextActive: string;
  outlinedWarningIconActive: string;
  outlinedWarningBgActive: string;
  outlinedWarningBorderActive: string;

  /* Danger */
  outlinedDangerText: string;
  outlinedDangerIcon: string;
  outlinedDangerBg: string;
  outlinedDangerBorder: string;
  outlinedDangerTextHover: string;
  outlinedDangerIconHover: string;
  outlinedDangerBgHover: string;
  outlinedDangerBorderHover: string;
  outlinedDangerTextActive: string;
  outlinedDangerIconActive: string;
  outlinedDangerBgActive: string;
  outlinedDangerBorderActive: string;

  /* Help */
  outlinedHelpText: string;
  outlinedHelpIcon: string;
  outlinedHelpBg: string;
  outlinedHelpBorder: string;
  outlinedHelpTextHover: string;
  outlinedHelpIconHover: string;
  outlinedHelpBgHover: string;
  outlinedHelpBorderHover: string;
  outlinedHelpTextActive: string;
  outlinedHelpIconActive: string;
  outlinedHelpBgActive: string;
  outlinedHelpBorderActive: string;

  /* -------------------------------------------------------------------------------------------------
   * Color - Global variants - Ghost
   * -----------------------------------------------------------------------------------------------*/

  /* Primary */
  ghostPrimaryText: string;
  ghostPrimaryIcon: string;
  ghostPrimaryBg: string;
  ghostPrimaryBorder: string;
  ghostPrimaryTextHover: string;
  ghostPrimaryIconHover: string;
  ghostPrimaryBgHover: string;
  ghostPrimaryBorderHover: string;
  ghostPrimaryTextActive: string;
  ghostPrimaryIconActive: string;
  ghostPrimaryBgActive: string;
  ghostPrimaryBorderActive: string;

  /* Neutral */
  ghostNeutralText: string;
  ghostNeutralIcon: string;
  ghostNeutralBg: string;
  ghostNeutralBorder: string;
  ghostNeutralTextHover: string;
  ghostNeutralIconHover: string;
  ghostNeutralBgHover: string;
  ghostNeutralBorderHover: string;
  ghostNeutralTextActive: string;
  ghostNeutralIconActive: string;
  ghostNeutralBgActive: string;
  ghostNeutralBorderActive: string;

  /* Success */
  ghostSuccessText: string;
  ghostSuccessIcon: string;
  ghostSuccessBg: string;
  ghostSuccessBorder: string;
  ghostSuccessTextHover: string;
  ghostSuccessIconHover: string;
  ghostSuccessBgHover: string;
  ghostSuccessBorderHover: string;
  ghostSuccessTextActive: string;
  ghostSuccessIconActive: string;
  ghostSuccessBgActive: string;
  ghostSuccessBorderActive: string;

  /* Info */
  ghostInfoText: string;
  ghostInfoIcon: string;
  ghostInfoBg: string;
  ghostInfoBorder: string;
  ghostInfoTextHover: string;
  ghostInfoIconHover: string;
  ghostInfoBgHover: string;
  ghostInfoBorderHover: string;
  ghostInfoTextActive: string;
  ghostInfoIconActive: string;
  ghostInfoBgActive: string;
  ghostInfoBorderActive: string;

  /* Warning */
  ghostWarningText: string;
  ghostWarningIcon: string;
  ghostWarningBg: string;
  ghostWarningBorder: string;
  ghostWarningTextHover: string;
  ghostWarningIconHover: string;
  ghostWarningBgHover: string;
  ghostWarningBorderHover: string;
  ghostWarningTextActive: string;
  ghostWarningIconActive: string;
  ghostWarningBgActive: string;
  ghostWarningBorderActive: string;

  /* Danger */
  ghostDangerText: string;
  ghostDangerIcon: string;
  ghostDangerBg: string;
  ghostDangerBorder: string;
  ghostDangerTextHover: string;
  ghostDangerIconHover: string;
  ghostDangerBgHover: string;
  ghostDangerBorderHover: string;
  ghostDangerTextActive: string;
  ghostDangerIconActive: string;
  ghostDangerBgActive: string;
  ghostDangerBorderActive: string;

  /* Help */
  ghostHelpText: string;
  ghostHelpIcon: string;
  ghostHelpBg: string;
  ghostHelpBorder: string;
  ghostHelpTextHover: string;
  ghostHelpIconHover: string;
  ghostHelpBgHover: string;
  ghostHelpBorderHover: string;
  ghostHelpTextActive: string;
  ghostHelpIconActive: string;
  ghostHelpBgActive: string;
  ghostHelpBorderActive: string;
}

export interface ShadowTokens {
  surfaceRaised: string;
  surfaceOverlay: string;
}

export interface ColorSchemeTokens {
  color: ColorTokens;
  shadow: ShadowTokens;
}

export interface Theme {
  /** Color scheme independent tokens. */
  common: CommonTokens;

  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: DeepPartial<ColorSchemeTokens>;
}

export type TokenKey =
  | Prefixed<"typography.", keyof CommonTokens["typography"]>
  | Prefixed<"color.", keyof ColorSchemeTokens["color"]>
  | Prefixed<"shadow.", keyof ColorSchemeTokens["shadow"]>;

export type VarsFn = (token: TokenKey) => string;

export type ThemeGetter = (vars: VarsFn) => Theme;

export type PredefinedTheme = "base";

export interface CustomTheme {
  name: string;
  extend: PredefinedTheme;
  tokens: (vars: VarsFn) => DeepPartial<Theme>;
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarsPrefix?: string;

  /** The themes available in the application. */
  themes?: Array<PredefinedTheme | CustomTheme>;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface TextColorTokens {
  /** Use for primary text, such as body copy, and sentence case headers. */
  base: string;

  /** Use for secondary text, such as navigation, input field labels, and all caps subheadings. */
  subtle: string;

  /** Use for tertiary text, such as meta-data, breadcrumbs, input field placeholder and helper text. */
  subtlest: string;

  /** Use for text on bold backgrounds. */
  inverse: string;

  /** Use for text in a disabled state. */
  disabled: string;

  /** Use for links in a default state. */
  link: string;

  /** Use for links in a hovered state. */
  linkHovered: string;

  /** Use for links in a pressed state. */
  linkPressed: string;

  /** Use for text that reinforces your brand. */
  brand: string;

  /** Use for text to communicate a favorable outcome, such as input field success messaging. */
  success: string;

  /** Use for informative text or to communicate something is in progress. */
  information: string;

  /** Use for text to emphasize caution. */
  warning: string;

  /** Use for text when on bold warning backgrounds. */
  warningInverse: string;

  /** Use for critical text, such as input field error messaging. */
  danger: string;

  /** Use for text to emphasize change, something new, or provide help. */
  discovery: string;

  /** Use for text in selected state, such as an active tab. */
  selected: string;
}

export interface IconColorTokens {
  /** Use for icon-only buttons, or icons paired with `color.text`. */
  base: string;

  /** Use for icons paired with `color.textSubtle`. */
  subtle: string;

  /** Use for icons paired with `color.textSubtlest`. */
  subtlest: string;

  /** Use for icons on bold backgrounds. */
  inverse: string;

  /** Use for icons in a disabled state. */
  disabled: string;

  /** Use for icons that reinforce your brand. */
  brand: string;

  /** Use for icons communicating a favorable outcome. */
  success: string;

  /** Use for icons communicating information or something in-progress. */
  information: string;

  /** Use for icons communicating caution. */
  warning: string;

  /** Use for icons when on bold warning backgrounds. */
  warningInverse: string;

  /** Use for icons communicating critical information, such as those used in error handing. */
  danger: string;

  /** Use for icons communicating change, something new, or provide help. */
  discovery: string;

  /** Use for icons in selected state, such as an active tab. */
  selected: string;
}

export interface BorderColorTokens {
  /** Use to visually group or separate UI elements, such as flat cards or side panel dividers. */
  base: string;

  /** Use for borders of form UI elements, such as input fields, checkboxes, and radio buttons. */
  input: string;

  /** Use for borders on bold backgrounds. */
  inverse: string;

  /** Use for borders of elements in a disabled state. */
  disabled: string;

  /** Use for borders or visual indicators of elements that reinforce your brand. */
  brand: string;

  /** Use for borders communicating a favorable outcome, such as the borders on validated input fields. */
  success: string;

  /** Use for borders communicating information. */
  information: string;

  /** Use for borders communicating caution. */
  warning: string;

  /** Use for borders communicating critical information, such as the borders on invalid input fields. */
  danger: string;

  /** Use for borders communicating change, something new, or provide help. */
  discovery: string;

  /** Use for focus rings of elements in a focus state. */
  focused: string;

  /** Use for borders or visual indicators of elements in a selected state, such as an active tab or menu items. */
  selected: string;
}

export interface BackgroundColorTokens {
  /** Use as the default background for the UI. */
  base: string;

  /** Use for the background of flat elements. */
  surface: string;

  /** Use for the background of flat elements, in a hovered state. */
  surfaceHovered: string;

  /** Use for the background of flat elements, in a pressed state. */
  surfacePressed: string;

  /** Use for the background of raised elements. */
  surfaceRaised: string;

  /** Use for the background of raised elements, in a hovered state. */
  surfaceRaisedHovered: string;

  /** Use for the background of raised elements, in a pressed state. */
  surfaceRaisedPressed: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers. */
  surfaceOverlay: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers, in a hovered state. */
  surfaceOverlayHovered: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers, in a pressed state. */
  surfaceOverlayPressed: string;

  /** A secondary background for the UI commonly used for grouping items. */
  surfaceSunken: string;

  /** Use for background of form UI elements, such as input fields, checkboxes, and radio buttons. */
  input: string;

  /** Use for background of form UI elements, such as input fields, checkboxes, and radio buttons, in a hovered state. */
  inputHovered: string;

  /** Use for background of form UI elements, such as input fields, checkboxes, and radio buttons, in a pressed state. */
  inputPressed: string;

  /** Use for backgrounds of elements in a disabled state. */
  disabled: string;

  /** Use for the screen overlay that appears with modal dialogs. */
  backdrop: string;

  /** Use for backgrounds of elements on a bold background. */
  inverseSubtle: string;

  /** Use for backgrounds of elements on a bold background, in a hovered state. */
  inverseSubtleHovered: string;

  /** Use for backgrounds of elements on a bold background, in a pressed state. */
  inverseSubtlePressed: string;

  /** A vibrant background option for neutral UI elements. */
  neutralBold: string;

  /** A vibrant background option for neutral UI elements, in a hovered state. */
  neutralBoldHovered: string;

  /** A vibrant background option for neutral UI elements, in a pressed state. */
  neutralBoldPressed: string;

  /** The default background for neutral UI elements. */
  neutral: string;

  /** The default background for neutral UI elements, in a hovered state. */
  neutralHovered: string;

  /** The default background for neutral UI elements, in a pressed state. */
  neutralPressed: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items. */
  neutralSubtle: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in a hovered state. */
  neutralSubtleHovered: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in a pressed state. */
  neutralSubtlePressed: string;

  /** A vibrant background to reinforce your brand with more emphasis. */
  brandBold: string;

  /** A vibrant background to reinforce your brand with more emphasis, in a hovered state. */
  brandBoldHovered: string;

  /** A vibrant background to reinforce your brand with more emphasis, in a pressed state. */
  brandBoldPressed: string;

  /** Use for the background of elements used to reinforce your brand. */
  brand: string;

  /** Use for the background of elements used to reinforce your brand, in a hovered state. */
  brandHovered: string;

  /** Use for the background of elements used to reinforce your brand, in a pressed state. */
  brandPressed: string;

  /** A vibrant background for communicating a favorable outcome. */
  successBold: string;

  /** A vibrant background for communicating a favorable outcome, in a hovered state. */
  successBoldHovered: string;

  /** A vibrant background for communicating a favorable outcome, in a pressed state. */
  successBoldPressed: string;

  /** A soft background for communicating a favorable outcome. */
  success: string;

  /** A soft background for communicating a favorable outcome, in a hovered state. */
  successHovered: string;

  /** A soft background for communicating a favorable outcome, in a pressed state. */
  successPressed: string;

  /** A vibrant background for communicating information or something in-progress. */
  informationBold: string;

  /** A vibrant background for communicating information or something in-progress, in a hovered state. */
  informationBoldHovered: string;

  /** A vibrant background for communicating information or something in-progress, in a pressed state. */
  informationBoldPressed: string;

  /** A soft background for communicating information or something in-progress. */
  information: string;

  /** A soft background for communicating information or something in-progress, in a hovered state. */
  informationHovered: string;

  /** A soft background for communicating information or something in-progress, in a pressed state. */
  informationPressed: string;

  /** A vibrant background for communicating caution. */
  warningBold: string;

  /** A vibrant background for communicating caution, in a hovered state. */
  warningBoldHovered: string;

  /** A vibrant background for communicating caution, in a pressed state. */
  warningBoldPressed: string;

  /** A soft background for communicating caution. */
  warning: string;

  /** A soft background for communicating caution, in a hovered state. */
  warningHovered: string;

  /** A soft background for communicating caution, in a pressed state. */
  warningPressed: string;

  /** A vibrant background for communicating critical information. */
  dangerBold: string;

  /** A vibrant background for communicating critical information, in a hovered state. */
  dangerBoldHovered: string;

  /** A vibrant background for communicating critical information, in a pressed state. */
  dangerBoldPressed: string;

  /** A soft background for communicating critical information. */
  danger: string;

  /** A soft background for communicating critical information, in a hovered state. */
  dangerHovered: string;

  /** A soft background for communicating critical information, in a pressed state. */
  dangerPressed: string;

  /** A vibrant background for communicating change, something new, or provide help. */
  discoveryBold: string;

  /** A vibrant background for communicating change, something new, or provide help, in a hovered state. */
  discoveryBoldHovered: string;

  /** A vibrant background for communicating change, something new, or provide help, in a pressed state. */
  discoveryBoldPressed: string;

  /** A soft background for communicating change, something new, or provide help. */
  discovery: string;

  /** A soft background for communicating change, something new, or provide help, in a hovered state. */
  discoveryHovered: string;

  /** A soft background for communicating change, something new, or provide help, in a pressed state. */
  discoveryPressed: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons. */
  selectedBold: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons, in a hovered state. */
  selectedBoldHovered: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons, in a pressed state. */
  selectedBoldPressed: string;

  /** Use for the background of elements in a selected state, such as menu items. */
  selected: string;

  /** Use for the background of elements in a selected state, such as menu items, in a hovered state. */
  selectedHovered: string;

  /** Use for the background of elements in a selected state, such as menu items, in a pressed state. */
  selectedPressed: string;
}

export interface ColorTokens {
  text: TextColorTokens;
  icon: IconColorTokens;
  border: BorderColorTokens;
  background: BackgroundColorTokens;
}

export interface ShadowTokens {
  /** Use for the box shadow of raised elements. */
  surfaceRaised: string;

  /** Use for the box shadow of elements that sit on top of the UI, such as modals, dropdown menus, and popovers. */
  surfaceOverlay: string;
}

export interface ColorSchemeTokens {
  color: ColorTokens;
  shadow: ShadowTokens;
}

export interface BorderRadiusTokens {
  alert: string;
  button: string;
}

export interface CommonTokens {
  borderRadius: BorderRadiusTokens;
}

/** All predefined Pigment theme names. */
export type PredefinedThemeNames = "default";

export interface Theme {
  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: ColorSchemeTokens;

  /** Color scheme independent tokens. */
  common: CommonTokens;
}

export interface ThemeOverride {
  /** The base theme to override. */
  base: PredefinedThemeNames;

  /** The theme override. */
  override: DeepPartial<Theme>;
}

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** The theme to use, can be a predefined theme or custom. */
  theme?: ThemeOverride | PredefinedThemeNames;
}

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export interface CommonColorTokens {
  /** Use to represent the "white" color in the application. */
  white: string;

  /** Use to represent the "black" color in the application. */
  black: string;

  /** Use for focus rings of elements in a focus state. */
  focusRing: string;
}

export interface TextColorTokens {
  /** Use for primary text, such as body copy, and sentence case headers. */
  base: string;

  /** Use for secondary text, such as navigation, input field labels, and all caps subheadings. */
  subtle: string;

  /** Use for tertiary text, such as meta-data, breadcrumbs, input field placeholder and helper text. */
  subtlest: string;

  /** Use for text in a disabled state. */
  disabled: string;

  /* -------------------------------------------------------------------------------------------------
   * onSurface
   * -----------------------------------------------------------------------------------------------*/

  /** Use for text on a `background.surface`. */
  onSurface: string;

  /** Use for text on a `background.surfaceHover`. */
  onSurfaceHover: string;

  /** Use for text on a `background.surfaceActive`. */
  onSurfaceActive: string;

  /** Use for text on a `background.surfaceRaised`. */
  onSurfaceRaised: string;

  /** Use for text on a `background.surfaceRaisedHover`. */
  onSurfaceRaisedHover: string;

  /** Use for text on a `background.surfaceRaisedActive`. */
  onSurfaceRaisedActive: string;

  /** Use for text on a `background.surfaceOverlay`. */
  onSurfaceOverlay: string;

  /** Use for text on a `background.surfaceOverlayHover`. */
  onSurfaceOverlayHover: string;

  /** Use for text on a `background.surfaceOverlayActive`. */
  onSurfaceOverlayActive: string;

  /** Use for text on a `background.surfaceSunken`. */
  onSurfaceSunken: string;

  /** Use for text on a `background.surfaceSunkenHover`. */
  onSurfaceSunkenHover: string;

  /** Use for text on a `background.surfaceSunkenActive`. */
  onSurfaceSunkenActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onSolid
   * -----------------------------------------------------------------------------------------------*/

  /** Use for text on a `background.solidPrimary`. */
  onSolidPrimary: string;

  /** Use for text on a `background.solidPrimaryHover`. */
  onSolidPrimaryHover: string;

  /** Use for text on a `background.solidPrimaryActive`. */
  onSolidPrimaryActive: string;

  /** Use for text on a `background.solidAccent`. */
  onSolidAccent: string;

  /** Use for text on a `background.solidAccentHover`. */
  onSolidAccentHover: string;

  /** Use for text on a `background.solidAccentActive`. */
  onSolidAccentActive: string;

  /** Use for text on a `background.solidNeutral`. */
  onSolidNeutral: string;

  /** Use for text on a `background.solidNeutralHover`. */
  onSolidNeutralHover: string;

  /** Use for text on a `background.solidNeutralActive`. */
  onSolidNeutralActive: string;

  /** Use for text on a `background.solidSuccess`. */
  onSolidSuccess: string;

  /** Use for text on a `background.solidSuccessHover`. */
  onSolidSuccessHover: string;

  /** Use for text on a `background.solidSuccessActive`. */
  onSolidSuccessActive: string;

  /** Use for text on a `background.solidInfo`. */
  onSolidInfo: string;

  /** Use for text on a `background.solidInfoHover`. */
  onSolidInfoHover: string;

  /** Use for text on a `background.solidInfoActive`. */
  onSolidInfoActive: string;

  /** Use for text on a `background.solidWarning`. */
  onSolidWarning: string;

  /** Use for text on a `background.solidWarningHover`. */
  onSolidWarningHover: string;

  /** Use for text on a `background.solidWarningActive`. */
  onSolidWarningActive: string;

  /** Use for text on a `background.solidDanger`. */
  onSolidDanger: string;

  /** Use for text on a `background.solidDangerHover`. */
  onSolidDangerHover: string;

  /** Use for text on a `background.solidDangerActive`. */
  onSolidDangerActive: string;

  /** Use for text on a `background.solidHelp`. */
  onSolidHelp: string;

  /** Use for text on a `background.solidHelpHover`. */
  onSolidHelpHover: string;

  /** Use for text on a `background.solidHelpActive`. */
  onSolidHelpActive: string;

  /** Use for text on a `background.solidInput`. */
  onSolidInput: string;

  /** Use for text on a `background.solidInputHover`. */
  onSolidInputHover: string;

  /** Use for text on a `background.solidInputActive`. */
  onSolidInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onSoft
   * -----------------------------------------------------------------------------------------------*/
  /** Use for text on a `background.softPrimary`. */
  onSoftPrimary: string;

  /** Use for text on a `background.softPrimaryHover`. */
  onSoftPrimaryHover: string;

  /** Use for text on a `background.softPrimaryActive`. */
  onSoftPrimaryActive: string;

  /** Use for text on a `background.softAccent`. */
  onSoftAccent: string;

  /** Use for text on a `background.softAccentHover`. */
  onSoftAccentHover: string;

  /** Use for text on a `background.softAccentActive`. */
  onSoftAccentActive: string;

  /** Use for text on a `background.softNeutral`. */
  onSoftNeutral: string;

  /** Use for text on a `background.softNeutralHover`. */
  onSoftNeutralHover: string;

  /** Use for text on a `background.softNeutralActive`. */
  onSoftNeutralActive: string;

  /** Use for text on a `background.softSuccess`. */
  onSoftSuccess: string;

  /** Use for text on a `background.softSuccessHover`. */
  onSoftSuccessHover: string;

  /** Use for text on a `background.softSuccessActive`. */
  onSoftSuccessActive: string;

  /** Use for text on a `background.softInfo`. */
  onSoftInfo: string;

  /** Use for text on a `background.softInfoHover`. */
  onSoftInfoHover: string;

  /** Use for text on a `background.softInfoActive`. */
  onSoftInfoActive: string;

  /** Use for text on a `background.softWarning`. */
  onSoftWarning: string;

  /** Use for text on a `background.softWarningHover`. */
  onSoftWarningHover: string;

  /** Use for text on a `background.softWarningActive`. */
  onSoftWarningActive: string;

  /** Use for text on a `background.softDanger`. */
  onSoftDanger: string;

  /** Use for text on a `background.softDangerHover`. */
  onSoftDangerHover: string;

  /** Use for text on a `background.softDangerActive`. */
  onSoftDangerActive: string;

  /** Use for text on a `background.softHelp`. */
  onSoftHelp: string;

  /** Use for text on a `background.softHelpHover`. */
  onSoftHelpHover: string;

  /** Use for text on a `background.softHelpActive`. */
  onSoftHelpActive: string;

  /** Use for text on a `background.softInput`. */
  onSoftInput: string;

  /** Use for text on a `background.softInputHover`. */
  onSoftInputHover: string;

  /** Use for text on a `background.softInputActive`. */
  onSoftInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onOutlined
   * -----------------------------------------------------------------------------------------------*/

  /** Use for text on a `background.outlinedPrimary`. */
  onOutlinedPrimary: string;

  /** Use for text on a `background.outlinedPrimaryHover`. */
  onOutlinedPrimaryHover: string;

  /** Use for text on a `background.outlinedPrimaryActive`. */
  onOutlinedPrimaryActive: string;

  /** Use for text on a `background.outlinedAccent`. */
  onOutlinedAccent: string;

  /** Use for text on a `background.outlinedAccentHover`. */
  onOutlinedAccentHover: string;

  /** Use for text on a `background.outlinedAccentActive`. */
  onOutlinedAccentActive: string;

  /** Use for text on a `background.outlinedNeutral`. */
  onOutlinedNeutral: string;

  /** Use for text on a `background.outlinedNeutralHover`. */
  onOutlinedNeutralHover: string;

  /** Use for text on a `background.outlinedNeutralActive`. */
  onOutlinedNeutralActive: string;

  /** Use for text on a `background.outlinedSuccess`. */
  onOutlinedSuccess: string;

  /** Use for text on a `background.outlinedSuccessHover`. */
  onOutlinedSuccessHover: string;

  /** Use for text on a `background.outlinedSuccessActive`. */
  onOutlinedSuccessActive: string;

  /** Use for text on a `background.outlinedInfo`. */
  onOutlinedInfo: string;

  /** Use for text on a `background.outlinedInfoHover`. */
  onOutlinedInfoHover: string;

  /** Use for text on a `background.outlinedInfoActive`. */
  onOutlinedInfoActive: string;

  /** Use for text on a `background.outlinedWarning`. */
  onOutlinedWarning: string;

  /** Use for text on a `background.outlinedWarningHover`. */
  onOutlinedWarningHover: string;

  /** Use for text on a `background.outlinedWarningActive`. */
  onOutlinedWarningActive: string;

  /** Use for text on a `background.outlinedDanger`. */
  onOutlinedDanger: string;

  /** Use for text on a `background.outlinedDangerHover`. */
  onOutlinedDangerHover: string;

  /** Use for text on a `background.outlinedDangerActive`. */
  onOutlinedDangerActive: string;

  /** Use for text on a `background.outlinedHelp`. */
  onOutlinedHelp: string;

  /** Use for text on a `background.outlinedHelpHover`. */
  onOutlinedHelpHover: string;

  /** Use for text on a `background.outlinedHelpActive`. */
  onOutlinedHelpActive: string;

  /** Use for text on a `background.outlinedInput`. */
  onOutlinedInput: string;

  /** Use for text on a `background.outlinedInputHover`. */
  onOutlinedInputHover: string;

  /** Use for text on a `background.outlinedInputActive`. */
  onOutlinedInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onGhost
   * -----------------------------------------------------------------------------------------------*/

  /** Use for text on a `background.ghostPrimary`. */
  onGhostPrimary: string;

  /** Use for text on a `background.ghostPrimaryHover`. */
  onGhostPrimaryHover: string;

  /** Use for text on a `background.ghostPrimaryActive`. */
  onGhostPrimaryActive: string;

  /** Use for text on a `background.ghostAccent`. */
  onGhostAccent: string;

  /** Use for text on a `background.ghostAccentHover`. */
  onGhostAccentHover: string;

  /** Use for text on a `background.ghostAccentActive`. */
  onGhostAccentActive: string;

  /** Use for text on a `background.ghostNeutral`. */
  onGhostNeutral: string;

  /** Use for text on a `background.ghostNeutralHover`. */
  onGhostNeutralHover: string;

  /** Use for text on a `background.ghostNeutralActive`. */
  onGhostNeutralActive: string;

  /** Use for text on a `background.ghostSuccess`. */
  onGhostSuccess: string;

  /** Use for text on a `background.ghostSuccessHover`. */
  onGhostSuccessHover: string;

  /** Use for text on a `background.ghostSuccessActive`. */
  onGhostSuccessActive: string;

  /** Use for text on a `background.ghostInfo`. */
  onGhostInfo: string;

  /** Use for text on a `background.ghostInfoHover`. */
  onGhostInfoHover: string;

  /** Use for text on a `background.ghostInfoActive`. */
  onGhostInfoActive: string;

  /** Use for text on a `background.ghostWarning`. */
  onGhostWarning: string;

  /** Use for text on a `background.ghostWarningHover`. */
  onGhostWarningHover: string;

  /** Use for text on a `background.ghostWarningActive`. */
  onGhostWarningActive: string;

  /** Use for text on a `background.ghostDanger`. */
  onGhostDanger: string;

  /** Use for text on a `background.ghostDangerHover`. */
  onGhostDangerHover: string;

  /** Use for text on a `background.ghostDangerActive`. */
  onGhostDangerActive: string;

  /** Use for text on a `background.ghostHelp`. */
  onGhostHelp: string;

  /** Use for text on a `background.ghostHelpHover`. */
  onGhostHelpHover: string;

  /** Use for text on a `background.ghostHelpActive`. */
  onGhostHelpActive: string;

  /** Use for text on a `background.ghostInput`. */
  onGhostInput: string;

  /** Use for text on a `background.ghostInputHover`. */
  onGhostInputHover: string;

  /** Use for text on a `background.ghostInputActive`. */
  onGhostInputActive: string;
}

export interface IconColorTokens {
  /** Use for icons paired with `text.base`. */
  base: string;

  /** Use for icons paired with `text.subtle`. */
  subtle: string;

  /** Use for icons paired with `text.subtlest`. */
  subtlest: string;

  /** Use for icons in a disabled state. */
  disabled: string;

  /* -------------------------------------------------------------------------------------------------
   * onSurface
   * -----------------------------------------------------------------------------------------------*/

  /** Use for icons paired with `text.onSurface`. */
  onSurface: string;

  /** Use for icons paired with `text.onSurfaceHover`. */
  onSurfaceHover: string;

  /** Use for icons paired with `text.onSurfaceActive`. */
  onSurfaceActive: string;

  /** Use for icons paired with `text.onSurfaceRaised`. */
  onSurfaceRaised: string;

  /** Use for icons paired with `text.onSurfaceRaisedHover`. */
  onSurfaceRaisedHover: string;

  /** Use for icons paired with `text.onSurfaceRaisedActive`. */
  onSurfaceRaisedActive: string;

  /** Use for icons paired with `text.onSurfaceOverlay`. */
  onSurfaceOverlay: string;

  /** Use for icons paired with `text.onSurfaceOverlayHover`. */
  onSurfaceOverlayHover: string;

  /** Use for icons paired with `text.onSurfaceOverlayActive`. */
  onSurfaceOverlayActive: string;

  /** Use for icons paired with `text.onSurfaceSunken`. */
  onSurfaceSunken: string;

  /** Use for icons paired with `text.onSurfaceSunkenHover`. */
  onSurfaceSunkenHover: string;

  /** Use for icons paired with `text.onSurfaceSunkenActive`. */
  onSurfaceSunkenActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onSolid
   * -----------------------------------------------------------------------------------------------*/

  /** Use for icons paired with `text.onSolidPrimary`. */
  onSolidPrimary: string;

  /** Use for icons paired with `text.onSolidPrimaryHover`. */
  onSolidPrimaryHover: string;

  /** Use for icons paired with `text.onSolidPrimaryActive`. */
  onSolidPrimaryActive: string;

  /** Use for icons paired with `text.onSolidAccent`. */
  onSolidAccent: string;

  /** Use for icons paired with `text.onSolidAccentHover`. */
  onSolidAccentHover: string;

  /** Use for icons paired with `text.onSolidAccentActive`. */
  onSolidAccentActive: string;

  /** Use for icons paired with `text.onSolidNeutral`. */
  onSolidNeutral: string;

  /** Use for icons paired with `text.onSolidNeutralHover`. */
  onSolidNeutralHover: string;

  /** Use for icons paired with `text.onSolidNeutralActive`. */
  onSolidNeutralActive: string;

  /** Use for icons paired with `text.onSolidSuccess`. */
  onSolidSuccess: string;

  /** Use for icons paired with `text.onSolidSuccessHover`. */
  onSolidSuccessHover: string;

  /** Use for icons paired with `text.onSolidSuccessActive`. */
  onSolidSuccessActive: string;

  /** Use for icons paired with `text.onSolidInfo`. */
  onSolidInfo: string;

  /** Use for icons paired with `text.onSolidInfoHover`. */
  onSolidInfoHover: string;

  /** Use for icons paired with `text.onSolidInfoActive`. */
  onSolidInfoActive: string;

  /** Use for icons paired with `text.onSolidWarning`. */
  onSolidWarning: string;

  /** Use for icons paired with `text.onSolidWarningHover`. */
  onSolidWarningHover: string;

  /** Use for icons paired with `text.onSolidWarningActive`. */
  onSolidWarningActive: string;

  /** Use for icons paired with `text.onSolidDanger`. */
  onSolidDanger: string;

  /** Use for icons paired with `text.onSolidDangerHover`. */
  onSolidDangerHover: string;

  /** Use for icons paired with `text.onSolidDangerActive`. */
  onSolidDangerActive: string;

  /** Use for icons paired with `text.onSolidHelp`. */
  onSolidHelp: string;

  /** Use for icons paired with `text.onSolidHelpHover`. */
  onSolidHelpHover: string;

  /** Use for icons paired with `text.onSolidHelpActive`. */
  onSolidHelpActive: string;

  /** Use for icons paired with `text.onSolidInput`. */
  onSolidInput: string;

  /** Use for icons paired with `text.onSolidInputHover`. */
  onSolidInputHover: string;

  /** Use for icons paired with `text.onSolidInputActive`. */
  onSolidInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onSoft
   * -----------------------------------------------------------------------------------------------*/
  /** Use for icons paired with `text.onSoftPrimary`. */
  onSoftPrimary: string;

  /** Use for icons paired with `text.onSoftPrimaryHover`. */
  onSoftPrimaryHover: string;

  /** Use for icons paired with `text.onSoftPrimaryActive`. */
  onSoftPrimaryActive: string;

  /** Use for icons paired with `text.onSoftAccent`. */
  onSoftAccent: string;

  /** Use for icons paired with `text.onSoftAccentHover`. */
  onSoftAccentHover: string;

  /** Use for icons paired with `text.onSoftAccentActive`. */
  onSoftAccentActive: string;

  /** Use for icons paired with `text.onSoftNeutral`. */
  onSoftNeutral: string;

  /** Use for icons paired with `text.onSoftNeutralHover`. */
  onSoftNeutralHover: string;

  /** Use for icons paired with `text.onSoftNeutralActive`. */
  onSoftNeutralActive: string;

  /** Use for icons paired with `text.onSoftSuccess`. */
  onSoftSuccess: string;

  /** Use for icons paired with `text.onSoftSuccessHover`. */
  onSoftSuccessHover: string;

  /** Use for icons paired with `text.onSoftSuccessActive`. */
  onSoftSuccessActive: string;

  /** Use for icons paired with `text.onSoftInfo`. */
  onSoftInfo: string;

  /** Use for icons paired with `text.onSoftInfoHover`. */
  onSoftInfoHover: string;

  /** Use for icons paired with `text.onSoftInfoActive`. */
  onSoftInfoActive: string;

  /** Use for icons paired with `text.onSoftWarning`. */
  onSoftWarning: string;

  /** Use for icons paired with `text.onSoftWarningHover`. */
  onSoftWarningHover: string;

  /** Use for icons paired with `text.onSoftWarningActive`. */
  onSoftWarningActive: string;

  /** Use for icons paired with `text.onSoftDanger`. */
  onSoftDanger: string;

  /** Use for icons paired with `text.onSoftDangerHover`. */
  onSoftDangerHover: string;

  /** Use for icons paired with `text.onSoftDangerActive`. */
  onSoftDangerActive: string;

  /** Use for icons paired with `text.onSoftHelp`. */
  onSoftHelp: string;

  /** Use for icons paired with `text.onSoftHelpHover`. */
  onSoftHelpHover: string;

  /** Use for icons paired with `text.onSoftHelpActive`. */
  onSoftHelpActive: string;

  /** Use for icons paired with `text.onSoftInput`. */
  onSoftInput: string;

  /** Use for icons paired with `text.onSoftInputHover`. */
  onSoftInputHover: string;

  /** Use for icons paired with `text.onSoftInputActive`. */
  onSoftInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onOutlined
   * -----------------------------------------------------------------------------------------------*/

  /** Use for icons paired with `text.onOutlinedPrimary`. */
  onOutlinedPrimary: string;

  /** Use for icons paired with `text.onOutlinedPrimaryHover`. */
  onOutlinedPrimaryHover: string;

  /** Use for icons paired with `text.onOutlinedPrimaryActive`. */
  onOutlinedPrimaryActive: string;

  /** Use for icons paired with `text.onOutlinedAccent`. */
  onOutlinedAccent: string;

  /** Use for icons paired with `text.onOutlinedAccentHover`. */
  onOutlinedAccentHover: string;

  /** Use for icons paired with `text.onOutlinedAccentActive`. */
  onOutlinedAccentActive: string;

  /** Use for icons paired with `text.onOutlinedNeutral`. */
  onOutlinedNeutral: string;

  /** Use for icons paired with `text.onOutlinedNeutralHover`. */
  onOutlinedNeutralHover: string;

  /** Use for icons paired with `text.onOutlinedNeutralActive`. */
  onOutlinedNeutralActive: string;

  /** Use for icons paired with `text.onOutlinedSuccess`. */
  onOutlinedSuccess: string;

  /** Use for icons paired with `text.onOutlinedSuccessHover`. */
  onOutlinedSuccessHover: string;

  /** Use for icons paired with `text.onOutlinedSuccessActive`. */
  onOutlinedSuccessActive: string;

  /** Use for icons paired with `text.onOutlinedInfo`. */
  onOutlinedInfo: string;

  /** Use for icons paired with `text.onOutlinedInfoHover`. */
  onOutlinedInfoHover: string;

  /** Use for icons paired with `text.onOutlinedInfoActive`. */
  onOutlinedInfoActive: string;

  /** Use for icons paired with `text.onOutlinedWarning`. */
  onOutlinedWarning: string;

  /** Use for icons paired with `text.onOutlinedWarningHover`. */
  onOutlinedWarningHover: string;

  /** Use for icons paired with `text.onOutlinedWarningActive`. */
  onOutlinedWarningActive: string;

  /** Use for icons paired with `text.onOutlinedDanger`. */
  onOutlinedDanger: string;

  /** Use for icons paired with `text.onOutlinedDangerHover`. */
  onOutlinedDangerHover: string;

  /** Use for icons paired with `text.onOutlinedDangerActive`. */
  onOutlinedDangerActive: string;

  /** Use for icons paired with `text.onOutlinedHelp`. */
  onOutlinedHelp: string;

  /** Use for icons paired with `text.onOutlinedHelpHover`. */
  onOutlinedHelpHover: string;

  /** Use for icons paired with `text.onOutlinedHelpActive`. */
  onOutlinedHelpActive: string;

  /** Use for icons paired with `text.onOutlinedInput`. */
  onOutlinedInput: string;

  /** Use for icons paired with `text.onOutlinedInputHover`. */
  onOutlinedInputHover: string;

  /** Use for icons paired with `text.onOutlinedInputActive`. */
  onOutlinedInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * onGhost
   * -----------------------------------------------------------------------------------------------*/

  /** Use for icons paired with `text.onGhostPrimary`. */
  onGhostPrimary: string;

  /** Use for icons paired with `text.onGhostPrimaryHover`. */
  onGhostPrimaryHover: string;

  /** Use for icons paired with `text.onGhostPrimaryActive`. */
  onGhostPrimaryActive: string;

  /** Use for icons paired with `text.onGhostAccent`. */
  onGhostAccent: string;

  /** Use for icons paired with `text.onGhostAccentHover`. */
  onGhostAccentHover: string;

  /** Use for icons paired with `text.onGhostAccentActive`. */
  onGhostAccentActive: string;

  /** Use for icons paired with `text.onGhostNeutral`. */
  onGhostNeutral: string;

  /** Use for icons paired with `text.onGhostNeutralHover`. */
  onGhostNeutralHover: string;

  /** Use for icons paired with `text.onGhostNeutralActive`. */
  onGhostNeutralActive: string;

  /** Use for icons paired with `text.onGhostSuccess`. */
  onGhostSuccess: string;

  /** Use for icons paired with `text.onGhostSuccessHover`. */
  onGhostSuccessHover: string;

  /** Use for icons paired with `text.onGhostSuccessActive`. */
  onGhostSuccessActive: string;

  /** Use for icons paired with `text.onGhostInfo`. */
  onGhostInfo: string;

  /** Use for icons paired with `text.onGhostInfoHover`. */
  onGhostInfoHover: string;

  /** Use for icons paired with `text.onGhostInfoActive`. */
  onGhostInfoActive: string;

  /** Use for icons paired with `text.onGhostWarning`. */
  onGhostWarning: string;

  /** Use for icons paired with `text.onGhostWarningHover`. */
  onGhostWarningHover: string;

  /** Use for icons paired with `text.onGhostWarningActive`. */
  onGhostWarningActive: string;

  /** Use for icons paired with `text.onGhostDanger`. */
  onGhostDanger: string;

  /** Use for icons paired with `text.onGhostDangerHover`. */
  onGhostDangerHover: string;

  /** Use for icons paired with `text.onGhostDangerActive`. */
  onGhostDangerActive: string;

  /** Use for icons paired with `text.onGhostHelp`. */
  onGhostHelp: string;

  /** Use for icons paired with `text.onGhostHelpHover`. */
  onGhostHelpHover: string;

  /** Use for icons paired with `text.onGhostHelpActive`. */
  onGhostHelpActive: string;

  /** Use for icons paired with `text.onGhostInput`. */
  onGhostInput: string;

  /** Use for icons paired with `text.onGhostInputHover`. */
  onGhostInputHover: string;

  /** Use for icons paired with `text.onGhostInputActive`. */
  onGhostInputActive: string;
}

export interface BackgroundColorTokens {
  /** Use as the default background for the UI. */
  base: string;

  /** Use for background of elements in a disabled state. */
  disabled: string;

  /** Use for the screen overlay that appears with modal dialogs. */
  backdrop: string;

  /* -------------------------------------------------------------------------------------------------
   * subtle
   * -----------------------------------------------------------------------------------------------*/

  /** The default background for neutral elements. */
  subtle: string;

  /** The default background for neutral elements, in a hovered state. */
  subtleHover: string;

  /** The default background for neutral elements, in an active state. */
  subtleActive: string;

  /* -------------------------------------------------------------------------------------------------
   * subtlest
   * -----------------------------------------------------------------------------------------------*/

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items. */
  subtlest: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in a hovered state. */
  subtlestHover: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in an active state. */
  subtlestActive: string;

  /* -------------------------------------------------------------------------------------------------
   * inverse
   * -----------------------------------------------------------------------------------------------*/

  /** Use for background of elements on a solid background. */
  inverse: string;

  /** Use for background of elements on a solid background, in a hovered state. */
  inverseHover: string;

  /** Use for background of elements on a solid background, in an active state. */
  inverseActive: string;

  /* -------------------------------------------------------------------------------------------------
   * surface
   * -----------------------------------------------------------------------------------------------*/

  /** Use for the background of elements that has no elevation. */
  surface: string;

  /** Use for the background of elements that has no elevation, in a hovered state. */
  surfaceHover: string;

  /** Use for the background of elements that has no elevation, in an active state. */
  surfaceActive: string;

  /** Use for the background of elements that is slightly raised, such as a card. Combine with `shadow.surface.raised`. */
  surfaceRaised: string;

  /** Use for the background of elements that is slightly raised, in a hovered state. Combine with `shadow.surface.raised`. */
  surfaceRaisedHover: string;

  /** Use for the background of elements that is slightly raised, in an active state. Combine with `shadow.surface.raised`. */
  surfaceRaisedActive: string;

  /** Use for the background of elements that sit on top of they UI, such as dialogs or dropdown menus. Combine with `shadow.surface.overlay`. */
  surfaceOverlay: string;

  /** Use for the background of elements that sit on top of they UI, such as dialogs or dropdown menus, in a hovered state. Combine with `shadow.surface.overlay`. */
  surfaceOverlayHover: string;

  /** Use for the background of elements that sit on top of they UI, such as dialogs or dropdown menus, in an active state. Combine with `shadow.surface.overlay`. */
  surfaceOverlayActive: string;

  /** A secondary background for the UI commonly used to create depth or grouping items. */
  surfaceSunken: string;

  /** A secondary background for the UI commonly used to create depth or grouping items, in a hovered state. */
  surfaceSunkenHover: string;

  /** A secondary background for the UI commonly used to create depth or grouping items, in an active state. */
  surfaceSunkenActive: string;

  /* -------------------------------------------------------------------------------------------------
   * solid
   * -----------------------------------------------------------------------------------------------*/

  /** A vibrant background option for elements used to reinforce your brand, but with more emphasis. */
  solidPrimary: string;

  /** A vibrant background option for elements used to reinforce your brand, but with more emphasis, in a hovered state. */
  solidPrimaryHover: string;

  /** A vibrant background option for elements used to reinforce your brand, but with more emphasis, in an active state. */
  solidPrimaryActive: string;

  /** A vibrant background option for elements in a selected state, such as checkboxes and radio buttons. */
  solidAccent: string;

  /** A vibrant background option for elements in a selected state, such as checkboxes and radio buttons, in a hovered state. */
  solidAccentHover: string;

  /** A vibrant background option for elements in a selected state, such as checkboxes and radio buttons, in an active state. */
  solidAccentActive: string;

  /** A vibrant background option for neutral UI elements. */
  solidNeutral: string;

  /** A vibrant background option for neutral UI elements, in a hovered state. */
  solidNeutralHover: string;

  /** A vibrant background option for neutral UI elements, in an active state. */
  solidNeutralActive: string;

  /** A vibrant background option for communicating a favorable outcome. */
  solidSuccess: string;

  /** A vibrant background option for communicating a favorable outcome, in a hovered state. */
  solidSuccessHover: string;

  /** A vibrant background option for communicating a favorable outcome, in an active state. */
  solidSuccessActive: string;

  /** A vibrant background option for communicating information or something in-progress. */
  solidInfo: string;

  /** A vibrant background option for communicating information or something in-progress, in a hovered state. */
  solidInfoHover: string;

  /** A vibrant background option for communicating information or something in-progress, in an active state. */
  solidInfoActive: string;

  /** A vibrant background option for communicating caution, such as warning alerts. */
  solidWarning: string;

  /** A vibrant background option for communicating caution, such as warning alerts, in a hovered state. */
  solidWarningHover: string;

  /** A vibrant background option for communicating caution, such as warning alerts, in an active state. */
  solidWarningActive: string;

  /** A vibrant background option for communicating critical information, such as in danger buttons and error alerts. */
  solidDanger: string;

  /** A vibrant background option for communicating critical information, such as in danger buttons and error alerts, in a hovered state. */
  solidDangerHover: string;

  /** A vibrant background option for communicating critical information, such as in danger buttons and error alerts, in an active state. */
  solidDangerActive: string;

  /** A vibrant background option for communicating change or something new. */
  solidHelp: string;

  /** A vibrant background option for communicating change or something new, in a hovered state. */
  solidHelpHover: string;

  /** A vibrant background option for communicating change or something new, in an active state. */
  solidHelpActive: string;

  /** A vibrant background option for form UI elements, such as text fields, checkboxes, and radio buttons. */
  solidInput: string;

  /** A vibrant background option for form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  solidInputHover: string;

  /** A vibrant background option for form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  solidInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * soft
   * -----------------------------------------------------------------------------------------------*/

  /** A subtle background option for elements used to reinforce your brand. */
  softPrimary: string;

  /** A subtle background option for elements used to reinforce your brand, in a hovered state. */
  softPrimaryHover: string;

  /** A subtle background option for elements used to reinforce your brand, in an active state. */
  softPrimaryActive: string;

  /** A subtle background option for elements in a selected state, such as menu items. */
  softAccent: string;

  /** A subtle background option for elements in a selected state, such as menu items. */
  softAccentHover: string;

  /** A subtle background option for elements in a selected state, such as menu items. */
  softAccentActive: string;

  /** A subtle background option for neutral UI elements. */
  softNeutral: string;

  /** A subtle background option for neutral UI elements, in a hovered state. */
  softNeutralHover: string;

  /** A subtle background option for neutral UI elements, in an active state. */
  softNeutralActive: string;

  /** A subtle background option for communicating a favorable outcome. */
  softSuccess: string;

  /** A subtle background option for communicating a favorable outcome, in a hovered state. */
  softSuccessHover: string;

  /** A subtle background option for communicating a favorable outcome, in an active state. */
  softSuccessActive: string;

  /** A subtle background option for communicating information or something in-progress. */
  softInfo: string;

  /** A subtle background option for communicating information or something in-progress, in a hovered state. */
  softInfoHover: string;

  /** A subtle background option for communicating information or something in-progress, in an active state. */
  softInfoActive: string;

  /** A subtle background option for communicating caution. */
  softWarning: string;

  /** A subtle background option for communicating caution, in a hovered state. */
  softWarningHover: string;

  /** A subtle background option for communicating caution, in an active state. */
  softWarningActive: string;

  /** A subtle background option for communicating critical information. */
  softDanger: string;

  /** A subtle background option for communicating critical information, in a hovered state. */
  softDangerHover: string;

  /** A subtle background option for communicating critical information, in an active state. */
  softDangerActive: string;

  /** A subtle background option for communicating change or something new. */
  softHelp: string;

  /** A subtle background option for communicating change or something new, in a hovered state. */
  softHelpHover: string;

  /** A subtle background option for communicating change or something new, in an active state. */
  softHelpActive: string;

  /** A subtle background option for form UI elements, such as text fields, checkboxes, and radio buttons. */
  softInput: string;

  /** A subtle background option for form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  softInputHover: string;

  /** A subtle background option for form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  softInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * outlined
   * -----------------------------------------------------------------------------------------------*/

  /** Use for background of outlined elements used to reinforce your brand. */
  outlinedPrimary: string;

  /** Use for background of outlined elements used to reinforce your brand, in a hovered state. */
  outlinedPrimaryHover: string;

  /** Use for background of outlined elements used to reinforce your brand, in an active state. */
  outlinedPrimaryActive: string;

  /** Use for background of outlined elements in a selected state. */
  outlinedAccent: string;

  /** Use for background of outlined elements in a selected state, in a hovered state. */
  outlinedAccentHover: string;

  /** Use for background of outlined elements in a selected state, in an active state. */
  outlinedAccentActive: string;

  /** Use for background of outlined neutral elements. */
  outlinedNeutral: string;

  /** Use for background of outlined neutral elements, in a hovered state. */
  outlinedNeutralHover: string;

  /** Use for background of outlined neutral elements, in an active state. */
  outlinedNeutralActive: string;

  /** Use for background of outlined elements communicating a favorable outcome. */
  outlinedSuccess: string;

  /** Use for background of outlined elements communicating a favorable outcome, in a hovered state. */
  outlinedSuccessHover: string;

  /** Use for background of outlined elements communicating a favorable outcome, in an active state. */
  outlinedSuccessActive: string;

  /** Use for background of outlined elements communicating information or something in-progress. */
  outlinedInfo: string;

  /** Use for background of outlined elements communicating information or something in-progress, in a hovered state. */
  outlinedInfoHover: string;

  /** Use for background of outlined elements communicating information or something in-progress, in an active state. */
  outlinedInfoActive: string;

  /** Use for background of outlined elements communicating caution. */
  outlinedWarning: string;

  /** Use for background of outlined elements communicating caution, in a hovered state. */
  outlinedWarningHover: string;

  /** Use for background of outlined elements communicating caution, in an active state. */
  outlinedWarningActive: string;

  /** Use for background of outlined elements communicating critical information. */
  outlinedDanger: string;

  /** Use for background of outlined elements communicating critical information, in a hovered state. */
  outlinedDangerHover: string;

  /** Use for background of outlined elements communicating critical information, in an active state. */
  outlinedDangerActive: string;

  /** Use for background of outlined elements communicating change or something new. */
  outlinedHelp: string;

  /** Use for background of outlined elements communicating change or something new, in a hovered state. */
  outlinedHelpHover: string;

  /** Use for background of outlined elements communicating change or something new, in an active state. */
  outlinedHelpActive: string;

  /** Use for background of outlined form UI elements, such as text fields, checkboxes, and radio buttons. */
  outlinedInput: string;

  /** Use for background of outlined form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  outlinedInputHover: string;

  /** Use for background of outlined form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  outlinedInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * ghost
   * -----------------------------------------------------------------------------------------------*/

  /** Use for the background of elements used to reinforce your brand, that appear to have no background in a resting state. */
  ghostPrimary: string;

  /** Use for the background of elements used to reinforce your brand, that appear to have no background in a resting state, in a hovered state. */
  ghostPrimaryHover: string;

  /** Use for the background of elements used to reinforce your brand, that appear to have no background in a resting state, in an active state. */
  ghostPrimaryActive: string;

  /** Use for the background of elements in a selected state, that appear to have no background in a resting state. */
  ghostAccent: string;

  /** Use for the background of elements in a selected state, that appear to have no background in a resting state, in a hovered state. */
  ghostAccentHover: string;

  /** Use for the background of elements in a selected state, that appear to have no background in a resting state, in an active state. */
  ghostAccentActive: string;

  /** Use for the background of neutral elements, that appear to have no background in a resting state. */
  ghostNeutral: string;

  /** Use for the background of neutral elements, that appear to have no background in a resting state, in a hovered state. */
  ghostNeutralHover: string;

  /** Use for the background of neutral elements, that appear to have no background in a resting state, in an active state. */
  ghostNeutralActive: string;

  /** Use for the background of elements communicating a favorable outcome, that appear to have no background in a resting state. */
  ghostSuccess: string;

  /** Use for the background of elements communicating a favorable outcome, that appear to have no background in a resting state, in a hovered state. */
  ghostSuccessHover: string;

  /** Use for the background of elements communicating a favorable outcome, that appear to have no background in a resting state, in an active state. */
  ghostSuccessActive: string;

  /** Use for the background of elements communicating information or something in-progress, that appear to have no background in a resting state. */
  ghostInfo: string;

  /** Use for the background of elements communicating information or something in-progress, that appear to have no background in a resting state, in a hovered state. */
  ghostInfoHover: string;

  /** Use for the background of elements communicating information or something in-progress, that appear to have no background in a resting state, in an active state. */
  ghostInfoActive: string;

  /** Use for the background of elements communicating caution, that appear to have no background in a resting state. */
  ghostWarning: string;

  /** Use for the background of elements communicating caution, that appear to have no background in a resting state, in a hovered state. */
  ghostWarningHover: string;

  /** Use for the background of elements communicating caution, that appear to have no background in a resting state, in an active state. */
  ghostWarningActive: string;

  /** Use for the background of elements communicating critical information, that appear to have no background in a resting state. */
  ghostDanger: string;

  /** Use for the background of elements communicating critical information, that appear to have no background in a resting state, in a hovered state. */
  ghostDangerHover: string;

  /** Use for the background of elements communicating critical information, that appear to have no background in a resting state, in an active state. */
  ghostDangerActive: string;

  /** Use for the background of elements communicating change or something new, that appear to have no background in a resting state. */
  ghostHelp: string;

  /** Use for the background of elements communicating change or something new, that appear to have no background in a resting state, in a hovered state. */
  ghostHelpHover: string;

  /** Use for the background of elements communicating change or something new, that appear to have no background in a resting state, in an active state. */
  ghostHelpActive: string;

  /** Use for background of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons. */
  ghostInput: string;

  /** Use for background of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  ghostInputHover: string;

  /** Use for background of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons, in an active state. */
  ghostInputActive: string;
}

export interface BorderColorTokens {
  /** Use to visually group or separate UI elements, such as flat cards or side panel dividers. */
  base: string;

  /** Use for borders of elements in a disabled state. */
  disabled: string;

  /* -------------------------------------------------------------------------------------------------
   * surface
   * -----------------------------------------------------------------------------------------------*/

  /** Use for border of `background.surface` elements. */
  surface: string;

  /** Use for border of `background.surfaceHover` elements. */
  surfaceHover: string;

  /** Use for border of `background.surfaceActive` elements. */
  surfaceActive: string;

  /** Use for border of `background.surfaceRaised` elements. */
  surfaceRaised: string;

  /** Use for border of `background.surfaceRaisedHover` elements. */
  surfaceRaisedHover: string;

  /** Use for border of `background.surfaceRaisedActive` elements. */
  surfaceRaisedActive: string;

  /** Use for border of `background.surfaceOverlay` elements. */
  surfaceOverlay: string;

  /** Use for border of `background.surfaceOverlayHover` elements. */
  surfaceOverlayHover: string;

  /** Use for border of `background.surfaceOverlayActive` elements. */
  surfaceOverlayActive: string;

  /** Use for border of `background.surfaceSunken` elements. */
  surfaceSunken: string;

  /** Use for border of `background.surfaceSunkenHover` elements. */
  surfaceSunkenHover: string;

  /** Use for border of `background.surfaceSunkenActive` elements. */
  surfaceSunkenActive: string;

  /* -------------------------------------------------------------------------------------------------
   * solid
   * -----------------------------------------------------------------------------------------------*/

  /** A vibrant border option for elements used to reinforce your brand, but with more emphasis. */
  solidPrimary: string;

  /** A vibrant border option for elements used to reinforce your brand, but with more emphasis, in a hovered state. */
  solidPrimaryHover: string;

  /** A vibrant border option for elements used to reinforce your brand, but with more emphasis, in an active state. */
  solidPrimaryActive: string;

  /** A vibrant border option for elements in a selected state, such as checkboxes and radio buttons. */
  solidAccent: string;

  /** A vibrant border option for elements in a selected state, such as checkboxes and radio buttons, in a hovered state. */
  solidAccentHover: string;

  /** A vibrant border option for elements in a selected state, such as checkboxes and radio buttons, in an active state. */
  solidAccentActive: string;

  /** A vibrant border option for neutral UI elements. */
  solidNeutral: string;

  /** A vibrant border option for neutral UI elements, in a hovered state. */
  solidNeutralHover: string;

  /** A vibrant border option for neutral UI elements, in an active state. */
  solidNeutralActive: string;

  /** A vibrant border option for communicating a favorable outcome. */
  solidSuccess: string;

  /** A vibrant border option for communicating a favorable outcome, in a hovered state. */
  solidSuccessHover: string;

  /** A vibrant border option for communicating a favorable outcome, in an active state. */
  solidSuccessActive: string;

  /** A vibrant border option for communicating information or something in-progress. */
  solidInfo: string;

  /** A vibrant border option for communicating information or something in-progress, in a hovered state. */
  solidInfoHover: string;

  /** A vibrant border option for communicating information or something in-progress, in an active state. */
  solidInfoActive: string;

  /** A vibrant border option for communicating caution, such as warning alerts. */
  solidWarning: string;

  /** A vibrant border option for communicating caution, such as warning alerts, in a hovered state. */
  solidWarningHover: string;

  /** A vibrant border option for communicating caution, such as warning alerts, in an active state. */
  solidWarningActive: string;

  /** A vibrant border option for communicating critical information, such as in danger buttons and error alerts. */
  solidDanger: string;

  /** A vibrant border option for communicating critical information, such as in danger buttons and error alerts, in a hovered state. */
  solidDangerHover: string;

  /** A vibrant border option for communicating critical information, such as in danger buttons and error alerts, in an active state. */
  solidDangerActive: string;

  /** A vibrant border option for communicating change or something new. */
  solidHelp: string;

  /** A vibrant border option for communicating change or something new, in a hovered state. */
  solidHelpHover: string;

  /** A vibrant border option for communicating change or something new, in an active state. */
  solidHelpActive: string;

  /** A vibrant border option for form UI elements, such as text fields, checkboxes, and radio buttons. */
  solidInput: string;

  /** A vibrant border option for form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  solidInputHover: string;

  /** A vibrant border option for form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  solidInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * soft
   * -----------------------------------------------------------------------------------------------*/

  /** A subtle border option for elements used to reinforce your brand. */
  softPrimary: string;

  /** A subtle border option for elements used to reinforce your brand, in a hovered state. */
  softPrimaryHover: string;

  /** A subtle border option for elements used to reinforce your brand, in an active state. */
  softPrimaryActive: string;

  /** A subtle border option for elements in a selected state, such as menu items. */
  softAccent: string;

  /** A subtle border option for elements in a selected state, such as menu items. */
  softAccentHover: string;

  /** A subtle border option for elements in a selected state, such as menu items. */
  softAccentActive: string;

  /** A subtle border option for neutral UI elements. */
  softNeutral: string;

  /** A subtle border option for neutral UI elements, in a hovered state. */
  softNeutralHover: string;

  /** A subtle border option for neutral UI elements, in an active state. */
  softNeutralActive: string;

  /** A subtle border option for communicating a favorable outcome. */
  softSuccess: string;

  /** A subtle border option for communicating a favorable outcome, in a hovered state. */
  softSuccessHover: string;

  /** A subtle border option for communicating a favorable outcome, in an active state. */
  softSuccessActive: string;

  /** A subtle border option for communicating information or something in-progress. */
  softInfo: string;

  /** A subtle border option for communicating information or something in-progress, in a hovered state. */
  softInfoHover: string;

  /** A subtle border option for communicating information or something in-progress, in an active state. */
  softInfoActive: string;

  /** A subtle border option for communicating caution. */
  softWarning: string;

  /** A subtle border option for communicating caution, in a hovered state. */
  softWarningHover: string;

  /** A subtle border option for communicating caution, in an active state. */
  softWarningActive: string;

  /** A subtle border option for communicating critical information. */
  softDanger: string;

  /** A subtle border option for communicating critical information, in a hovered state. */
  softDangerHover: string;

  /** A subtle border option for communicating critical information, in an active state. */
  softDangerActive: string;

  /** A subtle border option for communicating change or something new. */
  softHelp: string;

  /** A subtle border option for communicating change or something new, in a hovered state. */
  softHelpHover: string;

  /** A subtle border option for communicating change or something new, in an active state. */
  softHelpActive: string;

  /** A subtle border option for form UI elements, such as text fields, checkboxes, and radio buttons. */
  softInput: string;

  /** A subtle border option for form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  softInputHover: string;

  /** A subtle border option for form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  softInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * outlined
   * -----------------------------------------------------------------------------------------------*/

  /** Use for border of outlined elements used to reinforce your brand. */
  outlinedPrimary: string;

  /** Use for border of outlined elements used to reinforce your brand, in a hovered state. */
  outlinedPrimaryHover: string;

  /** Use for border of outlined elements used to reinforce your brand, in an active state. */
  outlinedPrimaryActive: string;

  /** Use for border of outlined elements in a selected state. */
  outlinedAccent: string;

  /** Use for border of outlined elements in a selected state, in a hovered state. */
  outlinedAccentHover: string;

  /** Use for border of outlined elements in a selected state, in an active state. */
  outlinedAccentActive: string;

  /** Use for border of outlined neutral elements. */
  outlinedNeutral: string;

  /** Use for border of outlined neutral elements, in a hovered state. */
  outlinedNeutralHover: string;

  /** Use for border of outlined neutral elements, in an active state. */
  outlinedNeutralActive: string;

  /** Use for border of outlined elements communicating a favorable outcome. */
  outlinedSuccess: string;

  /** Use for border of outlined elements communicating a favorable outcome, in a hovered state. */
  outlinedSuccessHover: string;

  /** Use for border of outlined elements communicating a favorable outcome, in an active state. */
  outlinedSuccessActive: string;

  /** Use for border of outlined elements communicating information or something in-progress. */
  outlinedInfo: string;

  /** Use for border of outlined elements communicating information or something in-progress, in a hovered state. */
  outlinedInfoHover: string;

  /** Use for border of outlined elements communicating information or something in-progress, in an active state. */
  outlinedInfoActive: string;

  /** Use for border of outlined elements communicating caution. */
  outlinedWarning: string;

  /** Use for border of outlined elements communicating caution, in a hovered state. */
  outlinedWarningHover: string;

  /** Use for border of outlined elements communicating caution, in an active state. */
  outlinedWarningActive: string;

  /** Use for border of outlined elements communicating critical information. */
  outlinedDanger: string;

  /** Use for border of outlined elements communicating critical information, in a hovered state. */
  outlinedDangerHover: string;

  /** Use for border of outlined elements communicating critical information, in an active state. */
  outlinedDangerActive: string;

  /** Use for border of outlined elements communicating change or something new. */
  outlinedHelp: string;

  /** Use for border of outlined elements communicating change or something new, in a hovered state. */
  outlinedHelpHover: string;

  /** Use for border of outlined elements communicating change or something new, in an active state. */
  outlinedHelpActive: string;

  /** Use for border of outlined form UI elements, such as text fields, checkboxes, and radio buttons. */
  outlinedInput: string;

  /** Use for border of outlined form UI elements, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  outlinedInputHover: string;

  /** Use for border of outlined form UI elements, such as text fields, checkboxes, and radio buttons, in an active state. */
  outlinedInputActive: string;

  /* -------------------------------------------------------------------------------------------------
   * ghost
   * -----------------------------------------------------------------------------------------------*/

  /** Use for the border of elements used to reinforce your brand, that appear to have no background in a resting state. */
  ghostPrimary: string;

  /** Use for the border of elements used to reinforce your brand, that appear to have no background in a resting state, in a hovered state. */
  ghostPrimaryHover: string;

  /** Use for the border of elements used to reinforce your brand, that appear to have no background in a resting state, in an active state. */
  ghostPrimaryActive: string;

  /** Use for the border of elements in a selected state, that appear to have no background in a resting state. */
  ghostAccent: string;

  /** Use for the border of elements in a selected state, that appear to have no background in a resting state, in a hovered state. */
  ghostAccentHover: string;

  /** Use for the border of elements in a selected state, that appear to have no background in a resting state, in an active state. */
  ghostAccentActive: string;

  /** Use for the border of neutral elements, that appear to have no background in a resting state. */
  ghostNeutral: string;

  /** Use for the border of neutral elements, that appear to have no background in a resting state, in a hovered state. */
  ghostNeutralHover: string;

  /** Use for the border of neutral elements, that appear to have no background in a resting state, in an active state. */
  ghostNeutralActive: string;

  /** Use for the border of elements communicating a favorable outcome, that appear to have no background in a resting state. */
  ghostSuccess: string;

  /** Use for the border of elements communicating a favorable outcome, that appear to have no background in a resting state, in a hovered state. */
  ghostSuccessHover: string;

  /** Use for the border of elements communicating a favorable outcome, that appear to have no background in a resting state, in an active state. */
  ghostSuccessActive: string;

  /** Use for the border of elements communicating information or something in-progress, that appear to have no background in a resting state. */
  ghostInfo: string;

  /** Use for the border of elements communicating information or something in-progress, that appear to have no background in a resting state, in a hovered state. */
  ghostInfoHover: string;

  /** Use for the border of elements communicating information or something in-progress, that appear to have no background in a resting state, in an active state. */
  ghostInfoActive: string;

  /** Use for the border of elements communicating caution, that appear to have no background in a resting state. */
  ghostWarning: string;

  /** Use for the border of elements communicating caution, that appear to have no background in a resting state, in a hovered state. */
  ghostWarningHover: string;

  /** Use for the border of elements communicating caution, that appear to have no background in a resting state, in an active state. */
  ghostWarningActive: string;

  /** Use for the border of elements communicating critical information, that appear to have no background in a resting state. */
  ghostDanger: string;

  /** Use for the border of elements communicating critical information, that appear to have no background in a resting state, in a hovered state. */
  ghostDangerHover: string;

  /** Use for the border of elements communicating critical information, that appear to have no background in a resting state, in an active state. */
  ghostDangerActive: string;

  /** Use for the border of elements communicating change or something new, that appear to have no background in a resting state. */
  ghostHelp: string;

  /** Use for the border of elements communicating change or something new, that appear to have no background in a resting state, in a hovered state. */
  ghostHelpHover: string;

  /** Use for the border of elements communicating change or something new, that appear to have no background in a resting state, in an active state. */
  ghostHelpActive: string;

  /** Use for border of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons. */
  ghostInput: string;

  /** Use for border of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons, in a hovered state. */
  ghostInputHover: string;

  /** Use for border of form UI elements, that appear to have no background in a resting state, such as text fields, checkboxes, and radio buttons, in an active state. */
  ghostInputActive: string;
}

export interface ColorTokens {
  common: CommonColorTokens;
  text: TextColorTokens;
  icon: IconColorTokens;
  background: BackgroundColorTokens;
  border: BorderColorTokens;
}

export interface SurfaceShadowTokens {
  /** Use for the box shadow of raised elements. */
  raised: string;

  /** Use for the box shadow of elements that sit on top of the UI, such as modals, dropdown menus, and popovers. */
  overlay: string;
}

export interface ShadowTokens {
  surface: SurfaceShadowTokens;
}

export interface ColorSchemeTokens {
  color: ColorTokens;
  shadow: ShadowTokens;
}

export interface Theme {
  /** Light mode specific tokens. */
  light: ColorSchemeTokens;

  /** Dark mode specific tokens. */
  dark: ColorSchemeTokens;
}

export type ThemeOverride = DeepPartial<Theme>;

/** All predefined Pigment theme names. */
export type PredefinedTheme = "default";

export interface PigmentOptions {
  /** The prefix to use in the generated css variables. */
  cssVarPrefix?: string;

  /** The predefined Pigment theme to use. */
  baseTheme?: PredefinedTheme;

  /** The overrides that will be merged with the base theme. */
  themeOverride?: ThemeOverride;
}

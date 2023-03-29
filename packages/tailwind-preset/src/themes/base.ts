import twColors from "tailwindcss/colors";
import twDefaultTheme from "tailwindcss/defaultTheme";

import { Theme, VarsFn } from "../types";

export function getBaseTheme(vars: VarsFn): Theme {
  return {
    common: {
      typography: {
        fontFamilyFallback: twDefaultTheme.fontFamily.sans.join(", "),
        fontFamilySans: vars("typography.fontFamilyFallback"),
        fontFamilySerif: twDefaultTheme.fontFamily.serif.join(", "),
        fontFamilyMono: twDefaultTheme.fontFamily.mono.join(", "),
      },
    },
    light: {
      colors: {
        /* -------------------------------------------------------------------------------------------------
         * Color - Reference
         * -----------------------------------------------------------------------------------------------*/

        neutral50: twColors.slate["50"],
        neutral100: twColors.slate["100"],
        neutral200: twColors.slate["200"],
        neutral300: twColors.slate["300"],
        neutral400: twColors.slate["400"],
        neutral500: twColors.slate["500"],
        neutral600: twColors.slate["600"],
        neutral700: twColors.slate["700"],
        neutral800: twColors.slate["800"],
        neutral900: twColors.slate["900"],
        neutral950: twColors.slate["950"],

        primary50: twColors.blue["50"],
        primary100: twColors.blue["100"],
        primary200: twColors.blue["200"],
        primary300: twColors.blue["300"],
        primary400: twColors.blue["400"],
        primary500: twColors.blue["500"],
        primary600: twColors.blue["600"],
        primary700: twColors.blue["700"],
        primary800: twColors.blue["800"],
        primary900: twColors.blue["900"],
        primary950: twColors.blue["950"],

        success50: twColors.green["50"],
        success100: twColors.green["100"],
        success200: twColors.green["200"],
        success300: twColors.green["300"],
        success400: twColors.green["400"],
        success500: twColors.green["500"],
        success600: twColors.green["600"],
        success700: twColors.green["700"],
        success800: twColors.green["800"],
        success900: twColors.green["900"],
        success950: twColors.green["950"],

        info50: twColors.violet["50"],
        info100: twColors.violet["100"],
        info200: twColors.violet["200"],
        info300: twColors.violet["300"],
        info400: twColors.violet["400"],
        info500: twColors.violet["500"],
        info600: twColors.violet["600"],
        info700: twColors.violet["700"],
        info800: twColors.violet["800"],
        info900: twColors.violet["900"],
        info950: twColors.violet["950"],

        warning50: twColors.amber["50"],
        warning100: twColors.amber["100"],
        warning200: twColors.amber["200"],
        warning300: twColors.amber["300"],
        warning400: twColors.amber["400"],
        warning500: twColors.amber["500"],
        warning600: twColors.amber["600"],
        warning700: twColors.amber["700"],
        warning800: twColors.amber["800"],
        warning900: twColors.amber["900"],
        warning950: twColors.amber["950"],

        danger50: twColors.red["50"],
        danger100: twColors.red["100"],
        danger200: twColors.red["200"],
        danger300: twColors.red["300"],
        danger400: twColors.red["400"],
        danger500: twColors.red["500"],
        danger600: twColors.red["600"],
        danger700: twColors.red["700"],
        danger800: twColors.red["800"],
        danger900: twColors.red["900"],
        danger950: twColors.red["950"],

        /* -------------------------------------------------------------------------------------------------
         * Color - Neutral Alpha
         * -----------------------------------------------------------------------------------------------*/

        neutral100A: `${twColors.slate["950"]}08`,
        neutral200A: `${twColors.slate["950"]}0f`,
        neutral300A: `${twColors.slate["950"]}24`,
        neutral400A: `${twColors.slate["950"]}4f`,
        neutral500A: `${twColors.slate["950"]}7d`,

        /* -------------------------------------------------------------------------------------------------
         * Color - Texts
         * -----------------------------------------------------------------------------------------------*/

        textBold: vars("colors.neutral900"),
        text: vars("colors.neutral800"),
        textSubtle: vars("colors.neutral700"),
        textSubtler: vars("colors.neutral600"),
        textSubtlest: vars("colors.neutral500"),
        textInverse: twColors.white,
        textWarningInverse: "#1c1917",
        textSuccess: vars("colors.success600"),
        textDanger: vars("colors.danger600"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Icons
         * -----------------------------------------------------------------------------------------------*/

        iconBold: vars("colors.neutral900"),
        icon: vars("colors.neutral800"),
        iconSubtle: vars("colors.neutral700"),
        iconSubtler: vars("colors.neutral600"),
        iconSubtlest: vars("colors.neutral500"),
        iconInverse: twColors.white,
        iconWarningInverse: "#292524",
        iconSuccess: vars("colors.success600"),
        iconDanger: vars("colors.danger600"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        bodyBg: twColors.white,

        /* Surface */
        surfaceBg: twColors.white,
        surfaceBgHover: vars("colors.neutral100"),
        surfaceBgActive: vars("colors.neutral200"),
        surfaceRaisedBg: twColors.white,
        surfaceRaisedBgHover: vars("colors.neutral100"),
        surfaceRaisedBgActive: vars("colors.neutral200"),
        surfaceOverlayBg: twColors.white,
        surfaceOverlayBgHover: vars("colors.neutral100"),
        surfaceOverlayBgActive: vars("colors.neutral200"),
        surfaceSunkenBg: vars("colors.neutral50"),

        /* Subtle */
        subtleBg: "transparent",
        subtleBgHover: vars("colors.neutral200A"),
        subtleBgActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Border
         * -----------------------------------------------------------------------------------------------*/

        border: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        focusRing: vars("colors.primary500"),
        backdrop: vars("colors.neutral500A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Disabled
         * -----------------------------------------------------------------------------------------------*/

        disabledText: vars("colors.neutral400A"),
        disabledIcon: vars("colors.neutral400A"),
        disabledBg: vars("colors.neutral100A"),
        disabledBorder: vars("colors.neutral200A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Selected
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedText: vars("colors.textInverse"),
        solidSelectedIcon: vars("colors.iconInverse"),
        solidSelectedBg: vars("colors.primary600"),
        solidSelectedBorder: vars("colors.primary600"),
        solidSelectedTextHover: vars("colors.textInverse"),
        solidSelectedIconHover: vars("colors.iconInverse"),
        solidSelectedBgHover: vars("colors.primary700"),
        solidSelectedBorderHover: vars("colors.primary700"),
        solidSelectedTextActive: vars("colors.textInverse"),
        solidSelectedIconActive: vars("colors.iconInverse"),
        solidSelectedBgActive: vars("colors.primary800"),
        solidSelectedBorderActive: vars("colors.primary800"),

        /* Soft */
        softSelectedText: vars("colors.primary700"),
        softSelectedIcon: vars("colors.primary700"),
        softSelectedBg: vars("colors.primary50"),
        softSelectedBorder: vars("colors.primary50"),
        softSelectedTextHover: vars("colors.primary800"),
        softSelectedIconHover: vars("colors.primary800"),
        softSelectedBgHover: vars("colors.primary100"),
        softSelectedBorderHover: vars("colors.primary100"),
        softSelectedTextActive: vars("colors.primary800"),
        softSelectedIconActive: vars("colors.primary800"),
        softSelectedBgActive: vars("colors.primary200"),
        softSelectedBorderActive: vars("colors.primary200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputText: vars("colors.neutral800"),
        softInputIcon: vars("colors.neutral600"),
        softInputBg: vars("colors.neutral100"),
        softInputBorder: vars("colors.neutral200"),
        softInputTextHover: vars("colors.neutral800"),
        softInputIconHover: vars("colors.neutral600"),
        softInputBgHover: vars("colors.neutral100"),
        softInputBorderHover: vars("colors.neutral200"),
        softInputTextActive: vars("colors.neutral800"),
        softInputIconActive: vars("colors.neutral600"),
        softInputBgActive: vars("colors.neutral100"),
        softInputBorderActive: vars("colors.neutral200"),

        /* Outlined */
        outlinedInputText: vars("colors.neutral800"),
        outlinedInputIcon: vars("colors.neutral600"),
        outlinedInputBg: "transparent",
        outlinedInputBorder: vars("colors.neutral300A"),
        outlinedInputTextHover: vars("colors.neutral800"),
        outlinedInputIconHover: vars("colors.neutral600"),
        outlinedInputBgHover: "transparent",
        outlinedInputBorderHover: vars("colors.neutral300A"),
        outlinedInputTextActive: vars("colors.neutral800"),
        outlinedInputIconActive: vars("colors.neutral600"),
        outlinedInputBgActive: "transparent",
        outlinedInputBorderActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryText: vars("colors.textInverse"),
        solidPrimaryIcon: vars("colors.iconInverse"),
        solidPrimaryBg: vars("colors.primary600"),
        solidPrimaryBorder: vars("colors.primary600"),
        solidPrimaryTextHover: vars("colors.textInverse"),
        solidPrimaryIconHover: vars("colors.iconInverse"),
        solidPrimaryBgHover: vars("colors.primary700"),
        solidPrimaryBorderHover: vars("colors.primary700"),
        solidPrimaryTextActive: vars("colors.textInverse"),
        solidPrimaryIconActive: vars("colors.iconInverse"),
        solidPrimaryBgActive: vars("colors.primary800"),
        solidPrimaryBorderActive: vars("colors.primary800"),

        /* Neutral */
        solidNeutralText: vars("colors.textInverse"),
        solidNeutralIcon: vars("colors.iconInverse"),
        solidNeutralBg: vars("colors.neutral700"),
        solidNeutralBorder: vars("colors.neutral700"),
        solidNeutralTextHover: vars("colors.textInverse"),
        solidNeutralIconHover: vars("colors.iconInverse"),
        solidNeutralBgHover: vars("colors.neutral800"),
        solidNeutralBorderHover: vars("colors.neutral800"),
        solidNeutralTextActive: vars("colors.textInverse"),
        solidNeutralIconActive: vars("colors.iconInverse"),
        solidNeutralBgActive: vars("colors.neutral900"),
        solidNeutralBorderActive: vars("colors.neutral900"),

        /* Success */
        solidSuccessText: vars("colors.textInverse"),
        solidSuccessIcon: vars("colors.iconInverse"),
        solidSuccessBg: vars("colors.success600"),
        solidSuccessBorder: vars("colors.success600"),
        solidSuccessTextHover: vars("colors.textInverse"),
        solidSuccessIconHover: vars("colors.iconInverse"),
        solidSuccessBgHover: vars("colors.success700"),
        solidSuccessBorderHover: vars("colors.success700"),
        solidSuccessTextActive: vars("colors.textInverse"),
        solidSuccessIconActive: vars("colors.iconInverse"),
        solidSuccessBgActive: vars("colors.success800"),
        solidSuccessBorderActive: vars("colors.success800"),

        /* Info */
        solidInfoText: vars("colors.textInverse"),
        solidInfoIcon: vars("colors.iconInverse"),
        solidInfoBg: vars("colors.info600"),
        solidInfoBorder: vars("colors.info600"),
        solidInfoTextHover: vars("colors.textInverse"),
        solidInfoIconHover: vars("colors.iconInverse"),
        solidInfoBgHover: vars("colors.info700"),
        solidInfoBorderHover: vars("colors.info700"),
        solidInfoTextActive: vars("colors.textInverse"),
        solidInfoIconActive: vars("colors.iconInverse"),
        solidInfoBgActive: vars("colors.info800"),
        solidInfoBorderActive: vars("colors.info800"),

        /* Warning */
        solidWarningText: vars("colors.textWarningInverse"),
        solidWarningIcon: vars("colors.iconWarningInverse"),
        solidWarningBg: vars("colors.warning300"),
        solidWarningBorder: vars("colors.warning300"),
        solidWarningTextHover: vars("colors.textWarningInverse"),
        solidWarningIconHover: vars("colors.iconWarningInverse"),
        solidWarningBgHover: vars("colors.warning400"),
        solidWarningBorderHover: vars("colors.warning400"),
        solidWarningTextActive: vars("colors.textWarningInverse"),
        solidWarningIconActive: vars("colors.iconWarningInverse"),
        solidWarningBgActive: vars("colors.warning500"),
        solidWarningBorderActive: vars("colors.warning500"),

        /* Danger */
        solidDangerText: vars("colors.textInverse"),
        solidDangerIcon: vars("colors.iconInverse"),
        solidDangerBg: vars("colors.danger600"),
        solidDangerBorder: vars("colors.danger600"),
        solidDangerTextHover: vars("colors.textInverse"),
        solidDangerIconHover: vars("colors.iconInverse"),
        solidDangerBgHover: vars("colors.danger700"),
        solidDangerBorderHover: vars("colors.danger700"),
        solidDangerTextActive: vars("colors.textInverse"),
        solidDangerIconActive: vars("colors.iconInverse"),
        solidDangerBgActive: vars("colors.danger800"),
        solidDangerBorderActive: vars("colors.danger800"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryText: vars("colors.primary700"),
        softPrimaryIcon: vars("colors.primary700"),
        softPrimaryBg: vars("colors.primary50"),
        softPrimaryBorder: vars("colors.primary50"),
        softPrimaryTextHover: vars("colors.primary800"),
        softPrimaryIconHover: vars("colors.primary800"),
        softPrimaryBgHover: vars("colors.primary100"),
        softPrimaryBorderHover: vars("colors.primary100"),
        softPrimaryTextActive: vars("colors.primary800"),
        softPrimaryIconActive: vars("colors.primary800"),
        softPrimaryBgActive: vars("colors.primary200"),
        softPrimaryBorderActive: vars("colors.primary200"),

        /* Neutral */
        softNeutralText: vars("colors.neutral800"),
        softNeutralIcon: vars("colors.neutral800"),
        softNeutralBg: vars("colors.neutral200A"),
        softNeutralBorder: "transparent",
        softNeutralTextHover: vars("colors.neutral800"),
        softNeutralIconHover: vars("colors.neutral800"),
        softNeutralBgHover: vars("colors.neutral300A"),
        softNeutralBorderHover: "transparent",
        softNeutralTextActive: vars("colors.neutral800"),
        softNeutralIconActive: vars("colors.neutral800"),
        softNeutralBgActive: vars("colors.neutral400A"),
        softNeutralBorderActive: "transparent",

        /* Success */
        softSuccessText: vars("colors.success700"),
        softSuccessIcon: vars("colors.success700"),
        softSuccessBg: vars("colors.success50"),
        softSuccessBorder: vars("colors.success50"),
        softSuccessTextHover: vars("colors.success800"),
        softSuccessIconHover: vars("colors.success800"),
        softSuccessBgHover: vars("colors.success100"),
        softSuccessBorderHover: vars("colors.success100"),
        softSuccessTextActive: vars("colors.success800"),
        softSuccessIconActive: vars("colors.success800"),
        softSuccessBgActive: vars("colors.success200"),
        softSuccessBorderActive: vars("colors.success200"),

        /* Info */
        softInfoText: vars("colors.info700"),
        softInfoIcon: vars("colors.info700"),
        softInfoBg: vars("colors.info50"),
        softInfoBorder: vars("colors.info50"),
        softInfoTextHover: vars("colors.info800"),
        softInfoIconHover: vars("colors.info800"),
        softInfoBgHover: vars("colors.info100"),
        softInfoBorderHover: vars("colors.info100"),
        softInfoTextActive: vars("colors.info800"),
        softInfoIconActive: vars("colors.info800"),
        softInfoBgActive: vars("colors.info200"),
        softInfoBorderActive: vars("colors.info200"),

        /* Warning */
        softWarningText: vars("colors.warning700"),
        softWarningIcon: vars("colors.warning700"),
        softWarningBg: vars("colors.warning100"),
        softWarningBorder: vars("colors.warning100"),
        softWarningTextHover: vars("colors.warning800"),
        softWarningIconHover: vars("colors.warning800"),
        softWarningBgHover: vars("colors.warning200"),
        softWarningBorderHover: vars("colors.warning200"),
        softWarningTextActive: vars("colors.warning800"),
        softWarningIconActive: vars("colors.warning800"),
        softWarningBgActive: vars("colors.warning300"),
        softWarningBorderActive: vars("colors.warning300"),

        /* Danger */
        softDangerText: vars("colors.danger700"),
        softDangerIcon: vars("colors.danger700"),
        softDangerBg: vars("colors.danger50"),
        softDangerBorder: vars("colors.danger50"),
        softDangerTextHover: vars("colors.danger800"),
        softDangerIconHover: vars("colors.danger800"),
        softDangerBgHover: vars("colors.danger100"),
        softDangerBorderHover: vars("colors.danger100"),
        softDangerTextActive: vars("colors.danger800"),
        softDangerIconActive: vars("colors.danger800"),
        softDangerBgActive: vars("colors.danger200"),
        softDangerBorderActive: vars("colors.danger200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryText: vars("colors.primary600"),
        outlinedPrimaryIcon: vars("colors.primary600"),
        outlinedPrimaryBg: "transparent",
        outlinedPrimaryBorder: vars("colors.primary600"),
        outlinedPrimaryTextHover: vars("colors.textInverse"),
        outlinedPrimaryIconHover: vars("colors.iconInverse"),
        outlinedPrimaryBgHover: vars("colors.primary600"),
        outlinedPrimaryBorderHover: vars("colors.primary600"),
        outlinedPrimaryTextActive: vars("colors.textInverse"),
        outlinedPrimaryIconActive: vars("colors.iconInverse"),
        outlinedPrimaryBgActive: vars("colors.primary700"),
        outlinedPrimaryBorderActive: vars("colors.primary700"),

        /* Neutral */
        outlinedNeutralText: vars("colors.neutral800"),
        outlinedNeutralIcon: vars("colors.neutral800"),
        outlinedNeutralBg: "transparent",
        outlinedNeutralBorder: vars("colors.neutral800"),
        outlinedNeutralTextHover: vars("colors.textInverse"),
        outlinedNeutralIconHover: vars("colors.iconInverse"),
        outlinedNeutralBgHover: vars("colors.neutral700"),
        outlinedNeutralBorderHover: vars("colors.neutral700"),
        outlinedNeutralTextActive: vars("colors.textInverse"),
        outlinedNeutralIconActive: vars("colors.iconInverse"),
        outlinedNeutralBgActive: vars("colors.neutral800"),
        outlinedNeutralBorderActive: vars("colors.neutral800"),

        /* Success */
        outlinedSuccessText: vars("colors.success700"),
        outlinedSuccessIcon: vars("colors.success700"),
        outlinedSuccessBg: "transparent",
        outlinedSuccessBorder: vars("colors.success700"),
        outlinedSuccessTextHover: vars("colors.textInverse"),
        outlinedSuccessIconHover: vars("colors.iconInverse"),
        outlinedSuccessBgHover: vars("colors.success600"),
        outlinedSuccessBorderHover: vars("colors.success600"),
        outlinedSuccessTextActive: vars("colors.textInverse"),
        outlinedSuccessIconActive: vars("colors.iconInverse"),
        outlinedSuccessBgActive: vars("colors.success700"),
        outlinedSuccessBorderActive: vars("colors.success700"),

        /* Info */
        outlinedInfoText: vars("colors.info600"),
        outlinedInfoIcon: vars("colors.info600"),
        outlinedInfoBg: "transparent",
        outlinedInfoBorder: vars("colors.info600"),
        outlinedInfoTextHover: vars("colors.textInverse"),
        outlinedInfoIconHover: vars("colors.iconInverse"),
        outlinedInfoBgHover: vars("colors.info600"),
        outlinedInfoBorderHover: vars("colors.info600"),
        outlinedInfoTextActive: vars("colors.textInverse"),
        outlinedInfoIconActive: vars("colors.iconInverse"),
        outlinedInfoBgActive: vars("colors.info700"),
        outlinedInfoBorderActive: vars("colors.info700"),

        /* Warning */
        outlinedWarningText: vars("colors.warning700"),
        outlinedWarningIcon: vars("colors.warning700"),
        outlinedWarningBg: "transparent",
        outlinedWarningBorder: vars("colors.warning700"),
        outlinedWarningTextHover: vars("colors.textWarningInverse"),
        outlinedWarningIconHover: vars("colors.iconWarningInverse"),
        outlinedWarningBgHover: vars("colors.warning300"),
        outlinedWarningBorderHover: vars("colors.warning300"),
        outlinedWarningTextActive: vars("colors.textWarningInverse"),
        outlinedWarningIconActive: vars("colors.iconWarningInverse"),
        outlinedWarningBgActive: vars("colors.warning400"),
        outlinedWarningBorderActive: vars("colors.warning400"),

        /* Danger */
        outlinedDangerText: vars("colors.danger600"),
        outlinedDangerIcon: vars("colors.danger600"),
        outlinedDangerBg: "transparent",
        outlinedDangerBorder: vars("colors.danger600"),
        outlinedDangerTextHover: vars("colors.textInverse"),
        outlinedDangerIconHover: vars("colors.iconInverse"),
        outlinedDangerBgHover: vars("colors.danger600"),
        outlinedDangerBorderHover: vars("colors.danger600"),
        outlinedDangerTextActive: vars("colors.textInverse"),
        outlinedDangerIconActive: vars("colors.iconInverse"),
        outlinedDangerBgActive: vars("colors.danger700"),
        outlinedDangerBorderActive: vars("colors.danger700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryText: vars("colors.primary600"),
        ghostPrimaryIcon: vars("colors.primary600"),
        ghostPrimaryBg: "transparent",
        ghostPrimaryBorder: "transparent",
        ghostPrimaryTextHover: vars("colors.primary700"),
        ghostPrimaryIconHover: vars("colors.primary700"),
        ghostPrimaryBgHover: vars("colors.primary50"),
        ghostPrimaryBorderHover: vars("colors.primary50"),
        ghostPrimaryTextActive: vars("colors.primary800"),
        ghostPrimaryIconActive: vars("colors.primary800"),
        ghostPrimaryBgActive: vars("colors.primary100"),
        ghostPrimaryBorderActive: vars("colors.primary100"),

        /* Neutral */
        ghostNeutralText: vars("colors.neutral800"),
        ghostNeutralIcon: vars("colors.neutral800"),
        ghostNeutralBg: "transparent",
        ghostNeutralBorder: "transparent",
        ghostNeutralTextHover: vars("colors.neutral800"),
        ghostNeutralIconHover: vars("colors.neutral800"),
        ghostNeutralBgHover: vars("colors.neutral200A"),
        ghostNeutralBorderHover: "transparent",
        ghostNeutralTextActive: vars("colors.neutral800"),
        ghostNeutralIconActive: vars("colors.neutral800"),
        ghostNeutralBgActive: vars("colors.neutral300A"),
        ghostNeutralBorderActive: "transparent",

        /* Success */
        ghostSuccessText: vars("colors.success700"),
        ghostSuccessIcon: vars("colors.success700"),
        ghostSuccessBg: "transparent",
        ghostSuccessBorder: "transparent",
        ghostSuccessTextHover: vars("colors.success700"),
        ghostSuccessIconHover: vars("colors.success700"),
        ghostSuccessBgHover: vars("colors.success50"),
        ghostSuccessBorderHover: vars("colors.success50"),
        ghostSuccessTextActive: vars("colors.success800"),
        ghostSuccessIconActive: vars("colors.success800"),
        ghostSuccessBgActive: vars("colors.success100"),
        ghostSuccessBorderActive: vars("colors.success100"),

        /* Info */
        ghostInfoText: vars("colors.info600"),
        ghostInfoIcon: vars("colors.info600"),
        ghostInfoBg: "transparent",
        ghostInfoBorder: "transparent",
        ghostInfoTextHover: vars("colors.info700"),
        ghostInfoIconHover: vars("colors.info700"),
        ghostInfoBgHover: vars("colors.info50"),
        ghostInfoBorderHover: vars("colors.info50"),
        ghostInfoTextActive: vars("colors.info800"),
        ghostInfoIconActive: vars("colors.info800"),
        ghostInfoBgActive: vars("colors.info100"),
        ghostInfoBorderActive: vars("colors.info100"),

        /* Warning */
        ghostWarningText: vars("colors.warning700"),
        ghostWarningIcon: vars("colors.warning700"),
        ghostWarningBg: "transparent",
        ghostWarningBorder: "transparent",
        ghostWarningTextHover: vars("colors.warning700"),
        ghostWarningIconHover: vars("colors.warning700"),
        ghostWarningBgHover: vars("colors.warning100"),
        ghostWarningBorderHover: vars("colors.warning100"),
        ghostWarningTextActive: vars("colors.warning800"),
        ghostWarningIconActive: vars("colors.warning800"),
        ghostWarningBgActive: vars("colors.warning200"),
        ghostWarningBorderActive: vars("colors.warning200"),

        /* Danger */
        ghostDangerText: vars("colors.danger600"),
        ghostDangerIcon: vars("colors.danger600"),
        ghostDangerBg: "transparent",
        ghostDangerBorder: "transparent",
        ghostDangerTextHover: vars("colors.danger700"),
        ghostDangerIconHover: vars("colors.danger700"),
        ghostDangerBgHover: vars("colors.danger50"),
        ghostDangerBorderHover: vars("colors.danger50"),
        ghostDangerTextActive: vars("colors.danger800"),
        ghostDangerIconActive: vars("colors.danger800"),
        ghostDangerBgActive: vars("colors.danger100"),
        ghostDangerBorderActive: vars("colors.danger100"),
      },
      shadows: {
        surfaceRaised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        surfaceOverlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    dark: {
      colors: {
        /* -------------------------------------------------------------------------------------------------
         * Color - Neutral Alpha
         * -----------------------------------------------------------------------------------------------*/

        neutral100A: `${twColors.slate["300"]}0a`,
        neutral200A: `${twColors.slate["300"]}14`,
        neutral300A: `${twColors.slate["300"]}29`,
        neutral400A: `${twColors.slate["300"]}47`,
        neutral500A: `${twColors.slate["300"]}80`,

        /* -------------------------------------------------------------------------------------------------
         * Color - Texts
         * -----------------------------------------------------------------------------------------------*/

        textBold: vars("colors.neutral50"),
        text: vars("colors.neutral100"),
        textSubtle: vars("colors.neutral200"),
        textSubtler: vars("colors.neutral300"),
        textSubtlest: vars("colors.neutral400"),
        textInverse: vars("colors.neutral950"),
        textWarningInverse: "#1c1917" /* TODO */,
        textSuccess: vars("colors.success300"),
        textDanger: vars("colors.danger300"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Icons
         * -----------------------------------------------------------------------------------------------*/

        iconBold: vars("colors.neutral50"),
        icon: vars("colors.neutral100"),
        iconSubtle: vars("colors.neutral200"),
        iconSubtler: vars("colors.neutral300"),
        iconSubtlest: vars("colors.neutral400"),
        iconInverse: vars("colors.neutral950"),
        iconWarningInverse: "#292524" /* TODO */,
        iconSuccess: vars("colors.success300"),
        iconDanger: vars("colors.danger300"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        bodyBg: vars("colors.neutral950"),

        /* Surface */
        surfaceBg: vars("colors.neutral950"),
        surfaceBgHover: vars("colors.neutral900"),
        surfaceBgActive: vars("colors.neutral800"),
        surfaceRaisedBg: vars("colors.neutral900"),
        surfaceRaisedBgHover: vars("colors.neutral800"),
        surfaceRaisedBgActive: vars("colors.neutral700"),
        surfaceOverlayBg: vars("colors.neutral800"),
        surfaceOverlayBgHover: vars("colors.neutral700"),
        surfaceOverlayBgActive: vars("colors.neutral600"),
        surfaceSunkenBg: "#121212",

        /* Subtle */
        subtleBg: "transparent",
        subtleBgHover: vars("colors.neutral200A"),
        subtleBgActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Border
         * -----------------------------------------------------------------------------------------------*/

        border: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        focusRing: vars("colors.primary400"),
        backdrop: vars("colors.neutral500A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Disabled
         * -----------------------------------------------------------------------------------------------*/

        disabledText: vars("colors.neutral400A"),
        disabledIcon: vars("colors.neutral400A"),
        disabledBg: vars("colors.neutral100A"),
        disabledBorder: vars("colors.neutral200A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Selected
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedText: vars("colors.textInverse"),
        solidSelectedIcon: vars("colors.iconInverse"),
        solidSelectedBg: vars("colors.primary300"),
        solidSelectedBorder: vars("colors.primary300"),
        solidSelectedTextHover: vars("colors.textInverse"),
        solidSelectedIconHover: vars("colors.iconInverse"),
        solidSelectedBgHover: vars("colors.primary200"),
        solidSelectedBorderHover: vars("colors.primary200"),
        solidSelectedTextActive: vars("colors.textInverse"),
        solidSelectedIconActive: vars("colors.iconInverse"),
        solidSelectedBgActive: vars("colors.primary100"),
        solidSelectedBorderActive: vars("colors.primary100"),

        /* Soft */
        softSelectedText: vars("colors.primary200"),
        softSelectedIcon: vars("colors.primary200"),
        softSelectedBg: vars("colors.primary900"),
        softSelectedBorder: vars("colors.primary900"),
        softSelectedTextHover: vars("colors.primary100"),
        softSelectedIconHover: vars("colors.primary100"),
        softSelectedBgHover: vars("colors.primary800"),
        softSelectedBorderHover: vars("colors.primary800"),
        softSelectedTextActive: vars("colors.primary100"),
        softSelectedIconActive: vars("colors.primary100"),
        softSelectedBgActive: vars("colors.primary700"),
        softSelectedBorderActive: vars("colors.primary700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputText: vars("colors.neutral100"),
        softInputIcon: vars("colors.neutral300"),
        softInputBg: vars("colors.neutral800"),
        softInputBorder: vars("colors.neutral700"),
        softInputTextHover: vars("colors.neutral100"),
        softInputIconHover: vars("colors.neutral300"),
        softInputBgHover: vars("colors.neutral800"),
        softInputBorderHover: vars("colors.neutral700"),
        softInputTextActive: vars("colors.neutral100"),
        softInputIconActive: vars("colors.neutral300"),
        softInputBgActive: vars("colors.neutral800"),
        softInputBorderActive: vars("colors.neutral700"),

        /* Outlined */
        outlinedInputText: vars("colors.neutral100"),
        outlinedInputIcon: vars("colors.neutral300"),
        outlinedInputBg: "transparent",
        outlinedInputBorder: vars("colors.neutral300A"),
        outlinedInputTextHover: vars("colors.neutral100"),
        outlinedInputIconHover: vars("colors.neutral300"),
        outlinedInputBgHover: "transparent",
        outlinedInputBorderHover: vars("colors.neutral300A"),
        outlinedInputTextActive: vars("colors.neutral100"),
        outlinedInputIconActive: vars("colors.neutral300"),
        outlinedInputBgActive: "transparent",
        outlinedInputBorderActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryText: vars("colors.textInverse"),
        solidPrimaryIcon: vars("colors.iconInverse"),
        solidPrimaryBg: vars("colors.primary300"),
        solidPrimaryBorder: vars("colors.primary300"),
        solidPrimaryTextHover: vars("colors.textInverse"),
        solidPrimaryIconHover: vars("colors.iconInverse"),
        solidPrimaryBgHover: vars("colors.primary200"),
        solidPrimaryBorderHover: vars("colors.primary200"),
        solidPrimaryTextActive: vars("colors.textInverse"),
        solidPrimaryIconActive: vars("colors.iconInverse"),
        solidPrimaryBgActive: vars("colors.primary100"),
        solidPrimaryBorderActive: vars("colors.primary100"),

        /* Neutral */
        solidNeutralText: vars("colors.textInverse"),
        solidNeutralIcon: vars("colors.iconInverse"),
        solidNeutralBg: vars("colors.neutral200"),
        solidNeutralBorder: vars("colors.neutral200"),
        solidNeutralTextHover: vars("colors.textInverse"),
        solidNeutralIconHover: vars("colors.iconInverse"),
        solidNeutralBgHover: vars("colors.neutral100"),
        solidNeutralBorderHover: vars("colors.neutral100"),
        solidNeutralTextActive: vars("colors.textInverse"),
        solidNeutralIconActive: vars("colors.iconInverse"),
        solidNeutralBgActive: vars("colors.neutral50"),
        solidNeutralBorderActive: vars("colors.neutral50"),

        /* Success */
        solidSuccessText: vars("colors.textInverse"),
        solidSuccessIcon: vars("colors.iconInverse"),
        solidSuccessBg: vars("colors.success300"),
        solidSuccessBorder: vars("colors.success300"),
        solidSuccessTextHover: vars("colors.textInverse"),
        solidSuccessIconHover: vars("colors.iconInverse"),
        solidSuccessBgHover: vars("colors.success200"),
        solidSuccessBorderHover: vars("colors.success200"),
        solidSuccessTextActive: vars("colors.textInverse"),
        solidSuccessIconActive: vars("colors.iconInverse"),
        solidSuccessBgActive: vars("colors.success100"),
        solidSuccessBorderActive: vars("colors.success100"),

        /* Info */
        solidInfoText: vars("colors.textInverse"),
        solidInfoIcon: vars("colors.iconInverse"),
        solidInfoBg: vars("colors.info300"),
        solidInfoBorder: vars("colors.info300"),
        solidInfoTextHover: vars("colors.textInverse"),
        solidInfoIconHover: vars("colors.iconInverse"),
        solidInfoBgHover: vars("colors.info200"),
        solidInfoBorderHover: vars("colors.info200"),
        solidInfoTextActive: vars("colors.textInverse"),
        solidInfoIconActive: vars("colors.iconInverse"),
        solidInfoBgActive: vars("colors.info100"),
        solidInfoBorderActive: vars("colors.info100"),

        /* Warning */
        solidWarningText: vars("colors.textWarningInverse"),
        solidWarningIcon: vars("colors.iconWarningInverse"),
        solidWarningBg: vars("colors.warning300"),
        solidWarningBorder: vars("colors.warning300"),
        solidWarningTextHover: vars("colors.textWarningInverse"),
        solidWarningIconHover: vars("colors.iconWarningInverse"),
        solidWarningBgHover: vars("colors.warning200"),
        solidWarningBorderHover: vars("colors.warning200"),
        solidWarningTextActive: vars("colors.textWarningInverse"),
        solidWarningIconActive: vars("colors.iconWarningInverse"),
        solidWarningBgActive: vars("colors.warning100"),
        solidWarningBorderActive: vars("colors.warning100"),

        /* Danger */
        solidDangerText: vars("colors.textInverse"),
        solidDangerIcon: vars("colors.iconInverse"),
        solidDangerBg: vars("colors.danger300"),
        solidDangerBorder: vars("colors.danger300"),
        solidDangerTextHover: vars("colors.textInverse"),
        solidDangerIconHover: vars("colors.iconInverse"),
        solidDangerBgHover: vars("colors.danger200"),
        solidDangerBorderHover: vars("colors.danger200"),
        solidDangerTextActive: vars("colors.textInverse"),
        solidDangerIconActive: vars("colors.iconInverse"),
        solidDangerBgActive: vars("colors.danger100"),
        solidDangerBorderActive: vars("colors.danger100"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryText: vars("colors.primary200"),
        softPrimaryIcon: vars("colors.primary200"),
        softPrimaryBg: vars("colors.primary900"),
        softPrimaryBorder: vars("colors.primary900"),
        softPrimaryTextHover: vars("colors.primary100"),
        softPrimaryIconHover: vars("colors.primary100"),
        softPrimaryBgHover: vars("colors.primary800"),
        softPrimaryBorderHover: vars("colors.primary800"),
        softPrimaryTextActive: vars("colors.primary100"),
        softPrimaryIconActive: vars("colors.primary100"),
        softPrimaryBgActive: vars("colors.primary700"),
        softPrimaryBorderActive: vars("colors.primary700"),

        /* Neutral */
        softNeutralText: vars("colors.neutral100"),
        softNeutralIcon: vars("colors.neutral100"),
        softNeutralBg: vars("colors.neutral200A"),
        softNeutralBorder: "transparent",
        softNeutralTextHover: vars("colors.neutral100"),
        softNeutralIconHover: vars("colors.neutral100"),
        softNeutralBgHover: vars("colors.neutral300A"),
        softNeutralBorderHover: "transparent",
        softNeutralTextActive: vars("colors.neutral100"),
        softNeutralIconActive: vars("colors.neutral100"),
        softNeutralBgActive: vars("colors.neutral400A"),
        softNeutralBorderActive: "transparent",

        /* Success */
        softSuccessText: vars("colors.success200"),
        softSuccessIcon: vars("colors.success200"),
        softSuccessBg: vars("colors.success900"),
        softSuccessBorder: vars("colors.success900"),
        softSuccessTextHover: vars("colors.success100"),
        softSuccessIconHover: vars("colors.success100"),
        softSuccessBgHover: vars("colors.success800"),
        softSuccessBorderHover: vars("colors.success800"),
        softSuccessTextActive: vars("colors.success100"),
        softSuccessIconActive: vars("colors.success100"),
        softSuccessBgActive: vars("colors.success700"),
        softSuccessBorderActive: vars("colors.success700"),

        /* Info */
        softInfoText: vars("colors.info200"),
        softInfoIcon: vars("colors.info200"),
        softInfoBg: vars("colors.info900"),
        softInfoBorder: vars("colors.info900"),
        softInfoTextHover: vars("colors.info100"),
        softInfoIconHover: vars("colors.info100"),
        softInfoBgHover: vars("colors.info800"),
        softInfoBorderHover: vars("colors.info800"),
        softInfoTextActive: vars("colors.info100"),
        softInfoIconActive: vars("colors.info100"),
        softInfoBgActive: vars("colors.info700"),
        softInfoBorderActive: vars("colors.info700"),

        /* Warning */
        softWarningText: vars("colors.warning200"),
        softWarningIcon: vars("colors.warning200"),
        softWarningBg: vars("colors.warning800"),
        softWarningBorder: vars("colors.warning800"),
        softWarningTextHover: vars("colors.warning100"),
        softWarningIconHover: vars("colors.warning100"),
        softWarningBgHover: vars("colors.warning700"),
        softWarningBorderHover: vars("colors.warning700"),
        softWarningTextActive: vars("colors.warning100"),
        softWarningIconActive: vars("colors.warning100"),
        softWarningBgActive: vars("colors.warning600"),
        softWarningBorderActive: vars("colors.warning600"),

        /* Danger */
        softDangerText: vars("colors.danger200"),
        softDangerIcon: vars("colors.danger200"),
        softDangerBg: vars("colors.danger900"),
        softDangerBorder: vars("colors.danger900"),
        softDangerTextHover: vars("colors.danger100"),
        softDangerIconHover: vars("colors.danger100"),
        softDangerBgHover: vars("colors.danger800"),
        softDangerBorderHover: vars("colors.danger800"),
        softDangerTextActive: vars("colors.danger100"),
        softDangerIconActive: vars("colors.danger100"),
        softDangerBgActive: vars("colors.danger700"),
        softDangerBorderActive: vars("colors.danger700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryText: vars("colors.primary300"),
        outlinedPrimaryIcon: vars("colors.primary300"),
        outlinedPrimaryBg: "transparent",
        outlinedPrimaryBorder: vars("colors.primary300"),
        outlinedPrimaryTextHover: vars("colors.textInverse"),
        outlinedPrimaryIconHover: vars("colors.iconInverse"),
        outlinedPrimaryBgHover: vars("colors.primary300"),
        outlinedPrimaryBorderHover: vars("colors.primary300"),
        outlinedPrimaryTextActive: vars("colors.textInverse"),
        outlinedPrimaryIconActive: vars("colors.iconInverse"),
        outlinedPrimaryBgActive: vars("colors.primary200"),
        outlinedPrimaryBorderActive: vars("colors.primary200"),

        /* Neutral */
        outlinedNeutralText: vars("colors.neutral100"),
        outlinedNeutralIcon: vars("colors.neutral100"),
        outlinedNeutralBg: "transparent",
        outlinedNeutralBorder: vars("colors.neutral500"),
        outlinedNeutralTextHover: vars("colors.textInverse"),
        outlinedNeutralIconHover: vars("colors.iconInverse"),
        outlinedNeutralBgHover: vars("colors.neutral200"),
        outlinedNeutralBorderHover: vars("colors.neutral200"),
        outlinedNeutralTextActive: vars("colors.textInverse"),
        outlinedNeutralIconActive: vars("colors.iconInverse"),
        outlinedNeutralBgActive: vars("colors.neutral100"),
        outlinedNeutralBorderActive: vars("colors.neutral100"),

        /* Success */
        outlinedSuccessText: vars("colors.success300"),
        outlinedSuccessIcon: vars("colors.success300"),
        outlinedSuccessBg: "transparent",
        outlinedSuccessBorder: vars("colors.success300"),
        outlinedSuccessTextHover: vars("colors.textInverse"),
        outlinedSuccessIconHover: vars("colors.iconInverse"),
        outlinedSuccessBgHover: vars("colors.success300"),
        outlinedSuccessBorderHover: vars("colors.success300"),
        outlinedSuccessTextActive: vars("colors.textInverse"),
        outlinedSuccessIconActive: vars("colors.iconInverse"),
        outlinedSuccessBgActive: vars("colors.success200"),
        outlinedSuccessBorderActive: vars("colors.success200"),

        /* Info */
        outlinedInfoText: vars("colors.info300"),
        outlinedInfoIcon: vars("colors.info300"),
        outlinedInfoBg: "transparent",
        outlinedInfoBorder: vars("colors.info300"),
        outlinedInfoTextHover: vars("colors.textInverse"),
        outlinedInfoIconHover: vars("colors.iconInverse"),
        outlinedInfoBgHover: vars("colors.info300"),
        outlinedInfoBorderHover: vars("colors.info300"),
        outlinedInfoTextActive: vars("colors.textInverse"),
        outlinedInfoIconActive: vars("colors.iconInverse"),
        outlinedInfoBgActive: vars("colors.info200"),
        outlinedInfoBorderActive: vars("colors.info200"),

        /* Warning */
        outlinedWarningText: vars("colors.warning300"),
        outlinedWarningIcon: vars("colors.warning300"),
        outlinedWarningBg: "transparent",
        outlinedWarningBorder: vars("colors.warning300"),
        outlinedWarningTextHover: vars("colors.textWarningInverse"),
        outlinedWarningIconHover: vars("colors.iconWarningInverse"),
        outlinedWarningBgHover: vars("colors.warning300"),
        outlinedWarningBorderHover: vars("colors.warning300"),
        outlinedWarningTextActive: vars("colors.textWarningInverse"),
        outlinedWarningIconActive: vars("colors.iconWarningInverse"),
        outlinedWarningBgActive: vars("colors.warning200"),
        outlinedWarningBorderActive: vars("colors.warning200"),

        /* Danger */
        outlinedDangerText: vars("colors.danger300"),
        outlinedDangerIcon: vars("colors.danger300"),
        outlinedDangerBg: "transparent",
        outlinedDangerBorder: vars("colors.danger300"),
        outlinedDangerTextHover: vars("colors.textInverse"),
        outlinedDangerIconHover: vars("colors.iconInverse"),
        outlinedDangerBgHover: vars("colors.danger300"),
        outlinedDangerBorderHover: vars("colors.danger300"),
        outlinedDangerTextActive: vars("colors.textInverse"),
        outlinedDangerIconActive: vars("colors.iconInverse"),
        outlinedDangerBgActive: vars("colors.danger200"),
        outlinedDangerBorderActive: vars("colors.danger200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryText: vars("colors.primary300"),
        ghostPrimaryIcon: vars("colors.primary300"),
        ghostPrimaryBg: "transparent",
        ghostPrimaryBorder: "transparent",
        ghostPrimaryTextHover: vars("colors.primary200"),
        ghostPrimaryIconHover: vars("colors.primary200"),
        ghostPrimaryBgHover: vars("colors.primary900"),
        ghostPrimaryBorderHover: vars("colors.primary900"),
        ghostPrimaryTextActive: vars("colors.primary100"),
        ghostPrimaryIconActive: vars("colors.primary100"),
        ghostPrimaryBgActive: vars("colors.primary800"),
        ghostPrimaryBorderActive: vars("colors.primary800"),

        /* Neutral */
        ghostNeutralText: vars("colors.neutral100"),
        ghostNeutralIcon: vars("colors.neutral100"),
        ghostNeutralBg: "transparent",
        ghostNeutralBorder: "transparent",
        ghostNeutralTextHover: vars("colors.neutral100"),
        ghostNeutralIconHover: vars("colors.neutral100"),
        ghostNeutralBgHover: vars("colors.neutral200A"),
        ghostNeutralBorderHover: "transparent",
        ghostNeutralTextActive: vars("colors.neutral100"),
        ghostNeutralIconActive: vars("colors.neutral100"),
        ghostNeutralBgActive: vars("colors.neutral300A"),
        ghostNeutralBorderActive: "transparent",

        /* Success */
        ghostSuccessText: vars("colors.success300"),
        ghostSuccessIcon: vars("colors.success300"),
        ghostSuccessBg: "transparent",
        ghostSuccessBorder: "transparent",
        ghostSuccessTextHover: vars("colors.success200"),
        ghostSuccessIconHover: vars("colors.success200"),
        ghostSuccessBgHover: vars("colors.success900"),
        ghostSuccessBorderHover: vars("colors.success900"),
        ghostSuccessTextActive: vars("colors.success100"),
        ghostSuccessIconActive: vars("colors.success100"),
        ghostSuccessBgActive: vars("colors.success800"),
        ghostSuccessBorderActive: vars("colors.success800"),

        /* Info */
        ghostInfoText: vars("colors.info300"),
        ghostInfoIcon: vars("colors.info300"),
        ghostInfoBg: "transparent",
        ghostInfoBorder: "transparent",
        ghostInfoTextHover: vars("colors.info200"),
        ghostInfoIconHover: vars("colors.info200"),
        ghostInfoBgHover: vars("colors.info900"),
        ghostInfoBorderHover: vars("colors.info900"),
        ghostInfoTextActive: vars("colors.info100"),
        ghostInfoIconActive: vars("colors.info100"),
        ghostInfoBgActive: vars("colors.info800"),
        ghostInfoBorderActive: vars("colors.info800"),

        /* Warning */
        ghostWarningText: vars("colors.warning300"),
        ghostWarningIcon: vars("colors.warning300"),
        ghostWarningBg: "transparent",
        ghostWarningBorder: "transparent",
        ghostWarningTextHover: vars("colors.warning200"),
        ghostWarningIconHover: vars("colors.warning200"),
        ghostWarningBgHover: vars("colors.warning800"),
        ghostWarningBorderHover: vars("colors.warning800"),
        ghostWarningTextActive: vars("colors.warning100"),
        ghostWarningIconActive: vars("colors.warning100"),
        ghostWarningBgActive: vars("colors.warning700"),
        ghostWarningBorderActive: vars("colors.warning700"),

        /* Danger */
        ghostDangerText: vars("colors.danger300"),
        ghostDangerIcon: vars("colors.danger300"),
        ghostDangerBg: "transparent",
        ghostDangerBorder: "transparent",
        ghostDangerTextHover: vars("colors.danger200"),
        ghostDangerIconHover: vars("colors.danger200"),
        ghostDangerBgHover: vars("colors.danger900"),
        ghostDangerBorderHover: vars("colors.danger900"),
        ghostDangerTextActive: vars("colors.danger100"),
        ghostDangerIconActive: vars("colors.danger100"),
        ghostDangerBgActive: vars("colors.danger800"),
        ghostDangerBorderActive: vars("colors.danger800"),
      },
      shadows: {
        surfaceRaised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        surfaceOverlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}

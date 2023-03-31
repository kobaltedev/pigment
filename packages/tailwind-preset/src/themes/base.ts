import twColors from "tailwindcss/colors";
import twDefaultTheme from "tailwindcss/defaultTheme";

import { Theme, VarsFn } from "../types";

/** Pigment base/default theme. */
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

        info50: twColors.sky["50"],
        info100: twColors.sky["100"],
        info200: twColors.sky["200"],
        info300: twColors.sky["300"],
        info400: twColors.sky["400"],
        info500: twColors.sky["500"],
        info600: twColors.sky["600"],
        info700: twColors.sky["700"],
        info800: twColors.sky["800"],
        info900: twColors.sky["900"],
        info950: twColors.sky["950"],

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
         * Color - Neutral alpha
         * -----------------------------------------------------------------------------------------------*/

        neutral100A: `${twColors.slate["950"]}08`,
        neutral200A: `${twColors.slate["950"]}0f`,
        neutral300A: `${twColors.slate["950"]}24`,
        neutral400A: `${twColors.slate["950"]}4f`,
        neutral500A: `${twColors.slate["950"]}7d`,

        /* -------------------------------------------------------------------------------------------------
         * Color - Content (texts and icons)
         * -----------------------------------------------------------------------------------------------*/

        content: vars("colors.neutral800"),
        contentSubtle: vars("colors.neutral700"),
        contentSubtler: vars("colors.neutral600"),
        contentSubtlest: vars("colors.neutral500"),
        contentDisabled: vars("colors.neutral400A"),
        contentInverse: twColors.white,
        contentWarningInverse: "#1c1917",
        contentSuccess: vars("colors.success600"),
        contentDanger: vars("colors.danger600"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        body: twColors.white,

        surface: twColors.white,
        surfaceHover: vars("colors.neutral100"),
        surfaceActive: vars("colors.neutral200"),
        surfaceDisabled: vars("colors.neutral100A"),

        raisedSurface: twColors.white,
        raisedSurfaceHover: vars("colors.neutral100"),
        raisedSurfaceActive: vars("colors.neutral200"),

        overlaySurface: twColors.white,
        overlaySurfaceHover: vars("colors.neutral100"),
        overlaySurfaceActive: vars("colors.neutral200"),

        sunkenSurface: vars("colors.neutral50"),

        subtleSurface: "transparent",
        subtleSurfaceHover: vars("colors.neutral200A"),
        subtleSurfaceActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        line: vars("colors.neutral300A"),
        lineDisabled: vars("colors.neutral200A"),

        focusRing: vars("colors.primary500"),
        backdrop: vars("colors.neutral500A"),
        tooltip: vars("colors.neutral900"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryContent: vars("colors.contentInverse"),
        solidPrimarySurface: vars("colors.primary600"),
        solidPrimaryLine: vars("colors.primary600"),
        solidPrimaryContentHover: vars("colors.contentInverse"),
        solidPrimarySurfaceHover: vars("colors.primary700"),
        solidPrimaryLineHover: vars("colors.primary700"),
        solidPrimaryContentActive: vars("colors.contentInverse"),
        solidPrimarySurfaceActive: vars("colors.primary800"),
        solidPrimaryLineActive: vars("colors.primary800"),

        /* Neutral */
        solidNeutralContent: vars("colors.contentInverse"),
        solidNeutralSurface: vars("colors.neutral700"),
        solidNeutralLine: vars("colors.neutral700"),
        solidNeutralContentHover: vars("colors.contentInverse"),
        solidNeutralSurfaceHover: vars("colors.neutral800"),
        solidNeutralLineHover: vars("colors.neutral800"),
        solidNeutralContentActive: vars("colors.contentInverse"),
        solidNeutralSurfaceActive: vars("colors.neutral900"),
        solidNeutralLineActive: vars("colors.neutral900"),

        /* Success */
        solidSuccessContent: vars("colors.contentInverse"),
        solidSuccessSurface: vars("colors.success600"),
        solidSuccessLine: vars("colors.success600"),
        solidSuccessContentHover: vars("colors.contentInverse"),
        solidSuccessSurfaceHover: vars("colors.success700"),
        solidSuccessLineHover: vars("colors.success700"),
        solidSuccessContentActive: vars("colors.contentInverse"),
        solidSuccessSurfaceActive: vars("colors.success800"),
        solidSuccessLineActive: vars("colors.success800"),

        /* Info */
        solidInfoContent: vars("colors.contentInverse"),
        solidInfoSurface: vars("colors.info600"),
        solidInfoLine: vars("colors.info600"),
        solidInfoContentHover: vars("colors.contentInverse"),
        solidInfoSurfaceHover: vars("colors.info700"),
        solidInfoLineHover: vars("colors.info700"),
        solidInfoContentActive: vars("colors.contentInverse"),
        solidInfoSurfaceActive: vars("colors.info800"),
        solidInfoLineActive: vars("colors.info800"),

        /* Warning */
        solidWarningContent: vars("colors.contentWarningInverse"),
        solidWarningSurface: vars("colors.warning300"),
        solidWarningLine: vars("colors.warning300"),
        solidWarningContentHover: vars("colors.contentWarningInverse"),
        solidWarningSurfaceHover: vars("colors.warning400"),
        solidWarningLineHover: vars("colors.warning400"),
        solidWarningContentActive: vars("colors.contentWarningInverse"),
        solidWarningSurfaceActive: vars("colors.warning500"),
        solidWarningLineActive: vars("colors.warning500"),

        /* Danger */
        solidDangerContent: vars("colors.contentInverse"),
        solidDangerSurface: vars("colors.danger600"),
        solidDangerLine: vars("colors.danger600"),
        solidDangerContentHover: vars("colors.contentInverse"),
        solidDangerSurfaceHover: vars("colors.danger700"),
        solidDangerLineHover: vars("colors.danger700"),
        solidDangerContentActive: vars("colors.contentInverse"),
        solidDangerSurfaceActive: vars("colors.danger800"),
        solidDangerLineActive: vars("colors.danger800"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryContent: vars("colors.primary700"),
        softPrimarySurface: vars("colors.primary50"),
        softPrimaryLine: vars("colors.primary50"),
        softPrimaryContentHover: vars("colors.primary800"),
        softPrimarySurfaceHover: vars("colors.primary100"),
        softPrimaryLineHover: vars("colors.primary100"),
        softPrimaryContentActive: vars("colors.primary800"),
        softPrimarySurfaceActive: vars("colors.primary200"),
        softPrimaryLineActive: vars("colors.primary200"),

        /* Neutral */
        softNeutralContent: vars("colors.neutral800"),
        softNeutralSurface: vars("colors.neutral200A"),
        softNeutralLine: "transparent",
        softNeutralContentHover: vars("colors.neutral800"),
        softNeutralSurfaceHover: vars("colors.neutral300A"),
        softNeutralLineHover: "transparent",
        softNeutralContentActive: vars("colors.neutral800"),
        softNeutralSurfaceActive: vars("colors.neutral400A"),
        softNeutralLineActive: "transparent",

        /* Success */
        softSuccessContent: vars("colors.success700"),
        softSuccessSurface: vars("colors.success50"),
        softSuccessLine: vars("colors.success50"),
        softSuccessContentHover: vars("colors.success800"),
        softSuccessSurfaceHover: vars("colors.success100"),
        softSuccessLineHover: vars("colors.success100"),
        softSuccessContentActive: vars("colors.success800"),
        softSuccessSurfaceActive: vars("colors.success200"),
        softSuccessLineActive: vars("colors.success200"),

        /* Info */
        softInfoContent: vars("colors.info700"),
        softInfoSurface: vars("colors.info50"),
        softInfoLine: vars("colors.info50"),
        softInfoContentHover: vars("colors.info800"),
        softInfoSurfaceHover: vars("colors.info100"),
        softInfoLineHover: vars("colors.info100"),
        softInfoContentActive: vars("colors.info800"),
        softInfoSurfaceActive: vars("colors.info200"),
        softInfoLineActive: vars("colors.info200"),

        /* Warning */
        softWarningContent: vars("colors.warning700"),
        softWarningSurface: vars("colors.warning100"),
        softWarningLine: vars("colors.warning100"),
        softWarningContentHover: vars("colors.warning800"),
        softWarningSurfaceHover: vars("colors.warning200"),
        softWarningLineHover: vars("colors.warning200"),
        softWarningContentActive: vars("colors.warning800"),
        softWarningSurfaceActive: vars("colors.warning300"),
        softWarningLineActive: vars("colors.warning300"),

        /* Danger */
        softDangerContent: vars("colors.danger700"),
        softDangerSurface: vars("colors.danger50"),
        softDangerLine: vars("colors.danger50"),
        softDangerContentHover: vars("colors.danger800"),
        softDangerSurfaceHover: vars("colors.danger100"),
        softDangerLineHover: vars("colors.danger100"),
        softDangerContentActive: vars("colors.danger800"),
        softDangerSurfaceActive: vars("colors.danger200"),
        softDangerLineActive: vars("colors.danger200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryContent: vars("colors.primary600"),
        outlinedPrimarySurface: "transparent",
        outlinedPrimaryLine: vars("colors.primary600"),
        outlinedPrimaryContentHover: vars("colors.contentInverse"),
        outlinedPrimarySurfaceHover: vars("colors.primary600"),
        outlinedPrimaryLineHover: vars("colors.primary600"),
        outlinedPrimaryContentActive: vars("colors.contentInverse"),
        outlinedPrimarySurfaceActive: vars("colors.primary700"),
        outlinedPrimaryLineActive: vars("colors.primary700"),

        /* Neutral */
        outlinedNeutralContent: vars("colors.neutral800"),
        outlinedNeutralSurface: "transparent",
        outlinedNeutralLine: vars("colors.neutral800"),
        outlinedNeutralContentHover: vars("colors.contentInverse"),
        outlinedNeutralSurfaceHover: vars("colors.neutral700"),
        outlinedNeutralLineHover: vars("colors.neutral700"),
        outlinedNeutralContentActive: vars("colors.contentInverse"),
        outlinedNeutralSurfaceActive: vars("colors.neutral800"),
        outlinedNeutralLineActive: vars("colors.neutral800"),

        /* Success */
        outlinedSuccessContent: vars("colors.success700"),
        outlinedSuccessSurface: "transparent",
        outlinedSuccessLine: vars("colors.success700"),
        outlinedSuccessContentHover: vars("colors.contentInverse"),
        outlinedSuccessSurfaceHover: vars("colors.success600"),
        outlinedSuccessLineHover: vars("colors.success600"),
        outlinedSuccessContentActive: vars("colors.contentInverse"),
        outlinedSuccessSurfaceActive: vars("colors.success700"),
        outlinedSuccessLineActive: vars("colors.success700"),

        /* Info */
        outlinedInfoContent: vars("colors.info600"),
        outlinedInfoSurface: "transparent",
        outlinedInfoLine: vars("colors.info600"),
        outlinedInfoContentHover: vars("colors.contentInverse"),
        outlinedInfoSurfaceHover: vars("colors.info600"),
        outlinedInfoLineHover: vars("colors.info600"),
        outlinedInfoContentActive: vars("colors.contentInverse"),
        outlinedInfoSurfaceActive: vars("colors.info700"),
        outlinedInfoLineActive: vars("colors.info700"),

        /* Warning */
        outlinedWarningContent: vars("colors.warning700"),
        outlinedWarningSurface: "transparent",
        outlinedWarningLine: vars("colors.warning700"),
        outlinedWarningContentHover: vars("colors.contentWarningInverse"),
        outlinedWarningSurfaceHover: vars("colors.warning300"),
        outlinedWarningLineHover: vars("colors.warning300"),
        outlinedWarningContentActive: vars("colors.contentWarningInverse"),
        outlinedWarningSurfaceActive: vars("colors.warning400"),
        outlinedWarningLineActive: vars("colors.warning400"),

        /* Danger */
        outlinedDangerContent: vars("colors.danger600"),
        outlinedDangerSurface: "transparent",
        outlinedDangerLine: vars("colors.danger600"),
        outlinedDangerContentHover: vars("colors.contentInverse"),
        outlinedDangerSurfaceHover: vars("colors.danger600"),
        outlinedDangerLineHover: vars("colors.danger600"),
        outlinedDangerContentActive: vars("colors.contentInverse"),
        outlinedDangerSurfaceActive: vars("colors.danger700"),
        outlinedDangerLineActive: vars("colors.danger700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryContent: vars("colors.primary600"),
        ghostPrimarySurface: "transparent",
        ghostPrimaryLine: "transparent",
        ghostPrimaryContentHover: vars("colors.primary700"),
        ghostPrimarySurfaceHover: vars("colors.primary50"),
        ghostPrimaryLineHover: vars("colors.primary50"),
        ghostPrimaryContentActive: vars("colors.primary800"),
        ghostPrimarySurfaceActive: vars("colors.primary100"),
        ghostPrimaryLineActive: vars("colors.primary100"),

        /* Neutral */
        ghostNeutralContent: vars("colors.neutral800"),
        ghostNeutralSurface: "transparent",
        ghostNeutralLine: "transparent",
        ghostNeutralContentHover: vars("colors.neutral800"),
        ghostNeutralSurfaceHover: vars("colors.neutral200A"),
        ghostNeutralLineHover: "transparent",
        ghostNeutralContentActive: vars("colors.neutral800"),
        ghostNeutralSurfaceActive: vars("colors.neutral300A"),
        ghostNeutralLineActive: "transparent",

        /* Success */
        ghostSuccessContent: vars("colors.success700"),
        ghostSuccessSurface: "transparent",
        ghostSuccessLine: "transparent",
        ghostSuccessContentHover: vars("colors.success700"),
        ghostSuccessSurfaceHover: vars("colors.success50"),
        ghostSuccessLineHover: vars("colors.success50"),
        ghostSuccessContentActive: vars("colors.success800"),
        ghostSuccessSurfaceActive: vars("colors.success100"),
        ghostSuccessLineActive: vars("colors.success100"),

        /* Info */
        ghostInfoContent: vars("colors.info600"),
        ghostInfoSurface: "transparent",
        ghostInfoLine: "transparent",
        ghostInfoContentHover: vars("colors.info700"),
        ghostInfoSurfaceHover: vars("colors.info50"),
        ghostInfoLineHover: vars("colors.info50"),
        ghostInfoContentActive: vars("colors.info800"),
        ghostInfoSurfaceActive: vars("colors.info100"),
        ghostInfoLineActive: vars("colors.info100"),

        /* Warning */
        ghostWarningContent: vars("colors.warning700"),
        ghostWarningSurface: "transparent",
        ghostWarningLine: "transparent",
        ghostWarningContentHover: vars("colors.warning700"),
        ghostWarningSurfaceHover: vars("colors.warning100"),
        ghostWarningLineHover: vars("colors.warning100"),
        ghostWarningContentActive: vars("colors.warning800"),
        ghostWarningSurfaceActive: vars("colors.warning200"),
        ghostWarningLineActive: vars("colors.warning200"),

        /* Danger */
        ghostDangerContent: vars("colors.danger600"),
        ghostDangerSurface: "transparent",
        ghostDangerLine: "transparent",
        ghostDangerContentHover: vars("colors.danger700"),
        ghostDangerSurfaceHover: vars("colors.danger50"),
        ghostDangerLineHover: vars("colors.danger50"),
        ghostDangerContentActive: vars("colors.danger800"),
        ghostDangerSurfaceActive: vars("colors.danger100"),
        ghostDangerLineActive: vars("colors.danger100"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Selection
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedContent: vars("colors.contentInverse"),
        solidSelectedSurface: vars("colors.primary600"),
        solidSelectedLine: vars("colors.primary600"),
        solidSelectedContentHover: vars("colors.contentInverse"),
        solidSelectedSurfaceHover: vars("colors.primary700"),
        solidSelectedLineHover: vars("colors.primary700"),
        solidSelectedContentActive: vars("colors.contentInverse"),
        solidSelectedSurfaceActive: vars("colors.primary800"),
        solidSelectedLineActive: vars("colors.primary800"),

        /* Soft */
        softSelectedContent: vars("colors.primary700"),
        softSelectedSurface: vars("colors.primary50"),
        softSelectedLine: vars("colors.primary50"),
        softSelectedContentHover: vars("colors.primary800"),
        softSelectedSurfaceHover: vars("colors.primary100"),
        softSelectedLineHover: vars("colors.primary100"),
        softSelectedContentActive: vars("colors.primary800"),
        softSelectedSurfaceActive: vars("colors.primary200"),
        softSelectedLineActive: vars("colors.primary200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputContent: vars("colors.neutral800"),
        softInputSurface: vars("colors.neutral100"),
        softInputLine: vars("colors.neutral200"),
        softInputContentHover: vars("colors.neutral800"),
        softInputSurfaceHover: vars("colors.neutral100"),
        softInputLineHover: vars("colors.neutral200"),
        softInputContentActive: vars("colors.neutral800"),
        softInputSurfaceActive: vars("colors.neutral100"),
        softInputLineActive: vars("colors.neutral200"),

        /* Outlined */
        outlinedInputContent: vars("colors.neutral800"),
        outlinedInputSurface: "transparent",
        outlinedInputLine: vars("colors.neutral300A"),
        outlinedInputContentHover: vars("colors.neutral800"),
        outlinedInputSurfaceHover: "transparent",
        outlinedInputLineHover: vars("colors.neutral300A"),
        outlinedInputContentActive: vars("colors.neutral800"),
        outlinedInputSurfaceActive: "transparent",
        outlinedInputLineActive: vars("colors.neutral300A"),
      },
      shadows: {
        raised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        overlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
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
         * Color - Content (texts and icons)
         * -----------------------------------------------------------------------------------------------*/

        content: vars("colors.neutral100"),
        contentSubtle: vars("colors.neutral200"),
        contentSubtler: vars("colors.neutral300"),
        contentSubtlest: vars("colors.neutral400"),
        contentDisabled: vars("colors.neutral400A"),
        contentInverse: vars("colors.neutral950"),
        contentWarningInverse: "#1c1917" /* TODO */,
        contentSuccess: vars("colors.success300"),
        contentDanger: vars("colors.danger300"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        body: vars("colors.neutral950"),

        surface: vars("colors.neutral950"),
        surfaceHover: vars("colors.neutral900"),
        surfaceActive: vars("colors.neutral800"),
        surfaceDisabled: vars("colors.neutral100A"),

        raisedSurface: vars("colors.neutral900"),
        raisedSurfaceHover: vars("colors.neutral800"),
        raisedSurfaceActive: vars("colors.neutral700"),

        overlaySurface: vars("colors.neutral800"),
        overlaySurfaceHover: vars("colors.neutral700"),
        overlaySurfaceActive: vars("colors.neutral600"),

        sunkenSurface: "#121212",

        subtleSurface: "transparent",
        subtleSurfaceHover: vars("colors.neutral200A"),
        subtleSurfaceActive: vars("colors.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        line: vars("colors.neutral300A"),
        lineDisabled: vars("colors.neutral200A"),

        focusRing: vars("colors.primary400"),
        backdrop: vars("colors.neutral500A"),
        tooltip: vars("colors.neutral100"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryContent: vars("colors.contentInverse"),
        solidPrimarySurface: vars("colors.primary300"),
        solidPrimaryLine: vars("colors.primary300"),
        solidPrimaryContentHover: vars("colors.contentInverse"),
        solidPrimarySurfaceHover: vars("colors.primary200"),
        solidPrimaryLineHover: vars("colors.primary200"),
        solidPrimaryContentActive: vars("colors.contentInverse"),
        solidPrimarySurfaceActive: vars("colors.primary100"),
        solidPrimaryLineActive: vars("colors.primary100"),

        /* Neutral */
        solidNeutralContent: vars("colors.contentInverse"),
        solidNeutralSurface: vars("colors.neutral200"),
        solidNeutralLine: vars("colors.neutral200"),
        solidNeutralContentHover: vars("colors.contentInverse"),
        solidNeutralSurfaceHover: vars("colors.neutral100"),
        solidNeutralLineHover: vars("colors.neutral100"),
        solidNeutralContentActive: vars("colors.contentInverse"),
        solidNeutralSurfaceActive: vars("colors.neutral50"),
        solidNeutralLineActive: vars("colors.neutral50"),

        /* Success */
        solidSuccessContent: vars("colors.contentInverse"),
        solidSuccessSurface: vars("colors.success300"),
        solidSuccessLine: vars("colors.success300"),
        solidSuccessContentHover: vars("colors.contentInverse"),
        solidSuccessSurfaceHover: vars("colors.success200"),
        solidSuccessLineHover: vars("colors.success200"),
        solidSuccessContentActive: vars("colors.contentInverse"),
        solidSuccessSurfaceActive: vars("colors.success100"),
        solidSuccessLineActive: vars("colors.success100"),

        /* Info */
        solidInfoContent: vars("colors.contentInverse"),
        solidInfoSurface: vars("colors.info300"),
        solidInfoLine: vars("colors.info300"),
        solidInfoContentHover: vars("colors.contentInverse"),
        solidInfoSurfaceHover: vars("colors.info200"),
        solidInfoLineHover: vars("colors.info200"),
        solidInfoContentActive: vars("colors.contentInverse"),
        solidInfoSurfaceActive: vars("colors.info100"),
        solidInfoLineActive: vars("colors.info100"),

        /* Warning */
        solidWarningContent: vars("colors.contentWarningInverse"),
        solidWarningSurface: vars("colors.warning300"),
        solidWarningLine: vars("colors.warning300"),
        solidWarningContentHover: vars("colors.contentWarningInverse"),
        solidWarningSurfaceHover: vars("colors.warning200"),
        solidWarningLineHover: vars("colors.warning200"),
        solidWarningContentActive: vars("colors.contentWarningInverse"),
        solidWarningSurfaceActive: vars("colors.warning100"),
        solidWarningLineActive: vars("colors.warning100"),

        /* Danger */
        solidDangerContent: vars("colors.contentInverse"),
        solidDangerSurface: vars("colors.danger300"),
        solidDangerLine: vars("colors.danger300"),
        solidDangerContentHover: vars("colors.contentInverse"),
        solidDangerSurfaceHover: vars("colors.danger200"),
        solidDangerLineHover: vars("colors.danger200"),
        solidDangerContentActive: vars("colors.contentInverse"),
        solidDangerSurfaceActive: vars("colors.danger100"),
        solidDangerLineActive: vars("colors.danger100"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryContent: vars("colors.primary200"),
        softPrimarySurface: vars("colors.primary900"),
        softPrimaryLine: vars("colors.primary900"),
        softPrimaryContentHover: vars("colors.primary100"),
        softPrimarySurfaceHover: vars("colors.primary800"),
        softPrimaryLineHover: vars("colors.primary800"),
        softPrimaryContentActive: vars("colors.primary100"),
        softPrimarySurfaceActive: vars("colors.primary700"),
        softPrimaryLineActive: vars("colors.primary700"),

        /* Neutral */
        softNeutralContent: vars("colors.neutral100"),
        softNeutralSurface: vars("colors.neutral200A"),
        softNeutralLine: "transparent",
        softNeutralContentHover: vars("colors.neutral100"),
        softNeutralSurfaceHover: vars("colors.neutral300A"),
        softNeutralLineHover: "transparent",
        softNeutralContentActive: vars("colors.neutral100"),
        softNeutralSurfaceActive: vars("colors.neutral400A"),
        softNeutralLineActive: "transparent",

        /* Success */
        softSuccessContent: vars("colors.success200"),
        softSuccessSurface: vars("colors.success900"),
        softSuccessLine: vars("colors.success900"),
        softSuccessContentHover: vars("colors.success100"),
        softSuccessSurfaceHover: vars("colors.success800"),
        softSuccessLineHover: vars("colors.success800"),
        softSuccessContentActive: vars("colors.success100"),
        softSuccessSurfaceActive: vars("colors.success700"),
        softSuccessLineActive: vars("colors.success700"),

        /* Info */
        softInfoContent: vars("colors.info200"),
        softInfoSurface: vars("colors.info900"),
        softInfoLine: vars("colors.info900"),
        softInfoContentHover: vars("colors.info100"),
        softInfoSurfaceHover: vars("colors.info800"),
        softInfoLineHover: vars("colors.info800"),
        softInfoContentActive: vars("colors.info100"),
        softInfoSurfaceActive: vars("colors.info700"),
        softInfoLineActive: vars("colors.info700"),

        /* Warning */
        softWarningContent: vars("colors.warning200"),
        softWarningSurface: vars("colors.warning800"),
        softWarningLine: vars("colors.warning800"),
        softWarningContentHover: vars("colors.warning100"),
        softWarningSurfaceHover: vars("colors.warning700"),
        softWarningLineHover: vars("colors.warning700"),
        softWarningContentActive: vars("colors.warning100"),
        softWarningSurfaceActive: vars("colors.warning600"),
        softWarningLineActive: vars("colors.warning600"),

        /* Danger */
        softDangerContent: vars("colors.danger200"),
        softDangerSurface: vars("colors.danger900"),
        softDangerLine: vars("colors.danger900"),
        softDangerContentHover: vars("colors.danger100"),
        softDangerSurfaceHover: vars("colors.danger800"),
        softDangerLineHover: vars("colors.danger800"),
        softDangerContentActive: vars("colors.danger100"),
        softDangerSurfaceActive: vars("colors.danger700"),
        softDangerLineActive: vars("colors.danger700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryContent: vars("colors.primary300"),
        outlinedPrimarySurface: "transparent",
        outlinedPrimaryLine: vars("colors.primary300"),
        outlinedPrimaryContentHover: vars("colors.contentInverse"),
        outlinedPrimarySurfaceHover: vars("colors.primary300"),
        outlinedPrimaryLineHover: vars("colors.primary300"),
        outlinedPrimaryContentActive: vars("colors.contentInverse"),
        outlinedPrimarySurfaceActive: vars("colors.primary200"),
        outlinedPrimaryLineActive: vars("colors.primary200"),

        /* Neutral */
        outlinedNeutralContent: vars("colors.neutral100"),
        outlinedNeutralSurface: "transparent",
        outlinedNeutralLine: vars("colors.neutral500"),
        outlinedNeutralContentHover: vars("colors.contentInverse"),
        outlinedNeutralSurfaceHover: vars("colors.neutral200"),
        outlinedNeutralLineHover: vars("colors.neutral200"),
        outlinedNeutralContentActive: vars("colors.contentInverse"),
        outlinedNeutralSurfaceActive: vars("colors.neutral100"),
        outlinedNeutralLineActive: vars("colors.neutral100"),

        /* Success */
        outlinedSuccessContent: vars("colors.success300"),
        outlinedSuccessSurface: "transparent",
        outlinedSuccessLine: vars("colors.success300"),
        outlinedSuccessContentHover: vars("colors.contentInverse"),
        outlinedSuccessSurfaceHover: vars("colors.success300"),
        outlinedSuccessLineHover: vars("colors.success300"),
        outlinedSuccessContentActive: vars("colors.contentInverse"),
        outlinedSuccessSurfaceActive: vars("colors.success200"),
        outlinedSuccessLineActive: vars("colors.success200"),

        /* Info */
        outlinedInfoContent: vars("colors.info300"),
        outlinedInfoSurface: "transparent",
        outlinedInfoLine: vars("colors.info300"),
        outlinedInfoContentHover: vars("colors.contentInverse"),
        outlinedInfoSurfaceHover: vars("colors.info300"),
        outlinedInfoLineHover: vars("colors.info300"),
        outlinedInfoContentActive: vars("colors.contentInverse"),
        outlinedInfoSurfaceActive: vars("colors.info200"),
        outlinedInfoLineActive: vars("colors.info200"),

        /* Warning */
        outlinedWarningContent: vars("colors.warning300"),
        outlinedWarningSurface: "transparent",
        outlinedWarningLine: vars("colors.warning300"),
        outlinedWarningContentHover: vars("colors.contentWarningInverse"),
        outlinedWarningSurfaceHover: vars("colors.warning300"),
        outlinedWarningLineHover: vars("colors.warning300"),
        outlinedWarningContentActive: vars("colors.contentWarningInverse"),
        outlinedWarningSurfaceActive: vars("colors.warning200"),
        outlinedWarningLineActive: vars("colors.warning200"),

        /* Danger */
        outlinedDangerContent: vars("colors.danger300"),
        outlinedDangerSurface: "transparent",
        outlinedDangerLine: vars("colors.danger300"),
        outlinedDangerContentHover: vars("colors.contentInverse"),
        outlinedDangerSurfaceHover: vars("colors.danger300"),
        outlinedDangerLineHover: vars("colors.danger300"),
        outlinedDangerContentActive: vars("colors.contentInverse"),
        outlinedDangerSurfaceActive: vars("colors.danger200"),
        outlinedDangerLineActive: vars("colors.danger200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryContent: vars("colors.primary300"),
        ghostPrimarySurface: "transparent",
        ghostPrimaryLine: "transparent",
        ghostPrimaryContentHover: vars("colors.primary200"),
        ghostPrimarySurfaceHover: vars("colors.primary900"),
        ghostPrimaryLineHover: vars("colors.primary900"),
        ghostPrimaryContentActive: vars("colors.primary100"),
        ghostPrimarySurfaceActive: vars("colors.primary800"),
        ghostPrimaryLineActive: vars("colors.primary800"),

        /* Neutral */
        ghostNeutralContent: vars("colors.neutral100"),
        ghostNeutralSurface: "transparent",
        ghostNeutralLine: "transparent",
        ghostNeutralContentHover: vars("colors.neutral100"),
        ghostNeutralSurfaceHover: vars("colors.neutral200A"),
        ghostNeutralLineHover: "transparent",
        ghostNeutralContentActive: vars("colors.neutral100"),
        ghostNeutralSurfaceActive: vars("colors.neutral300A"),
        ghostNeutralLineActive: "transparent",

        /* Success */
        ghostSuccessContent: vars("colors.success300"),
        ghostSuccessSurface: "transparent",
        ghostSuccessLine: "transparent",
        ghostSuccessContentHover: vars("colors.success200"),
        ghostSuccessSurfaceHover: vars("colors.success900"),
        ghostSuccessLineHover: vars("colors.success900"),
        ghostSuccessContentActive: vars("colors.success100"),
        ghostSuccessSurfaceActive: vars("colors.success800"),
        ghostSuccessLineActive: vars("colors.success800"),

        /* Info */
        ghostInfoContent: vars("colors.info300"),
        ghostInfoSurface: "transparent",
        ghostInfoLine: "transparent",
        ghostInfoContentHover: vars("colors.info200"),
        ghostInfoSurfaceHover: vars("colors.info900"),
        ghostInfoLineHover: vars("colors.info900"),
        ghostInfoContentActive: vars("colors.info100"),
        ghostInfoSurfaceActive: vars("colors.info800"),
        ghostInfoLineActive: vars("colors.info800"),

        /* Warning */
        ghostWarningContent: vars("colors.warning300"),
        ghostWarningSurface: "transparent",
        ghostWarningLine: "transparent",
        ghostWarningContentHover: vars("colors.warning200"),
        ghostWarningSurfaceHover: vars("colors.warning800"),
        ghostWarningLineHover: vars("colors.warning800"),
        ghostWarningContentActive: vars("colors.warning100"),
        ghostWarningSurfaceActive: vars("colors.warning700"),
        ghostWarningLineActive: vars("colors.warning700"),

        /* Danger */
        ghostDangerContent: vars("colors.danger300"),
        ghostDangerSurface: "transparent",
        ghostDangerLine: "transparent",
        ghostDangerContentHover: vars("colors.danger200"),
        ghostDangerSurfaceHover: vars("colors.danger900"),
        ghostDangerLineHover: vars("colors.danger900"),
        ghostDangerContentActive: vars("colors.danger100"),
        ghostDangerSurfaceActive: vars("colors.danger800"),
        ghostDangerLineActive: vars("colors.danger800"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Selected
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedContent: vars("colors.contentInverse"),
        solidSelectedSurface: vars("colors.primary300"),
        solidSelectedLine: vars("colors.primary300"),
        solidSelectedContentHover: vars("colors.contentInverse"),
        solidSelectedSurfaceHover: vars("colors.primary200"),
        solidSelectedLineHover: vars("colors.primary200"),
        solidSelectedContentActive: vars("colors.contentInverse"),
        solidSelectedSurfaceActive: vars("colors.primary100"),
        solidSelectedLineActive: vars("colors.primary100"),

        /* Soft */
        softSelectedContent: vars("colors.primary200"),
        softSelectedSurface: vars("colors.primary900"),
        softSelectedLine: vars("colors.primary900"),
        softSelectedContentHover: vars("colors.primary100"),
        softSelectedSurfaceHover: vars("colors.primary800"),
        softSelectedLineHover: vars("colors.primary800"),
        softSelectedContentActive: vars("colors.primary100"),
        softSelectedSurfaceActive: vars("colors.primary700"),
        softSelectedLineActive: vars("colors.primary700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputContent: vars("colors.neutral100"),
        softInputSurface: vars("colors.neutral800"),
        softInputLine: vars("colors.neutral700"),
        softInputContentHover: vars("colors.neutral100"),
        softInputSurfaceHover: vars("colors.neutral800"),
        softInputLineHover: vars("colors.neutral700"),
        softInputContentActive: vars("colors.neutral100"),
        softInputSurfaceActive: vars("colors.neutral800"),
        softInputLineActive: vars("colors.neutral700"),

        /* Outlined */
        outlinedInputContent: vars("colors.neutral100"),
        outlinedInputSurface: "transparent",
        outlinedInputLine: vars("colors.neutral300A"),
        outlinedInputContentHover: vars("colors.neutral100"),
        outlinedInputSurfaceHover: "transparent",
        outlinedInputLineHover: vars("colors.neutral300A"),
        outlinedInputContentActive: vars("colors.neutral100"),
        outlinedInputSurfaceActive: "transparent",
        outlinedInputLineActive: vars("colors.neutral300A"),
      },
      shadows: {
        raised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        overlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}

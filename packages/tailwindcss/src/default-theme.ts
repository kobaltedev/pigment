import twDefaultTheme from "tailwindcss/defaultTheme";

import { Theme, VarsFn } from "./types";

export function getDefaultTheme(vars: VarsFn): Theme {
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
      color: {
        /* -------------------------------------------------------------------------------------------------
         * Reference tokens
         * -----------------------------------------------------------------------------------------------*/

        /* Tailwind - slate */
        neutral0: "#ffffff",
        neutral50: "#f8fafc",
        neutral100: "#f1f5f9",
        neutral200: "#e2e8f0",
        neutral300: "#cbd5e1",
        neutral400: "#94a3b8",
        neutral500: "#64748b",
        neutral600: "#475569",
        neutral700: "#334155",
        neutral800: "#1e293b",
        neutral900: "#0f172a",
        neutral950: "#070c18",

        /* Based on Tailwind - slate-900 */
        neutral100A: "#0f172a08",
        neutral200A: "#0f172a0f",
        neutral300A: "#0f172a24",
        neutral400A: "#0f172a4f",
        neutral500A: "#0f172a7d",

        /* Tailwind - blue */
        primary50: "#eff6ff",
        primary100: "#dbeafe",
        primary200: "#bfdbfe",
        primary300: "#93c5fd",
        primary400: "#60a5fa",
        primary500: "#3b82f6",
        primary600: "#2563eb",
        primary700: "#1d4ed8",
        primary800: "#1e40af",
        primary900: "#1e3a8a",

        /* Tailwind - blue */
        info50: "#eff6ff",
        info100: "#dbeafe",
        info200: "#bfdbfe",
        info300: "#93c5fd",
        info400: "#60a5fa",
        info500: "#3b82f6",
        info600: "#2563eb",
        info700: "#1d4ed8",
        info800: "#1e40af",
        info900: "#1e3a8a",

        /* Tailwind - green */
        success50: "#f0fdf4",
        success100: "#dcfce7",
        success200: "#bbf7d0",
        success300: "#86efac",
        success400: "#4ade80",
        success500: "#22c55e",
        success600: "#16a34a",
        success700: "#15803d",
        success800: "#166534",
        success900: "#14532d",

        /* Tailwind - amber */
        warning50: "#fffbeb",
        warning100: "#fef3c7",
        warning200: "#fde68a",
        warning300: "#fcd34d",
        warning400: "#fbbf24",
        warning500: "#f59e0b",
        warning600: "#d97706",
        warning700: "#b45309",
        warning800: "#92400e",
        warning900: "#78350f",

        /* Tailwind - red */
        danger50: "#fef2f2",
        danger100: "#fee2e2",
        danger200: "#fecaca",
        danger300: "#fca5a5",
        danger400: "#f87171",
        danger500: "#ef4444",
        danger600: "#dc2626",
        danger700: "#b91c1c",
        danger800: "#991b1b",
        danger900: "#7f1d1d",

        /* Tailwind - violet */
        help50: "#f5f3ff",
        help100: "#ede9fe",
        help200: "#ddd6fe",
        help300: "#c4b5fd",
        help400: "#a78bfa",
        help500: "#8b5cf6",
        help600: "#7c3aed",
        help700: "#6d28d9",
        help800: "#5b21b6",
        help900: "#4c1d95",

        /* -------------------------------------------------------------------------------------------------
         * Color - Texts
         * -----------------------------------------------------------------------------------------------*/

        textBold: vars("color.neutral900"),
        text: vars("color.neutral800"),
        textSubtle: vars("color.neutral700"),
        textSubtler: vars("color.neutral600"),
        textSubtlest: vars("color.neutral500"),
        textInverse: vars("color.neutral0"),
        textWarningInverse: "#1c1917",
        textSuccess: vars("color.success600"),
        textDanger: vars("color.danger600"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Icons
         * -----------------------------------------------------------------------------------------------*/

        iconBold: vars("color.neutral900"),
        icon: vars("color.neutral800"),
        iconSubtle: vars("color.neutral700"),
        iconSubtler: vars("color.neutral600"),
        iconSubtlest: vars("color.neutral500"),
        iconInverse: vars("color.neutral0"),
        iconWarningInverse: "#292524",
        iconSuccess: vars("color.success600"),
        iconDanger: vars("color.danger600"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        bodyBg: vars("color.neutral0"),

        /* Subtle */
        subtleBg: "transparent",
        subtleBgHover: vars("color.neutral200A"),
        subtleBgActive: vars("color.neutral300A"),

        /* Surface */
        surfaceBg: vars("color.neutral0"),
        surfaceBgHover: vars("color.neutral100"),
        surfaceBgActive: vars("color.neutral200"),
        surfaceRaisedBg: vars("color.neutral0"),
        surfaceRaisedBgHover: vars("color.neutral100"),
        surfaceRaisedBgActive: vars("color.neutral200"),
        surfaceOverlayBg: vars("color.neutral0"),
        surfaceOverlayBgHover: vars("color.neutral100"),
        surfaceOverlayBgActive: vars("color.neutral200"),
        surfaceSunkenBg: vars("color.neutral50"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Border
         * -----------------------------------------------------------------------------------------------*/

        border: vars("color.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        focusRing: vars("color.primary500"),
        backdrop: vars("color.neutral500A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Disabled
         * -----------------------------------------------------------------------------------------------*/

        disabledText: vars("color.neutral400A"),
        disabledIcon: vars("color.neutral400A"),
        disabledBg: vars("color.neutral100A"),
        disabledBorder: vars("color.neutral200A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Selected
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedText: vars("color.textInverse"),
        solidSelectedIcon: vars("color.iconInverse"),
        solidSelectedBg: vars("color.primary600"),
        solidSelectedBorder: vars("color.primary600"),
        solidSelectedTextHover: vars("color.textInverse"),
        solidSelectedIconHover: vars("color.iconInverse"),
        solidSelectedBgHover: vars("color.primary700"),
        solidSelectedBorderHover: vars("color.primary700"),
        solidSelectedTextActive: vars("color.textInverse"),
        solidSelectedIconActive: vars("color.iconInverse"),
        solidSelectedBgActive: vars("color.primary800"),
        solidSelectedBorderActive: vars("color.primary800"),

        /* Soft */
        softSelectedText: vars("color.primary700"),
        softSelectedIcon: vars("color.primary700"),
        softSelectedBg: vars("color.primary50"),
        softSelectedBorder: vars("color.primary50"),
        softSelectedTextHover: vars("color.primary800"),
        softSelectedIconHover: vars("color.primary800"),
        softSelectedBgHover: vars("color.primary100"),
        softSelectedBorderHover: vars("color.primary100"),
        softSelectedTextActive: vars("color.primary800"),
        softSelectedIconActive: vars("color.primary800"),
        softSelectedBgActive: vars("color.primary200"),
        softSelectedBorderActive: vars("color.primary200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputText: vars("color.neutral800"),
        softInputIcon: vars("color.neutral600"),
        softInputBg: vars("color.neutral100"),
        softInputBorder: vars("color.neutral200"),
        softInputTextHover: vars("color.neutral800"),
        softInputIconHover: vars("color.neutral600"),
        softInputBgHover: vars("color.neutral100"),
        softInputBorderHover: vars("color.neutral200"),
        softInputTextActive: vars("color.neutral800"),
        softInputIconActive: vars("color.neutral600"),
        softInputBgActive: vars("color.neutral100"),
        softInputBorderActive: vars("color.neutral200"),

        /* Outlined */
        outlinedInputText: vars("color.neutral800"),
        outlinedInputIcon: vars("color.neutral600"),
        outlinedInputBg: "transparent",
        outlinedInputBorder: vars("color.neutral300A"),
        outlinedInputTextHover: vars("color.neutral800"),
        outlinedInputIconHover: vars("color.neutral600"),
        outlinedInputBgHover: "transparent",
        outlinedInputBorderHover: vars("color.neutral300A"),
        outlinedInputTextActive: vars("color.neutral800"),
        outlinedInputIconActive: vars("color.neutral600"),
        outlinedInputBgActive: "transparent",
        outlinedInputBorderActive: vars("color.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryText: vars("color.textInverse"),
        solidPrimaryIcon: vars("color.iconInverse"),
        solidPrimaryBg: vars("color.primary600"),
        solidPrimaryBorder: vars("color.primary600"),
        solidPrimaryTextHover: vars("color.textInverse"),
        solidPrimaryIconHover: vars("color.iconInverse"),
        solidPrimaryBgHover: vars("color.primary700"),
        solidPrimaryBorderHover: vars("color.primary700"),
        solidPrimaryTextActive: vars("color.textInverse"),
        solidPrimaryIconActive: vars("color.iconInverse"),
        solidPrimaryBgActive: vars("color.primary800"),
        solidPrimaryBorderActive: vars("color.primary800"),

        /* Neutral */
        solidNeutralText: vars("color.textInverse"),
        solidNeutralIcon: vars("color.iconInverse"),
        solidNeutralBg: vars("color.neutral700"),
        solidNeutralBorder: vars("color.neutral700"),
        solidNeutralTextHover: vars("color.textInverse"),
        solidNeutralIconHover: vars("color.iconInverse"),
        solidNeutralBgHover: vars("color.neutral800"),
        solidNeutralBorderHover: vars("color.neutral800"),
        solidNeutralTextActive: vars("color.textInverse"),
        solidNeutralIconActive: vars("color.iconInverse"),
        solidNeutralBgActive: vars("color.neutral900"),
        solidNeutralBorderActive: vars("color.neutral900"),

        /* Success */
        solidSuccessText: vars("color.textInverse"),
        solidSuccessIcon: vars("color.iconInverse"),
        solidSuccessBg: vars("color.success600"),
        solidSuccessBorder: vars("color.success600"),
        solidSuccessTextHover: vars("color.textInverse"),
        solidSuccessIconHover: vars("color.iconInverse"),
        solidSuccessBgHover: vars("color.success700"),
        solidSuccessBorderHover: vars("color.success700"),
        solidSuccessTextActive: vars("color.textInverse"),
        solidSuccessIconActive: vars("color.iconInverse"),
        solidSuccessBgActive: vars("color.success800"),
        solidSuccessBorderActive: vars("color.success800"),

        /* Info */
        solidInfoText: vars("color.textInverse"),
        solidInfoIcon: vars("color.iconInverse"),
        solidInfoBg: vars("color.info600"),
        solidInfoBorder: vars("color.info600"),
        solidInfoTextHover: vars("color.textInverse"),
        solidInfoIconHover: vars("color.iconInverse"),
        solidInfoBgHover: vars("color.info700"),
        solidInfoBorderHover: vars("color.info700"),
        solidInfoTextActive: vars("color.textInverse"),
        solidInfoIconActive: vars("color.iconInverse"),
        solidInfoBgActive: vars("color.info800"),
        solidInfoBorderActive: vars("color.info800"),

        /* Warning */
        solidWarningText: vars("color.textWarningInverse"),
        solidWarningIcon: vars("color.iconWarningInverse"),
        solidWarningBg: vars("color.warning300"),
        solidWarningBorder: vars("color.warning300"),
        solidWarningTextHover: vars("color.textWarningInverse"),
        solidWarningIconHover: vars("color.iconWarningInverse"),
        solidWarningBgHover: vars("color.warning400"),
        solidWarningBorderHover: vars("color.warning400"),
        solidWarningTextActive: vars("color.textWarningInverse"),
        solidWarningIconActive: vars("color.iconWarningInverse"),
        solidWarningBgActive: vars("color.warning500"),
        solidWarningBorderActive: vars("color.warning500"),

        /* Danger */
        solidDangerText: vars("color.textInverse"),
        solidDangerIcon: vars("color.iconInverse"),
        solidDangerBg: vars("color.danger600"),
        solidDangerBorder: vars("color.danger600"),
        solidDangerTextHover: vars("color.textInverse"),
        solidDangerIconHover: vars("color.iconInverse"),
        solidDangerBgHover: vars("color.danger700"),
        solidDangerBorderHover: vars("color.danger700"),
        solidDangerTextActive: vars("color.textInverse"),
        solidDangerIconActive: vars("color.iconInverse"),
        solidDangerBgActive: vars("color.danger800"),
        solidDangerBorderActive: vars("color.danger800"),

        /* Help */
        solidHelpText: vars("color.textInverse"),
        solidHelpIcon: vars("color.iconInverse"),
        solidHelpBg: vars("color.help600"),
        solidHelpBorder: vars("color.help600"),
        solidHelpTextHover: vars("color.textInverse"),
        solidHelpIconHover: vars("color.iconInverse"),
        solidHelpBgHover: vars("color.help700"),
        solidHelpBorderHover: vars("color.help700"),
        solidHelpTextActive: vars("color.textInverse"),
        solidHelpIconActive: vars("color.iconInverse"),
        solidHelpBgActive: vars("color.help800"),
        solidHelpBorderActive: vars("color.help800"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryText: vars("color.primary700"),
        softPrimaryIcon: vars("color.primary700"),
        softPrimaryBg: vars("color.primary50"),
        softPrimaryBorder: vars("color.primary50"),
        softPrimaryTextHover: vars("color.primary800"),
        softPrimaryIconHover: vars("color.primary800"),
        softPrimaryBgHover: vars("color.primary100"),
        softPrimaryBorderHover: vars("color.primary100"),
        softPrimaryTextActive: vars("color.primary800"),
        softPrimaryIconActive: vars("color.primary800"),
        softPrimaryBgActive: vars("color.primary200"),
        softPrimaryBorderActive: vars("color.primary200"),

        /* Neutral */
        softNeutralText: vars("color.neutral800"),
        softNeutralIcon: vars("color.neutral800"),
        softNeutralBg: vars("color.neutral200A"),
        softNeutralBorder: "transparent",
        softNeutralTextHover: vars("color.neutral800"),
        softNeutralIconHover: vars("color.neutral800"),
        softNeutralBgHover: vars("color.neutral300A"),
        softNeutralBorderHover: "transparent",
        softNeutralTextActive: vars("color.neutral800"),
        softNeutralIconActive: vars("color.neutral800"),
        softNeutralBgActive: vars("color.neutral400A"),
        softNeutralBorderActive: "transparent",

        /* Success */
        softSuccessText: vars("color.success700"),
        softSuccessIcon: vars("color.success700"),
        softSuccessBg: vars("color.success50"),
        softSuccessBorder: vars("color.success50"),
        softSuccessTextHover: vars("color.success800"),
        softSuccessIconHover: vars("color.success800"),
        softSuccessBgHover: vars("color.success100"),
        softSuccessBorderHover: vars("color.success100"),
        softSuccessTextActive: vars("color.success800"),
        softSuccessIconActive: vars("color.success800"),
        softSuccessBgActive: vars("color.success200"),
        softSuccessBorderActive: vars("color.success200"),

        /* Info */
        softInfoText: vars("color.info700"),
        softInfoIcon: vars("color.info700"),
        softInfoBg: vars("color.info50"),
        softInfoBorder: vars("color.info50"),
        softInfoTextHover: vars("color.info800"),
        softInfoIconHover: vars("color.info800"),
        softInfoBgHover: vars("color.info100"),
        softInfoBorderHover: vars("color.info100"),
        softInfoTextActive: vars("color.info800"),
        softInfoIconActive: vars("color.info800"),
        softInfoBgActive: vars("color.info200"),
        softInfoBorderActive: vars("color.info200"),

        /* Warning */
        softWarningText: vars("color.warning700"),
        softWarningIcon: vars("color.warning700"),
        softWarningBg: vars("color.warning100"),
        softWarningBorder: vars("color.warning100"),
        softWarningTextHover: vars("color.warning800"),
        softWarningIconHover: vars("color.warning800"),
        softWarningBgHover: vars("color.warning200"),
        softWarningBorderHover: vars("color.warning200"),
        softWarningTextActive: vars("color.warning800"),
        softWarningIconActive: vars("color.warning800"),
        softWarningBgActive: vars("color.warning300"),
        softWarningBorderActive: vars("color.warning300"),

        /* Danger */
        softDangerText: vars("color.danger700"),
        softDangerIcon: vars("color.danger700"),
        softDangerBg: vars("color.danger50"),
        softDangerBorder: vars("color.danger50"),
        softDangerTextHover: vars("color.danger800"),
        softDangerIconHover: vars("color.danger800"),
        softDangerBgHover: vars("color.danger100"),
        softDangerBorderHover: vars("color.danger100"),
        softDangerTextActive: vars("color.danger800"),
        softDangerIconActive: vars("color.danger800"),
        softDangerBgActive: vars("color.danger200"),
        softDangerBorderActive: vars("color.danger200"),

        /* Help */
        softHelpText: vars("color.help700"),
        softHelpIcon: vars("color.help700"),
        softHelpBg: vars("color.help50"),
        softHelpBorder: vars("color.help50"),
        softHelpTextHover: vars("color.help800"),
        softHelpIconHover: vars("color.help800"),
        softHelpBgHover: vars("color.help100"),
        softHelpBorderHover: vars("color.help100"),
        softHelpTextActive: vars("color.help800"),
        softHelpIconActive: vars("color.help800"),
        softHelpBgActive: vars("color.help200"),
        softHelpBorderActive: vars("color.help200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryText: vars("color.primary600"),
        outlinedPrimaryIcon: vars("color.primary600"),
        outlinedPrimaryBg: "transparent",
        outlinedPrimaryBorder: vars("color.primary600"),
        outlinedPrimaryTextHover: vars("color.textInverse"),
        outlinedPrimaryIconHover: vars("color.iconInverse"),
        outlinedPrimaryBgHover: vars("color.primary600"),
        outlinedPrimaryBorderHover: vars("color.primary600"),
        outlinedPrimaryTextActive: vars("color.textInverse"),
        outlinedPrimaryIconActive: vars("color.iconInverse"),
        outlinedPrimaryBgActive: vars("color.primary700"),
        outlinedPrimaryBorderActive: vars("color.primary700"),

        /* Neutral */
        outlinedNeutralText: vars("color.neutral800"),
        outlinedNeutralIcon: vars("color.neutral800"),
        outlinedNeutralBg: "transparent",
        outlinedNeutralBorder: vars("color.neutral800"),
        outlinedNeutralTextHover: vars("color.textInverse"),
        outlinedNeutralIconHover: vars("color.iconInverse"),
        outlinedNeutralBgHover: vars("color.neutral700"),
        outlinedNeutralBorderHover: vars("color.neutral700"),
        outlinedNeutralTextActive: vars("color.textInverse"),
        outlinedNeutralIconActive: vars("color.iconInverse"),
        outlinedNeutralBgActive: vars("color.neutral800"),
        outlinedNeutralBorderActive: vars("color.neutral800"),

        /* Success */
        outlinedSuccessText: vars("color.success700"),
        outlinedSuccessIcon: vars("color.success700"),
        outlinedSuccessBg: "transparent",
        outlinedSuccessBorder: vars("color.success700"),
        outlinedSuccessTextHover: vars("color.textInverse"),
        outlinedSuccessIconHover: vars("color.iconInverse"),
        outlinedSuccessBgHover: vars("color.success600"),
        outlinedSuccessBorderHover: vars("color.success600"),
        outlinedSuccessTextActive: vars("color.textInverse"),
        outlinedSuccessIconActive: vars("color.iconInverse"),
        outlinedSuccessBgActive: vars("color.success700"),
        outlinedSuccessBorderActive: vars("color.success700"),

        /* Info */
        outlinedInfoText: vars("color.info600"),
        outlinedInfoIcon: vars("color.info600"),
        outlinedInfoBg: "transparent",
        outlinedInfoBorder: vars("color.info600"),
        outlinedInfoTextHover: vars("color.textInverse"),
        outlinedInfoIconHover: vars("color.iconInverse"),
        outlinedInfoBgHover: vars("color.info600"),
        outlinedInfoBorderHover: vars("color.info600"),
        outlinedInfoTextActive: vars("color.textInverse"),
        outlinedInfoIconActive: vars("color.iconInverse"),
        outlinedInfoBgActive: vars("color.info700"),
        outlinedInfoBorderActive: vars("color.info700"),

        /* Warning */
        outlinedWarningText: vars("color.warning700"),
        outlinedWarningIcon: vars("color.warning700"),
        outlinedWarningBg: "transparent",
        outlinedWarningBorder: vars("color.warning700"),
        outlinedWarningTextHover: vars("color.textWarningInverse"),
        outlinedWarningIconHover: vars("color.iconWarningInverse"),
        outlinedWarningBgHover: vars("color.warning300"),
        outlinedWarningBorderHover: vars("color.warning300"),
        outlinedWarningTextActive: vars("color.textWarningInverse"),
        outlinedWarningIconActive: vars("color.iconWarningInverse"),
        outlinedWarningBgActive: vars("color.warning400"),
        outlinedWarningBorderActive: vars("color.warning400"),

        /* Danger */
        outlinedDangerText: vars("color.danger600"),
        outlinedDangerIcon: vars("color.danger600"),
        outlinedDangerBg: "transparent",
        outlinedDangerBorder: vars("color.danger600"),
        outlinedDangerTextHover: vars("color.textInverse"),
        outlinedDangerIconHover: vars("color.iconInverse"),
        outlinedDangerBgHover: vars("color.danger600"),
        outlinedDangerBorderHover: vars("color.danger600"),
        outlinedDangerTextActive: vars("color.textInverse"),
        outlinedDangerIconActive: vars("color.iconInverse"),
        outlinedDangerBgActive: vars("color.danger700"),
        outlinedDangerBorderActive: vars("color.danger700"),

        /* Help */
        outlinedHelpText: vars("color.help600"),
        outlinedHelpIcon: vars("color.help600"),
        outlinedHelpBg: "transparent",
        outlinedHelpBorder: vars("color.help600"),
        outlinedHelpTextHover: vars("color.textInverse"),
        outlinedHelpIconHover: vars("color.iconInverse"),
        outlinedHelpBgHover: vars("color.help600"),
        outlinedHelpBorderHover: vars("color.help600"),
        outlinedHelpTextActive: vars("color.textInverse"),
        outlinedHelpIconActive: vars("color.iconInverse"),
        outlinedHelpBgActive: vars("color.help700"),
        outlinedHelpBorderActive: vars("color.help700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryText: vars("color.primary600"),
        ghostPrimaryIcon: vars("color.primary600"),
        ghostPrimaryBg: "transparent",
        ghostPrimaryBorder: "transparent",
        ghostPrimaryTextHover: vars("color.primary700"),
        ghostPrimaryIconHover: vars("color.primary700"),
        ghostPrimaryBgHover: vars("color.primary50"),
        ghostPrimaryBorderHover: vars("color.primary50"),
        ghostPrimaryTextActive: vars("color.primary800"),
        ghostPrimaryIconActive: vars("color.primary800"),
        ghostPrimaryBgActive: vars("color.primary100"),
        ghostPrimaryBorderActive: vars("color.primary100"),

        /* Neutral */
        ghostNeutralText: vars("color.neutral800"),
        ghostNeutralIcon: vars("color.neutral800"),
        ghostNeutralBg: "transparent",
        ghostNeutralBorder: "transparent",
        ghostNeutralTextHover: vars("color.neutral800"),
        ghostNeutralIconHover: vars("color.neutral800"),
        ghostNeutralBgHover: vars("color.neutral200A"),
        ghostNeutralBorderHover: "transparent",
        ghostNeutralTextActive: vars("color.neutral800"),
        ghostNeutralIconActive: vars("color.neutral800"),
        ghostNeutralBgActive: vars("color.neutral300A"),
        ghostNeutralBorderActive: "transparent",

        /* Success */
        ghostSuccessText: vars("color.success700"),
        ghostSuccessIcon: vars("color.success700"),
        ghostSuccessBg: "transparent",
        ghostSuccessBorder: "transparent",
        ghostSuccessTextHover: vars("color.success700"),
        ghostSuccessIconHover: vars("color.success700"),
        ghostSuccessBgHover: vars("color.success50"),
        ghostSuccessBorderHover: vars("color.success50"),
        ghostSuccessTextActive: vars("color.success800"),
        ghostSuccessIconActive: vars("color.success800"),
        ghostSuccessBgActive: vars("color.success100"),
        ghostSuccessBorderActive: vars("color.success100"),

        /* Info */
        ghostInfoText: vars("color.info600"),
        ghostInfoIcon: vars("color.info600"),
        ghostInfoBg: "transparent",
        ghostInfoBorder: "transparent",
        ghostInfoTextHover: vars("color.info700"),
        ghostInfoIconHover: vars("color.info700"),
        ghostInfoBgHover: vars("color.info50"),
        ghostInfoBorderHover: vars("color.info50"),
        ghostInfoTextActive: vars("color.info800"),
        ghostInfoIconActive: vars("color.info800"),
        ghostInfoBgActive: vars("color.info100"),
        ghostInfoBorderActive: vars("color.info100"),

        /* Warning */
        ghostWarningText: vars("color.warning700"),
        ghostWarningIcon: vars("color.warning700"),
        ghostWarningBg: "transparent",
        ghostWarningBorder: "transparent",
        ghostWarningTextHover: vars("color.warning700"),
        ghostWarningIconHover: vars("color.warning700"),
        ghostWarningBgHover: vars("color.warning100"),
        ghostWarningBorderHover: vars("color.warning100"),
        ghostWarningTextActive: vars("color.warning800"),
        ghostWarningIconActive: vars("color.warning800"),
        ghostWarningBgActive: vars("color.warning200"),
        ghostWarningBorderActive: vars("color.warning200"),

        /* Danger */
        ghostDangerText: vars("color.danger600"),
        ghostDangerIcon: vars("color.danger600"),
        ghostDangerBg: "transparent",
        ghostDangerBorder: "transparent",
        ghostDangerTextHover: vars("color.danger700"),
        ghostDangerIconHover: vars("color.danger700"),
        ghostDangerBgHover: vars("color.danger50"),
        ghostDangerBorderHover: vars("color.danger50"),
        ghostDangerTextActive: vars("color.danger800"),
        ghostDangerIconActive: vars("color.danger800"),
        ghostDangerBgActive: vars("color.danger100"),
        ghostDangerBorderActive: vars("color.danger100"),

        /* Help */
        ghostHelpText: vars("color.help600"),
        ghostHelpIcon: vars("color.help600"),
        ghostHelpBg: "transparent",
        ghostHelpBorder: "transparent",
        ghostHelpTextHover: vars("color.help700"),
        ghostHelpIconHover: vars("color.help700"),
        ghostHelpBgHover: vars("color.help50"),
        ghostHelpBorderHover: vars("color.help50"),
        ghostHelpTextActive: vars("color.help800"),
        ghostHelpIconActive: vars("color.help800"),
        ghostHelpBgActive: vars("color.help100"),
        ghostHelpBorderActive: vars("color.help100"),
      },
      shadow: {
        surfaceRaised: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
        surfaceOverlay: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    dark: {
      color: {
        /* -------------------------------------------------------------------------------------------------
         * Color - Reference tokens
         * -----------------------------------------------------------------------------------------------*/

        /* Based on Tailwind - slate */
        neutral100A: "#cbd5e10a",
        neutral200A: "#cbd5e114",
        neutral300A: "#cbd5e129",
        neutral400A: "#cbd5e147",
        neutral500A: "#cbd5e180",

        /* -------------------------------------------------------------------------------------------------
         * Color - Texts
         * -----------------------------------------------------------------------------------------------*/

        textBold: vars("color.neutral50"),
        text: vars("color.neutral100"),
        textSubtle: vars("color.neutral200"),
        textSubtler: vars("color.neutral300"),
        textSubtlest: vars("color.neutral400"),
        textInverse: vars("color.neutral950"),
        textWarningInverse: "#1c1917" /* TODO */,
        textSuccess: vars("color.success300"),
        textDanger: vars("color.danger300"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Icons
         * -----------------------------------------------------------------------------------------------*/

        iconBold: vars("color.neutral50"),
        icon: vars("color.neutral100"),
        iconSubtle: vars("color.neutral200"),
        iconSubtler: vars("color.neutral300"),
        iconSubtlest: vars("color.neutral400"),
        iconInverse: vars("color.neutral950"),
        iconWarningInverse: "#292524" /* TODO */,
        iconSuccess: vars("color.success300"),
        iconDanger: vars("color.danger300"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Backgrounds
         * -----------------------------------------------------------------------------------------------*/

        bodyBg: vars("color.neutral950"),

        /* Subtle */
        subtleBg: "transparent",
        subtleBgHover: vars("color.neutral200A"),
        subtleBgActive: vars("color.neutral300A"),

        /* Surface */
        surfaceBg: vars("color.neutral950"),
        surfaceBgHover: vars("color.neutral900"),
        surfaceBgActive: vars("color.neutral800"),
        surfaceRaisedBg: vars("color.neutral900"),
        surfaceRaisedBgHover: vars("color.neutral800"),
        surfaceRaisedBgActive: vars("color.neutral700"),
        surfaceOverlayBg: vars("color.neutral800"),
        surfaceOverlayBgHover: vars("color.neutral700"),
        surfaceOverlayBgActive: vars("color.neutral600"),
        surfaceSunkenBg: "#121212",

        /* -------------------------------------------------------------------------------------------------
         * Color - Border
         * -----------------------------------------------------------------------------------------------*/

        border: vars("color.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Misc.
         * -----------------------------------------------------------------------------------------------*/

        focusRing: vars("color.primary400"),
        backdrop: vars("color.neutral500A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Disabled
         * -----------------------------------------------------------------------------------------------*/

        disabledText: vars("color.neutral400A"),
        disabledIcon: vars("color.neutral400A"),
        disabledBg: vars("color.neutral100A"),
        disabledBorder: vars("color.neutral200A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Selected
         * -----------------------------------------------------------------------------------------------*/

        /* Solid */
        solidSelectedText: vars("color.textInverse"),
        solidSelectedIcon: vars("color.iconInverse"),
        solidSelectedBg: vars("color.primary300"),
        solidSelectedBorder: vars("color.primary300"),
        solidSelectedTextHover: vars("color.textInverse"),
        solidSelectedIconHover: vars("color.iconInverse"),
        solidSelectedBgHover: vars("color.primary200"),
        solidSelectedBorderHover: vars("color.primary200"),
        solidSelectedTextActive: vars("color.textInverse"),
        solidSelectedIconActive: vars("color.iconInverse"),
        solidSelectedBgActive: vars("color.primary100"),
        solidSelectedBorderActive: vars("color.primary100"),

        /* Soft */
        softSelectedText: vars("color.primary200"),
        softSelectedIcon: vars("color.primary200"),
        softSelectedBg: vars("color.primary900"),
        softSelectedBorder: vars("color.primary900"),
        softSelectedTextHover: vars("color.primary100"),
        softSelectedIconHover: vars("color.primary100"),
        softSelectedBgHover: vars("color.primary800"),
        softSelectedBorderHover: vars("color.primary800"),
        softSelectedTextActive: vars("color.primary100"),
        softSelectedIconActive: vars("color.primary100"),
        softSelectedBgActive: vars("color.primary700"),
        softSelectedBorderActive: vars("color.primary700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global - Input
         * -----------------------------------------------------------------------------------------------*/

        /* Soft */
        softInputText: vars("color.neutral100"),
        softInputIcon: vars("color.neutral300"),
        softInputBg: vars("color.neutral800"),
        softInputBorder: vars("color.neutral700"),
        softInputTextHover: vars("color.neutral100"),
        softInputIconHover: vars("color.neutral300"),
        softInputBgHover: vars("color.neutral800"),
        softInputBorderHover: vars("color.neutral700"),
        softInputTextActive: vars("color.neutral100"),
        softInputIconActive: vars("color.neutral300"),
        softInputBgActive: vars("color.neutral800"),
        softInputBorderActive: vars("color.neutral700"),

        /* Outlined */
        outlinedInputText: vars("color.neutral100"),
        outlinedInputIcon: vars("color.neutral300"),
        outlinedInputBg: "transparent",
        outlinedInputBorder: vars("color.neutral300A"),
        outlinedInputTextHover: vars("color.neutral100"),
        outlinedInputIconHover: vars("color.neutral300"),
        outlinedInputBgHover: "transparent",
        outlinedInputBorderHover: vars("color.neutral300A"),
        outlinedInputTextActive: vars("color.neutral100"),
        outlinedInputIconActive: vars("color.neutral300"),
        outlinedInputBgActive: "transparent",
        outlinedInputBorderActive: vars("color.neutral300A"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Solid
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        solidPrimaryText: vars("color.textInverse"),
        solidPrimaryIcon: vars("color.iconInverse"),
        solidPrimaryBg: vars("color.primary300"),
        solidPrimaryBorder: vars("color.primary300"),
        solidPrimaryTextHover: vars("color.textInverse"),
        solidPrimaryIconHover: vars("color.iconInverse"),
        solidPrimaryBgHover: vars("color.primary200"),
        solidPrimaryBorderHover: vars("color.primary200"),
        solidPrimaryTextActive: vars("color.textInverse"),
        solidPrimaryIconActive: vars("color.iconInverse"),
        solidPrimaryBgActive: vars("color.primary100"),
        solidPrimaryBorderActive: vars("color.primary100"),

        /* Neutral */
        solidNeutralText: vars("color.textInverse"),
        solidNeutralIcon: vars("color.iconInverse"),
        solidNeutralBg: vars("color.neutral200"),
        solidNeutralBorder: vars("color.neutral200"),
        solidNeutralTextHover: vars("color.textInverse"),
        solidNeutralIconHover: vars("color.iconInverse"),
        solidNeutralBgHover: vars("color.neutral100"),
        solidNeutralBorderHover: vars("color.neutral100"),
        solidNeutralTextActive: vars("color.textInverse"),
        solidNeutralIconActive: vars("color.iconInverse"),
        solidNeutralBgActive: vars("color.neutral50"),
        solidNeutralBorderActive: vars("color.neutral50"),

        /* Success */
        solidSuccessText: vars("color.textInverse"),
        solidSuccessIcon: vars("color.iconInverse"),
        solidSuccessBg: vars("color.success300"),
        solidSuccessBorder: vars("color.success300"),
        solidSuccessTextHover: vars("color.textInverse"),
        solidSuccessIconHover: vars("color.iconInverse"),
        solidSuccessBgHover: vars("color.success200"),
        solidSuccessBorderHover: vars("color.success200"),
        solidSuccessTextActive: vars("color.textInverse"),
        solidSuccessIconActive: vars("color.iconInverse"),
        solidSuccessBgActive: vars("color.success100"),
        solidSuccessBorderActive: vars("color.success100"),

        /* Info */
        solidInfoText: vars("color.textInverse"),
        solidInfoIcon: vars("color.iconInverse"),
        solidInfoBg: vars("color.info300"),
        solidInfoBorder: vars("color.info300"),
        solidInfoTextHover: vars("color.textInverse"),
        solidInfoIconHover: vars("color.iconInverse"),
        solidInfoBgHover: vars("color.info200"),
        solidInfoBorderHover: vars("color.info200"),
        solidInfoTextActive: vars("color.textInverse"),
        solidInfoIconActive: vars("color.iconInverse"),
        solidInfoBgActive: vars("color.info100"),
        solidInfoBorderActive: vars("color.info100"),

        /* Warning */
        solidWarningText: vars("color.textWarningInverse"),
        solidWarningIcon: vars("color.iconWarningInverse"),
        solidWarningBg: vars("color.warning300"),
        solidWarningBorder: vars("color.warning300"),
        solidWarningTextHover: vars("color.textWarningInverse"),
        solidWarningIconHover: vars("color.iconWarningInverse"),
        solidWarningBgHover: vars("color.warning200"),
        solidWarningBorderHover: vars("color.warning200"),
        solidWarningTextActive: vars("color.textWarningInverse"),
        solidWarningIconActive: vars("color.iconWarningInverse"),
        solidWarningBgActive: vars("color.warning100"),
        solidWarningBorderActive: vars("color.warning100"),

        /* Danger */
        solidDangerText: vars("color.textInverse"),
        solidDangerIcon: vars("color.iconInverse"),
        solidDangerBg: vars("color.danger300"),
        solidDangerBorder: vars("color.danger300"),
        solidDangerTextHover: vars("color.textInverse"),
        solidDangerIconHover: vars("color.iconInverse"),
        solidDangerBgHover: vars("color.danger200"),
        solidDangerBorderHover: vars("color.danger200"),
        solidDangerTextActive: vars("color.textInverse"),
        solidDangerIconActive: vars("color.iconInverse"),
        solidDangerBgActive: vars("color.danger100"),
        solidDangerBorderActive: vars("color.danger100"),

        /* Help */
        solidHelpText: vars("color.textInverse"),
        solidHelpIcon: vars("color.iconInverse"),
        solidHelpBg: vars("color.help300"),
        solidHelpBorder: vars("color.help300"),
        solidHelpTextHover: vars("color.textInverse"),
        solidHelpIconHover: vars("color.iconInverse"),
        solidHelpBgHover: vars("color.help200"),
        solidHelpBorderHover: vars("color.help200"),
        solidHelpTextActive: vars("color.textInverse"),
        solidHelpIconActive: vars("color.iconInverse"),
        solidHelpBgActive: vars("color.help100"),
        solidHelpBorderActive: vars("color.help100"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Soft
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        softPrimaryText: vars("color.primary200"),
        softPrimaryIcon: vars("color.primary200"),
        softPrimaryBg: vars("color.primary900"),
        softPrimaryBorder: vars("color.primary900"),
        softPrimaryTextHover: vars("color.primary100"),
        softPrimaryIconHover: vars("color.primary100"),
        softPrimaryBgHover: vars("color.primary800"),
        softPrimaryBorderHover: vars("color.primary800"),
        softPrimaryTextActive: vars("color.primary100"),
        softPrimaryIconActive: vars("color.primary100"),
        softPrimaryBgActive: vars("color.primary700"),
        softPrimaryBorderActive: vars("color.primary700"),

        /* Neutral */
        softNeutralText: vars("color.neutral100"),
        softNeutralIcon: vars("color.neutral100"),
        softNeutralBg: vars("color.neutral200A"),
        softNeutralBorder: "transparent",
        softNeutralTextHover: vars("color.neutral100"),
        softNeutralIconHover: vars("color.neutral100"),
        softNeutralBgHover: vars("color.neutral300A"),
        softNeutralBorderHover: "transparent",
        softNeutralTextActive: vars("color.neutral100"),
        softNeutralIconActive: vars("color.neutral100"),
        softNeutralBgActive: vars("color.neutral400A"),
        softNeutralBorderActive: "transparent",

        /* Success */
        softSuccessText: vars("color.success200"),
        softSuccessIcon: vars("color.success200"),
        softSuccessBg: vars("color.success900"),
        softSuccessBorder: vars("color.success900"),
        softSuccessTextHover: vars("color.success100"),
        softSuccessIconHover: vars("color.success100"),
        softSuccessBgHover: vars("color.success800"),
        softSuccessBorderHover: vars("color.success800"),
        softSuccessTextActive: vars("color.success100"),
        softSuccessIconActive: vars("color.success100"),
        softSuccessBgActive: vars("color.success700"),
        softSuccessBorderActive: vars("color.success700"),

        /* Info */
        softInfoText: vars("color.info200"),
        softInfoIcon: vars("color.info200"),
        softInfoBg: vars("color.info900"),
        softInfoBorder: vars("color.info900"),
        softInfoTextHover: vars("color.info100"),
        softInfoIconHover: vars("color.info100"),
        softInfoBgHover: vars("color.info800"),
        softInfoBorderHover: vars("color.info800"),
        softInfoTextActive: vars("color.info100"),
        softInfoIconActive: vars("color.info100"),
        softInfoBgActive: vars("color.info700"),
        softInfoBorderActive: vars("color.info700"),

        /* Warning */
        softWarningText: vars("color.warning200"),
        softWarningIcon: vars("color.warning200"),
        softWarningBg: vars("color.warning800"),
        softWarningBorder: vars("color.warning800"),
        softWarningTextHover: vars("color.warning100"),
        softWarningIconHover: vars("color.warning100"),
        softWarningBgHover: vars("color.warning700"),
        softWarningBorderHover: vars("color.warning700"),
        softWarningTextActive: vars("color.warning100"),
        softWarningIconActive: vars("color.warning100"),
        softWarningBgActive: vars("color.warning600"),
        softWarningBorderActive: vars("color.warning600"),

        /* Danger */
        softDangerText: vars("color.danger200"),
        softDangerIcon: vars("color.danger200"),
        softDangerBg: vars("color.danger900"),
        softDangerBorder: vars("color.danger900"),
        softDangerTextHover: vars("color.danger100"),
        softDangerIconHover: vars("color.danger100"),
        softDangerBgHover: vars("color.danger800"),
        softDangerBorderHover: vars("color.danger800"),
        softDangerTextActive: vars("color.danger100"),
        softDangerIconActive: vars("color.danger100"),
        softDangerBgActive: vars("color.danger700"),
        softDangerBorderActive: vars("color.danger700"),

        /* Help */
        softHelpText: vars("color.help200"),
        softHelpIcon: vars("color.help200"),
        softHelpBg: vars("color.help900"),
        softHelpBorder: vars("color.help900"),
        softHelpTextHover: vars("color.help100"),
        softHelpIconHover: vars("color.help100"),
        softHelpBgHover: vars("color.help800"),
        softHelpBorderHover: vars("color.help800"),
        softHelpTextActive: vars("color.help100"),
        softHelpIconActive: vars("color.help100"),
        softHelpBgActive: vars("color.help700"),
        softHelpBorderActive: vars("color.help700"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Outlined
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        outlinedPrimaryText: vars("color.primary300"),
        outlinedPrimaryIcon: vars("color.primary300"),
        outlinedPrimaryBg: "transparent",
        outlinedPrimaryBorder: vars("color.primary300"),
        outlinedPrimaryTextHover: vars("color.textInverse"),
        outlinedPrimaryIconHover: vars("color.iconInverse"),
        outlinedPrimaryBgHover: vars("color.primary300"),
        outlinedPrimaryBorderHover: vars("color.primary300"),
        outlinedPrimaryTextActive: vars("color.textInverse"),
        outlinedPrimaryIconActive: vars("color.iconInverse"),
        outlinedPrimaryBgActive: vars("color.primary200"),
        outlinedPrimaryBorderActive: vars("color.primary200"),

        /* Neutral */
        outlinedNeutralText: vars("color.neutral100"),
        outlinedNeutralIcon: vars("color.neutral100"),
        outlinedNeutralBg: "transparent",
        outlinedNeutralBorder: vars("color.neutral300A"),
        outlinedNeutralTextHover: vars("color.neutral100"),
        outlinedNeutralIconHover: vars("color.neutral100"),
        outlinedNeutralBgHover: vars("color.neutral200A"),
        outlinedNeutralBorderHover: vars("color.neutral300A"),
        outlinedNeutralTextActive: vars("color.neutral100"),
        outlinedNeutralIconActive: vars("color.neutral100"),
        outlinedNeutralBgActive: vars("color.neutral300A"),
        outlinedNeutralBorderActive: vars("color.neutral300A"),

        /* Success */
        outlinedSuccessText: vars("color.success300"),
        outlinedSuccessIcon: vars("color.success300"),
        outlinedSuccessBg: "transparent",
        outlinedSuccessBorder: vars("color.success300"),
        outlinedSuccessTextHover: vars("color.textInverse"),
        outlinedSuccessIconHover: vars("color.iconInverse"),
        outlinedSuccessBgHover: vars("color.success300"),
        outlinedSuccessBorderHover: vars("color.success300"),
        outlinedSuccessTextActive: vars("color.textInverse"),
        outlinedSuccessIconActive: vars("color.iconInverse"),
        outlinedSuccessBgActive: vars("color.success200"),
        outlinedSuccessBorderActive: vars("color.success200"),

        /* Info */
        outlinedInfoText: vars("color.info300"),
        outlinedInfoIcon: vars("color.info300"),
        outlinedInfoBg: "transparent",
        outlinedInfoBorder: vars("color.info300"),
        outlinedInfoTextHover: vars("color.textInverse"),
        outlinedInfoIconHover: vars("color.iconInverse"),
        outlinedInfoBgHover: vars("color.info300"),
        outlinedInfoBorderHover: vars("color.info300"),
        outlinedInfoTextActive: vars("color.textInverse"),
        outlinedInfoIconActive: vars("color.iconInverse"),
        outlinedInfoBgActive: vars("color.info200"),
        outlinedInfoBorderActive: vars("color.info200"),

        /* Warning */
        outlinedWarningText: vars("color.warning300"),
        outlinedWarningIcon: vars("color.warning300"),
        outlinedWarningBg: "transparent",
        outlinedWarningBorder: vars("color.warning300"),
        outlinedWarningTextHover: vars("color.textWarningInverse"),
        outlinedWarningIconHover: vars("color.iconWarningInverse"),
        outlinedWarningBgHover: vars("color.warning300"),
        outlinedWarningBorderHover: vars("color.warning300"),
        outlinedWarningTextActive: vars("color.textWarningInverse"),
        outlinedWarningIconActive: vars("color.iconWarningInverse"),
        outlinedWarningBgActive: vars("color.warning200"),
        outlinedWarningBorderActive: vars("color.warning200"),

        /* Danger */
        outlinedDangerText: vars("color.danger300"),
        outlinedDangerIcon: vars("color.danger300"),
        outlinedDangerBg: "transparent",
        outlinedDangerBorder: vars("color.danger300"),
        outlinedDangerTextHover: vars("color.textInverse"),
        outlinedDangerIconHover: vars("color.iconInverse"),
        outlinedDangerBgHover: vars("color.danger300"),
        outlinedDangerBorderHover: vars("color.danger300"),
        outlinedDangerTextActive: vars("color.textInverse"),
        outlinedDangerIconActive: vars("color.iconInverse"),
        outlinedDangerBgActive: vars("color.danger200"),
        outlinedDangerBorderActive: vars("color.danger200"),

        /* Help */
        outlinedHelpText: vars("color.help300"),
        outlinedHelpIcon: vars("color.help300"),
        outlinedHelpBg: "transparent",
        outlinedHelpBorder: vars("color.help300"),
        outlinedHelpTextHover: vars("color.textInverse"),
        outlinedHelpIconHover: vars("color.iconInverse"),
        outlinedHelpBgHover: vars("color.help300"),
        outlinedHelpBorderHover: vars("color.help300"),
        outlinedHelpTextActive: vars("color.textInverse"),
        outlinedHelpIconActive: vars("color.iconInverse"),
        outlinedHelpBgActive: vars("color.help200"),
        outlinedHelpBorderActive: vars("color.help200"),

        /* -------------------------------------------------------------------------------------------------
         * Color - Global variants - Ghost
         * -----------------------------------------------------------------------------------------------*/

        /* Primary */
        ghostPrimaryText: vars("color.primary300"),
        ghostPrimaryIcon: vars("color.primary300"),
        ghostPrimaryBg: "transparent",
        ghostPrimaryBorder: "transparent",
        ghostPrimaryTextHover: vars("color.primary200"),
        ghostPrimaryIconHover: vars("color.primary200"),
        ghostPrimaryBgHover: vars("color.primary900"),
        ghostPrimaryBorderHover: vars("color.primary900"),
        ghostPrimaryTextActive: vars("color.primary100"),
        ghostPrimaryIconActive: vars("color.primary100"),
        ghostPrimaryBgActive: vars("color.primary800"),
        ghostPrimaryBorderActive: vars("color.primary800"),

        /* Neutral */
        ghostNeutralText: vars("color.neutral100"),
        ghostNeutralIcon: vars("color.neutral100"),
        ghostNeutralBg: "transparent",
        ghostNeutralBorder: "transparent",
        ghostNeutralTextHover: vars("color.neutral100"),
        ghostNeutralIconHover: vars("color.neutral100"),
        ghostNeutralBgHover: vars("color.neutral200A"),
        ghostNeutralBorderHover: "transparent",
        ghostNeutralTextActive: vars("color.neutral100"),
        ghostNeutralIconActive: vars("color.neutral100"),
        ghostNeutralBgActive: vars("color.neutral300A"),
        ghostNeutralBorderActive: "transparent",

        /* Success */
        ghostSuccessText: vars("color.success300"),
        ghostSuccessIcon: vars("color.success300"),
        ghostSuccessBg: "transparent",
        ghostSuccessBorder: "transparent",
        ghostSuccessTextHover: vars("color.success200"),
        ghostSuccessIconHover: vars("color.success200"),
        ghostSuccessBgHover: vars("color.success900"),
        ghostSuccessBorderHover: vars("color.success900"),
        ghostSuccessTextActive: vars("color.success100"),
        ghostSuccessIconActive: vars("color.success100"),
        ghostSuccessBgActive: vars("color.success800"),
        ghostSuccessBorderActive: vars("color.success800"),

        /* Info */
        ghostInfoText: vars("color.info300"),
        ghostInfoIcon: vars("color.info300"),
        ghostInfoBg: "transparent",
        ghostInfoBorder: "transparent",
        ghostInfoTextHover: vars("color.info200"),
        ghostInfoIconHover: vars("color.info200"),
        ghostInfoBgHover: vars("color.info900"),
        ghostInfoBorderHover: vars("color.info900"),
        ghostInfoTextActive: vars("color.info100"),
        ghostInfoIconActive: vars("color.info100"),
        ghostInfoBgActive: vars("color.info800"),
        ghostInfoBorderActive: vars("color.info800"),

        /* Warning */
        ghostWarningText: vars("color.warning300"),
        ghostWarningIcon: vars("color.warning300"),
        ghostWarningBg: "transparent",
        ghostWarningBorder: "transparent",
        ghostWarningTextHover: vars("color.warning200"),
        ghostWarningIconHover: vars("color.warning200"),
        ghostWarningBgHover: vars("color.warning800"),
        ghostWarningBorderHover: vars("color.warning800"),
        ghostWarningTextActive: vars("color.warning100"),
        ghostWarningIconActive: vars("color.warning100"),
        ghostWarningBgActive: vars("color.warning700"),
        ghostWarningBorderActive: vars("color.warning700"),

        /* Danger */
        ghostDangerText: vars("color.danger300"),
        ghostDangerIcon: vars("color.danger300"),
        ghostDangerBg: "transparent",
        ghostDangerBorder: "transparent",
        ghostDangerTextHover: vars("color.danger200"),
        ghostDangerIconHover: vars("color.danger200"),
        ghostDangerBgHover: vars("color.danger900"),
        ghostDangerBorderHover: vars("color.danger900"),
        ghostDangerTextActive: vars("color.danger100"),
        ghostDangerIconActive: vars("color.danger100"),
        ghostDangerBgActive: vars("color.danger800"),
        ghostDangerBorderActive: vars("color.danger800"),

        /* Help */
        ghostHelpText: vars("color.help300"),
        ghostHelpIcon: vars("color.help300"),
        ghostHelpBg: "transparent",
        ghostHelpBorder: "transparent",
        ghostHelpTextHover: vars("color.help200"),
        ghostHelpIconHover: vars("color.help200"),
        ghostHelpBgHover: vars("color.help900"),
        ghostHelpBorderHover: vars("color.help900"),
        ghostHelpTextActive: vars("color.help100"),
        ghostHelpIconActive: vars("color.help100"),
        ghostHelpBgActive: vars("color.help800"),
        ghostHelpBorderActive: vars("color.help800"),
      },
      shadow: {
        surfaceRaised:
          "0px 0px 0px rgba(0, 0, 0, 0),0px 1px 1px rgba(3, 4, 4, 0.5),0px 0px 1px rgba(3, 4, 4, 0.5)",
        surfaceOverlay:
          "0px 0px 0px rgba(188, 214, 240, 0.04),0px 8px 12px rgba(3, 4, 4, 0.36),0px 0px 1px rgba(3, 4, 4, 0.5)",
      },
    },
  };
}

import kobaltePlugin from "@kobalte/tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

interface PresetConfig {
  colors?: Partial<{
    light: Partial<{}>;
    dark: Partial<{}>;
  }>;
}

export function pigmentPreset(config?: PresetConfig): Partial<Config> {
  return {
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
      extend: {
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--kb-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--kb-accordion-content-height)" },
            to: { height: "0" },
          },
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
        },
      },
    },
    plugins: [
      formsPlugin({ strategy: "class" }),
      animatePlugin,
      kobaltePlugin,
      plugin(({ addBase, addUtilities }) => {
        addBase({
          ":root": {},
          ".dark, [data-theme='dark']": {},
        });

        addUtilities({
          ".reset-svg": {
            "> svg": {
              width: "1em",
              height: "1em",
            },
          },
        });
      }),
    ],
  };
}

interface TextColorTokens {
  /** Use for primary text, such as body copy, and sentence case headers. */
  text: string;

  /** Use for secondary text, such as navigation, input field labels, and all caps subheadings. */
  textSubtle: string;

  /** Use for tertiary text, such as meta-data, breadcrumbs, input field placeholder and helper text. */
  textSubtlest: string;

  /** Use for text on vibrant backgrounds. */
  textInverse: string;

  /** Use for text in a disabled state. */
  textDisabled: string;

  /** Use for links in a default state. */
  textLink: string;

  /** Use for links in a hovered state. */
  textLinkHovered: string;

  /** Use for links in a pressed state. */
  textLinkPressed: string;

  /** Use for text that reinforces your brand. */
  textPrimary: string;

  /** Use for text to communicate a favorable outcome, such as input field success messaging. */
  textSuccess: string;

  /** Use for informative text or to communicate something is in progress. */
  textInfo: string;

  /** Use for text to emphasize caution. */
  textWarning: string;

  /** Use for critical text, such as input field error messaging. */
  textDanger: string;

  /** Use for text to emphasize change, something new, or provide help. */
  textDiscovery: string;

  /** Use for text in selected state, such as an active tab. */
  textSelected: string;

  // decorative
  textDecorativeGray: string;
  textDecorativeGraySubtle: string;
  textDecorativeRed: string;
  textDecorativeRedSubtle: string;
  textDecorativeOrange: string;
  textDecorativeOrangeSubtle: string;
  textDecorativeYellow: string;
  textDecorativeYellowSubtle: string;
  textDecorativeGreen: string;
  textDecorativeGreenSubtle: string;
  textDecorativeBlue: string;
  textDecorativeBlueSubtle: string;
  textDecorativeViolet: string;
  textDecorativeVioletSubtle: string;
}

interface IconColorTokens {
  /** Use for icon-only buttons, or icons paired with `color.text`. */
  icon: string;

  /** Use for icons paired with `color.textSubtle`. */
  iconSubtle: string;

  /** Use for icons paired with `color.textSubtlest`. */
  iconSubtlest: string;

  /** Use for icons on vibrant backgrounds. */
  iconInverse: string;

  /** Use for icons in a disabled state. */
  iconDisabled: string;

  /** Use for icons that reinforce your brand. */
  iconPrimary: string;

  /** Use for icons communicating a favorable outcome. */
  iconSuccess: string;

  /** Use for icons communicating information or something in-progress. */
  iconInfo: string;

  /** Use for icons communicating caution. */
  iconWarning: string;

  /** Use for icons communicating critical information, such as those used in error handing. */
  iconDanger: string;

  /** Use for icons communicating change, something new, or provide help. */
  iconDiscovery: string;

  /** Use for icons in selected state, such as an active tab. */
  iconSelected: string;

  // decorative
  iconDecorativeGray: string;
  iconDecorativeRed: string;
  iconDecorativeOrange: string;
  iconDecorativeYellow: string;
  iconDecorativeGreen: string;
  iconDecorativeBlue: string;
  iconDecorativeViolet: string;
}

interface BorderColorTokens {
  /** Use to visually group or separate UI elements, such as flat cards or side panel dividers. */
  border: string;

  /** Use for borders of form UI elements, such as input fields, checkboxes, and radio buttons. */
  borderInput: string;

  /** Use for borders on vibrant backgrounds. */
  borderInverse: string;

  /** Use for borders of elements in a disabled state. */
  borderDisabled: string;

  /** Use for borders or visual indicators of elements that reinforce your brand. */
  borderPrimary: string;

  /** Use for borders communicating a favorable outcome, such as the borders on validated input fields. */
  borderSuccess: string;

  /** Use for borders communicating information. */
  borderInfo: string;

  /** Use for borders communicating caution. */
  borderWarning: string;

  /** Use for borders communicating critical information, such as the borders on invalid input fields. */
  borderDanger: string;

  /** Use for borders communicating change, something new, or provide help. */
  borderDiscovery: string;

  /** Use for focus rings of elements in a focus state. */
  borderFocused: string;

  /** Use for borders or visual indicators of elements in a selected state, such as an active tab or menu items. */
  borderSelected: string;

  // decorative
  borderDecorativeGray: string;
  borderDecorativeRed: string;
  borderDecorativeOrange: string;
  borderDecorativeYellow: string;
  borderDecorativeGreen: string;
  borderDecorativeBlue: string;
  borderDecorativeViolet: string;
}

interface BackgroundColorTokens {
  /** Use as the primary background for the UI. */
  background: string;

  /** Use for the background of flat elements. */
  backgroundSurface: string;

  /** Use for the background of flat elements, in a hovered state. */
  backgroundSurfaceHovered: string;

  /** Use for the background of flat elements, in a pressed state. */
  backgroundSurfacePressed: string;

  /** Use for the background of raised elements. */
  backgroundSurfaceRaised: string;

  /** Use for the background of raised elements, in a hovered state. */
  backgroundSurfaceRaisedHovered: string;

  /** Use for the background of raised elements, in a pressed state. */
  backgroundSurfaceRaisedPressed: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers. */
  backgroundSurfaceOverlay: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers, in a hovered state. */
  backgroundSurfaceOverlayHovered: string;

  /** Use for the background of elements that sit on top of the UI, such as modals, dropdown menus, and popovers, in a pressed state. */
  backgroundSurfaceOverlayPressed: string;

  /** A secondary background for the UI commonly used for grouping items. */
  backgroundSurfaceSunken: string;

  /** Use for background of outlined form UI elements, such as input fields, checkboxes, and radio buttons. */
  backgroundInputOutlined: string;

  /** Use for background of outlined form UI elements, such as input fields, checkboxes, and radio buttons, in a hovered state. */
  backgroundInputOutlinedHovered: string;

  /** Use for background of outlined form UI elements, such as input fields, checkboxes, and radio buttons, in a pressed state. */
  backgroundInputOutlinedPressed: string;

  /** Use for background of filled form UI elements, such as input fields, checkboxes, and radio buttons. */
  backgroundInputFilled: string;

  /** Use for background of filled form UI elements, such as input fields, checkboxes, and radio buttons, in a hovered state. */
  backgroundInputFilledHovered: string;

  /** Use for background of filled form UI elements, such as input fields, checkboxes, and radio buttons, in a pressed state. */
  backgroundInputFilledPressed: string;

  /** Use for backgrounds of elements in a disabled state. */
  backgroundDisabled: string;

  /** Use for the screen overlay that appears with modal dialogs. */
  backgroundBackdrop: string;

  /** A vibrant background for neutral UI elements. */
  backgroundNeutral: string;

  /** A vibrant background for neutral UI elements, in a hovered state. */
  backgroundNeutralHovered: string;

  /** A vibrant background for neutral UI elements, in a pressed state. */
  backgroundNeutralPressed: string;

  /** The default background for neutral UI elements. */
  backgroundNeutralSubtle: string;

  /** The default background for neutral UI elements, in a hovered state. */
  backgroundNeutralSubtleHovered: string;

  /** The default background for neutral UI elements, in a pressed state. */
  backgroundNeutralSubtlePressed: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items. */
  backgroundNeutralSubtlest: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in a hovered state. */
  backgroundNeutralSubtlestHovered: string;

  /** Use for the background of elements that appear to have no background in a resting state, such as menu items, in a pressed state. */
  backgroundNeutralSubtlestPressed: string;

  /** Use for the background of elements used to reinforce your brand with more emphasis. */
  backgroundPrimary: string;

  /** Use for the background of elements used to reinforce your brand with more emphasis, in a hovered state. */
  backgroundPrimaryHovered: string;

  /** Use for the background of elements used to reinforce your brand with more emphasis, in a pressed state. */
  backgroundPrimaryPressed: string;

  /** Use for the background of elements used to reinforce your brand. */
  backgroundPrimarySubtle: string;

  /** Use for the background of elements used to reinforce your brand, in a hovered state. */
  backgroundPrimarySubtleHovered: string;

  /** Use for the background of elements used to reinforce your brand, in a pressed state. */
  backgroundPrimarySubtlePressed: string;

  /** A vibrant background for communicating a favorable outcome. */
  backgroundSuccess: string;

  /** A vibrant background for communicating a favorable outcome, in a hovered state. */
  backgroundSuccessHovered: string;

  /** A vibrant background for communicating a favorable outcome, in a pressed state. */
  backgroundSuccessPressed: string;

  /** A soft background for communicating a favorable outcome. */
  backgroundSuccessSubtle: string;

  /** A soft background for communicating a favorable outcome, in a hovered state. */
  backgroundSuccessSubtleHovered: string;

  /** A soft background for communicating a favorable outcome, in a pressed state. */
  backgroundSuccessSubtlePressed: string;

  /** A vibrant background for communicating information or something in-progress. */
  backgroundInfo: string;

  /** A vibrant background for communicating information or something in-progress, in a hovered state. */
  backgroundInfoHovered: string;

  /** A vibrant background for communicating information or something in-progress, in a pressed state. */
  backgroundInfoPressed: string;

  /** A soft background for communicating information or something in-progress. */
  backgroundInfoSubtle: string;

  /** A soft background for communicating information or something in-progress, in a hovered state. */
  backgroundInfoSubtleHovered: string;

  /** A soft background for communicating information or something in-progress, in a pressed state. */
  backgroundInfoSubtlePressed: string;

  /** A vibrant background for communicating caution. */
  backgroundWarning: string;

  /** A vibrant background for communicating caution, in a hovered state. */
  backgroundWarningHovered: string;

  /** A vibrant background for communicating caution, in a pressed state. */
  backgroundWarningPressed: string;

  /** A soft background for communicating caution. */
  backgroundWarningSubtle: string;

  /** A soft background for communicating caution, in a hovered state. */
  backgroundWarningSubtleHovered: string;

  /** A soft background for communicating caution, in a pressed state. */
  backgroundWarningSubtlePressed: string;

  /** A vibrant background for communicating critical information. */
  backgroundDanger: string;

  /** A vibrant background for communicating critical information, in a hovered state. */
  backgroundDangerHovered: string;

  /** A vibrant background for communicating critical information, in a pressed state. */
  backgroundDangerPressed: string;

  /** A soft background for communicating critical information. */
  backgroundDangerSubtle: string;

  /** A soft background for communicating critical information, in a hovered state. */
  backgroundDangerSubtleHovered: string;

  /** A soft background for communicating critical information, in a pressed state. */
  backgroundDangerSubtlePressed: string;

  /** A vibrant background for communicating change, something new, or provide help. */
  backgroundDiscovery: string;

  /** A vibrant background for communicating change, something new, or provide help, in a hovered state. */
  backgroundDiscoveryHovered: string;

  /** A vibrant background for communicating change, something new, or provide help, in a pressed state. */
  backgroundDiscoveryPressed: string;

  /** A soft background for communicating change, something new, or provide help. */
  backgroundDiscoverySubtle: string;

  /** A soft background for communicating change, something new, or provide help, in a hovered state. */
  backgroundDiscoverySubtleHovered: string;

  /** A soft background for communicating change, something new, or provide help, in a pressed state. */
  backgroundDiscoverySubtlePressed: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons. */
  backgroundSelected: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons, in a hovered state. */
  backgroundSelectedHovered: string;

  /** Use for the backgrounds of elements in a selected state, such as checkboxes and radio buttons, in a pressed state. */
  backgroundSelectedPressed: string;

  /** Use for the background of elements in a selected state, such as in opened dropdown buttons. */
  backgroundSelectedSubtle: string;

  /** Use for the background of elements in a selected state, such as in opened dropdown buttons, in a hovered state. */
  backgroundSelectedSubtleHovered: string;

  /** Use for the background of elements in a selected state, such as in opened dropdown buttons, in a pressed state. */
  backgroundSelectedSubtlePressed: string;

  // decorative
  backgroundDecorativeGray: string;
  backgroundDecorativeGraySubtle: string;
  backgroundDecorativeGraySubtler: string;
  backgroundDecorativeGraySubtlest: string;
  backgroundDecorativeRed: string;
  backgroundDecorativeRedSubtle: string;
  backgroundDecorativeRedSubtler: string;
  backgroundDecorativeRedSubtlest: string;
  backgroundDecorativeOrange: string;
  backgroundDecorativeOrangeSubtle: string;
  backgroundDecorativeOrangeSubtler: string;
  backgroundDecorativeOrangeSubtlest: string;
  backgroundDecorativeYellow: string;
  backgroundDecorativeYellowSubtle: string;
  backgroundDecorativeYellowSubtler: string;
  backgroundDecorativeYellowSubtlest: string;
  backgroundDecorativeGreen: string;
  backgroundDecorativeGreenSubtle: string;
  backgroundDecorativeGreenSubtler: string;
  backgroundDecorativeGreenSubtlest: string;
  backgroundDecorativeBlue: string;
  backgroundDecorativeBlueSubtle: string;
  backgroundDecorativeBlueSubtler: string;
  backgroundDecorativeBlueSubtlest: string;
  backgroundDecorativeViolet: string;
  backgroundDecorativeVioletSubtle: string;
  backgroundDecorativeVioletSubtler: string;
  backgroundDecorativeVioletSubtlest: string;
}

interface ShadowColorTokens {
  /** Use for the box shadow of raised elements. */
  shadowRaised: string;

  /** Use for the box shadow of elements that sit on top of the UI, such as modals, dropdown menus, and popovers. */
  shadowOverlay: string;
}

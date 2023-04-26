import { tv, VariantProps } from "tailwind-variants";

import {
  getGlobalVariantClasses,
  SEMANTIC_COLOR_VARIANTS,
  VARIANT_VARIANTS,
} from "../theme/variants";

export const buttonStyles = tv({
  slots: {
    root: [
      "group",
      "appearance-none relative justify-center items-center rounded-button",
      "border border-solid",
      "transition-colors cursor-pointer no-underline",
      "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    ],
    icon: "reset-svg shrink-0",
    loadingContent: "inline-flex items-center justify-center opacity-0",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      outlined: {},
      ghost: {},
      default: {
        root: [
          "text-content bg-surface border-line shadow-sm dark:bg-neutral-100/5 dark:shadow-none",
          "hover:bg-neutral-900/5 dark:hover:bg-neutral-100/10",
          "active:bg-neutral-900/5 dark:active:bg-neutral-100/10",
        ],
      },
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
    },
    size: {
      xs: {
        root: "h-6 gap-1",
        loadingContent: "gap-1",
      },
      sm: {
        root: "h-8 gap-1.5",
        loadingContent: "gap-1.5",
      },
      md: {
        root: "h-10 gap-2",
        loadingContent: "gap-2",
      },
      lg: {
        root: "h-12 gap-2.5",
        loadingContent: "gap-2.5",
      },
      xl: {
        root: "h-14 gap-3",
        loadingContent: "gap-3",
      },
    },
    iconOnly: {
      true: {
        root: "reset-svg p-0 leading-none",
      },
    },
    fullWidth: {
      true: {
        root: "flex w-full",
      },
      false: {
        root: "inline-flex",
      },
    },
    loading: {
      true: {
        root: "opacity-80 select-none pointer-events-none",
      },
    },
    disabled: {
      true: {
        root: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none ui-disabled:shadow-none",
      },
    },
  },
  compoundVariants: [
    // variant + color
    ...VARIANT_VARIANTS.flatMap(variant =>
      SEMANTIC_COLOR_VARIANTS.map(color => {
        const variantClasses = getGlobalVariantClasses(variant, color);

        return {
          variant,
          color,
          disabled: false,
          class: {
            root: [variantClasses.base, variantClasses.hover, variantClasses.active],
          },
        };
      })
    ),

    // variant + disabled
    {
      variant: ["solid", "soft"],
      disabled: true,
      class: {
        root: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
    },
    {
      variant: ["default", "outlined"],
      disabled: true,
      class: {
        root: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },
    },
    {
      variant: "ghost",
      disabled: true,
      class: {
        root: "ui-disabled:bg-transparent ui-disabled:border-transparent",
      },
    },

    // rectangle button (e.g: Button)
    // and start, end and loading icons in rectangle button (e.g: Button)
    { iconOnly: false, fullWidth: false, class: { root: "w-auto" } },
    { size: "xs", iconOnly: false, class: { root: "px-2 text-xs", icon: "text-sm" } },
    { size: "sm", iconOnly: false, class: { root: "px-2.5 text-sm", icon: "text-base" } },
    { size: "md", iconOnly: false, class: { root: "px-4 text-base", icon: "text-lg" } },
    { size: "lg", iconOnly: false, class: { root: "px-6 text-lg", icon: "text-xl" } },
    { size: "xl", iconOnly: false, class: { root: "px-8 text-xl", icon: "text-2xl" } },

    // square button (e.g: IconButton)
    { size: "xs", iconOnly: true, fullWidth: false, class: { root: "w-6 text-base" } },
    { size: "sm", iconOnly: true, fullWidth: false, class: { root: "w-8 text-lg" } },
    { size: "md", iconOnly: true, fullWidth: false, class: { root: "w-10 text-2xl" } },
    { size: "lg", iconOnly: true, fullWidth: false, class: { root: "w-12 text-3xl" } },
    { size: "xl", iconOnly: true, fullWidth: false, class: { root: "w-14 text-4xl" } },

    // only loading icon in square button (e.g: IconButton)
    { size: "xs", iconOnly: true, class: { icon: "text-base" } },
    { size: "sm", iconOnly: true, class: { icon: "text-lg" } },
    { size: "md", iconOnly: true, class: { icon: "text-2xl" } },
    { size: "lg", iconOnly: true, class: { icon: "text-3xl" } },
    { size: "xl", iconOnly: true, class: { icon: "text-4xl" } },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;

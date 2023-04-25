import { cva, VariantProps } from "class-variance-authority";

import { GlobalVariant, SemanticColor } from "../theme/types";
import {
  getGlobalVariantClasses,
  SEMANTIC_COLOR_VARIANTS,
  VARIANT_VARIANTS,
} from "../theme/variants";

export const buttonStyles = cva(
  [
    "group",
    "appearance-none relative justify-center items-center rounded-button",
    "border border-solid",
    "transition-colors cursor-pointer no-underline",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-surface",
  ],
  {
    variants: {
      variant: {
        ...VARIANT_VARIANTS,
        default: [
          "text-content bg-surface border-line shadow-sm dark:bg-neutral-100/5 dark:shadow-none",
          "hover:bg-neutral-900/5 dark:hover:bg-neutral-100/10",
          "active:bg-neutral-900/5 dark:active:bg-neutral-100/10",
        ],
      },
      color: SEMANTIC_COLOR_VARIANTS,
      size: {
        xs: "h-6 gap-1",
        sm: "h-8 gap-1.5",
        md: "h-10 gap-2",
        lg: "h-12 gap-2.5",
        xl: "h-14 gap-3",
      },
      iconOnly: {
        true: "reset-svg p-0 leading-none",
      },
      fullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
      loading: {
        true: "opacity-80 select-none pointer-events-none",
      },
      disabled: {
        true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none ui-disabled:shadow-none",
      },
    },
    compoundVariants: [
      // variant + color
      ...(Object.keys(VARIANT_VARIANTS) as GlobalVariant[]).flatMap(variant =>
        (Object.keys(SEMANTIC_COLOR_VARIANTS) as SemanticColor[]).map(color => {
          const variantClasses = getGlobalVariantClasses(variant, color);

          return {
            variant,
            color,
            disabled: false,
            class: [variantClasses.base, variantClasses.hover, variantClasses.active],
          };
        })
      ),

      // variant + disabled
      {
        variant: ["solid", "soft"],
        disabled: true,
        class: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
      {
        variant: ["default", "outlined"],
        disabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },
      {
        variant: "ghost",
        disabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-transparent",
      },

      // rectangle button (e.g: Button)
      { iconOnly: false, fullWidth: false, class: "w-auto" },
      { size: "xs", iconOnly: false, class: "px-2 text-xs" },
      { size: "sm", iconOnly: false, class: "px-2.5 text-sm" },
      { size: "md", iconOnly: false, class: "px-4 text-base" },
      { size: "lg", iconOnly: false, class: "px-6 text-lg" },
      { size: "xl", iconOnly: false, class: "px-8 text-xl" },

      // square button (e.g: IconButton)
      { size: "xs", iconOnly: true, fullWidth: false, class: "w-6 text-base" },
      { size: "sm", iconOnly: true, fullWidth: false, class: "w-8 text-lg" },
      { size: "md", iconOnly: true, fullWidth: false, class: "w-10 text-2xl" },
      { size: "lg", iconOnly: true, fullWidth: false, class: "w-12 text-3xl" },
      { size: "xl", iconOnly: true, fullWidth: false, class: "w-14 text-4xl" },
    ],
  }
);

export const buttonIconVariants = cva("reset-svg shrink-0", {
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    iconOnly: {
      true: "",
    },
  },
  compoundVariants: [
    // start, end and loading icons in rectangle button (e.g: Button)
    { size: "xs", iconOnly: false, class: "text-sm" },
    { size: "sm", iconOnly: false, class: "text-base" },
    { size: "md", iconOnly: false, class: "text-lg" },
    { size: "lg", iconOnly: false, class: "text-xl" },
    { size: "xl", iconOnly: false, class: "text-2xl" },

    // only loading icon in square button (e.g: IconButton)
    { size: "xs", iconOnly: true, class: "text-base" },
    { size: "sm", iconOnly: true, class: "text-lg" },
    { size: "md", iconOnly: true, class: "text-2xl" },
    { size: "lg", iconOnly: true, class: "text-3xl" },
    { size: "xl", iconOnly: true, class: "text-4xl" },
  ],
});

export const loadingContentVariants = cva("inline-flex items-center justify-center opacity-0", {
  variants: {
    size: {
      xs: "gap-1",
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
      xl: "gap-3",
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;

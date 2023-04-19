import { cva, VariantProps } from "class-variance-authority";

import { GlobalVariant, SemanticColor } from "../theme/types";
import { COLOR_VARIANTS, getGlobalVariantClasses, VARIANT_VARIANTS } from "../theme/variants";

export const buttonVariants = cva(
  [
    "group",
    "appearance-none relative justify-center items-center",
    "border border-solid",
    "transition-colors cursor-pointer no-underline",
    // TODO: focus state
  ],
  {
    variants: {
      variant: {
        ...VARIANT_VARIANTS,
        default: [],
      },
      color: COLOR_VARIANTS,
      size: {
        xs: "h-6 gap-1 rounded",
        sm: "h-8 gap-1.5 rounded",
        md: "h-10 gap-2 rounded-md",
        lg: "h-12 gap-2.5 rounded-md",
        xl: "h-14 gap-3 rounded-md",
      },
      isIconOnly: {
        true: "reset-svg p-0 leading-none",
      },
      isFullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
      isLoading: {
        true: "opacity-80 select-none pointer-events-none",
      },
      isDisabled: {
        true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
    },
    compoundVariants: [
      // variant + color
      ...(Object.keys(VARIANT_VARIANTS) as GlobalVariant[]).flatMap(variant =>
        (Object.keys(COLOR_VARIANTS) as SemanticColor[]).map(color => {
          const variantClasses = getGlobalVariantClasses(variant, color);

          return {
            variant,
            color,
            isDisabled: false,
            class: [variantClasses.base, variantClasses.hover, variantClasses.active],
          };
        })
      ),

      // variant + disabled
      {
        variant: ["solid", "soft"],
        isDisabled: true,
        class: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },
      {
        variant: "ghost",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-transparent",
      },

      // rectangle button (e.g: Button)
      { isIconOnly: false, isFullWidth: false, class: "w-auto" },
      { size: "xs", isIconOnly: false, class: "px-2 text-xs" },
      { size: "sm", isIconOnly: false, class: "px-2.5 text-sm" },
      { size: "md", isIconOnly: false, class: "px-4 text-base" },
      { size: "lg", isIconOnly: false, class: "px-6 text-lg" },
      { size: "xl", isIconOnly: false, class: "px-8 text-xl" },

      // square button (e.g: IconButton)
      { size: "xs", isIconOnly: true, isFullWidth: false, class: "w-6 text-base" },
      { size: "sm", isIconOnly: true, isFullWidth: false, class: "w-8 text-lg" },
      { size: "md", isIconOnly: true, isFullWidth: false, class: "w-10 text-2xl" },
      { size: "lg", isIconOnly: true, isFullWidth: false, class: "w-12 text-3xl" },
      { size: "xl", isIconOnly: true, isFullWidth: false, class: "w-14 text-4xl" },
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
    isIconOnly: {
      true: "",
    },
  },
  compoundVariants: [
    // start, end and loading icons in rectangle button (e.g: Button)
    { size: "xs", isIconOnly: false, class: "text-sm" },
    { size: "sm", isIconOnly: false, class: "text-base" },
    { size: "md", isIconOnly: false, class: "text-lg" },
    { size: "lg", isIconOnly: false, class: "text-xl" },
    { size: "xl", isIconOnly: false, class: "text-2xl" },

    // only loading icon in square button (e.g: IconButton)
    { size: "xs", isIconOnly: true, class: "text-base" },
    { size: "sm", isIconOnly: true, class: "text-lg" },
    { size: "md", isIconOnly: true, class: "text-2xl" },
    { size: "lg", isIconOnly: true, class: "text-3xl" },
    { size: "xl", isIconOnly: true, class: "text-4xl" },
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

export type ButtonVariants = VariantProps<typeof buttonVariants>;

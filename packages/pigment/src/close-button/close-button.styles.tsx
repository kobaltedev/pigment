import { tv, VariantProps } from "tailwind-variants";

export const closeButtonStyles = tv({
  base: [
    "appearance-none relative inline-flex justify-center items-center p-0",
    "reset-svg font-medium leading-none no-underline",
    "transition-colors cursor-pointer",
    "bg-transparent",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  ],
  variants: {
    size: {
      xs: "h-6 w-6 text-base",
      sm: "h-8 w-8 text-lg",
      md: "h-10 w-10 text-2xl",
      lg: "h-12 w-12 text-3xl",
      xl: "h-14 w-14 text-4xl",
    },
    rounded: {
      xs: "rounded-sm",
      sm: "",
      md: "",
      lg: "",
      xl: "rounded-full",
    },
    inheritTextColor: {
      true: "text-current",
      false: "text-content-subtle",
    },
    disabled: {
      true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      false: "hover:bg-surface-highlighted-hover active:bg-surface-highlighted-active",
    },
  },
  compoundVariants: [
    // size + rounded sm
    { size: "xs", rounded: "sm", class: "rounded" },
    { size: "sm", rounded: "sm", class: "rounded" },
    { size: "md", rounded: "sm", class: "rounded-md" },
    { size: "lg", rounded: "sm", class: "rounded-md" },
    { size: "xl", rounded: "sm", class: "rounded-lg" },

    // size + rounded md
    { size: "xs", rounded: "md", class: "rounded-md" },
    { size: "sm", rounded: "md", class: "rounded-md" },
    { size: "md", rounded: "md", class: "rounded-lg" },
    { size: "lg", rounded: "md", class: "rounded-lg" },
    { size: "xl", rounded: "md", class: "rounded-xl" },

    // size + rounded lg
    { size: "xs", rounded: "lg", class: "rounded-lg" },
    { size: "sm", rounded: "lg", class: "rounded-lg" },
    { size: "md", rounded: "lg", class: "rounded-xl" },
    { size: "lg", rounded: "lg", class: "rounded-xl" },
    { size: "xl", rounded: "lg", class: "rounded-2xl" },
  ],
});

export type CloseButtonVariants = VariantProps<typeof closeButtonStyles>;

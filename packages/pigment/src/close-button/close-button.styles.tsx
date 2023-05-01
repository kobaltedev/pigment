import { tv, VariantProps } from "tailwind-variants";

export const closeButtonStyles = tv({
  base: [
    "appearance-none",
    "relative",
    "inline-flex justify-center items-center",
    "p-0",
    "bg-transparent",
    "reset-svg font-medium leading-none no-underline cursor-pointer",
    "transition-colors",
    "text-content-subtle",
    "ui-not-disabled:hover:bg-surface-subtle-hover ui-not-disabled:active:bg-surface-subtle-active",
    "ui-disabled:text-content-disabled ui-disabled:pointer-events-none",
    "outline-none focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
  ],
  variants: {
    size: {
      sm: "h-6 w-6 text-base rounded",
      md: "h-8 w-8 text-xl rounded",
      lg: "h-10 w-10 text-2xl rounded-md",
    },
  },
});

export type CloseButtonVariants = VariantProps<typeof closeButtonStyles>;

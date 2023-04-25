import { cva, VariantProps } from "class-variance-authority";

export const closeButtonVariants = cva(
  [
    "appearance-none relative inline-flex justify-center items-center p-0 rounded-button",
    "reset-svg font-medium leading-none no-underline",
    "transition-colors cursor-pointer",
    "bg-transparent",
    "outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 text-xl",
        sm: "h-8 w-8 text-2xl",
        md: "h-10 w-10 text-3xl",
        lg: "h-12 w-12 text-4xl",
        xl: "h-14 w-14 text-5xl",
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
  }
);

export type CloseButtonVariants = VariantProps<typeof closeButtonVariants>;

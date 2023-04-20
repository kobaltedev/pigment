import { cva, VariantProps } from "class-variance-authority";

export const closeButtonVariants = cva(
  [
    "appearance-none relative inline-flex justify-center items-center p-0",
    "reset-svg font-medium leading-none no-underline",
    "transition-colors cursor-pointer",
    "bg-transparent hover:bg-surface-highlighted-hover active:bg-surface-highlighted-active",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  ],
  {
    variants: {
      size: {
        xs: "h-6 w-6 rounded text-xl",
        sm: "h-8 w-8 rounded text-2xl",
        md: "h-10 w-10 rounded-md text-3xl",
        lg: "h-12 w-12 rounded-md text-4xl",
        xl: "h-14 w-14 rounded-md text-5xl",
      },
      inheritTextColor: {
        true: "text-current",
        false: "text-content-subtle",
      },
      isDisabled: {
        true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
    },
  }
);

export type CloseButtonVariants = VariantProps<typeof closeButtonVariants>;

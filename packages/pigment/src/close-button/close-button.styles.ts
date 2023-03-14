import { cva, VariantProps } from "class-variance-authority";

export const closeButtonVariants = cva(
  [
    "appearance-none relative inline-flex justify-center items-center p-0",
    "reset-svg font-medium leading-none no-underline",
    "transition-colors cursor-pointer",
    "bg-subtle-bg hover:bg-subtle-bg-hover active:bg-subtle-bg-active",
    "border border-solid border-transparent",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
  ],
  {
    variants: {
      size: {
        xs: "h-7 w-7 rounded text-xl",
        sm: "h-9 w-9 rounded-md text-2xl",
        md: "h-11 w-11 rounded-md text-3xl",
        lg: "h-13 w-13 rounded-md text-4xl",
        xl: "h-15 w-15 rounded-md text-5xl",
      },
      inheritTextColor: {
        true: "text-current",
        false: "text-icon-subtle",
      },
      isDisabled: {
        true: "ui-disabled:text-disabled-icon ui-disabled:bg-transparent ui-disabled:border-transparent ui-disabled:cursor-not-allowed ui-disabled:select-none",
        false: "active:scale-95",
      },
    },
    defaultVariants: {
      size: "sm",
      inheritTextColor: false,
      isDisabled: false,
    },
  }
);

export type CloseButtonVariants = VariantProps<typeof closeButtonVariants>;

import { cva, VariantProps } from "class-variance-authority";

export const closeButtonVariants = cva(
  [
    "pg-appearance-none pg-relative pg-inline-flex pg-justify-center pg-items-center pg-p-0",
    "pg-reset-svg pg-font-medium pg-leading-none pg-no-underline",
    "pg-transition-colors pg-cursor-pointer",
    "pg-bg-subtle-bg hover:pg-bg-subtle-bg-hover active:pg-bg-subtle-bg-active",
    "pg-border pg-border-solid pg-border-transparent",
    "focus-visible:pg-outline focus-visible:pg-outline-2 focus-visible:pg-outline-offset-2 focus-visible:pg-outline-focus-ring",
  ],
  {
    variants: {
      size: {
        xs: "pg-h-7 pg-w-7 pg-rounded pg-text-xl",
        sm: "pg-h-9 pg-w-9 pg-rounded-md pg-text-2xl",
        md: "pg-h-11 pg-w-11 pg-rounded-md pg-text-3xl",
        lg: "pg-h-13 pg-w-13 pg-rounded-md pg-text-4xl",
        xl: "pg-h-15 pg-w-15 pg-rounded-md pg-text-5xl",
      },
      inheritTextColor: {
        true: "pg-text-current",
        false: "pg-text-icon-subtle",
      },
      isDisabled: {
        true: "pg-disabled:pg-text-disabled-icon pg-disabled:pg-bg-transparent pg-disabled:pg-border-transparent pg-disabled:pg-cursor-not-allowed pg-disabled:pg-select-none",
        false: "active:pg-scale-95",
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

import { cva, VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex justify-center items-center rounded-full border border-solid font-medium",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outlined: "",
      },
      colorScheme: {
        primary: "",
        neutral: "",
        success: "",
        info: "",
        warning: "",
        danger: "",
        help: "",
      },
      size: {
        xs: "h-5 px-2 text-xs",
        sm: "h-6 px-2.5 text-sm",
        md: "h-7 px-3 text-sm",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        colorScheme: "primary",
        class: "text-solid-primary-text bg-solid-primary-bg border-solid-primary-border",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        class: "text-solid-neutral-text bg-solid-neutral-bg border-solid-neutral-border",
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: "text-solid-success-text bg-solid-success-bg border-solid-success-border",
      },
      {
        variant: "solid",
        colorScheme: "info",
        class: "text-solid-info-text bg-solid-info-bg border-solid-info-border",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        class: "text-solid-warning-text bg-solid-warning-bg border-solid-warning-border",
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: "text-solid-danger-text bg-solid-danger-bg border-solid-danger-border",
      },
      {
        variant: "solid",
        colorScheme: "help",
        class: "text-solid-help-text bg-solid-help-bg border-solid-help-border",
      },

      // soft + colors
      {
        variant: "soft",
        colorScheme: "primary",
        class: "text-soft-primary-text bg-soft-primary-bg border-soft-primary-border",
      },
      {
        variant: "soft",
        colorScheme: "neutral",
        class: "text-soft-neutral-text bg-soft-neutral-bg border-soft-neutral-border",
      },
      {
        variant: "soft",
        colorScheme: "success",
        class: "text-soft-success-text bg-soft-success-bg border-soft-success-border",
      },
      {
        variant: "soft",
        colorScheme: "info",
        class: "text-soft-info-text bg-soft-info-bg border-soft-info-border",
      },
      {
        variant: "soft",
        colorScheme: "warning",
        class: "text-soft-warning-text bg-soft-warning-bg border-soft-warning-border",
      },
      {
        variant: "soft",
        colorScheme: "danger",
        class: "text-soft-danger-text bg-soft-danger-bg border-soft-danger-border",
      },
      {
        variant: "soft",
        colorScheme: "help",
        class: "text-soft-help-text bg-soft-help-bg border-soft-help-border",
      },

      // outlined + colors
      {
        variant: "outlined",
        colorScheme: "primary",
        class: "text-outlined-primary-text bg-outlined-primary-bg border-outlined-primary-border",
      },
      {
        variant: "outlined",
        colorScheme: "neutral",
        class: "text-outlined-neutral-text bg-outlined-neutral-bg border-outlined-neutral-border",
      },
      {
        variant: "outlined",
        colorScheme: "success",
        class: "text-outlined-success-text bg-outlined-success-bg border-outlined-success-border",
      },
      {
        variant: "outlined",
        colorScheme: "info",
        class: "text-outlined-info-text bg-outlined-info-bg border-outlined-info-border",
      },
      {
        variant: "outlined",
        colorScheme: "warning",
        class: "text-outlined-warning-text bg-outlined-warning-bg border-outlined-warning-border",
      },
      {
        variant: "outlined",
        colorScheme: "danger",
        class: "text-outlined-danger-text bg-outlined-danger-bg border-outlined-danger-border",
      },
      {
        variant: "outlined",
        colorScheme: "help",
        class: "text-outlined-help-text bg-outlined-help-bg border-outlined-help-border",
      },
    ],
    defaultVariants: {
      variant: "soft",
      colorScheme: "neutral",
      size: "sm",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

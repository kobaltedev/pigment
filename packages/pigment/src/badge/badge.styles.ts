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
      color: {
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
        color: "primary",
        class: "text-solid-primary-text bg-solid-primary-bg border-solid-primary-border",
      },
      {
        variant: "solid",
        color: "neutral",
        class: "text-solid-neutral-text bg-solid-neutral-bg border-solid-neutral-border",
      },
      {
        variant: "solid",
        color: "success",
        class: "text-solid-success-text bg-solid-success-bg border-solid-success-border",
      },
      {
        variant: "solid",
        color: "info",
        class: "text-solid-info-text bg-solid-info-bg border-solid-info-border",
      },
      {
        variant: "solid",
        color: "warning",
        class: "text-solid-warning-text bg-solid-warning-bg border-solid-warning-border",
      },
      {
        variant: "solid",
        color: "danger",
        class: "text-solid-danger-text bg-solid-danger-bg border-solid-danger-border",
      },
      {
        variant: "solid",
        color: "help",
        class: "text-solid-help-text bg-solid-help-bg border-solid-help-border",
      },

      // soft + colors
      {
        variant: "soft",
        color: "primary",
        class: "text-soft-primary-text bg-soft-primary-bg border-soft-primary-border",
      },
      {
        variant: "soft",
        color: "neutral",
        class: "text-soft-neutral-text bg-soft-neutral-bg border-soft-neutral-border",
      },
      {
        variant: "soft",
        color: "success",
        class: "text-soft-success-text bg-soft-success-bg border-soft-success-border",
      },
      {
        variant: "soft",
        color: "info",
        class: "text-soft-info-text bg-soft-info-bg border-soft-info-border",
      },
      {
        variant: "soft",
        color: "warning",
        class: "text-soft-warning-text bg-soft-warning-bg border-soft-warning-border",
      },
      {
        variant: "soft",
        color: "danger",
        class: "text-soft-danger-text bg-soft-danger-bg border-soft-danger-border",
      },
      {
        variant: "soft",
        color: "help",
        class: "text-soft-help-text bg-soft-help-bg border-soft-help-border",
      },

      // outlined + colors
      {
        variant: "outlined",
        color: "primary",
        class: "text-outlined-primary-text bg-outlined-primary-bg border-outlined-primary-border",
      },
      {
        variant: "outlined",
        color: "neutral",
        class: "text-outlined-neutral-text bg-outlined-neutral-bg border-outlined-neutral-border",
      },
      {
        variant: "outlined",
        color: "success",
        class: "text-outlined-success-text bg-outlined-success-bg border-outlined-success-border",
      },
      {
        variant: "outlined",
        color: "info",
        class: "text-outlined-info-text bg-outlined-info-bg border-outlined-info-border",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "text-outlined-warning-text bg-outlined-warning-bg border-outlined-warning-border",
      },
      {
        variant: "outlined",
        color: "danger",
        class: "text-outlined-danger-text bg-outlined-danger-bg border-outlined-danger-border",
      },
      {
        variant: "outlined",
        color: "help",
        class: "text-outlined-help-text bg-outlined-help-bg border-outlined-help-border",
      },
    ],
    defaultVariants: {
      variant: "soft",
      color: "neutral",
      size: "sm",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

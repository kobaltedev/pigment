import { cva, VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "pg-inline-flex pg-justify-center pg-items-center pg-rounded-full pg-border pg-border-solid pg-font-medium",
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
        xs: "pg-h-5 pg-px-2 pg-text-xs",
        sm: "pg-h-6 pg-px-2.5 pg-text-sm",
        md: "pg-h-7 pg-px-3 pg-text-sm",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        colorScheme: "primary",
        class: "pg-text-solid-primary-text pg-bg-solid-primary-bg pg-border-solid-primary-border",
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        class: "pg-text-solid-neutral-text pg-bg-solid-neutral-bg pg-border-solid-neutral-border",
      },
      {
        variant: "solid",
        colorScheme: "success",
        class: "pg-text-solid-success-text pg-bg-solid-success-bg pg-border-solid-success-border",
      },
      {
        variant: "solid",
        colorScheme: "info",
        class: "pg-text-solid-info-text pg-bg-solid-info-bg pg-border-solid-info-border",
      },
      {
        variant: "solid",
        colorScheme: "warning",
        class: "pg-text-solid-warning-text pg-bg-solid-warning-bg pg-border-solid-warning-border",
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: "pg-text-solid-danger-text pg-bg-solid-danger-bg pg-border-solid-danger-border",
      },
      {
        variant: "solid",
        colorScheme: "help",
        class: "pg-text-solid-help-text pg-bg-solid-help-bg pg-border-solid-help-border",
      },

      // soft + colors
      {
        variant: "soft",
        colorScheme: "primary",
        class: "pg-text-soft-primary-text pg-bg-soft-primary-bg pg-border-soft-primary-border",
      },
      {
        variant: "soft",
        colorScheme: "neutral",
        class: "pg-text-soft-neutral-text pg-bg-soft-neutral-bg pg-border-soft-neutral-border",
      },
      {
        variant: "soft",
        colorScheme: "success",
        class: "pg-text-soft-success-text pg-bg-soft-success-bg pg-border-soft-success-border",
      },
      {
        variant: "soft",
        colorScheme: "info",
        class: "pg-text-soft-info-text pg-bg-soft-info-bg pg-border-soft-info-border",
      },
      {
        variant: "soft",
        colorScheme: "warning",
        class: "pg-text-soft-warning-text pg-bg-soft-warning-bg pg-border-soft-warning-border",
      },
      {
        variant: "soft",
        colorScheme: "danger",
        class: "pg-text-soft-danger-text pg-bg-soft-danger-bg pg-border-soft-danger-border",
      },
      {
        variant: "soft",
        colorScheme: "help",
        class: "pg-text-soft-help-text pg-bg-soft-help-bg pg-border-soft-help-border",
      },

      // outlined + colors
      {
        variant: "outlined",
        colorScheme: "primary",
        class:
          "pg-text-outlined-primary-text pg-bg-outlined-primary-bg pg-border-outlined-primary-border",
      },
      {
        variant: "outlined",
        colorScheme: "neutral",
        class:
          "pg-text-outlined-neutral-text pg-bg-outlined-neutral-bg pg-border-outlined-neutral-border",
      },
      {
        variant: "outlined",
        colorScheme: "success",
        class:
          "pg-text-outlined-success-text pg-bg-outlined-success-bg pg-border-outlined-success-border",
      },
      {
        variant: "outlined",
        colorScheme: "info",
        class: "pg-text-outlined-info-text pg-bg-outlined-info-bg pg-border-outlined-info-border",
      },
      {
        variant: "outlined",
        colorScheme: "warning",
        class:
          "pg-text-outlined-warning-text pg-bg-outlined-warning-bg pg-border-outlined-warning-border",
      },
      {
        variant: "outlined",
        colorScheme: "danger",
        class:
          "pg-text-outlined-danger-text pg-bg-outlined-danger-bg pg-border-outlined-danger-border",
      },
      {
        variant: "outlined",
        colorScheme: "help",
        class: "pg-text-outlined-help-text pg-bg-outlined-help-bg pg-border-outlined-help-border",
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

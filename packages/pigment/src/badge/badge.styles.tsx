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
        class: "text-solid-primary-content bg-solid-primary-surface border-solid-primary-line",
      },
      {
        variant: "solid",
        color: "neutral",
        class: "text-solid-neutral-content bg-solid-neutral-surface border-solid-neutral-line",
      },
      {
        variant: "solid",
        color: "success",
        class: "text-solid-success-content bg-solid-success-surface border-solid-success-line",
      },
      {
        variant: "solid",
        color: "info",
        class: "text-solid-info-content bg-solid-info-surface border-solid-info-line",
      },
      {
        variant: "solid",
        color: "warning",
        class: "text-solid-warning-content bg-solid-warning-surface border-solid-warning-line",
      },
      {
        variant: "solid",
        color: "danger",
        class: "text-solid-danger-content bg-solid-danger-surface border-solid-danger-line",
      },

      // soft + colors
      {
        variant: "soft",
        color: "primary",
        class: "text-soft-primary-content bg-soft-primary-surface border-soft-primary-line",
      },
      {
        variant: "soft",
        color: "neutral",
        class: "text-soft-neutral-content bg-soft-neutral-surface border-soft-neutral-line",
      },
      {
        variant: "soft",
        color: "success",
        class: "text-soft-success-content bg-soft-success-surface border-soft-success-line",
      },
      {
        variant: "soft",
        color: "info",
        class: "text-soft-info-content bg-soft-info-surface border-soft-info-line",
      },
      {
        variant: "soft",
        color: "warning",
        class: "text-soft-warning-content bg-soft-warning-surface border-soft-warning-line",
      },
      {
        variant: "soft",
        color: "danger",
        class: "text-soft-danger-content bg-soft-danger-surface border-soft-danger-line",
      },

      // outlined + colors
      {
        variant: "outlined",
        color: "primary",
        class:
          "text-outlined-primary-content bg-outlined-primary-surface border-outlined-primary-line",
      },
      {
        variant: "outlined",
        color: "neutral",
        class:
          "text-outlined-neutral-content bg-outlined-neutral-surface border-outlined-neutral-line",
      },
      {
        variant: "outlined",
        color: "success",
        class:
          "text-outlined-success-content bg-outlined-success-surface border-outlined-success-line",
      },
      {
        variant: "outlined",
        color: "info",
        class: "text-outlined-info-content bg-outlined-info-surface border-outlined-info-line",
      },
      {
        variant: "outlined",
        color: "warning",
        class:
          "text-outlined-warning-content bg-outlined-warning-surface border-outlined-warning-line",
      },
      {
        variant: "outlined",
        color: "danger",
        class:
          "text-outlined-danger-content bg-outlined-danger-surface border-outlined-danger-line",
      },
    ],
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;

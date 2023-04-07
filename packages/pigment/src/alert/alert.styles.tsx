import { cva, VariantProps } from "class-variance-authority";

export const alertVariants = cva(["flex space-x-1.5 py-3 border border-solid rounded-md text-sm"], {
  variants: {
    variant: {
      solid: "",
      soft: "",
    },
    status: {
      neutral: "",
      success: "",
      info: "",
      warning: "",
      danger: "",
    },
    hasIcon: {
      true: "pl-2",
      false: "pl-4",
    },
    isDismissible: {
      true: "pr-2",
      false: "pr-4",
    },
    isMultiline: {
      true: "items-start",
      false: "items-center",
    },
  },
  compoundVariants: [
    // solid + colors
    {
      variant: "solid",
      status: "neutral",
      class: "text-solid-neutral-content bg-solid-neutral-surface border-solid-neutral-line",
    },
    {
      variant: "solid",
      status: "success",
      class: "text-solid-success-content bg-solid-success-surface border-solid-success-line",
    },
    {
      variant: "solid",
      status: "info",
      class: "text-solid-info-content bg-solid-info-surface border-solid-info-line",
    },
    {
      variant: "solid",
      status: "warning",
      class: "text-solid-warning-content bg-solid-warning-surface border-solid-warning-line",
    },
    {
      variant: "solid",
      status: "danger",
      class: "text-solid-danger-content bg-solid-danger-surface border-solid-danger-line",
    },

    // soft + colors
    {
      variant: "soft",
      status: "neutral",
      class: "text-soft-neutral-content bg-soft-neutral-surface border-soft-neutral-line",
    },
    {
      variant: "soft",
      status: "success",
      class: "text-soft-success-content bg-soft-success-surface border-soft-success-line",
    },
    {
      variant: "soft",
      status: "info",
      class: "text-soft-info-content bg-soft-info-surface border-soft-info-line",
    },
    {
      variant: "soft",
      status: "warning",
      class: "text-soft-warning-content bg-soft-warning-surface border-soft-warning-line",
    },
    {
      variant: "soft",
      status: "danger",
      class: "text-soft-danger-content bg-soft-danger-surface border-soft-danger-line",
    },
  ],
});

export const alertContentVariants = cva("flex grow", {
  variants: {
    isMultiline: {
      true: "flex-col space-y-1 py-1",
      false: "flex-row items-center space-x-1",
    },
  },
});

export type AlertVariants = VariantProps<typeof alertVariants>;

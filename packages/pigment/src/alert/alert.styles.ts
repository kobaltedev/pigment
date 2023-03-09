import { cva, VariantProps } from "class-variance-authority";

export const alertVariants = cva(
  [
    "pg-flex pg-items-start pg-space-x-1.5 pg-border pg-border-solid pg-rounded-md pg-py-3 pg-text-sm",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
      },
      status: {
        success: "",
        info: "",
        warning: "",
        danger: "",
        help: "",
      },
      hasIcon: {
        true: "pg-pl-2",
        false: "pg-pl-4",
      },
      isDismissible: {
        true: "pg-pr-2",
        false: "pg-pr-4",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        status: "success",
        class: "pg-text-solid-success-text pg-bg-solid-success-bg pg-border-solid-success-border",
      },
      {
        variant: "solid",
        status: "info",
        class: "pg-text-solid-info-text pg-bg-solid-info-bg pg-border-solid-info-border",
      },
      {
        variant: "solid",
        status: "warning",
        class: "pg-text-solid-warning-text pg-bg-solid-warning-bg pg-border-solid-warning-border",
      },
      {
        variant: "solid",
        status: "danger",
        class: "pg-text-solid-danger-text pg-bg-solid-danger-bg pg-border-solid-danger-border",
      },
      {
        variant: "solid",
        status: "help",
        class: ["pg-text-solid-help-text pg-bg-solid-help-bg pg-border-solid-help-border"],
      },

      // soft + colors
      {
        variant: "soft",
        status: "success",
        class: "pg-text-soft-success-text pg-bg-soft-success-bg pg-border-soft-success-border",
      },
      {
        variant: "soft",
        status: "info",
        class: "pg-text-soft-info-text pg-bg-soft-info-bg pg-border-soft-info-border",
      },
      {
        variant: "soft",
        status: "warning",
        class: "pg-text-soft-warning-text pg-bg-soft-warning-bg pg-border-soft-warning-border",
      },
      {
        variant: "soft",
        status: "danger",
        class: "pg-text-soft-danger-text pg-bg-soft-danger-bg pg-border-soft-danger-border",
      },
      {
        variant: "soft",
        status: "help",
        class: "pg-text-soft-help-text pg-bg-soft-help-bg pg-border-soft-help-border",
      },
    ],
    defaultVariants: {
      variant: "soft",
      status: "info",
      hasIcon: true,
      isDismissible: false,
    },
  }
);

export const alertIconVariants = cva(
  "pg-flex pg-justify-center pg-items-center pg-shrink-0 pg-reset-svg pg-h-7 pg-w-7 pg-text-xl pg-leading-none",
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
      },
      status: {
        success: "",
        info: "",
        warning: "",
        danger: "",
        help: "",
      },
    },
    compoundVariants: [
      // solid + colors
      { variant: "solid", status: "success", class: "pg-text-solid-success-icon" },
      { variant: "solid", status: "info", class: "pg-text-solid-info-icon" },
      { variant: "solid", status: "warning", class: "pg-text-solid-warning-icon" },
      { variant: "solid", status: "danger", class: "pg-text-solid-danger-icon" },
      { variant: "solid", status: "help", class: ["pg-text-solid-help-icon"] },

      // soft + colors
      { variant: "soft", status: "success", class: "pg-text-soft-success-icon" },
      { variant: "soft", status: "info", class: "pg-text-soft-info-icon" },
      { variant: "soft", status: "warning", class: "pg-text-soft-warning-icon" },
      { variant: "soft", status: "danger", class: "pg-text-soft-danger-icon" },
      { variant: "soft", status: "help", class: "pg-text-soft-help-icon" },
    ],
    defaultVariants: {
      variant: "soft",
      status: "info",
    },
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;

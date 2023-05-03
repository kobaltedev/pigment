import { tv, VariantProps } from "tailwind-variants";

export const badgeStyles = tv({
  slots: {
    root: "inline-flex items-center font-medium",
    dot: "rounded-full",
  },
  variants: {
    variant: {
      solid: {
        root: "border border-solid",
      },
      soft: {
        root: "ring-1 ring-inset",
      },
      dot: {
        root: "text-content bg-transparent border border-solid border-line",
      },
    },
    color: {
      // semantic
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
      discovery: {},
      // decorative
    },
    size: {
      md: {
        root: "h-6 px-2 text-xs",
        dot: "h-1.5 w-1.5",
      },
      lg: {
        root: "h-7 px-2.5 text-sm",
        dot: "h-2 w-2",
      },
    },
    pill: {
      true: {
        root: "rounded-full",
      },
      false: {
        root: "rounded-md",
      },
    },
  },
  compoundVariants: [
    // variant solid + color
    {
      variant: "solid",
      color: "primary",
      class: {
        root: "text-content-on-primary bg-surface-primary border-surface-primary",
      },
    },
    {
      variant: "solid",
      color: "neutral",
      class: {
        root: "text-content-on-neutral bg-surface-neutral border-surface-neutral",
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        root: "text-content-on-success bg-surface-success border-surface-success",
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        root: "text-content-on-info bg-surface-info border-surface-info",
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        root: "text-content-on-warning bg-surface-warning border-surface-warning",
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        root: "text-content-on-danger bg-surface-danger border-surface-danger",
      },
    },
    {
      variant: "solid",
      color: "discovery",
      class: {
        root: "text-content-on-discovery bg-surface-discovery border-surface-discovery",
      },
    },

    // variant soft + color
    {
      variant: "soft",
      color: "primary",
      class: {
        root: "text-content-on-primary-subtle bg-surface-primary-subtle/50 ring-surface-primary-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "neutral",
      class: {
        root: "text-content-on-neutral-subtle bg-surface-neutral-subtle/50 ring-surface-neutral-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "success",
      class: {
        root: "text-content-on-success-subtle bg-surface-success-subtle/50 ring-surface-success-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "info",
      class: {
        root: "text-content-on-info-subtle bg-surface-info-subtle/50 ring-surface-info-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        root: "text-content-on-warning-subtle bg-surface-warning-subtle/50 ring-surface-warning-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        root: "text-content-on-danger-subtle bg-surface-danger-subtle/50 ring-surface-danger-subtle-active/70",
      },
    },
    {
      variant: "soft",
      color: "discovery",
      class: {
        root: "text-content-on-discovery-subtle bg-surface-discovery-subtle/50 ring-surface-discovery-subtle-active/70",
      },
    },

    // variant dot + color
    { variant: "dot", color: "primary", class: { dot: "fill-surface-primary" } },
    { variant: "dot", color: "neutral", class: { dot: "fill-surface-neutral" } },
    { variant: "dot", color: "success", class: { dot: "fill-surface-success" } },
    { variant: "dot", color: "info", class: { dot: "fill-surface-info" } },
    { variant: "dot", color: "warning", class: { dot: "fill-surface-warning" } },
    { variant: "dot", color: "danger", class: { dot: "fill-surface-danger" } },
    { variant: "dot", color: "discovery", class: { dot: "fill-surface-discovery" } },

    // variant dot + size
    { variant: "dot", size: "md", class: { root: "gap-1.5" } },
    { variant: "dot", size: "lg", class: { root: "gap-2" } },
  ],
});

export type BadgeVariants = VariantProps<typeof badgeStyles>;

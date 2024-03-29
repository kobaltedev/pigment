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
      inverted: {
        root: "border border-solid",
      },
      dot: {
        root: "text-content bg-transparent border border-solid border-line",
      },
    },
    color: {
      primary: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
      discovery: {},
    },
    size: {
      md: {
        root: "h-6",
        dot: "h-1.5 w-1.5 me-1.5",
      },
      lg: {
        root: "h-7",
        dot: "h-2 w-2 me-2",
      },
    },
    shape: {
      rounded: {
        root: "rounded-md",
      },
      pill: {
        root: "rounded-full",
      },
      circle: {
        root: "rounded-full justify-center p-0",
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

    // variant inverted + color
    {
      variant: "inverted",
      color: "primary",
      class: {
        root: "text-surface-primary bg-content-on-primary border-content-on-primary",
      },
    },
    {
      variant: "inverted",
      color: "success",
      class: {
        root: "text-surface-success bg-content-on-success border-content-on-success",
      },
    },
    {
      variant: "inverted",
      color: "info",
      class: {
        root: "text-surface-info bg-content-on-info border-content-on-info",
      },
    },
    {
      variant: "inverted",
      color: "warning",
      class: {
        root: "text-surface-warning bg-content-on-warning border-content-on-warning",
      },
    },
    {
      variant: "inverted",
      color: "danger",
      class: {
        root: "text-surface-danger bg-content-on-danger border-content-on-danger",
      },
    },
    {
      variant: "inverted",
      color: "discovery",
      class: {
        root: "text-surface-discovery bg-content-on-discovery border-content-on-discovery",
      },
    },

    // variant dot + color
    { variant: "dot", color: "primary", class: { dot: "fill-surface-primary" } },
    { variant: "dot", color: "success", class: { dot: "fill-surface-success" } },
    { variant: "dot", color: "info", class: { dot: "fill-surface-info" } },
    { variant: "dot", color: "warning", class: { dot: "fill-surface-warning" } },
    { variant: "dot", color: "danger", class: { dot: "fill-surface-danger" } },
    { variant: "dot", color: "discovery", class: { dot: "fill-surface-discovery" } },

    // shape rounded + size
    { shape: "rounded", size: "md", class: { root: "px-2 text-xs" } },
    { shape: "rounded", size: "lg", class: { root: "px-2.5 text-sm" } },

    // shape pill + size
    { shape: "pill", size: "md", class: { root: "px-2.5 text-xs" } },
    { shape: "pill", size: "lg", class: { root: "px-3 text-sm" } },

    // shape circle + size
    { shape: "circle", size: "md", class: { root: "w-6 text-xs/[0]" } },
    { shape: "circle", size: "lg", class: { root: "w-7 text-sm/[0]" } },
  ],
});

export type BadgeVariants = VariantProps<typeof badgeStyles>;

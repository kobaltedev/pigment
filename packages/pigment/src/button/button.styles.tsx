import { tv, VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  slots: {
    root: [
      "group",
      "appearance-none",
      "relative",
      "items-center justify-center",
      "font-medium",
      "border border-solid",
      "cursor-pointer no-underline",
      "transition-colors",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none ui-disabled:shadow-none",
      "outline-none focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
    ],
    decorator: "shrink-0",
    loadingContent: "inline-flex items-center justify-center opacity-0",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      inverted: {},
      default: {
        root: [
          "text-content bg-white border-line",
          "ui-not-disabled:hover:bg-surface-subtle",
          "ui-not-disabled:active:bg-surface-subtle-hover",
          "shadow-sm ui-not-disabled:active:shadow-none",
          // dark
          "dark:ui-not-disabled:bg-white/5",
          "dark:ui-not-disabled:hover:bg-white/10",
          "dark:ui-not-disabled:active:bg-white/[0.15]",
          "dark:shadow-none",
        ],
      },
      dashed: {
        root: [
          "text-content bg-transparent border-dashed border-line",
          "ui-not-disabled:hover:bg-surface-subtle",
          "ui-not-disabled:active:bg-surface-subtle-hover",
          // dark
          "dark:ui-not-disabled:hover:bg-white/10",
          "dark:ui-not-disabled:active:bg-white/[0.15]",
        ],
      },
      text: {
        root: [
          "text-content bg-transparent border-transparent",
          "ui-not-disabled:hover:bg-surface-subtle-hover",
          "ui-not-disabled:active:bg-surface-subtle-active",
          // dark
          "dark:ui-not-disabled:hover:bg-white/10",
          "dark:ui-not-disabled:active:bg-white/[0.15]",
        ],
      },
      link: {
        root: [
          "text-content-link border-transparent !h-auto !p-0 underline-offset-4",
          "ui-not-disabled:hover:text-content-link-hover",
          "ui-not-disabled:active:text-content-link-active",
          "ui-not-disabled:hover:underline ui-not-disabled:focus-visible:underline",
        ],
      },
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
      discovery: {},
    },
    size: {
      xs: {
        root: "h-6 gap-1 rounded",
        loadingContent: "gap-1",
      },
      sm: {
        root: "h-8 gap-1.5 rounded",
        loadingContent: "gap-1.5",
      },
      md: {
        root: "h-10 gap-2 rounded-md",
        loadingContent: "gap-2",
      },
      lg: {
        root: "h-12 gap-2.5 rounded-lg",
        loadingContent: "gap-2.5",
      },
      xl: {
        root: "h-14 gap-3 rounded-[10px]",
        loadingContent: "gap-3",
      },
    },
    iconOnly: {
      true: {
        root: "p-0 leading-none",
      },
    },
    fullWidth: {
      true: {
        root: "flex w-full",
      },
      false: {
        root: "inline-flex",
      },
    },
    loading: {
      true: {
        root: "opacity-80 select-none pointer-events-none",
      },
    },
  },
  compoundVariants: [
    // variant solid + color
    {
      variant: "solid",
      color: "primary",
      class: {
        root: [
          "text-content-on-primary bg-surface-primary border-surface-primary",
          "ui-not-disabled:hover:bg-surface-primary-hover ui-not-disabled:hover:border-surface-primary-hover",
          "ui-not-disabled:active:bg-surface-primary-active ui-not-disabled:active:border-surface-primary-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "neutral",
      class: {
        root: [
          "text-content-on-neutral bg-surface-neutral border-surface-neutral",
          "ui-not-disabled:hover:bg-surface-neutral-hover ui-not-disabled:hover:border-surface-neutral-hover",
          "ui-not-disabled:active:bg-surface-neutral-active ui-not-disabled:active:border-surface-neutral-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "success",
      class: {
        root: [
          "text-content-on-success bg-surface-success border-surface-success",
          "ui-not-disabled:hover:bg-surface-success-hover ui-not-disabled:hover:border-surface-success-hover",
          "ui-not-disabled:active:bg-surface-success-active ui-not-disabled:active:border-surface-success-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "info",
      class: {
        root: [
          "text-content-on-info bg-surface-info border-surface-info",
          "ui-not-disabled:hover:bg-surface-info-hover ui-not-disabled:hover:border-surface-info-hover",
          "ui-not-disabled:active:bg-surface-info-active ui-not-disabled:active:border-surface-info-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        root: [
          "text-content-on-warning bg-surface-warning border-surface-warning",
          "ui-not-disabled:hover:bg-surface-warning-hover ui-not-disabled:hover:border-surface-warning-hover",
          "ui-not-disabled:active:bg-surface-warning-active ui-not-disabled:active:border-surface-warning-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        root: [
          "text-content-on-danger bg-surface-danger border-surface-danger",
          "ui-not-disabled:hover:bg-surface-danger-hover ui-not-disabled:hover:border-surface-danger-hover",
          "ui-not-disabled:active:bg-surface-danger-active ui-not-disabled:active:border-surface-danger-active",
        ],
      },
    },
    {
      variant: "solid",
      color: "discovery",
      class: {
        root: [
          "text-content-on-discovery bg-surface-discovery border-surface-discovery",
          "ui-not-disabled:hover:bg-surface-discovery-hover ui-not-disabled:hover:border-surface-discovery-hover",
          "ui-not-disabled:active:bg-surface-discovery-active ui-not-disabled:active:border-surface-discovery-active",
        ],
      },
    },

    // variant soft + color
    {
      variant: "soft",
      color: "primary",
      class: {
        root: [
          "text-content-on-primary-subtle bg-surface-primary-subtle border-surface-primary-subtle",
          "ui-not-disabled:hover:bg-surface-primary-subtle-hover ui-not-disabled:hover:border-surface-primary-subtle-hover",
          "ui-not-disabled:active:bg-surface-primary-subtle-active ui-not-disabled:active:border-surface-primary-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "neutral",
      class: {
        root: [
          "text-content-on-neutral-subtle bg-surface-neutral-subtle border-surface-neutral-subtle",
          "ui-not-disabled:hover:bg-surface-neutral-subtle-hover ui-not-disabled:hover:border-surface-neutral-subtle-hover",
          "ui-not-disabled:active:bg-surface-neutral-subtle-active ui-not-disabled:active:border-surface-neutral-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "success",
      class: {
        root: [
          "text-content-on-success-subtle bg-surface-success-subtle border-surface-success-subtle",
          "ui-not-disabled:hover:bg-surface-success-subtle-hover ui-not-disabled:hover:border-surface-success-subtle-hover",
          "ui-not-disabled:active:bg-surface-success-subtle-active ui-not-disabled:active:border-surface-success-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "info",
      class: {
        root: [
          "text-content-on-info-subtle bg-surface-info-subtle border-surface-info-subtle",
          "ui-not-disabled:hover:bg-surface-info-subtle-hover ui-not-disabled:hover:border-surface-info-subtle-hover",
          "ui-not-disabled:active:bg-surface-info-subtle-active ui-not-disabled:active:border-surface-info-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "warning",
      class: {
        root: [
          "text-content-on-warning-subtle bg-surface-warning-subtle border-surface-warning-subtle",
          "ui-not-disabled:hover:bg-surface-warning-subtle-hover ui-not-disabled:hover:border-surface-warning-subtle-hover",
          "ui-not-disabled:active:bg-surface-warning-subtle-active ui-not-disabled:active:border-surface-warning-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "danger",
      class: {
        root: [
          "text-content-on-danger-subtle bg-surface-danger-subtle border-surface-danger-subtle",
          "ui-not-disabled:hover:bg-surface-danger-subtle-hover ui-not-disabled:hover:border-surface-danger-subtle-hover",
          "ui-not-disabled:active:bg-surface-danger-subtle-active ui-not-disabled:active:border-surface-danger-subtle-active",
        ],
      },
    },
    {
      variant: "soft",
      color: "discovery",
      class: {
        root: [
          "text-content-on-discovery-subtle bg-surface-discovery-subtle border-surface-discovery-subtle",
          "ui-not-disabled:hover:bg-surface-discovery-subtle-hover ui-not-disabled:hover:border-surface-discovery-subtle-hover",
          "ui-not-disabled:active:bg-surface-discovery-subtle-active ui-not-disabled:active:border-surface-discovery-subtle-active",
        ],
      },
    },

    // variant inverted + color
    {
      variant: "inverted",
      color: "primary",
      class: {
        root: [
          "text-surface-primary bg-content-on-primary border-transparent",
          "ui-not-disabled:hover:bg-content-on-primary/90",
          "ui-not-disabled:active:bg-content-on-primary/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "neutral",
      class: {
        root: [
          "text-surface-neutral bg-content-on-neutral border-transparent",
          "ui-not-disabled:hover:bg-content-on-neutral/90",
          "ui-not-disabled:active:bg-content-on-neutral/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "success",
      class: {
        root: [
          "text-surface-success bg-content-on-success border-transparent",
          "ui-not-disabled:hover:bg-content-on-success/90",
          "ui-not-disabled:active:bg-content-on-success/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "info",
      class: {
        root: [
          "text-surface-info bg-content-on-info border-transparent",
          "ui-not-disabled:hover:bg-content-on-info/90",
          "ui-not-disabled:active:bg-content-on-info/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "warning",
      class: {
        root: [
          "text-surface-warning bg-content-on-warning border-transparent",
          "ui-not-disabled:hover:bg-content-on-warning/90",
          "ui-not-disabled:active:bg-content-on-warning/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "danger",
      class: {
        root: [
          "text-surface-danger bg-content-on-danger border-transparent",
          "ui-not-disabled:hover:bg-content-on-danger/90",
          "ui-not-disabled:active:bg-content-on-danger/80",
        ],
      },
    },
    {
      variant: "inverted",
      color: "discovery",
      class: {
        root: [
          "text-surface-discovery bg-content-on-discovery border-transparent",
          "ui-not-disabled:hover:bg-content-on-discovery/90",
          "ui-not-disabled:active:bg-content-on-discovery/80",
        ],
      },
    },

    // variant + disabled
    {
      variant: ["solid", "soft", "inverted"],
      class: {
        root: "ui-disabled:bg-surface-disabled ui-disabled:border-surface-disabled",
      },
    },
    {
      variant: ["default", "dashed"],
      class: {
        root: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },
    },
    {
      variant: ["text", "link"],
      class: {
        root: "ui-disabled:bg-transparent ui-disabled:border-transparent",
      },
    },

    // button
    { iconOnly: false, fullWidth: false, class: { root: "w-auto" } },
    { size: "xs", iconOnly: false, class: { root: "px-2 text-xs", decorator: "text-base/[0]" } },
    { size: "sm", iconOnly: false, class: { root: "px-2.5 text-sm", decorator: "text-xl/[0]" } },
    { size: "md", iconOnly: false, class: { root: "px-3 text-base", decorator: "text-2xl/[0]" } },
    { size: "lg", iconOnly: false, class: { root: "px-4 text-xl", decorator: "text-[28px]/[0]" } },
    { size: "xl", iconOnly: false, class: { root: "px-5 text-2xl", decorator: "text-[32px]/[0]" } },

    // icon only button
    { size: "xs", iconOnly: true, fullWidth: false, class: { root: "w-6" } },
    { size: "sm", iconOnly: true, fullWidth: false, class: { root: "w-8" } },
    { size: "md", iconOnly: true, fullWidth: false, class: { root: "w-10" } },
    { size: "lg", iconOnly: true, fullWidth: false, class: { root: "w-12" } },
    { size: "xl", iconOnly: true, fullWidth: false, class: { root: "w-14" } },

    { size: "xs", iconOnly: true, class: { root: "text-base/[0]" } },
    { size: "sm", iconOnly: true, class: { root: "text-xl/[0]" } },
    { size: "md", iconOnly: true, class: { root: "text-2xl/[0]" } },
    { size: "lg", iconOnly: true, class: { root: "text-[28px]/[0]" } },
    { size: "xl", iconOnly: true, class: { root: "text-[32px]/[0]" } },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;

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
    icon: "reset-svg shrink-0",
    loadingContent: "inline-flex items-center justify-center opacity-0",
  },
  variants: {
    variant: {
      primary: {
        root: [
          "text-content-on-primary bg-surface-primary border-surface-primary",
          "ui-not-disabled:hover:bg-surface-primary-hover ui-not-disabled:hover:border-surface-primary-hover",
          "ui-not-disabled:active:bg-surface-primary-active ui-not-disabled:active:border-surface-primary-active",
        ],
      },
      secondary: {
        root: [
          "text-content-on-primary-subtle bg-surface-primary-subtle border-surface-primary-subtle",
          "ui-not-disabled:hover:bg-surface-primary-subtle-hover ui-not-disabled:hover:border-surface-primary-subtle-hover",
          "ui-not-disabled:active:bg-surface-primary-subtle-active ui-not-disabled:active:border-surface-primary-subtle-active",
        ],
      },
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
          "text-content-link border-transparent !h-auto !p-0 underline underline-offset-4",
          "ui-not-disabled:hover:text-content-link-hover",
          "ui-not-disabled:active:text-content-link-active",
        ],
      },
      destructive: {
        root: [
          "text-content-on-danger bg-surface-danger border-surface-danger",
          "ui-not-disabled:hover:bg-surface-danger-hover ui-not-disabled:hover:border-surface-danger-hover",
          "ui-not-disabled:active:bg-surface-danger-active ui-not-disabled:active:border-surface-danger-active",
        ],
      },
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
        root: "reset-svg p-0 leading-none",
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
    // variant + disabled
    {
      variant: ["primary", "secondary", "destructive"],
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
    { size: "xs", iconOnly: false, class: { root: "px-2 text-xs", icon: "text-base" } },
    { size: "sm", iconOnly: false, class: { root: "px-2.5 text-sm", icon: "text-xl" } },
    { size: "md", iconOnly: false, class: { root: "px-3 text-base", icon: "text-2xl" } },
    { size: "lg", iconOnly: false, class: { root: "px-4 text-xl", icon: "text-[28px]" } },
    { size: "xl", iconOnly: false, class: { root: "px-5 text-2xl", icon: "text-[32px]" } },

    // icon only button
    { size: "xs", iconOnly: true, fullWidth: false, class: { root: "w-6" } },
    { size: "sm", iconOnly: true, fullWidth: false, class: { root: "w-8" } },
    { size: "md", iconOnly: true, fullWidth: false, class: { root: "w-10" } },
    { size: "lg", iconOnly: true, fullWidth: false, class: { root: "w-12" } },
    { size: "xl", iconOnly: true, fullWidth: false, class: { root: "w-14" } },

    { size: "xs", iconOnly: true, class: { root: "text-base" } },
    { size: "sm", iconOnly: true, class: { root: "text-xl" } },
    { size: "md", iconOnly: true, class: { root: "text-2xl" } },
    { size: "lg", iconOnly: true, class: { root: "text-[28px]" } },
    { size: "xl", iconOnly: true, class: { root: "text-[32px]" } },
  ],
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;

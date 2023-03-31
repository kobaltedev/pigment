import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "group",
    "appearance-none relative justify-center items-center",
    "border border-solid",
    "font-medium no-underline",
    "transition-colors cursor-pointer",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outlined: "",
        ghost: "",
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
        xs: "h-7 gap-1 rounded",
        sm: "h-9 gap-2 rounded-md",
        md: "h-11 gap-2 rounded-md",
        lg: "h-13 gap-2.5 rounded-md",
        xl: "h-15 gap-3 rounded-md",
      },
      isIconOnly: {
        true: "reset-svg p-0 leading-none",
      },
      isFullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
      isLoading: {
        true: "opacity-80 select-none pointer-events-none",
      },
      isDisabled: {
        true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        color: "primary",
        isDisabled: false,
        class: [
          "text-solid-primary-content hover:text-solid-primary-content-hover active:text-solid-primary-content-active",
          "bg-solid-primary-surface hover:bg-solid-primary-surface-hover active:bg-solid-primary-surface-active",
          "border-solid-primary-line hover:border-solid-primary-line-hover active:border-solid-primary-line-active",
        ],
      },
      {
        variant: "solid",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-solid-neutral-content hover:text-solid-neutral-content-hover active:text-solid-neutral-content-active",
          "bg-solid-neutral-surface hover:bg-solid-neutral-surface-hover active:bg-solid-neutral-surface-active",
          "border-solid-neutral-line hover:border-solid-neutral-line-hover active:border-solid-neutral-line-active",
        ],
      },
      {
        variant: "solid",
        color: "success",
        isDisabled: false,
        class: [
          "text-solid-success-content hover:text-solid-success-content-hover active:text-solid-success-content-active",
          "bg-solid-success-surface hover:bg-solid-success-surface-hover active:bg-solid-success-surface-active",
          "border-solid-success-line hover:border-solid-success-line-hover active:border-solid-success-line-active",
        ],
      },
      {
        variant: "solid",
        color: "info",
        isDisabled: false,
        class: [
          "text-solid-info-content hover:text-solid-info-content-hover active:text-solid-info-content-active",
          "bg-solid-info-surface hover:bg-solid-info-surface-hover active:bg-solid-info-surface-active",
          "border-solid-info-line hover:border-solid-info-line-hover active:border-solid-info-line-active",
        ],
      },
      {
        variant: "solid",
        color: "warning",
        isDisabled: false,
        class: [
          "text-solid-warning-content hover:text-solid-warning-content-hover active:text-solid-warning-content-active",
          "bg-solid-warning-surface hover:bg-solid-warning-surface-hover active:bg-solid-warning-surface-active",
          "border-solid-warning-line hover:border-solid-warning-line-hover active:border-solid-warning-line-active",
        ],
      },
      {
        variant: "solid",
        color: "danger",
        isDisabled: false,
        class: [
          "text-solid-danger-content hover:text-solid-danger-content-hover active:text-solid-danger-content-active",
          "bg-solid-danger-surface hover:bg-solid-danger-surface-hover active:bg-solid-danger-surface-active",
          "border-solid-danger-line hover:border-solid-danger-line-hover active:border-solid-danger-line-active",
        ],
      },

      // soft + colors
      {
        variant: "soft",
        color: "primary",
        isDisabled: false,
        class: [
          "text-soft-primary-content hover:text-soft-primary-content-hover active:text-soft-primary-content-active",
          "bg-soft-primary-surface hover:bg-soft-primary-surface-hover active:bg-soft-primary-surface-active",
          "border-soft-primary-line hover:border-soft-primary-line-hover active:border-soft-primary-line-active",
        ],
      },
      {
        variant: "soft",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-soft-neutral-content hover:text-soft-neutral-content-hover active:text-soft-neutral-content-active",
          "bg-soft-neutral-surface hover:bg-soft-neutral-surface-hover active:bg-soft-neutral-surface-active",
          "border-soft-neutral-line hover:border-soft-neutral-line-hover active:border-soft-neutral-line-active",
        ],
      },
      {
        variant: "soft",
        color: "success",
        isDisabled: false,
        class: [
          "text-soft-success-content hover:text-soft-success-content-hover active:text-soft-success-content-active",
          "bg-soft-success-surface hover:bg-soft-success-surface-hover active:bg-soft-success-surface-active",
          "border-soft-success-line hover:border-soft-success-line-hover active:border-soft-success-line-active",
        ],
      },
      {
        variant: "soft",
        color: "info",
        isDisabled: false,
        class: [
          "text-soft-info-content hover:text-soft-info-content-hover active:text-soft-info-content-active",
          "bg-soft-info-surface hover:bg-soft-info-surface-hover active:bg-soft-info-surface-active",
          "border-soft-info-line hover:border-soft-info-line-hover active:border-soft-info-line-active",
        ],
      },
      {
        variant: "soft",
        color: "warning",
        isDisabled: false,
        class: [
          "text-soft-warning-content hover:text-soft-warning-content-hover active:text-soft-warning-content-active",
          "bg-soft-warning-surface hover:bg-soft-warning-surface-hover active:bg-soft-warning-surface-active",
          "border-soft-warning-line hover:border-soft-warning-line-hover active:border-soft-warning-line-active",
        ],
      },
      {
        variant: "soft",
        color: "danger",
        isDisabled: false,
        class: [
          "text-soft-danger-content hover:text-soft-danger-content-hover active:text-soft-danger-content-active",
          "bg-soft-danger-surface hover:bg-soft-danger-surface-hover active:bg-soft-danger-surface-active",
          "border-soft-danger-line hover:border-soft-danger-line-hover active:border-soft-danger-line-active",
        ],
      },

      // outlined + colors
      {
        variant: "outlined",
        color: "primary",
        isDisabled: false,
        class: [
          "text-outlined-primary-content hover:text-outlined-primary-content-hover active:text-outlined-primary-content-active",
          "bg-outlined-primary-surface hover:bg-outlined-primary-surface-hover active:bg-outlined-primary-surface-active",
          "border-outlined-primary-line hover:border-outlined-primary-line-hover active:border-outlined-primary-line-active",
        ],
      },
      {
        variant: "outlined",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-outlined-neutral-content hover:text-outlined-neutral-content-hover active:text-outlined-neutral-content-active",
          "bg-outlined-neutral-surface hover:bg-outlined-neutral-surface-hover active:bg-outlined-neutral-surface-active",
          "border-outlined-neutral-line hover:border-outlined-neutral-line-hover active:border-outlined-neutral-line-active",
        ],
      },
      {
        variant: "outlined",
        color: "success",
        isDisabled: false,
        class: [
          "text-outlined-success-content hover:text-outlined-success-content-hover active:text-outlined-success-content-active",
          "bg-outlined-success-surface hover:bg-outlined-success-surface-hover active:bg-outlined-success-surface-active",
          "border-outlined-success-line hover:border-outlined-success-line-hover active:border-outlined-success-line-active",
        ],
      },
      {
        variant: "outlined",
        color: "info",
        isDisabled: false,
        class: [
          "text-outlined-info-content hover:text-outlined-info-content-hover active:text-outlined-info-content-active",
          "bg-outlined-info-surface hover:bg-outlined-info-surface-hover active:bg-outlined-info-surface-active",
          "border-outlined-info-line hover:border-outlined-info-line-hover active:border-outlined-info-line-active",
        ],
      },
      {
        variant: "outlined",
        color: "warning",
        isDisabled: false,
        class: [
          "text-outlined-warning-content hover:text-outlined-warning-content-hover active:text-outlined-warning-content-active",
          "bg-outlined-warning-surface hover:bg-outlined-warning-surface-hover active:bg-outlined-warning-surface-active",
          "border-outlined-warning-line hover:border-outlined-warning-line-hover active:border-outlined-warning-line-active",
        ],
      },
      {
        variant: "outlined",
        color: "danger",
        isDisabled: false,
        class: [
          "text-outlined-danger-content hover:text-outlined-danger-content-hover active:text-outlined-danger-content-active",
          "bg-outlined-danger-surface hover:bg-outlined-danger-surface-hover active:bg-outlined-danger-surface-active",
          "border-outlined-danger-line hover:border-outlined-danger-line-hover active:border-outlined-danger-line-active",
        ],
      },

      // ghost + colors
      {
        variant: "ghost",
        color: "primary",
        isDisabled: false,
        class: [
          "text-ghost-primary-content hover:text-ghost-primary-content-hover active:text-ghost-primary-content-active",
          "bg-ghost-primary-surface hover:bg-ghost-primary-surface-hover active:bg-ghost-primary-surface-active",
          "border-ghost-primary-line hover:border-ghost-primary-line-hover active:border-ghost-primary-line-active",
        ],
      },
      {
        variant: "ghost",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-ghost-neutral-content hover:text-ghost-neutral-content-hover active:text-ghost-neutral-content-active",
          "bg-ghost-neutral-surface hover:bg-ghost-neutral-surface-hover active:bg-ghost-neutral-surface-active",
          "border-ghost-neutral-line hover:border-ghost-neutral-line-hover active:border-ghost-neutral-line-active",
        ],
      },
      {
        variant: "ghost",
        color: "success",
        isDisabled: false,
        class: [
          "text-ghost-success-content hover:text-ghost-success-content-hover active:text-ghost-success-content-active",
          "bg-ghost-success-surface hover:bg-ghost-success-surface-hover active:bg-ghost-success-surface-active",
          "border-ghost-success-line hover:border-ghost-success-line-hover active:border-ghost-success-line-active",
        ],
      },
      {
        variant: "ghost",
        color: "info",
        isDisabled: false,
        class: [
          "text-ghost-info-content hover:text-ghost-info-content-hover active:text-ghost-info-content-active",
          "bg-ghost-info-surface hover:bg-ghost-info-surface-hover active:bg-ghost-info-surface-active",
          "border-ghost-info-line hover:border-ghost-info-line-hover active:border-ghost-info-line-active",
        ],
      },
      {
        variant: "ghost",
        color: "warning",
        isDisabled: false,
        class: [
          "text-ghost-warning-content hover:text-ghost-warning-content-hover active:text-ghost-warning-content-active",
          "bg-ghost-warning-surface hover:bg-ghost-warning-surface-hover active:bg-ghost-warning-surface-active",
          "border-ghost-warning-line hover:border-ghost-warning-line-hover active:border-ghost-warning-line-active",
        ],
      },
      {
        variant: "ghost",
        color: "danger",
        isDisabled: false,
        class: [
          "text-ghost-danger-content hover:text-ghost-danger-content-hover active:text-ghost-danger-content-active",
          "bg-ghost-danger-surface hover:bg-ghost-danger-surface-hover active:bg-ghost-danger-surface-active",
          "border-ghost-danger-line hover:border-ghost-danger-line-hover active:border-ghost-danger-line-active",
        ],
      },

      // disabled + variants
      {
        variant: ["solid", "soft"],
        isDisabled: true,
        class: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },
      {
        variant: "ghost",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-transparent",
      },

      // active state
      {
        isLoading: false,
        isDisabled: false,
        class: "active:scale-95",
      },

      // rectangle button (e.g: Button)
      { isIconOnly: false, isFullWidth: false, class: "w-auto" },
      { size: "xs", isIconOnly: false, class: "px-2.5 text-sm" },
      { size: "sm", isIconOnly: false, class: "px-4 text-sm" },
      { size: "md", isIconOnly: false, class: "px-5 text-base" },
      { size: "lg", isIconOnly: false, class: "px-7 text-lg" },
      { size: "xl", isIconOnly: false, class: "px-8 text-xl" },

      // square button (e.g: IconButton)
      { size: "xs", isIconOnly: true, isFullWidth: false, class: "w-7 text-xl" },
      { size: "sm", isIconOnly: true, isFullWidth: false, class: "w-9 text-2xl" },
      { size: "md", isIconOnly: true, isFullWidth: false, class: "w-11 text-3xl" },
      { size: "lg", isIconOnly: true, isFullWidth: false, class: "w-13 text-4xl" },
      { size: "xl", isIconOnly: true, isFullWidth: false, class: "w-15 text-5xl" },
    ],
  }
);

export const buttonIconVariants = cva("reset-svg shrink-0", {
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    isIconOnly: {
      true: "",
    },
  },
  compoundVariants: [
    // start, end and loading icons in rectangle button (e.g: Button)
    { size: "xs", isIconOnly: false, class: "text-base" },
    { size: "sm", isIconOnly: false, class: "text-base" },
    { size: "md", isIconOnly: false, class: "text-lg" },
    { size: "lg", isIconOnly: false, class: "text-xl" },
    { size: "xl", isIconOnly: false, class: "text-2xl" },

    // only loading icon in square button (e.g: IconButton)
    { size: "xs", isIconOnly: true, class: "text-xl" },
    { size: "sm", isIconOnly: true, class: "text-2xl" },
    { size: "md", isIconOnly: true, class: "text-3xl" },
    { size: "lg", isIconOnly: true, class: "text-4xl" },
    { size: "xl", isIconOnly: true, class: "text-5xl" },
  ],
});

export const loadingContentVariants = cva("inline-flex items-center justify-center opacity-0", {
  variants: {
    size: {
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-2",
      lg: "gap-2.5",
      xl: "gap-3",
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

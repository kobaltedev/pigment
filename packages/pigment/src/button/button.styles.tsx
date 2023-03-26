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
        help: "",
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
        true: "ui-disabled:text-disabled-text ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        color: "primary",
        isDisabled: false,
        class: [
          "text-solid-primary-text hover:text-solid-primary-text-hover active:text-solid-primary-text-active",
          "bg-solid-primary-bg hover:bg-solid-primary-bg-hover active:bg-solid-primary-bg-active",
          "border-solid-primary-border hover:border-solid-primary-border-hover active:border-solid-primary-border-active",
        ],
      },
      {
        variant: "solid",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-solid-neutral-text hover:text-solid-neutral-text-hover active:text-solid-neutral-text-active",
          "bg-solid-neutral-bg hover:bg-solid-neutral-bg-hover active:bg-solid-neutral-bg-active",
          "border-solid-neutral-border hover:border-solid-neutral-border-hover active:border-solid-neutral-border-active",
        ],
      },
      {
        variant: "solid",
        color: "success",
        isDisabled: false,
        class: [
          "text-solid-success-text hover:text-solid-success-text-hover active:text-solid-success-text-active",
          "bg-solid-success-bg hover:bg-solid-success-bg-hover active:bg-solid-success-bg-active",
          "border-solid-success-border hover:border-solid-success-border-hover active:border-solid-success-border-active",
        ],
      },
      {
        variant: "solid",
        color: "info",
        isDisabled: false,
        class: [
          "text-solid-info-text hover:text-solid-info-text-hover active:text-solid-info-text-active",
          "bg-solid-info-bg hover:bg-solid-info-bg-hover active:bg-solid-info-bg-active",
          "border-solid-info-border hover:border-solid-info-border-hover active:border-solid-info-border-active",
        ],
      },
      {
        variant: "solid",
        color: "warning",
        isDisabled: false,
        class: [
          "text-solid-warning-text hover:text-solid-warning-text-hover active:text-solid-warning-text-active",
          "bg-solid-warning-bg hover:bg-solid-warning-bg-hover active:bg-solid-warning-bg-active",
          "border-solid-warning-border hover:border-solid-warning-border-hover active:border-solid-warning-border-active",
        ],
      },
      {
        variant: "solid",
        color: "danger",
        isDisabled: false,
        class: [
          "text-solid-danger-text hover:text-solid-danger-text-hover active:text-solid-danger-text-active",
          "bg-solid-danger-bg hover:bg-solid-danger-bg-hover active:bg-solid-danger-bg-active",
          "border-solid-danger-border hover:border-solid-danger-border-hover active:border-solid-danger-border-active",
        ],
      },
      {
        variant: "solid",
        color: "help",
        isDisabled: false,
        class: [
          "text-solid-help-text hover:text-solid-help-text-hover active:text-solid-help-text-active",
          "bg-solid-help-bg hover:bg-solid-help-bg-hover active:bg-solid-help-bg-active",
          "border-solid-help-border hover:border-solid-help-border-hover active:border-solid-help-border-active",
        ],
      },

      // soft + colors
      {
        variant: "soft",
        color: "primary",
        isDisabled: false,
        class: [
          "text-soft-primary-text hover:text-soft-primary-text-hover active:text-soft-primary-text-active",
          "bg-soft-primary-bg hover:bg-soft-primary-bg-hover active:bg-soft-primary-bg-active",
          "border-soft-primary-border hover:border-soft-primary-border-hover active:border-soft-primary-border-active",
        ],
      },
      {
        variant: "soft",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-soft-neutral-text hover:text-soft-neutral-text-hover active:text-soft-neutral-text-active",
          "bg-soft-neutral-bg hover:bg-soft-neutral-bg-hover active:bg-soft-neutral-bg-active",
          "border-soft-neutral-border hover:border-soft-neutral-border-hover active:border-soft-neutral-border-active",
        ],
      },
      {
        variant: "soft",
        color: "success",
        isDisabled: false,
        class: [
          "text-soft-success-text hover:text-soft-success-text-hover active:text-soft-success-text-active",
          "bg-soft-success-bg hover:bg-soft-success-bg-hover active:bg-soft-success-bg-active",
          "border-soft-success-border hover:border-soft-success-border-hover active:border-soft-success-border-active",
        ],
      },
      {
        variant: "soft",
        color: "info",
        isDisabled: false,
        class: [
          "text-soft-info-text hover:text-soft-info-text-hover active:text-soft-info-text-active",
          "bg-soft-info-bg hover:bg-soft-info-bg-hover active:bg-soft-info-bg-active",
          "border-soft-info-border hover:border-soft-info-border-hover active:border-soft-info-border-active",
        ],
      },
      {
        variant: "soft",
        color: "warning",
        isDisabled: false,
        class: [
          "text-soft-warning-text hover:text-soft-warning-text-hover active:text-soft-warning-text-active",
          "bg-soft-warning-bg hover:bg-soft-warning-bg-hover active:bg-soft-warning-bg-active",
          "border-soft-warning-border hover:border-soft-warning-border-hover active:border-soft-warning-border-active",
        ],
      },
      {
        variant: "soft",
        color: "danger",
        isDisabled: false,
        class: [
          "text-soft-danger-text hover:text-soft-danger-text-hover active:text-soft-danger-text-active",
          "bg-soft-danger-bg hover:bg-soft-danger-bg-hover active:bg-soft-danger-bg-active",
          "border-soft-danger-border hover:border-soft-danger-border-hover active:border-soft-danger-border-active",
        ],
      },
      {
        variant: "soft",
        color: "help",
        isDisabled: false,
        class: [
          "text-soft-help-text hover:text-soft-help-text-hover active:text-soft-help-text-active",
          "bg-soft-help-bg hover:bg-soft-help-bg-hover active:bg-soft-help-bg-active",
          "border-soft-help-border hover:border-soft-help-border-hover active:border-soft-help-border-active",
        ],
      },

      // outlined + colors
      {
        variant: "outlined",
        color: "primary",
        isDisabled: false,
        class: [
          "text-outlined-primary-text hover:text-outlined-primary-text-hover active:text-outlined-primary-text-active",
          "bg-outlined-primary-bg hover:bg-outlined-primary-bg-hover active:bg-outlined-primary-bg-active",
          "border-outlined-primary-border hover:border-outlined-primary-border-hover active:border-outlined-primary-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-outlined-neutral-text hover:text-outlined-neutral-text-hover active:text-outlined-neutral-text-active",
          "bg-outlined-neutral-bg hover:bg-outlined-neutral-bg-hover active:bg-outlined-neutral-bg-active",
          "border-outlined-neutral-border hover:border-outlined-neutral-border-hover active:border-outlined-neutral-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "success",
        isDisabled: false,
        class: [
          "text-outlined-success-text hover:text-outlined-success-text-hover active:text-outlined-success-text-active",
          "bg-outlined-success-bg hover:bg-outlined-success-bg-hover active:bg-outlined-success-bg-active",
          "border-outlined-success-border hover:border-outlined-success-border-hover active:border-outlined-success-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "info",
        isDisabled: false,
        class: [
          "text-outlined-info-text hover:text-outlined-info-text-hover active:text-outlined-info-text-active",
          "bg-outlined-info-bg hover:bg-outlined-info-bg-hover active:bg-outlined-info-bg-active",
          "border-outlined-info-border hover:border-outlined-info-border-hover active:border-outlined-info-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "warning",
        isDisabled: false,
        class: [
          "text-outlined-warning-text hover:text-outlined-warning-text-hover active:text-outlined-warning-text-active",
          "bg-outlined-warning-bg hover:bg-outlined-warning-bg-hover active:bg-outlined-warning-bg-active",
          "border-outlined-warning-border hover:border-outlined-warning-border-hover active:border-outlined-warning-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "danger",
        isDisabled: false,
        class: [
          "text-outlined-danger-text hover:text-outlined-danger-text-hover active:text-outlined-danger-text-active",
          "bg-outlined-danger-bg hover:bg-outlined-danger-bg-hover active:bg-outlined-danger-bg-active",
          "border-outlined-danger-border hover:border-outlined-danger-border-hover active:border-outlined-danger-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "help",
        isDisabled: false,
        class: [
          "text-outlined-help-text hover:text-outlined-help-text-hover active:text-outlined-help-text-active",
          "bg-outlined-help-bg hover:bg-outlined-help-bg-hover active:bg-outlined-help-bg-active",
          "border-outlined-help-border hover:border-outlined-help-border-hover active:border-outlined-help-border-active",
        ],
      },

      // ghost + colors
      {
        variant: "ghost",
        color: "primary",
        isDisabled: false,
        class: [
          "text-ghost-primary-text hover:text-ghost-primary-text-hover active:text-ghost-primary-text-active",
          "bg-ghost-primary-bg hover:bg-ghost-primary-bg-hover active:bg-ghost-primary-bg-active",
          "border-ghost-primary-border hover:border-ghost-primary-border-hover active:border-ghost-primary-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "neutral",
        isDisabled: false,
        class: [
          "text-ghost-neutral-text hover:text-ghost-neutral-text-hover active:text-ghost-neutral-text-active",
          "bg-ghost-neutral-bg hover:bg-ghost-neutral-bg-hover active:bg-ghost-neutral-bg-active",
          "border-ghost-neutral-border hover:border-ghost-neutral-border-hover active:border-ghost-neutral-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "success",
        isDisabled: false,
        class: [
          "text-ghost-success-text hover:text-ghost-success-text-hover active:text-ghost-success-text-active",
          "bg-ghost-success-bg hover:bg-ghost-success-bg-hover active:bg-ghost-success-bg-active",
          "border-ghost-success-border hover:border-ghost-success-border-hover active:border-ghost-success-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "info",
        isDisabled: false,
        class: [
          "text-ghost-info-text hover:text-ghost-info-text-hover active:text-ghost-info-text-active",
          "bg-ghost-info-bg hover:bg-ghost-info-bg-hover active:bg-ghost-info-bg-active",
          "border-ghost-info-border hover:border-ghost-info-border-hover active:border-ghost-info-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "warning",
        isDisabled: false,
        class: [
          "text-ghost-warning-text hover:text-ghost-warning-text-hover active:text-ghost-warning-text-active",
          "bg-ghost-warning-bg hover:bg-ghost-warning-bg-hover active:bg-ghost-warning-bg-active",
          "border-ghost-warning-border hover:border-ghost-warning-border-hover active:border-ghost-warning-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "danger",
        isDisabled: false,
        class: [
          "text-ghost-danger-text hover:text-ghost-danger-text-hover active:text-ghost-danger-text-active",
          "bg-ghost-danger-bg hover:bg-ghost-danger-bg-hover active:bg-ghost-danger-bg-active",
          "border-ghost-danger-border hover:border-ghost-danger-border-hover active:border-ghost-danger-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "help",
        isDisabled: false,
        class: [
          "text-ghost-help-text hover:text-ghost-help-text-hover active:text-ghost-help-text-active",
          "bg-ghost-help-bg hover:bg-ghost-help-bg-hover active:bg-ghost-help-bg-active",
          "border-ghost-help-border hover:border-ghost-help-border-hover active:border-ghost-help-border-active",
        ],
      },

      // disabled + variants
      {
        variant: ["solid", "soft"],
        isDisabled: true,
        class: "ui-disabled:bg-disabled-bg ui-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-disabled-border",
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

export const buttonIconVariants = cva("reset-svg shrink-0 transition-colors", {
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
      help: "",
    },
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
    isDisabled: {
      true: "text-disabled-icon",
    },
  },
  compoundVariants: [
    // solid + colors
    {
      variant: "solid",
      color: "primary",
      isDisabled: false,
      class:
        "text-solid-primary-icon group-hover:text-solid-primary-icon-hover group-active:text-solid-primary-icon-active",
    },
    {
      variant: "solid",
      color: "neutral",
      isDisabled: false,
      class:
        "text-solid-neutral-icon group-hover:text-solid-neutral-icon-hover group-active:text-solid-neutral-icon-active",
    },
    {
      variant: "solid",
      color: "success",
      isDisabled: false,
      class:
        "text-solid-success-icon group-hover:text-solid-success-icon-hover group-active:text-solid-success-icon-active",
    },
    {
      variant: "solid",
      color: "info",
      isDisabled: false,
      class:
        "text-solid-info-icon group-hover:text-solid-info-icon-hover group-active:text-solid-info-icon-active",
    },
    {
      variant: "solid",
      color: "warning",
      isDisabled: false,
      class:
        "text-solid-warning-icon group-hover:text-solid-warning-icon-hover group-active:text-solid-warning-icon-active",
    },
    {
      variant: "solid",
      color: "danger",
      isDisabled: false,
      class:
        "text-solid-danger-icon group-hover:text-solid-danger-icon-hover group-active:text-solid-danger-icon-active",
    },
    {
      variant: "solid",
      color: "help",
      isDisabled: false,
      class:
        "text-solid-help-icon group-hover:text-solid-help-icon-hover group-active:text-solid-help-icon-active",
    },

    // soft + colors
    {
      variant: "soft",
      color: "primary",
      isDisabled: false,
      class:
        "text-soft-primary-icon group-hover:text-soft-primary-icon-hover group-active:text-soft-primary-icon-active",
    },
    {
      variant: "soft",
      color: "neutral",
      isDisabled: false,
      class:
        "text-soft-neutral-icon group-hover:text-soft-neutral-icon-hover group-active:text-soft-neutral-icon-active",
    },
    {
      variant: "soft",
      color: "success",
      isDisabled: false,
      class:
        "text-soft-success-icon group-hover:text-soft-success-icon-hover group-active:text-soft-success-icon-active",
    },
    {
      variant: "soft",
      color: "info",
      isDisabled: false,
      class:
        "text-soft-info-icon group-hover:text-soft-info-icon-hover group-active:text-soft-info-icon-active",
    },
    {
      variant: "soft",
      color: "warning",
      isDisabled: false,
      class:
        "text-soft-warning-icon group-hover:text-soft-warning-icon-hover group-active:text-soft-warning-icon-active",
    },
    {
      variant: "soft",
      color: "danger",
      isDisabled: false,
      class:
        "text-soft-danger-icon group-hover:text-soft-danger-icon-hover group-active:text-soft-danger-icon-active",
    },
    {
      variant: "soft",
      color: "help",
      isDisabled: false,
      class:
        "text-soft-help-icon group-hover:text-soft-help-icon-hover group-active:text-soft-help-icon-active",
    },

    // outlined + colors
    {
      variant: "outlined",
      color: "primary",
      isDisabled: false,
      class:
        "text-outlined-primary-icon group-hover:text-outlined-primary-icon-hover group-active:text-outlined-primary-icon-active",
    },
    {
      variant: "outlined",
      color: "neutral",
      isDisabled: false,
      class:
        "text-outlined-neutral-icon group-hover:text-outlined-neutral-icon-hover group-active:text-outlined-neutral-icon-active",
    },
    {
      variant: "outlined",
      color: "success",
      isDisabled: false,
      class:
        "text-outlined-success-icon group-hover:text-outlined-success-icon-hover group-active:text-outlined-success-icon-active",
    },
    {
      variant: "outlined",
      color: "info",
      isDisabled: false,
      class:
        "text-outlined-info-icon group-hover:text-outlined-info-icon-hover group-active:text-outlined-info-icon-active",
    },
    {
      variant: "outlined",
      color: "warning",
      isDisabled: false,
      class:
        "text-outlined-warning-icon group-hover:text-outlined-warning-icon-hover group-active:text-outlined-warning-icon-active",
    },
    {
      variant: "outlined",
      color: "danger",
      isDisabled: false,
      class:
        "text-outlined-danger-icon group-hover:text-outlined-danger-icon-hover group-active:text-outlined-danger-icon-active",
    },
    {
      variant: "outlined",
      color: "help",
      isDisabled: false,
      class:
        "text-outlined-help-icon group-hover:text-outlined-help-icon-hover group-active:text-outlined-help-icon-active",
    },

    // ghost + colors
    {
      variant: "ghost",
      color: "primary",
      isDisabled: false,
      class:
        "text-ghost-primary-icon group-hover:text-ghost-primary-icon-hover group-active:text-ghost-primary-icon-active",
    },
    {
      variant: "ghost",
      color: "neutral",
      isDisabled: false,
      class:
        "text-ghost-neutral-icon group-hover:text-ghost-neutral-icon-hover group-active:text-ghost-neutral-icon-active",
    },
    {
      variant: "ghost",
      color: "success",
      isDisabled: false,
      class:
        "text-ghost-success-icon group-hover:text-ghost-success-icon-hover group-active:text-ghost-success-icon-active",
    },
    {
      variant: "ghost",
      color: "info",
      isDisabled: false,
      class:
        "text-ghost-info-icon group-hover:text-ghost-info-icon-hover group-active:text-ghost-info-icon-active",
    },
    {
      variant: "ghost",
      color: "warning",
      isDisabled: false,
      class:
        "text-ghost-warning-icon group-hover:text-ghost-warning-icon-hover group-active:text-ghost-warning-icon-active",
    },
    {
      variant: "ghost",
      color: "danger",
      isDisabled: false,
      class:
        "text-ghost-danger-icon group-hover:text-ghost-danger-icon-hover group-active:text-ghost-danger-icon-active",
    },
    {
      variant: "ghost",
      color: "help",
      isDisabled: false,
      class:
        "text-ghost-help-icon group-hover:text-ghost-help-icon-hover group-active:text-ghost-help-icon-active",
    },

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

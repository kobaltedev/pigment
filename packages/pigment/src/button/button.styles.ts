import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
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
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
    },
  }
);

export const buttonIconVariants = cva("reset-svg shrink-0", {
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
      warning: "",
      danger: "",
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
        "text-solid-primary-icon hover:text-solid-primary-icon-hover active:text-solid-primary-icon-active",
    },
    {
      variant: "solid",
      color: "neutral",
      isDisabled: false,
      class:
        "text-solid-neutral-icon hover:text-solid-neutral-icon-hover active:text-solid-neutral-icon-active",
    },
    {
      variant: "solid",
      color: "warning",
      isDisabled: false,
      class:
        "text-solid-warning-icon hover:text-solid-warning-icon-hover active:text-solid-warning-icon-active",
    },
    {
      variant: "solid",
      color: "danger",
      isDisabled: false,
      class:
        "text-solid-danger-icon hover:text-solid-danger-icon-hover active:text-solid-danger-icon-active",
    },

    // soft + colors
    {
      variant: "soft",
      color: "primary",
      isDisabled: false,
      class:
        "text-soft-primary-icon hover:text-soft-primary-icon-hover active:text-soft-primary-icon-active",
    },
    {
      variant: "soft",
      color: "neutral",
      isDisabled: false,
      class:
        "text-soft-neutral-icon hover:text-soft-neutral-icon-hover active:text-soft-neutral-icon-active",
    },
    {
      variant: "soft",
      color: "warning",
      isDisabled: false,
      class:
        "text-soft-warning-icon hover:text-soft-warning-icon-hover active:text-soft-warning-icon-active",
    },
    {
      variant: "soft",
      color: "danger",
      isDisabled: false,
      class:
        "text-soft-danger-icon hover:text-soft-danger-icon-hover active:text-soft-danger-icon-active",
    },

    // outlined + colors
    {
      variant: "outlined",
      color: "primary",
      isDisabled: false,
      class:
        "text-outlined-primary-icon hover:text-outlined-primary-icon-hover active:text-outlined-primary-icon-active",
    },
    {
      variant: "outlined",
      color: "neutral",
      isDisabled: false,
      class:
        "text-outlined-neutral-icon hover:text-outlined-neutral-icon-hover active:text-outlined-neutral-icon-active",
    },
    {
      variant: "outlined",
      color: "warning",
      isDisabled: false,
      class:
        "text-outlined-warning-icon hover:text-outlined-warning-icon-hover active:text-outlined-warning-icon-active",
    },
    {
      variant: "outlined",
      color: "danger",
      isDisabled: false,
      class:
        "text-outlined-danger-icon hover:text-outlined-danger-icon-hover active:text-outlined-danger-icon-active",
    },

    // ghost + colors
    {
      variant: "ghost",
      color: "primary",
      isDisabled: false,
      class:
        "text-ghost-primary-icon hover:text-ghost-primary-icon-hover active:text-ghost-primary-icon-active",
    },
    {
      variant: "ghost",
      color: "neutral",
      isDisabled: false,
      class:
        "text-ghost-neutral-icon hover:text-ghost-neutral-icon-hover active:text-ghost-neutral-icon-active",
    },
    {
      variant: "ghost",
      color: "warning",
      isDisabled: false,
      class:
        "text-ghost-warning-icon hover:text-ghost-warning-icon-hover active:text-ghost-warning-icon-active",
    },
    {
      variant: "ghost",
      color: "danger",
      isDisabled: false,
      class:
        "text-ghost-danger-icon hover:text-ghost-danger-icon-hover active:text-ghost-danger-icon-active",
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
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "sm",
    isIconOnly: false,
    isDisabled: false,
  },
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
  defaultVariants: {
    size: "sm",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

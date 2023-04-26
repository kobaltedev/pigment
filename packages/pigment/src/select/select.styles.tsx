import { tv, VariantProps } from "tailwind-variants";

export const selectStyles = tv({
  slots: {
    root: "group flex flex-col",
    trigger: [
      "appearance-none flex items-center grow rounded-input border border-solid transition-colors",
      "outline-none focus:border-ring",
    ],
    icon: [
      "reset-svg flex justify-center items-center grow-0 shrink-0",
      "leading-none",
      "bg-transparent border-transparent",
    ],
    value: "inline-flex justify-start items-center grow shrink",
    label: "grow-0 font-medium text-content-subtle ui-group-disabled:text-content-disabled",
    supportText: "grow-0 ui-group-disabled:text-content-disabled",
    errorIcon: "reset-svg",
    dropdown: "bg-surface-overlay border border-solid shadow-overlay rounded-overlay z-30",
    listbox: "flex flex-col outline-none max-h-96 overflow-y-auto",
    optionGroup: "shrink-0 text-content-subtlest font-medium",
    option: [
      "group flex shrink-0 justify-between items-center rounded-overlay select-none outline-none ui-not-disabled:cursor-pointer",
      "bg-transparent ui-highlighted:bg-surface-highlighted-hover ui-highlighted:active:bg-surface-highlighted-active",
      "ui-selected:text-accent-soft-content ui-selected:ui-highlighted:text-accent-soft-content-hover ui-selected:ui-highlighted:active:text-accent-soft-content-active",
      "ui-selected:bg-accent-soft-surface ui-selected:ui-highlighted:bg-accent-soft-surface-hover ui-selected:ui-highlighted:active:bg-accent-soft-surface-active",
      "ui-selected:font-medium",
      "ui-disabled:text-content-disabled",
    ],
    optionIndicator:
      "reset-svg flex justify-center items-center shrink-0 leading-none pointer-events-none",
  },
  variants: {
    variant: {
      soft: {
        trigger:
          "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
        dropdown: "border-input-soft-line",
      },
      outlined: {
        trigger: "bg-transparent",
        dropdown: "border-input-outlined-line",
      },
    },
    size: {
      xs: {
        trigger: "h-6 text-xs",
        icon: "pr-1.5 text-xs",
        label: "mb-0.5 text-xs",
        supportText: "mt-1 text-xs",
        listbox: "p-1 gap-y-1 text-xs",
        optionGroup: "px-1.5 [&:not(:first-child)]:pt-1.5 -mb-px text-xs",
        option: "h-6 px-1.5 gap-x-1.5",
        optionIndicator: "text-xs",
      },
      sm: {
        trigger: "h-8 text-sm",
        icon: "pr-2 text-sm",
        label: "mb-0.5 text-xs",
        supportText: "mt-1 text-xs",
        listbox: "p-1 gap-y-1 text-sm",
        optionGroup: "px-2 [&:not(:first-child)]:pt-2 -mb-px text-xs",
        option: "h-8 px-2 gap-x-2",
        optionIndicator: "text-sm",
      },
      md: {
        trigger: "h-10 text-base",
        icon: "pr-2.5 text-base",
        label: "mb-1 text-sm",
        supportText: "mt-1.5 text-sm",
        listbox: "p-1.5 gap-y-1.5 text-base",
        optionGroup: "px-2.5 [&:not(:first-child)]:pt-2.5 -mb-0.5 text-sm",
        option: "h-10 px-2.5 gap-x-2.5",
        optionIndicator: "text-base",
      },
      lg: {
        trigger: "h-12 text-lg",
        icon: "pr-3 text-lg",
        label: "mb-1.5 text-base",
        supportText: "mt-2 text-base",
        listbox: "p-2 gap-y-2 text-lg",
        optionGroup: "px-3 [&:not(:first-child)]:pt-3 -mb-1 text-base",
        option: "h-12 px-3 gap-x-3",
        optionIndicator: "text-lg",
      },
      xl: {
        trigger: "h-14 text-xl",
        icon: "pr-3.5 text-xl",
        label: "mb-2 text-lg",
        supportText: "mt-2.5 text-lg",
        listbox: "p-2.5 gap-y-2.5 text-xl",
        optionGroup: "px-3.5 [&:not(:first-child)]:pt-3.5 -mb-1 text-lg",
        option: "h-14 px-3.5 gap-x-3.5",
        optionIndicator: "text-xl",
      },
    },
    withDropdownIcon: {
      true: {
        trigger: "pr-0",
      },
      false: {},
    },
    withLeftDecorator: {
      true: {
        trigger: "pl-0",
      },
      false: {},
    },
    withRightDecorator: {
      true: {
        icon: "pl-0",
      },
      false: {},
    },
    invalid: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        trigger:
          "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
        icon: "ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
      },
      false: {
        icon: "cursor-pointer",
        value: "data-placeholder-shown:text-content-subtlest",
      },
    },
  },
  compoundVariants: [
    // variant + color
    {
      variant: "soft",
      invalid: false,
      disabled: false,
      class: {
        trigger: [
          "text-input-soft-content hover:text-input-soft-content-hover active:text-input-soft-content-active",
          "border-input-soft-line hover:border-input-soft-line-hover active:border-input-soft-line-active",
        ],
      },
    },
    {
      variant: "outlined",
      invalid: false,
      disabled: false,
      class: {
        trigger: [
          "text-input-outlined-content",
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
        ],
      },
    },

    // variant + invalid
    {
      invalid: true,
      disabled: false,
      class: {
        trigger: "text-content-danger border-solid-danger-line",
      },
    },

    // variant + disabled
    {
      variant: "soft",
      disabled: true,
      class: {
        trigger: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
    },
    {
      variant: "outlined",
      disabled: true,
      class: {
        trigger: "ui-disabled:border-line-disabled",
      },
    },

    // size + no left decorator
    { size: "xs", withLeftDecorator: false, class: { trigger: "pl-1.5" } },
    { size: "sm", withLeftDecorator: false, class: { trigger: "pl-2" } },
    { size: "md", withLeftDecorator: false, class: { trigger: "pl-2.5" } },
    { size: "lg", withLeftDecorator: false, class: { trigger: "pl-3" } },
    { size: "xl", withLeftDecorator: false, class: { trigger: "pl-3.5" } },

    // size + no right decorator + no dropdown icon
    {
      size: "xs",
      withRightDecorator: false,
      withDropdownIcon: false,
      class: {
        trigger: "pr-1.5",
      },
    },
    {
      size: "sm",
      withRightDecorator: false,
      withDropdownIcon: false,
      class: {
        trigger: "pr-2",
      },
    },
    {
      size: "md",
      withRightDecorator: false,
      withDropdownIcon: false,
      class: {
        trigger: "pr-2.5",
      },
    },
    {
      size: "lg",
      withRightDecorator: false,
      withDropdownIcon: false,
      class: {
        trigger: "pr-3",
      },
    },
    {
      size: "xl",
      withRightDecorator: false,
      withDropdownIcon: false,
      class: {
        trigger: "pr-3.5",
      },
    },

    // size + no right decorator
    { size: "xs", withRightDecorator: false, class: { icon: "pl-1.5" } },
    { size: "sm", withRightDecorator: false, class: { icon: "pl-2" } },
    { size: "md", withRightDecorator: false, class: { icon: "pl-2.5" } },
    { size: "lg", withRightDecorator: false, class: { icon: "pl-3" } },
    { size: "xl", withRightDecorator: false, class: { icon: "pl-3.5" } },
  ],
});

export type SelectVariants = VariantProps<typeof selectStyles>;

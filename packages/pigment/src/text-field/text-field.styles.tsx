import { tv, VariantProps } from "tailwind-variants";

export const textFieldStyles = tv({
  slots: {
    root: "group flex flex-col",
    control: "flex items-center grow rounded-input border border-solid transition-colors",
    input: [
      "appearance-none grow h-full m-0 py-0",
      "border-none bg-transparent text-current",
      "outline-none",
      "ui-disabled:placeholder:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
    ],
    textArea: [
      "appearance-none grow h-full m-0 resize rounded-textarea",
      "border border-solid transition-colors",
      "outline-none focus-visible:border-ring",
    ],
    label: "grow-0 font-medium text-content-subtle ui-group-disabled:text-content-disabled",
    supportText: "grow-0 ui-group-disabled:text-content-disabled",
    errorIcon: "reset-svg",
  },
  variants: {
    variant: {
      soft: {
        control:
          "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
        textArea:
          "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
      },
      outlined: {
        control: "bg-transparent",
        textArea: "bg-transparent",
      },
    },
    size: {
      xs: {
        control: "h-6 text-xs",
        textArea: "p-1.5 text-xs",
        label: "mb-0.5 text-xs",
        supportText: "mt-1 text-xs",
      },
      sm: {
        control: "h-8 text-sm",
        textArea: "p-2 text-sm",
        label: "mb-0.5 text-xs",
        supportText: "mt-1 text-xs",
      },
      md: {
        control: "h-10 text-base",
        textArea: "p-2.5 text-base",
        label: "mb-1 text-sm",
        supportText: "mt-1.5 text-sm",
      },
      lg: {
        control: "h-12 text-lg",
        textArea: "p-3 text-lg",
        label: "mb-1.5 text-base",
        supportText: "mt-2 text-base",
      },
      xl: {
        control: "h-14 text-xl",
        textArea: "p-3.5 text-xl",
        label: "mb-2 text-lg",
        supportText: "mt-2.5 text-lg",
      },
    },
    withLeftDecorator: {
      true: {
        input: "pl-0",
      },
      false: {},
    },
    withRightDecorator: {
      true: {
        input: "pr-0",
      },
      false: {},
    },
    focused: {
      true: {},
      false: {},
    },
    invalid: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        control: "ui-group-disabled:text-content-disabled",
        textArea:
          "ui-disabled:placeholder:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
      false: {
        input: "placeholder:text-content-subtlest",
        textArea: "placeholder:text-content-subtlest",
      },
    },
  },
  compoundVariants: [
    // variant + text
    {
      variant: "soft",
      invalid: false,
      disabled: false,
      class: {
        control:
          "text-input-soft-content hover:text-input-soft-content-hover active:text-input-soft-content-active",
        textArea: [
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
        control: "text-input-outlined-content",
        textArea: [
          "text-input-outlined-content",
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
        ],
      },
    },

    // variant + border
    {
      variant: "soft",
      focused: false,
      invalid: false,
      disabled: false,
      class: {
        control:
          "border-input-soft-line hover:border-input-soft-line-hover active:border-input-soft-line-active",
      },
    },
    {
      variant: "outlined",
      focused: false,
      invalid: false,
      disabled: false,
      class: {
        control:
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
      },
    },

    // variant + border + focused
    {
      focused: true,
      invalid: false,
      disabled: false,
      class: { control: "border-ring" },
    },

    // variant + invalid color
    {
      invalid: true,
      disabled: false,
      class: {
        control: "text-content-danger border-solid-danger-line",
        textArea: "text-content-danger border-solid-danger-line",
      },
    },

    // variant + disabled
    {
      variant: "soft",
      disabled: true,
      class: {
        control: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-transparent",
        textArea: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-transparent",
      },
    },
    {
      variant: "outlined",
      disabled: true,
      class: {
        control: "ui-group-disabled:border-line-disabled",
        textArea: "ui-group-disabled:border-line-disabled",
      },
    },

    // size + no left decorator
    { size: "xs", withLeftDecorator: false, class: { input: "pl-1.5" } },
    { size: "sm", withLeftDecorator: false, class: { input: "pl-2" } },
    { size: "md", withLeftDecorator: false, class: { input: "pl-2.5" } },
    { size: "lg", withLeftDecorator: false, class: { input: "pl-3" } },
    { size: "xl", withLeftDecorator: false, class: { input: "pl-3.5" } },

    // size + no right decorator
    { size: "xs", withRightDecorator: false, class: { input: "pr-1.5" } },
    { size: "sm", withRightDecorator: false, class: { input: "pr-2" } },
    { size: "md", withRightDecorator: false, class: { input: "pr-2.5" } },
    { size: "lg", withRightDecorator: false, class: { input: "pr-3" } },
    { size: "xl", withRightDecorator: false, class: { input: "pr-3.5" } },
  ],
});

export type TextFieldVariants = VariantProps<typeof textFieldStyles>;

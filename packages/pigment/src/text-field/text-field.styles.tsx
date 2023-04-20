import { cva, VariantProps } from "class-variance-authority";

export const textFieldControlVariants = cva(
  "flex items-center grow rounded-input border border-solid transition-colors",
  {
    variants: {
      variant: {
        soft: "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
        outlined: "bg-transparent",
      },
      size: {
        xs: "h-6 text-xs",
        sm: "h-8 text-sm",
        md: "h-10 text-base",
        lg: "h-12 text-lg",
        xl: "h-14 text-xl",
      },
      isFocused: {
        true: "",
        false: "",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-group-disabled:text-content-disabled",
        false: "",
      },
    },
    compoundVariants: [
      // variant + text
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-input-soft-content hover:text-input-soft-content-hover active:text-input-soft-content-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class: "text-input-outlined-content",
      },

      // variant + border
      {
        variant: "soft",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-input-soft-line hover:border-input-soft-line-hover active:border-input-soft-line-active",
      },
      {
        variant: "outlined",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
      },

      // variant + border + focused
      {
        isFocused: true,
        isInvalid: false,
        isDisabled: false,
        class: "border-ring",
      },

      // variant + invalid color
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-content-danger border-solid-danger-line",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:border-line-disabled",
      },
    ],
  }
);

export const textFieldInputVariants = cva(
  [
    "appearance-none grow h-full m-0 py-0",
    "border-none bg-transparent text-current",
    "outline-none",
    "ui-disabled:placeholder:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
  ],
  {
    variants: {
      variant: {
        soft: "",
        outlined: "",
      },
      size: {
        xs: "",
        sm: "",
        md: "",
        lg: "",
        xl: "",
      },
      hasLeftDecorator: {
        true: "pl-0",
        false: "",
      },
      hasRightDecorator: {
        true: "pr-0",
        false: "",
      },
      isDisabled: {
        true: "",
        false: "placeholder:text-content-subtlest",
      },
    },
    compoundVariants: [
      // size + no left decorator
      { size: "xs", hasLeftDecorator: false, class: "pl-1.5" },
      { size: "sm", hasLeftDecorator: false, class: "pl-2" },
      { size: "md", hasLeftDecorator: false, class: "pl-2.5" },
      { size: "lg", hasLeftDecorator: false, class: "pl-3" },
      { size: "xl", hasLeftDecorator: false, class: "pl-3.5" },

      // size + no right decorator
      { size: "xs", hasRightDecorator: false, class: "pr-1.5" },
      { size: "sm", hasRightDecorator: false, class: "pr-2" },
      { size: "md", hasRightDecorator: false, class: "pr-2.5" },
      { size: "lg", hasRightDecorator: false, class: "pr-3" },
      { size: "xl", hasRightDecorator: false, class: "pr-3.5" },
    ],
  }
);

export const textFieldTextAreaVariants = cva(
  [
    "appearance-none grow h-full m-0 resize rounded-textarea",
    "border border-solid transition-colors",
    "outline-none focus-visible:border-ring",
  ],
  {
    variants: {
      variant: {
        soft: "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
        outlined: "bg-transparent",
      },
      size: {
        xs: "p-1.5 text-xs",
        sm: "p-2 text-sm",
        md: "p-2.5 text-base",
        lg: "p-3 text-lg",
        xl: "p-3.5 text-xl",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-disabled:placeholder:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
        false: "placeholder:text-content-subtlest",
      },
    },
    compoundVariants: [
      // variant + color
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-input-soft-content hover:text-input-soft-content-hover active:text-input-soft-content-active",
          "border-input-soft-line hover:border-input-soft-line-hover active:border-input-soft-line-active",
        ],
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-input-outlined-content",
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
        ],
      },

      // variant + invalid
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-content-danger border-solid-danger-line",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:border-line-disabled",
      },
    ],
  }
);

export const textFieldLabelVariants = cva(
  "grow-0 font-medium text-content-subtle ui-group-disabled:text-content-disabled",
  {
    variants: {
      size: {
        xs: "mb-0.5 text-xs",
        sm: "mb-0.5 text-xs",
        md: "mb-1 text-sm",
        lg: "mb-1.5 text-base",
        xl: "mb-2 text-lg",
      },
    },
  }
);

export const textFieldSupportTextVariants = cva("grow-0 ui-group-disabled:text-content-disabled", {
  variants: {
    size: {
      xs: "mt-1 text-xs",
      sm: "mt-1 text-xs",
      md: "mt-1.5 text-sm",
      lg: "mt-2 text-base",
      xl: "mt-2.5 text-lg",
    },
  },
});

export type TextFieldControlVariants = VariantProps<typeof textFieldControlVariants>;

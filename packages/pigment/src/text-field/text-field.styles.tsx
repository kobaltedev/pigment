import { cva, VariantProps } from "class-variance-authority";

export const textFieldControlVariants = cva(
  "flex items-center grow border border-solid transition-colors",
  {
    variants: {
      variant: {
        soft: "bg-soft-input-surface hover:bg-soft-input-surface-hover active:bg-soft-input-surface-active",
        outlined:
          "bg-outlined-input-surface hover:bg-outlined-input-surface-hover active:bg-outlined-input-surface-active",
      },
      size: {
        sm: "h-7 rounded text-xs",
        md: "h-9 rounded-md text-sm",
        lg: "h-11 rounded-md text-base",
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
      // variant + text colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-soft-input-content hover:text-soft-input-content-hover active:text-soft-input-content-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-outlined-input-content hover:text-outlined-input-content-hover active:text-outlined-input-content-active",
      },

      // variant + border colors
      {
        variant: "soft",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-soft-input-line hover:border-soft-input-line-hover active:border-soft-input-line-active",
      },
      {
        variant: "outlined",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-outlined-input-line hover:border-outlined-input-line-hover active:border-outlined-input-line-active",
      },

      // all variants + focus colors
      {
        isFocused: true,
        isInvalid: false,
        isDisabled: false,
        class: "border-focus-ring",
      },

      // all variants + invalid colors
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
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-line-disabled",
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
        sm: "",
        md: "",
        lg: "",
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
        false: "",
      },
    },
    compoundVariants: [
      // variant + not disabled
      {
        variant: "soft",
        isDisabled: false,
        class: "placeholder:text-content-subtler",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-content-subtlest",
      },

      // size + no left decorator
      { size: "sm", hasLeftDecorator: false, class: "pl-2" },
      { size: "md", hasLeftDecorator: false, class: "pl-3" },
      { size: "lg", hasLeftDecorator: false, class: "pl-4" },

      // size + no right decorator
      { size: "sm", hasRightDecorator: false, class: "pr-2" },
      { size: "md", hasRightDecorator: false, class: "pr-3" },
      { size: "lg", hasRightDecorator: false, class: "pr-4" },
    ],
  }
);

export const textFieldTextAreaVariants = cva(
  [
    "appearance-none grow h-full m-0 resize",
    "border border-solid transition-colors",
    "outline-none focus-visible:border-focus-ring",
  ],
  {
    variants: {
      variant: {
        soft: "bg-soft-input-surface hover:bg-soft-input-surface-hover active:bg-soft-input-surface-active",
        outlined:
          "bg-outlined-input-surface hover:bg-outlined-input-surface-hover active:bg-outlined-input-surface-active",
      },
      size: {
        sm: "p-2 rounded text-xs",
        md: "p-3 rounded-md text-sm",
        lg: "p-4 rounded-md text-base",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-disabled:placeholder:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
        false: "",
      },
    },
    compoundVariants: [
      // variant + text colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-soft-input-content hover:text-soft-input-content-hover active:text-soft-input-content-active",
          "border-soft-input-line hover:border-soft-input-line-hover active:border-soft-input-line-active",
        ],
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-outlined-input-content hover:text-outlined-input-content-hover active:text-outlined-input-content-active",
          "border-outlined-input-line hover:border-outlined-input-line-hover active:border-outlined-input-line-active",
        ],
      },

      // all variants + invalid colors
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
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-line-disabled",
      },

      // variant + not disabled
      {
        variant: "soft",
        isDisabled: false,
        class: "placeholder:text-content-subtler",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-content-subtlest",
      },
    ],
  }
);

export const textFieldLabelVariants = cva(
  "grow-0 font-medium text-content-subtle ui-group-disabled:text-content-disabled",
  {
    variants: {
      size: {
        sm: "mb-0.5 text-xs",
        md: "mb-1 text-sm",
        lg: "mb-1.5 text-base",
      },
    },
  }
);

export const textFieldSupportTextVariants = cva("grow-0 ui-group-disabled:text-content-disabled", {
  variants: {
    size: {
      sm: "mt-1 text-xs",
      md: "mt-1.5 text-sm",
      lg: "mt-2 text-base",
    },
  },
});

export type TextFieldControlVariants = VariantProps<typeof textFieldControlVariants>;

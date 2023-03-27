import { cva, VariantProps } from "class-variance-authority";

export const textFieldControlVariants = cva(
  "flex items-center grow border border-solid transition-colors",
  {
    variants: {
      variant: {
        soft: "bg-soft-input-bg hover:bg-soft-input-bg-hover active:bg-soft-input-bg-active",
        outlined:
          "bg-outlined-input-bg hover:bg-outlined-input-bg-hover active:bg-outlined-input-bg-active",
      },
      size: {
        sm: "h-9 rounded-md text-sm",
        md: "h-11 rounded-md text-base",
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
        true: "ui-group-disabled:text-disabled-text",
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
          "text-soft-input-text hover:text-soft-input-text-hover active:text-soft-input-text-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-outlined-input-text hover:text-outlined-input-text-hover active:text-outlined-input-text-active",
      },

      // variant + border colors
      {
        variant: "soft",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-soft-input-border hover:border-soft-input-border-hover active:border-soft-input-border-active",
      },
      {
        variant: "outlined",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "border-outlined-input-border hover:border-outlined-input-border-hover active:border-outlined-input-border-active",
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
        class: "text-text-danger border-solid-danger-border",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-group-disabled:bg-disabled-bg ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-disabled-border",
      },

      // variant + not disabled
      {
        variant: "soft",
        isDisabled: false,
        class: "placeholder:text-text-subtler",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-text-subtlest",
      },
    ],
  }
);

export const textFieldInputVariants = cva(
  [
    "appearance-none grow h-full m-0 py-0",
    "border-none bg-transparent text-current",
    "outline-none",
    "ui-disabled:placeholder:text-disabled-text ui-disabled:cursor-not-allowed ui-disabled:select-none",
  ],
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
      },
      hasLeftDecorator: {
        true: "pl-0",
        false: "",
      },
      hasRightDecorator: {
        true: "pr-0",
        false: "",
      },
    },
    compoundVariants: [
      // size + no left decorator
      { size: "sm", hasLeftDecorator: false, class: "pl-2.5" },
      { size: "md", hasLeftDecorator: false, class: "pl-3.5" },

      // size + no right decorator
      { size: "sm", hasRightDecorator: false, class: "pr-2.5" },
      { size: "md", hasRightDecorator: false, class: "pr-3.5" },
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
        soft: "bg-soft-input-bg hover:bg-soft-input-bg-hover active:bg-soft-input-bg-active",
        outlined:
          "bg-outlined-input-bg hover:bg-outlined-input-bg-hover active:bg-outlined-input-bg-active",
      },
      size: {
        sm: "px-2.5 py-2.5 rounded-md text-sm",
        md: "px-3.5 py-3.5 rounded-md text-base",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-disabled:placeholder:text-disabled-text ui-disabled:cursor-not-allowed ui-disabled:select-none",
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
          "text-soft-input-text hover:text-soft-input-text-hover active:text-soft-input-text-active",
          "border-soft-input-border hover:border-soft-input-border-hover active:border-soft-input-border-active",
        ],
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-outlined-input-text hover:text-outlined-input-text-hover active:text-outlined-input-text-active",
          "border-outlined-input-border hover:border-outlined-input-border-hover active:border-outlined-input-border-active",
        ],
      },

      // all variants + invalid colors
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-text-danger border-solid-danger-border",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-group-disabled:bg-disabled-bg ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-disabled-border",
      },

      // variant + not disabled
      {
        variant: "soft",
        isDisabled: false,
        class: "placeholder:text-text-subtler",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-text-subtlest",
      },
    ],
  }
);

export const textFieldLabelVariants = cva(
  "grow-0 font-medium text-text-subtle ui-group-disabled:text-disabled-text",
  {
    variants: {
      size: {
        sm: "mb-1 text-sm",
        md: "mb-1.5 text-base",
      },
    },
  }
);

export const textFieldSupportTextVariants = cva("grow-0 ui-group-disabled:text-disabled-text", {
  variants: {
    size: {
      sm: "mt-1.5 text-xs",
      md: "mt-2 text-sm",
    },
  },
});

export type TextFieldControlVariants = VariantProps<typeof textFieldControlVariants>;

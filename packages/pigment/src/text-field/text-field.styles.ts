import { cva, VariantProps } from "class-variance-authority";

export const textFieldWrapperVariants = cva(
  "flex items-center grow border border-solid transition-colors",
  {
    variants: {
      variant: {
        soft: "bg-soft-input-bg hover:bg-soft-input-bg-hover active:bg-soft-input-bg-active",
        outlined:
          "bg-outlined-input-bg hover:bg-outlined-input-bg-hover active:bg-outlined-input-bg-active",
      },
      size: {
        xs: "h-7 rounded text-sm",
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
        class: "placeholder:text-text-subtlest",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-text-dimmed",
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
        xs: "text-sm",
        sm: "text-sm",
        md: "text-base",
      },
      hasLeftIcon: {
        true: "",
        false: "",
      },
      hasRightIcon: {
        true: "",
        false: "",
      },
      hasLeftSection: {
        true: "",
        false: "",
      },
      hasRightSection: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // any size + no icon + section
      { hasLeftIcon: false, hasLeftSection: true, class: "pl-0" },
      { hasRightIcon: false, hasRightSection: true, class: "pr-0" },

      // size + no prefix
      { size: "xs", hasLeftIcon: false, hasLeftSection: false, class: "pl-2" },
      { size: "sm", hasLeftIcon: false, hasLeftSection: false, class: "pl-2.5" },
      { size: "md", hasLeftIcon: false, hasLeftSection: false, class: "pl-3.5" },

      // size + no suffix
      { size: "xs", hasRightIcon: false, hasRightSection: false, class: "pr-2" },
      { size: "sm", hasRightIcon: false, hasRightSection: false, class: "pr-2.5" },
      { size: "md", hasRightIcon: false, hasRightSection: false, class: "pr-3.5" },

      // size + left icon
      { size: "xs", hasLeftIcon: true, class: "pl-7" },
      { size: "sm", hasLeftIcon: true, class: "pl-9" },
      { size: "md", hasLeftIcon: true, class: "pl-11" },

      // size + right icon
      { size: "xs", hasRightIcon: true, class: "pr-7" },
      { size: "sm", hasRightIcon: true, class: "pr-9" },
      { size: "md", hasRightIcon: true, class: "pr-11" },
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
        xs: "px-2 py-2 rounded text-sm",
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
        class: "placeholder:text-text-subtlest",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:text-text-dimmed",
      },
    ],
  }
);

export const textFieldIconVariants = cva(
  [
    "reset-svg absolute top-0 bottom-0 flex justify-center items-center shrink-0",
    "leading-none pointer-events-none",
    "bg-transparent bg-border-transparent",
  ],
  {
    variants: {
      variant: {
        soft: "",
        outlined: "",
      },
      size: {
        xs: "h-7 w-7 text-base",
        sm: "h-9 w-9 text-base",
        md: "h-11 w-11 text-lg",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "text-disabled-icon",
      },
    },
    compoundVariants: [
      // variant + colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-soft-input-icon hover:text-soft-input-icon-hover active:text-soft-input-icon-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-outlined-input-icon hover:text-outlined-input-icon-hover active:text-outlined-input-icon-active",
      },

      // invalid color
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-icon-danger",
      },
    ],
  }
);

export type TextFieldWrapperVariants = VariantProps<typeof textFieldWrapperVariants>;

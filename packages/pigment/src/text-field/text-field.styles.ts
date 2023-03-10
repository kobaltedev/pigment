import { cva, VariantProps } from "class-variance-authority";

export const textFieldWrapperVariants = cva(
  "pg-flex pg-items-center pg-grow pg-border pg-border-solid pg-transition-colors",
  {
    variants: {
      variant: {
        soft: "pg-bg-soft-input-bg hover:pg-bg-soft-input-bg-hover active:pg-bg-soft-input-bg-active",
        outlined:
          "pg-bg-outlined-input-bg hover:pg-bg-outlined-input-bg-hover active:pg-bg-outlined-input-bg-active",
      },
      size: {
        xs: "pg-h-7 pg-rounded pg-text-sm",
        sm: "pg-h-9 pg-rounded-md pg-text-sm",
        md: "pg-h-11 pg-rounded-md pg-text-base",
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
        true: "pg-group-disabled:pg-text-disabled-text",
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
          "pg-text-soft-input-text hover:pg-text-soft-input-text-hover active:pg-text-soft-input-text-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-text-outlined-input-text hover:pg-text-outlined-input-text-hover active:pg-text-outlined-input-text-active",
      },

      // variant + border colors
      {
        variant: "soft",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-border-soft-input-border hover:pg-border-soft-input-border-hover active:pg-border-soft-input-border-active",
      },
      {
        variant: "outlined",
        isFocused: false,
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-border-outlined-input-border hover:pg-border-outlined-input-border-hover active:pg-border-outlined-input-border-active",
      },

      // all variants + focus colors
      {
        isFocused: true,
        isInvalid: false,
        isDisabled: false,
        class: "pg-border-focus-ring",
      },

      // all variants + invalid colors
      {
        isInvalid: true,
        isDisabled: false,
        class: [
          "pg-text-text-danger",
          "pg-border-solid-danger-border hover:pg-border-solid-danger-border-hover active:pg-border-solid-danger-border-active",
        ],
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "pg-group-disabled:pg-bg-disabled-bg pg-group-disabled:pg-border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "pg-group-disabled:pg-bg-transparent pg-group-disabled:pg-border-disabled-border",
      },

      // variant + not disabled
      {
        variant: "soft",
        isDisabled: false,
        class: "placeholder:pg-text-text-subtlest",
      },
      {
        variant: "outlined",
        isDisabled: false,
        class: "placeholder:pg-text-text-dimmed",
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
      isFocused: false,
      isInvalid: false,
      isDisabled: false,
    },
  }
);

export const textFieldInputVariants = cva(
  [
    "pg-appearance-none pg-grow pg-h-full pg-m-0 pg-py-0",
    "pg-border-none pg-bg-transparent pg-text-current",
    "pg-outline-none",
    "pg-disabled:placeholder:pg-text-disabled-text pg-disabled:pg-cursor-not-allowed pg-disabled:pg-select-none",
  ],
  {
    variants: {
      size: {
        xs: "pg-text-sm",
        sm: "pg-text-sm",
        md: "pg-text-base",
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
      { hasLeftIcon: false, hasLeftSection: true, class: "pg-pl-0" },
      { hasRightIcon: false, hasRightSection: true, class: "pg-pr-0" },

      // size + no prefix
      { size: "xs", hasLeftIcon: false, hasLeftSection: false, class: "pg-pl-2" },
      { size: "sm", hasLeftIcon: false, hasLeftSection: false, class: "pg-pl-2.5" },
      { size: "md", hasLeftIcon: false, hasLeftSection: false, class: "pg-pl-3.5" },

      // size + no suffix
      { size: "xs", hasRightIcon: false, hasRightSection: false, class: "pg-pr-2" },
      { size: "sm", hasRightIcon: false, hasRightSection: false, class: "pg-pr-2.5" },
      { size: "md", hasRightIcon: false, hasRightSection: false, class: "pg-pr-3.5" },

      // size + left icon
      { size: "xs", hasLeftIcon: true, class: "pg-pl-7" },
      { size: "sm", hasLeftIcon: true, class: "pg-pl-9" },
      { size: "md", hasLeftIcon: true, class: "pg-pl-11" },

      // size + right icon
      { size: "xs", hasRightIcon: true, class: "pg-pr-7" },
      { size: "sm", hasRightIcon: true, class: "pg-pr-9" },
      { size: "md", hasRightIcon: true, class: "pg-pr-11" },
    ],
    defaultVariants: {
      size: "sm",
      hasLeftIcon: false,
      hasRightIcon: false,
      hasLeftSection: false,
      hasRightSection: false,
    },
  }
);

export const textFieldIconVariants = cva(
  [
    "pg-reset-svg pg-absolute pg-top-0 pg-bottom-0 pg-flex pg-justify-center pg-items-center pg-shrink-0",
    "pg-leading-none pg-pointer-events-none",
    "pg-bg-transparent bg-border-transparent",
  ],
  {
    variants: {
      variant: {
        soft: "",
        outlined: "",
      },
      size: {
        xs: "pg-h-7 pg-w-7 pg-text-base",
        sm: "pg-h-9 pg-w-9 pg-text-base",
        md: "pg-h-11 pg-w-11 pg-text-lg",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "pg-text-disabled-icon",
      },
    },
    compoundVariants: [
      // variant + colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-text-soft-input-icon hover:pg-text-soft-input-icon-hover active:pg-text-soft-input-icon-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-text-outlined-input-icon hover:pg-text-outlined-input-icon-hover active:pg-text-outlined-input-icon-active",
      },

      // invalid color
      {
        isInvalid: true,
        isDisabled: false,
        class: "pg-text-icon-danger",
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
    },
  }
);

export type TextFieldWrapperVariants = VariantProps<typeof textFieldWrapperVariants>;

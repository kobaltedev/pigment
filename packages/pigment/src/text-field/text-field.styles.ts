import { cva, VariantProps } from "class-variance-authority";

export const textFieldInputVariants = cva(
  [
    "pg-appearance-none pg-grow pg-m-0 pg-outline-none",
    "pg-border pg-border-solid pg-transition-colors",
  ],
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
        lg: "pg-h-13 pg-rounded-md pg-text-lg",
        xl: "pg-h-15 pg-rounded-md pg-text-xl",
      },
      hasLeftIcon: {
        true: "",
        false: "",
      },
      hasRightIcon: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "pg-disabled:pg-text-disabled-text pg-disabled:placeholder:pg-text-disabled-text pg-disabled:pg-cursor-not-allowed pg-disabled:pg-select-none",
        false: "placeholder:pg-text-text-dimmed",
      },
      isInvalid: {
        true: "",
        false: "focus:pg-border-focus-ring",
      },
    },
    compoundVariants: [
      // variant + colors
      {
        variant: "soft",
        isDisabled: false,
        isInvalid: false,
        class: [
          "pg-text-soft-input-text hover:pg-text-soft-input-text-hover active:pg-text-soft-input-text-active",
          "pg-border-soft-input-border hover:pg-border-soft-input-border-hover active:pg-border-soft-input-border-active",
        ],
      },
      {
        variant: "outlined",
        isDisabled: false,
        isInvalid: false,
        class: [
          "pg-text-outlined-input-text hover:pg-text-outlined-input-text-hover active:pg-text-outlined-input-text-active",
          "pg-border-outlined-input-border hover:pg-border-outlined-input-border-hover active:pg-border-outlined-input-border-active",
        ],
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "pg-disabled:pg-bg-disabled-bg pg-disabled:pg-border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "pg-disabled:pg-bg-transparent pg-disabled:pg-border-disabled-border",
      },

      // invalid
      {
        isInvalid: true,
        isDisabled: false,
        class: "pg-text-text-danger pg-border-border-danger",
      },

      // size + padding-left
      { size: "xs", hasLeftIcon: false, class: "pg-pl-2" },
      { size: "sm", hasLeftIcon: false, class: "pg-pl-2.5" },
      { size: "md", hasLeftIcon: false, class: "pg-pl-3" },
      { size: "lg", hasLeftIcon: false, class: "pg-pl-3.5" },
      { size: "xl", hasLeftIcon: false, class: "pg-pl-4" },

      // size + padding-right
      { size: "xs", hasRightIcon: false, class: "pg-pr-2" },
      { size: "sm", hasRightIcon: false, class: "pg-pr-2.5" },
      { size: "md", hasRightIcon: false, class: "pg-pr-3" },
      { size: "lg", hasRightIcon: false, class: "pg-pr-3.5" },
      { size: "xl", hasRightIcon: false, class: "pg-pr-4" },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
      hasLeftIcon: false,
      hasRightIcon: false,
      isDisabled: false,
      isInvalid: false,
    },
  }
);

export type TextFieldInputVariants = VariantProps<typeof textFieldInputVariants>;

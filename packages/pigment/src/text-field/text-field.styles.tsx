import { tv, VariantProps } from "tailwind-variants";

import { inputFocusStyles } from "../utils/styles";

const baseInputStyles = [
  "appearance-none relative",
  "m-0 w-full",
  "border border-solid",
  "text-content bg-surface ui-not-invalid:border-line",
  "ui-not-disabled:placeholder:text-content-subtlest",
  "ui-not-disabled:ui-invalid:border-line-danger",
  "ui-disabled:text-content-disabled ui-disabled:bg-surface-disabled ui-disabled:border-line-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none ui-disabled:placeholder:text-content-disabled",
  inputFocusStyles,
];

const baseIconStyles = [
  "absolute inset-y-0 flex items-center pointer-events-none",
  "ui-disabled:text-icon-disabled ui-disabled:opacity-50",
];

export const textFieldStyles = tv({
  slots: {
    root: "group flex flex-col items-start",
    input: [...baseInputStyles],
    textArea: [...baseInputStyles, "h-full resize"],
    leadingIcon: [...baseIconStyles, "start-0 text-icon-subtle"],
    trailingIcon: [...baseIconStyles, "end-0 text-icon-subtle"],
    errorIcon: [...baseIconStyles, "end-0 text-icon-danger"],
    label: [
      "text-content font-medium",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    ],
    supportText:
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
  },
  variants: {
    size: {
      md: {
        input: "h-10 text-base rounded-md",
        textArea: "py-2.5 px-3 text-base rounded-md",
        leadingIcon: "ps-3 text-xl",
        trailingIcon: "pe-3 text-xl",
        errorIcon: "pe-3 text-xl",
        label: "text-sm",
        supportText: "text-sm",
      },
    },
    hasLeadingIcon: {
      true: {},
      false: {},
    },
    hasTrailingIcon: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // size + no decorators
    { size: "md", hasLeadingIcon: false, class: { input: "ps-3" } },
    { size: "md", hasTrailingIcon: false, class: { input: "pe-3" } },

    // size + decorators
    { size: "md", hasLeadingIcon: true, class: { input: "ps-10" } },
    { size: "md", hasTrailingIcon: true, class: { input: "pe-10" } },
  ],
});

export type TextFieldVariants = VariantProps<typeof textFieldStyles>;

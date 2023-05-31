import { tv, VariantProps } from "tailwind-variants";

import { inputFocusStyles } from "../utils/styles";

const baseInputStyles = [
  "appearance-none relative",
  "m-0 w-full",
  "border border-solid ui-not-invalid:border-line",
  "text-content bg-surface",
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
    leadingIcon: [...baseIconStyles, "start-0 text-icon-subtler"],
    trailingIcon: [...baseIconStyles, "end-0 text-icon-subtler"],
    label: [
      "text-content font-medium",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    ],
    supportText:
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    errorIcon: [
      "flex items-center text-icon-danger",
      "ui-disabled:text-icon-disabled ui-disabled:opacity-50",
    ],
  },
  variants: {
    size: {
      md: {
        input: "ps-[--pg-text-field-input-ps] pe-[--pg-text-field-input-pe] h-10 text-base",
        textArea: "py-2 px-3 text-base rounded-md",
        leadingIcon: "ps-3 text-xl",
        trailingIcon: "pe-3 text-xl",
        label: "text-sm",
        supportText: "text-sm",
        errorIcon: "text-xl",
      },
    },
    hasLeadingAddon: {
      true: {
        input: "focus-visible:z-[1]",
      },
      false: {},
    },
    hasTrailingAddon: {
      true: {
        input: "focus-visible:z-[1]",
      },
      false: {},
    },
  },
  compoundVariants: [
    // size + no addons
    { size: "md", hasLeadingAddon: false, class: { input: "rounded-s-md" } },
    { size: "md", hasTrailingAddon: false, class: { input: "rounded-e-md" } },
  ],
});

export type TextFieldVariants = VariantProps<typeof textFieldStyles>;

export const inputAddonStyles = tv({
  slots: {
    root: "flex items-center border-y border-solid border-line text-content-subtle bg-surface-neutral-subtle",
  },
  variants: {
    size: {
      md: {
        root: "px-3",
      },
    },
    trailing: {
      true: {
        root: "border-e",
      },
      false: {
        root: "border-s",
      },
    },
  },
  compoundVariants: [
    // size + placement
    { size: "md", trailing: false, class: { root: "rounded-s-md" } },
    { size: "md", trailing: true, class: { root: "rounded-e-md" } },
  ],
});

export type InputAddonVariants = VariantProps<typeof inputAddonStyles>;

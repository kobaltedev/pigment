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
    leadingSection: "absolute inset-y-0 start-0",
    trailingSection: "absolute inset-y-0 end-0",
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
      sm: {
        input: "py-[5px] text-sm",
        textArea: "py-[5px] px-2 text-sm rounded",
        leadingIcon: "ps-2 text-base",
        trailingIcon: "pe-2 text-base",
        label: "text-xs",
        supportText: "text-xs",
        errorIcon: "text-base",
      },
      md: {
        input: "py-[7px] text-base",
        textArea: "py-[7px] px-3 text-base rounded-md",
        leadingIcon: "ps-3 text-xl",
        trailingIcon: "pe-3 text-xl",
        label: "text-sm",
        supportText: "text-sm",
        errorIcon: "text-xl",
      },
      lg: {
        input: "py-[9px] text-lg",
        textArea: "py-[9px] px-3.5 text-lg rounded-lg",
        leadingIcon: "ps-3.5 text-2xl",
        trailingIcon: "pe-3.5 text-2xl",
        label: "text-base",
        supportText: "text-base",
        errorIcon: "text-2xl",
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
    // size + no icons
    {
      size: "sm",
      hasLeadingIcon: false,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+8px)]" },
    },
    {
      size: "sm",
      hasTrailingIcon: false,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+8px)]" },
    },
    {
      size: "md",
      hasLeadingIcon: false,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+12px)]" },
    },
    {
      size: "md",
      hasTrailingIcon: false,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+12px)]" },
    },
    {
      size: "lg",
      hasLeadingIcon: false,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+14px)]" },
    },
    {
      size: "lg",
      hasTrailingIcon: false,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+14px)]" },
    },

    // size + icons
    {
      size: "sm",
      hasLeadingIcon: true,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+28px)]" },
    },
    {
      size: "sm",
      hasTrailingIcon: true,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+28px)]" },
    },
    {
      size: "md",
      hasLeadingIcon: true,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+40px)]" },
    },
    {
      size: "md",
      hasTrailingIcon: true,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+40px)]" },
    },
    {
      size: "lg",
      hasLeadingIcon: true,
      class: { input: "ps-[calc(var(--pg-text-field-leading-section-width)+48px)]" },
    },
    {
      size: "lg",
      hasTrailingIcon: true,
      class: { input: "pe-[calc(var(--pg-text-field-trailing-section-width)+48px)]" },
    },

    // size + no addons
    { size: "sm", hasLeadingAddon: false, class: { input: "rounded-s" } },
    { size: "sm", hasTrailingAddon: false, class: { input: "rounded-e" } },
    { size: "md", hasLeadingAddon: false, class: { input: "rounded-s-md" } },
    { size: "md", hasTrailingAddon: false, class: { input: "rounded-e-md" } },
    { size: "lg", hasLeadingAddon: false, class: { input: "rounded-s-lg" } },
    { size: "lg", hasTrailingAddon: false, class: { input: "rounded-e-lg" } },
  ],
});

export type TextFieldVariants = VariantProps<typeof textFieldStyles>;

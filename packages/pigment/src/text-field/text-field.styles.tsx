import { tv, VariantProps } from "tailwind-variants";

import { focusStyles } from "../utils/styles";

export const textFieldStyles = tv({
  slots: {
    root: "group flex flex-col items-start",
    control: [
      "flex items-center self-stretch border border-solid transition-colors",
      "text-content bg-surface ui-not-invalid:border-line",
      "ui-not-disabled:ui-invalid:text-content-danger ui-not-disabled:ui-invalid:bg-surface-danger-subtle ui-not-disabled:ui-invalid:border-line-danger",
      "ui-disabled:text-content-disabled ui-disabled:bg-surface-disabled ui-disabled:border-line-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    ],
    input: [
      "appearance-none grow h-full m-0 py-0",
      "border-none bg-transparent text-current",
      "ui-not-disabled:placeholder:text-content-subtlest",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none ui-disabled:placeholder:text-content-disabled",
      "outline-none",
    ],
    textArea: [
      "appearance-none grow h-full m-0 resize",
      "border border-solid transition-colors",
      "text-content bg-surface ui-not-invalid:border-line",
      "ui-not-disabled:placeholder:text-content-subtlest",
      "ui-not-disabled:ui-invalid:text-content-danger ui-not-disabled:ui-invalid:bg-surface-danger-subtle ui-not-disabled:ui-invalid:border-line-danger",
      "ui-disabled:text-content-disabled ui-disabled:bg-surface-disabled ui-disabled:border-line-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none ui-disabled:placeholder:text-content-disabled",
      focusStyles,
    ],
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
        root: "gap-y-0.5",
        control: "h-10 text-base rounded-md",
        input: "pb-px px-3",
        textArea: "py-2.5 px-3 text-base rounded-md",
        label: "text-sm",
        supportText: "text-sm",
      },
    },
    focused: {
      true: {
        control: "outline-ring outline-2 outline-offset-2",
      },
      false: {},
    },
  },
  compoundVariants: [],
});

export type TextFieldVariants = VariantProps<typeof textFieldStyles>;

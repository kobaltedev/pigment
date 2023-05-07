import { tv, VariantProps } from "tailwind-variants";

export const checkboxStyles = tv({
  slots: {
    root: "group inline-flex",
    input: "peer",
    control: [
      "inline-flex justify-center items-center grow-0 shrink-0 border border-solid transition-colors",
      "ui-not-disabled:text-content-on-primary",
      "bg-white dark:bg-surface-neutral-subtle ui-not-invalid:border-line ui-disabled:border-line-disabled",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
      "peer-focus-visible:outline peer-focus-visible:outline-ring peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2",

      // checked
      "ui-not-disabled:peer-checked:bg-surface-primary ui-not-disabled:peer-checked:hover:bg-surface-primary-hover ui-not-disabled:peer-checked:active:bg-surface-primary-active",
      "ui-not-disabled:peer-checked:border-surface-primary ui-not-disabled:peer-checked:hover:border-surface-primary-hover ui-not-disabled:peer-checked:active:border-surface-primary-active",
      "ui-disabled:peer-checked:bg-surface-disabled",
      // indeterminate
      "ui-not-disabled:peer-indeterminate:bg-surface-primary ui-not-disabled:peer-indeterminate:hover:bg-surface-primary-hover ui-not-disabled:peer-indeterminate:active:bg-surface-primary-active",
      "ui-not-disabled:peer-indeterminate:border-surface-primary ui-not-disabled:peer-indeterminate:hover:border-surface-primary-hover ui-not-disabled:peer-indeterminate:active:border-surface-primary-active",
      "ui-disabled:peer-indeterminate:bg-surface-disabled",

      // invalid
      "ui-not-disabled:ui-invalid:text-content-on-danger",
      "ui-not-disabled:ui-invalid:border-surface-danger",
      // invalid checked
      "ui-not-disabled:ui-invalid:peer-checked:bg-surface-danger ui-not-disabled:ui-invalid:peer-checked:hover:bg-surface-danger-hover ui-not-disabled:ui-invalid:peer-checked:active:bg-surface-danger-active",
      "ui-not-disabled:ui-invalid:peer-checked:border-surface-danger ui-not-disabled:ui-invalid:peer-checked:hover:border-surface-danger-hover ui-not-disabled:ui-invalid:peer-checked:active:border-surface-danger-active",
      // invalid indeterminate
      "ui-not-disabled:ui-invalid:peer-indeterminate:bg-surface-danger ui-not-disabled:ui-invalid:peer-indeterminate:hover:bg-surface-danger-hover ui-not-disabled:ui-invalid:peer-indeterminate:active:bg-surface-danger-active",
      "ui-not-disabled:ui-invalid:peer-indeterminate:border-surface-danger ui-not-disabled:ui-invalid:peer-indeterminate:hover:border-surface-danger-hover ui-not-disabled:ui-invalid:peer-indeterminate:active:border-surface-danger-active",
    ],
    indicator: "inline-flex justify-center items-center",
    labelWrapper: "flex flex-col grow shrink items-start",
    label: [
      "text-content -mt-0.5",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    ],
    supportText:
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
    errorIndicator: "",
  },
  variants: {
    size: {
      md: {
        root: "gap-x-2",
        control: "h-4 w-4 text-base rounded",
        labelWrapper: "gap-y-0.5",
        label: "text-sm",
        supportText: "text-xs",
        errorIndicator: "text-sm",
      },
      lg: {
        root: "gap-x-2.5",
        control: "h-5 w-5 text-xl rounded",
        labelWrapper: "gap-y-1",
        label: "text-base",
        supportText: "text-sm",
        errorIndicator: "text-base",
      },
    },
  },
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;

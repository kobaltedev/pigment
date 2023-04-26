import { tv, VariantProps } from "tailwind-variants";

export const checkboxStyles = tv({
  slots: {
    root: "group inline-flex",
    input: "peer",
    control:
      "inline-flex justify-center items-center grow-0 shrink-0 mt-0.5 rounded-checkbox border border-solid transition-colors",
    indicator: "reset-svg inline-flex justify-center items-center",
    labelWrapper: "flex flex-col grow shrink",
    label:
      "text-content ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
    supportText: "ui-group-disabled:text-content-disabled",
    errorIcon: "reset-svg",
  },
  variants: {
    variant: {
      soft: {},
      outlined: {
        control: "bg-transparent",
      },
    },
    size: {
      sm: {
        root: "gap-x-1.5",
        control: "h-4 w-4 text-base",
        labelWrapper: "gap-y-0.5",
        label: "text-sm",
        supportText: "text-xs",
      },
      md: {
        root: "gap-x-2",
        control: "h-5 w-5 text-xl",
        label: "text-base",
        labelWrapper: "gap-y-1",
        supportText: "text-sm",
      },
      lg: {
        root: "gap-x-2.5",
        control: "h-6 w-6 text-2xl",
        labelWrapper: "gap-y-1.5",
        label: "text-lg",
        supportText: "text-base",
      },
    },
    invalid: {
      true: {},
      false: {},
    },
    disabled: {
      true: {
        control: "ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
      },
      false: {},
    },
  },
  compoundVariants: [
    // variant + color
    {
      variant: "soft",
      invalid: false,
      disabled: false,
      class: {
        control: [
          "bg-input-soft-surface hover:bg-input-soft-surface-hover active:bg-input-soft-surface-active",
          "border-input-soft-line hover:border-input-soft-line-hover active:border-input-soft-line-active",
        ],
      },
    },
    {
      variant: "outlined",
      invalid: false,
      disabled: false,
      class: {
        control:
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
      },
    },

    // variant + checked
    {
      invalid: false,
      disabled: false,
      class: {
        control: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "text-accent-solid-content hover:text-accent-solid-content-hover active:text-accent-solid-content-active",
          // checked
          "peer-checked:bg-accent-solid-surface peer-checked:hover:bg-accent-solid-surface-hover peer-checked:active:bg-accent-solid-surface-active",
          "peer-checked:border-accent-solid-line peer-checked:hover:border-accent-solid-line-hover peer-checked:active:border-accent-solid-line-active",
          // indeterminate
          "peer-indeterminate:bg-accent-solid-surface peer-indeterminate:hover:bg-accent-solid-surface-hover peer-indeterminate:active:bg-accent-solid-surface-active",
          "peer-indeterminate:border-accent-solid-line peer-indeterminate:hover:border-accent-solid-line-hover peer-indeterminate:active:border-accent-solid-line-active",
        ],
      },
    },

    // variant + checked + invalid
    {
      invalid: true,
      disabled: false,
      class: {
        control: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "text-solid-danger-content",
          "border-solid-danger-line",
          // checked
          "peer-checked:bg-solid-danger-surface",
          "peer-checked:border-solid-danger-line",
          // indeterminate
          "peer-indeterminate:bg-solid-danger-surface",
          "peer-indeterminate:border-solid-danger-line",
        ],
      },
    },

    // variant + focused
    {
      invalid: false,
      disabled: false,
      class: {
        control:
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring",
      },
    },

    // variant + disabled
    {
      variant: "soft",
      disabled: true,
      class: {
        control: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-surface-disabled",
      },
    },
    {
      variant: "outlined",
      disabled: true,
      class: {
        control: "ui-group-disabled:border-line-disabled",
      },
    },
  ],
});

export type CheckboxVariants = VariantProps<typeof checkboxStyles>;

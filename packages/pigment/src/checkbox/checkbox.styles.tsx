import { cva, VariantProps } from "class-variance-authority";

export const checkboxRootVariants = cva("group inline-flex", {
  variants: {
    size: {
      sm: "gap-x-1.5",
      md: "gap-x-2",
      lg: "gap-x-2.5",
    },
  },
});

export const checkboxControlVariants = cva(
  "inline-flex justify-center items-center grow-0 shrink-0 mt-0.5 border border-solid transition-colors",
  {
    variants: {
      variant: {
        filled: "",
        outlined: "bg-transparent",
      },
      size: {
        sm: "h-4 w-4 rounded text-base",
        md: "h-5 w-5 rounded text-xl",
        lg: "h-6 w-6 rounded text-2xl",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filled",
        isInvalid: false,
        isDisabled: false,
        class: [
          "bg-input-filled-surface hover:bg-input-filled-surface-hover active:bg-input-filled-surface-active",
          "border-input-filled-line hover:border-input-filled-line-hover active:border-input-filled-line-active",
        ],
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
      },

      // variant + checked
      {
        isInvalid: false,
        isDisabled: false,
        class: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "text-solid-accent-content",
          // checked
          "peer-checked:bg-solid-accent-surface peer-checked:hover:bg-solid-accent-surface-hover peer-checked:active:bg-solid-accent-surface-active",
          "peer-checked:border-solid-accent-surface peer-checked:hover:border-solid-accent-surface-hover peer-checked:active:border-solid-accent-surface-active",
          // indeterminate
          "peer-indeterminate:bg-solid-accent-surface peer-indeterminate:hover:bg-solid-accent-surface-hover peer-indeterminate:active:bg-solid-accent-surface-active",
          "peer-indeterminate:border-solid-accent-surface peer-indeterminate:hover:border-solid-accent-surface-hover peer-indeterminate:active:border-solid-accent-surface-active",
        ],
      },

      // variant + checked + invalid
      {
        isInvalid: true,
        isDisabled: false,
        class: [
          "text-solid-danger-content",
          "border-solid-danger-surface hover:border-solid-danger-surface-hover active:border-solid-danger-surface-active",
          // checked
          "peer-checked:bg-solid-danger-surface peer-checked:hover:bg-solid-danger-surface-hover peer-checked:active:bg-solid-danger-surface-active",
          "peer-checked:border-solid-danger-surface peer-checked:hover:border-solid-danger-surface-hover peer-checked:active:border-solid-danger-surface-active",
          // indeterminate
          "peer-indeterminate:bg-solid-danger-surface peer-indeterminate:hover:bg-solid-danger-surface-hover peer-indeterminate:active:bg-solid-danger-surface-active",
          "peer-indeterminate:border-solid-danger-surface peer-indeterminate:hover:border-solid-danger-surface-hover peer-indeterminate:active:border-solid-danger-surface-active",
        ],
      },

      // variant + focused
      {
        isInvalid: false,
        isDisabled: false,
        class:
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ring",
      },

      // variant + disabled
      {
        variant: "filled",
        isDisabled: true,
        class: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-surface-disabled",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:border-line-disabled",
      },
    ],
  }
);

export const checkboxLabelWrapperVariants = cva("flex flex-col grow shrink", {
  variants: {
    size: {
      sm: "gap-y-0.5",
      md: "gap-y-1",
      lg: "gap-y-1.5",
    },
  },
});

export const checkboxLabelVariants = cva(
  "text-content ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
  }
);

export const checkboxSupportTextVariants = cva("ui-group-disabled:text-content-disabled", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
});

export type CheckboxControlVariants = VariantProps<typeof checkboxControlVariants>;

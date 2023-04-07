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
        soft: "bg-soft-input-surface hover:bg-soft-input-surface-hover active:bg-soft-input-surface-active",
        outlined:
          "bg-outlined-input-surface hover:bg-outlined-input-surface-hover active:bg-outlined-input-surface-active",
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
      // variant + colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "border-soft-input-line hover:border-soft-input-line-hover active:border-soft-input-line-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "border-outlined-input-line hover:border-outlined-input-line-hover active:border-outlined-input-line-active",
      },

      // all variants + colors
      {
        isInvalid: false,
        isDisabled: false,
        class: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "text-solid-selected-content hover:text-solid-selected-content-hover active:text-solid-selected-content-active",
          // checked
          "peer-checked:bg-solid-selected-surface peer-checked:hover:bg-solid-selected-surface-hover peer-checked:active:bg-solid-selected-surface-active",
          "peer-checked:border-solid-selected-line peer-checked:hover:border-solid-selected-line-hover peer-checked:active:border-solid-selected-line-active",
          // indeterminate
          "peer-indeterminate:bg-solid-selected-surface peer-indeterminate:hover:bg-solid-selected-surface-hover peer-indeterminate:active:bg-solid-selected-surface-active",
          "peer-indeterminate:border-solid-selected-line peer-indeterminate:hover:border-solid-selected-line-hover peer-indeterminate:active:border-solid-selected-line-active",
        ],
      },

      // all variants + invalid + colors
      {
        isInvalid: true,
        isDisabled: false,
        class: [
          "text-solid-danger-content hover:text-solid-danger-content-hover active:text-solid-danger-content-active",
          "border-solid-danger-line hover:border-solid-danger-line-hover active:border-solid-danger-line-active",
          // checked
          "peer-checked:bg-solid-danger-surface peer-checked:hover:bg-solid-danger-surface-hover peer-checked:active:bg-solid-danger-surface-active",
          "peer-checked:border-solid-danger-line peer-checked:hover:border-solid-danger-line-hover peer-checked:active:border-solid-danger-line-active",
          // indeterminate
          "peer-indeterminate:bg-solid-danger-surface peer-indeterminate:hover:bg-solid-danger-surface-hover peer-indeterminate:active:bg-solid-danger-surface-active",
          "peer-indeterminate:border-solid-danger-line peer-indeterminate:hover:border-solid-danger-line-hover peer-indeterminate:active:border-solid-danger-line-active",
        ],
      },

      // all variants focus
      {
        isInvalid: false,
        isDisabled: false,
        class:
          "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-focus-ring",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-group-disabled:bg-surface-disabled ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-line-disabled",
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
  "text-outlined-input-content ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
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

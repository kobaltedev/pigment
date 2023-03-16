import { cva, VariantProps } from "class-variance-authority";

export const checkboxRootVariants = cva("group inline-flex items-start", {
  variants: {
    size: {
      xs: "gap-x-1",
      sm: "gap-x-1.5",
      md: "gap-x-2",
    },
  },
});

export const checkboxControlVariants = cva(
  "flex justify-center items-center grow-0 shrink-0 mt-0.5 border border-solid transition-colors",
  {
    variants: {
      variant: {
        soft: "bg-soft-input-bg hover:bg-soft-input-bg-hover active:bg-soft-input-bg-active",
        outlined:
          "bg-outlined-input-bg hover:bg-outlined-input-bg-hover active:bg-outlined-input-bg-active",
      },
      size: {
        xs: "h-3 w-3 rounded text-xs",
        sm: "h-4 w-4 rounded text-base",
        md: "h-5 w-5 rounded text-xl",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-group-disabled:text-disabled-text",
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
          "border-soft-input-border hover:border-soft-input-border-hover active:border-soft-input-border-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "border-outlined-input-border hover:border-outlined-input-border-hover active:border-outlined-input-border-active",
      },

      // all variants + colors
      {
        isInvalid: false,
        isDisabled: false,
        class: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "text-solid-selected-text hover:text-solid-selected-text-hover active:text-solid-selected-text-active",
          // checked
          "peer-checked:bg-solid-selected-bg peer-checked:hover:bg-solid-selected-bg-hover peer-checked:active:bg-solid-selected-bg-active",
          "peer-checked:border-solid-selected-border peer-checked:hover:border-solid-selected-border-hover peer-checked:active:border-solid-selected-border-active",
          // indeterminate
          "peer-indeterminate:bg-solid-selected-bg peer-indeterminate:hover:bg-solid-selected-bg-hover peer-indeterminate:active:bg-solid-selected-bg-active",
          "peer-indeterminate:border-solid-selected-border peer-indeterminate:hover:border-solid-selected-border-hover peer-indeterminate:active:border-solid-selected-border-active",
        ],
      },

      // all variants + invalid + colors
      {
        isInvalid: true,
        isDisabled: false,
        class: [
          "text-solid-danger-text hover:text-solid-danger-text-hover active:text-solid-danger-text-active",
          "border-solid-danger-border hover:border-solid-danger-border-hover active:border-solid-danger-border-active",
          // checked
          "peer-checked:bg-solid-danger-bg peer-checked:hover:bg-solid-danger-bg-hover peer-checked:active:bg-solid-danger-bg-active",
          "peer-checked:border-solid-danger-border peer-checked:hover:border-solid-danger-border-hover peer-checked:active:border-solid-danger-border-active",
          // indeterminate
          "peer-indeterminate:bg-solid-danger-bg peer-indeterminate:hover:bg-solid-danger-bg-hover peer-indeterminate:active:bg-solid-danger-bg-active",
          "peer-indeterminate:border-solid-danger-border peer-indeterminate:hover:border-solid-danger-border-hover peer-indeterminate:active:border-solid-danger-border-active",
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
        class: "ui-group-disabled:bg-disabled-bg ui-group-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-group-disabled:bg-transparent ui-group-disabled:border-disabled-border",
      },
    ],
  }
);

export const checkboxLabelVariants = cva(
  "text-outlined-input-text ui-group-disabled:text-disabled-text",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
      },
    },
  }
);

export const checkboxDescriptionVariants = cva(
  "text-text-subtlest ui-group-disabled:text-disabled-text",
  {
    variants: {
      size: {
        xs: "text-xs mt-1",
        sm: "text-xs mt-1.5",
        md: "text-sm mt-2",
      },
    },
  }
);

export type CheckboxControlVariants = VariantProps<typeof checkboxControlVariants>;

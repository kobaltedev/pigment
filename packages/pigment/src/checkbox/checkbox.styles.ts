import { cva, VariantProps } from "class-variance-authority";

export const checkboxVariants = cva(
  "pg-flex pg-justify-center pg-items-center pg-grow-0 pg-shrink-0 pg-mt-0.5 pg-border pg-border-solid pg-transition-colors",
  {
    variants: {
      variant: {
        soft: "pg-bg-soft-input-bg hover:pg-bg-soft-input-bg-hover active:pg-bg-soft-input-bg-active",
        outlined:
          "pg-bg-outlined-input-bg hover:pg-bg-outlined-input-bg-hover active:pg-bg-outlined-input-bg-active",
      },
      size: {
        xs: "pg-h-3 pg-w-3 pg-rounded pg-text-xs",
        sm: "pg-h-4 pg-w-4 pg-rounded pg-text-base",
        md: "pg-h-5 pg-w-5 pg-rounded pg-text-xl",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "pg-group-disabled:pg-text-disabled-text",
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
          "pg-border-soft-input-border hover:pg-border-soft-input-border-hover active:pg-border-soft-input-border-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "pg-border-outlined-input-border hover:pg-border-outlined-input-border-hover active:pg-border-outlined-input-border-active",
      },

      // all variants + colors
      {
        isInvalid: false,
        isDisabled: false,
        class: [
          // safe to put text colors here because `KCheckbox.Indicator` is only rendered when checked or indeterminate
          "pg-text-solid-selected-text hover:pg-text-solid-selected-text-hover active:pg-text-solid-selected-text-active",
          // checked
          "peer-checked:pg-bg-solid-selected-bg peer-checked:hover:pg-bg-solid-selected-bg-hover peer-checked:active:pg-bg-solid-selected-bg-active",
          "peer-checked:pg-border-solid-selected-border peer-checked:hover:pg-border-solid-selected-border-hover peer-checked:active:pg-border-solid-selected-border-active",
          // indeterminate
          "peer-indeterminate:pg-bg-solid-selected-bg peer-indeterminate:hover:pg-bg-solid-selected-bg-hover peer-indeterminate:active:pg-bg-solid-selected-bg-active",
          "peer-indeterminate:pg-border-solid-selected-border peer-indeterminate:hover:pg-border-solid-selected-border-hover peer-indeterminate:active:pg-border-solid-selected-border-active",
        ],
      },

      // all variants + invalid + colors
      {
        isInvalid: true,
        isDisabled: false,
        class: [
          "pg-text-solid-danger-text hover:pg-text-solid-danger-text-hover active:pg-text-solid-danger-text-active",
          "pg-border-solid-danger-border hover:pg-border-solid-danger-border-hover active:pg-border-solid-danger-border-active",
          // checked
          "peer-checked:pg-bg-solid-danger-bg peer-checked:hover:pg-bg-solid-danger-bg-hover peer-checked:active:pg-bg-solid-danger-bg-active",
          "peer-checked:pg-border-solid-danger-border peer-checked:hover:pg-border-solid-danger-border-hover peer-checked:active:pg-border-solid-danger-border-active",
          // indeterminate
          "peer-indeterminate:pg-bg-solid-danger-bg peer-indeterminate:hover:pg-bg-solid-danger-bg-hover peer-indeterminate:active:pg-bg-solid-danger-bg-active",
          "peer-indeterminate:pg-border-solid-danger-border peer-indeterminate:hover:pg-border-solid-danger-border-hover peer-indeterminate:active:pg-border-solid-danger-border-active",
        ],
      },

      // all variants focus
      {
        isInvalid: false,
        isDisabled: false,
        class:
          "peer-focus-visible:pg-outline peer-focus-visible:pg-outline-2 peer-focus-visible:pg-outline-offset-2 peer-focus-visible:pg-outline-focus-ring",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "pg-group-disabled:pg-bg-disabled-bg pg-group-disabled:pg-border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "pg-group-disabled:pg-bg-transparent pg-group-disabled:pg-border-disabled-border",
      },
    ],
    defaultVariants: {
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
    },
  }
);

export const checkboxRootVariants = cva("pg-group pg-inline-flex pg-items-start", {
  variants: {
    size: {
      xs: "pg-gap-x-1",
      sm: "pg-gap-x-1.5",
      md: "pg-gap-x-2",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export const checkboxLabelVariants = cva(
  "pg-text-outlined-input-text pg-group-disabled:pg-text-disabled-text",
  {
    variants: {
      size: {
        xs: "pg-text-xs",
        sm: "pg-text-sm",
        md: "pg-text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export const checkboxDescriptionVariants = cva(
  "pg-text-text-subtlest pg-group-disabled:pg-text-disabled-text",
  {
    variants: {
      size: {
        xs: "pg-text-xs pg-mt-1",
        sm: "pg-text-xs pg-mt-1.5",
        md: "pg-text-sm pg-mt-2",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;

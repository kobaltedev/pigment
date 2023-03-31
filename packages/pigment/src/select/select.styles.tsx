import { cva, VariantProps } from "class-variance-authority";

export const selectButtonVariants = cva(
  [
    "appearance-none flex items-center grow border border-solid transition-colors",
    "outline-none focus-visible:border-focus-ring",
  ],
  {
    variants: {
      variant: {
        soft: "bg-soft-input-surface hover:bg-soft-input-surface-hover active:bg-soft-input-surface-active",
        outlined:
          "bg-outlined-input-surface hover:bg-outlined-input-surface-hover active:bg-outlined-input-surface-active",
      },
      size: {
        sm: "h-9 rounded-md text-sm",
        md: "h-11 rounded-md text-base",
      },
      hasDropdownIcon: {
        true: "pr-0",
        false: "",
      },
      hasLeftDecorator: {
        true: "pl-0",
        false: "",
      },
      hasRightDecorator: {
        true: "",
        false: "",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-disabled:text-content-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
        false: "",
      },
    },
    compoundVariants: [
      // variant + text colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-soft-input-content hover:text-soft-input-content-hover active:text-soft-input-content-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-outlined-input-content hover:text-outlined-input-content-hover active:text-outlined-input-content-active",
      },

      // variant + border colors
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

      // all variants + invalid colors
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-content-danger border-solid-danger-line",
      },

      // variant + disabled
      {
        variant: "soft",
        isDisabled: true,
        class: "ui-disabled:bg-surface-disabled ui-disabled:border-transparent",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-disabled:bg-transparent ui-disabled:border-line-disabled",
      },

      // size + no left decorator
      { size: "sm", hasLeftDecorator: false, class: "pl-2.5" },
      { size: "md", hasLeftDecorator: false, class: "pl-3.5" },

      // size + no right decorator + no dropdown icon
      { size: "sm", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-2.5" },
      { size: "md", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-3.5" },
    ],
  }
);

export const selectIconVariants = cva(
  [
    "reset-svg flex justify-center items-center grow-0 shrink-0",
    "leading-none",
    "bg-transparent bg-line-transparent",
  ],
  {
    variants: {
      variant: {
        soft: "",
        outlined: "",
      },
      size: {
        sm: "pr-2.5 text-base",
        md: "pr-3.5 text-lg",
      },
      hasRightDecorator: {
        true: "pl-0",
        false: "",
      },
      isInvalid: {
        true: "",
        false: "",
      },
      isDisabled: {
        true: "ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      // variant + colors
      {
        variant: "soft",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-soft-input-icon hover:text-soft-input-icon-hover active:text-soft-input-icon-active",
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class:
          "text-outlined-input-icon hover:text-outlined-input-icon-hover active:text-outlined-input-icon-active",
      },

      // invalid color
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-icon-danger",
      },

      // size + no right decorator
      { size: "sm", hasRightDecorator: false, class: "pl-2.5" },
      { size: "md", hasRightDecorator: false, class: "pl-3.5" },
    ],
  }
);

export const selectValueVariants = cva("inline-flex justify-start items-center grow shrink", {
  variants: {
    variant: {
      soft: "",
      outlined: "",
    },
    isDisabled: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    // variant + not disabled
    {
      variant: "soft",
      isDisabled: false,
      class: "data-placeholder-shown:text-content-subtler",
    },
    {
      variant: "outlined",
      isDisabled: false,
      class: "data-placeholder-shown:text-content-subtlest",
    },
  ],
});

export const selectLabelVariants = cva(
  "grow-0 font-medium text-content-subtle ui-group-disabled:text-content-disabled",
  {
    variants: {
      size: {
        sm: "mb-1 text-sm",
        md: "mb-1.5 text-base",
      },
    },
  }
);

export const selectSupportTextVariants = cva("grow-0 ui-group-disabled:text-content-disabled", {
  variants: {
    size: {
      sm: "mt-1.5 text-xs",
      md: "mt-2 text-sm",
    },
  },
});

export const selectDropdownVariants = cva(
  "bg-overlay-surface border border-solid shadow-overlay rounded-md z-30",
  {
    variants: {
      variant: {
        soft: "border-soft-input-line",
        outlined: "border-outlined-input-line",
      },
    },
  }
);

export const selectListboxVariants = cva("flex flex-col outline-none max-h-96 overflow-y-auto", {
  variants: {
    size: {
      sm: "gap-y-0.5 p-1.5 text-sm",
      md: "gap-y-1 p-2 text-base",
    },
  },
});

export const selectOptGroupVariants = cva("text-content-subtlest uppercase", {
  variants: {
    size: {
      sm: "px-2 pt-3 text-2xs",
      md: "px-2.5 pt-3.5 text-xs",
    },
  },
});

export const selectOptionVariants = cva(
  [
    "group flex justify-between items-center rounded select-none outline-none ui-not-disabled:cursor-pointer",
    "bg-subtle-surface ui-highlighted:bg-subtle-surface-hover ui-highlighted:active:bg-subtle-surface-active",
    "ui-selected:bg-soft-selected-surface ui-selected:ui-highlighted:bg-soft-selected-surface-hover ui-selected:ui-highlighted:active:bg-soft-selected-surface-active",
    "ui-selected:text-soft-selected-content ui-selected:ui-highlighted:text-soft-selected-content-hover ui-selected:ui-highlighted:active:text-soft-selected-content-active",
    "ui-selected:font-medium",
    "ui-disabled:text-content-disabled",
  ],
  {
    variants: {
      size: {
        sm: "p-2 gap-x-2",
        md: "p-2.5 gap-x-2.5",
      },
    },
  }
);

export const selectOptionIndicatorVariants = cva(
  "reset-svg flex justify-center items-center shrink-0 leading-none pointer-events-none text-soft-selected-icon",
  {
    variants: {
      size: {
        sm: "text-base",
        md: "text-lg",
      },
    },
  }
);

export type SelectButtonVariants = VariantProps<typeof selectButtonVariants>;

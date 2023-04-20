import { cva, VariantProps } from "class-variance-authority";

export const selectButtonVariants = cva(
  [
    "appearance-none flex items-center grow border border-solid transition-colors",
    "outline-none focus:border-ring",
  ],
  {
    variants: {
      variant: {
        filled:
          "bg-input-filled-surface hover:bg-input-filled-surface-hover active:bg-input-filled-surface-active",
        outlined: "bg-transparent",
      },
      size: {
        xs: "h-6 rounded text-xs",
        sm: "h-8 rounded text-sm",
        md: "h-10 rounded-md text-base",
        lg: "h-12 rounded-md text-lg",
        xl: "h-14 rounded-md text-xl",
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
      // variant + color
      {
        variant: "filled",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-input-filled-content",
          "border-input-filled-line hover:border-input-filled-line-hover active:border-input-filled-line-active",
        ],
      },
      {
        variant: "outlined",
        isInvalid: false,
        isDisabled: false,
        class: [
          "text-input-outlined-content",
          "border-input-outlined-line hover:border-input-outlined-line-hover active:border-input-outlined-line-active",
        ],
      },

      // variants + invalid
      {
        isInvalid: true,
        isDisabled: false,
        class: "text-content-danger border-solid-danger-surface",
      },

      // variant + disabled
      {
        variant: "filled",
        isDisabled: true,
        class: "ui-disabled:bg-surface-disabled ui-disabled:border-surface-disabled",
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: "ui-disabled:border-line-disabled",
      },

      // size + no left decorator
      { size: "xs", hasLeftDecorator: false, class: "pl-1.5" },
      { size: "sm", hasLeftDecorator: false, class: "pl-2" },
      { size: "md", hasLeftDecorator: false, class: "pl-2.5" },
      { size: "lg", hasLeftDecorator: false, class: "pl-3" },
      { size: "xl", hasLeftDecorator: false, class: "pl-3.5" },

      // size + no right decorator + no dropdown icon
      { size: "xs", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-1.5" },
      { size: "sm", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-2" },
      { size: "md", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-2.5" },
      { size: "lg", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-3" },
      { size: "xl", hasRightDecorator: false, hasDropdownIcon: false, class: "pr-3.5" },
    ],
  }
);

export const selectIconVariants = cva(
  [
    "reset-svg flex justify-center items-center grow-0 shrink-0",
    "leading-none",
    "bg-transparent border-transparent",
  ],
  {
    variants: {
      variant: {
        filled: "",
        outlined: "",
      },
      size: {
        xs: "pr-1.5 text-xs",
        sm: "pr-2 text-sm",
        md: "pr-2.5 text-base",
        lg: "pr-3 text-lg",
        xl: "pr-3.5 text-xl",
      },
      hasRightDecorator: {
        true: "pl-0",
        false: "",
      },
      isDisabled: {
        true: "ui-group-disabled:text-content-disabled ui-group-disabled:cursor-not-allowed",
        false: "cursor-pointer",
      },
    },
    compoundVariants: [
      // size + no right decorator
      { size: "xs", hasRightDecorator: false, class: "pl-1.5" },
      { size: "sm", hasRightDecorator: false, class: "pl-2" },
      { size: "md", hasRightDecorator: false, class: "pl-2.5" },
      { size: "lg", hasRightDecorator: false, class: "pl-3" },
      { size: "xl", hasRightDecorator: false, class: "pl-3.5" },
    ],
  }
);

export const selectValueVariants = cva("inline-flex justify-start items-center grow shrink", {
  variants: {
    variant: {
      filled: "",
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
      variant: "filled",
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
        xs: "mb-0.5 text-xs",
        sm: "mb-0.5 text-xs",
        md: "mb-1 text-sm",
        lg: "mb-1.5 text-base",
        xl: "mb-2 text-lg",
      },
    },
  }
);

export const selectSupportTextVariants = cva("grow-0 ui-group-disabled:text-content-disabled", {
  variants: {
    size: {
      xs: "mt-1 text-xs",
      sm: "mt-1 text-xs",
      md: "mt-1.5 text-sm",
      lg: "mt-2 text-base",
      xl: "mt-2.5 text-lg",
    },
  },
});

export const selectDropdownVariants = cva(
  "bg-surface-overlay border border-solid shadow-overlay z-30",
  {
    variants: {
      variant: {
        filled: "border-input-filled-line",
        outlined: "border-input-outlined-line",
      },
      size: {
        xs: "rounded",
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-md",
        xl: "rounded-md",
      },
    },
  }
);

export const selectListboxVariants = cva("flex flex-col outline-none max-h-96 overflow-y-auto", {
  variants: {
    size: {
      xs: "p-1 gap-y-1 text-xs",
      sm: "p-1 gap-y-1 text-sm",
      md: "p-1.5 gap-y-1.5 text-base",
      lg: "p-2 gap-y-2 text-lg",
      xl: "p-2.5 gap-y-2.5 text-xl",
    },
  },
});

export const selectOptGroupVariants = cva("shrink-0 text-content-subtlest font-medium", {
  variants: {
    size: {
      xs: "px-1.5 [&:not(:first-child)]:pt-1.5 -mb-px text-xs",
      sm: "px-2 [&:not(:first-child)]:pt-2 -mb-px text-xs",
      md: "px-2.5 [&:not(:first-child)]:pt-2.5 -mb-0.5 text-sm",
      lg: "px-3 [&:not(:first-child)]:pt-3 -mb-1 text-base",
      xl: "px-3.5 [&:not(:first-child)]:pt-3.5 -mb-1 text-lg",
    },
  },
});

export const selectOptionVariants = cva(
  [
    "group flex shrink-0 justify-between items-center select-none outline-none ui-not-disabled:cursor-pointer",
    "bg-transparent ui-highlighted:bg-surface-highlighted-hover ui-highlighted:active:bg-surface-highlighted-active",
    "ui-selected:bg-soft-primary-surface ui-selected:ui-highlighted:bg-soft-primary-surface-hover ui-selected:ui-highlighted:active:bg-soft-primary-surface-active",
    "ui-selected:text-soft-primary-content ui-selected:ui-highlighted:text-soft-primary-content-hover ui-selected:ui-highlighted:active:text-soft-primary-content-active",
    "ui-selected:font-medium",
    "ui-disabled:text-content-disabled",
  ],
  {
    variants: {
      size: {
        xs: "h-6 px-1.5 gap-x-1.5 rounded",
        sm: "h-8 px-2 gap-x-2 rounded",
        md: "h-10 px-2.5 gap-x-2.5 rounded-md",
        lg: "h-12 px-3 gap-x-3 rounded-md",
        xl: "h-14 px-3.5 gap-x-3.5 rounded-md",
      },
    },
  }
);

export const selectOptionIndicatorVariants = cva(
  "reset-svg flex justify-center items-center shrink-0 leading-none pointer-events-none",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
    },
  }
);

export type SelectButtonVariants = VariantProps<typeof selectButtonVariants>;

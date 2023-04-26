import { tv, VariantProps } from "tailwind-variants";

import { getGlobalVariantClasses, SEMANTIC_COLOR_VARIANTS } from "../theme/variants";

const alertVariants = ["solid", "soft"] as const;

export const alertStyles = tv({
  slots: {
    root: "flex space-x-1.5 py-3 border border-solid rounded-alert text-sm",
    content: "flex grow",
    icon: "flex justify-center items-center shrink-0 reset-svg h-7 w-7 text-xl leading-none",
    title: "font-semibold",
    description: "grow",
    dismissButton: "shrink-0",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
    },
    rounded: {
      xs: {
        root: "rounded-sm",
      },
      sm: {
        root: "rounded-md",
      },
      md: {
        root: "rounded-lg",
      },
      lg: {
        root: "rounded-xl",
      },
      xl: {
        root: "rounded-2xl",
      },
    },
    withIcon: {
      true: {
        root: "pl-3",
      },
      false: {
        root: "pl-4",
      },
    },
    dismissible: {
      true: {
        root: "pr-3",
      },
      false: {
        root: "pr-4",
      },
    },
    multiline: {
      true: {
        root: "items-start",
        content: "flex-col space-y-1 py-1",
      },
      false: {
        root: "items-center",
        content: "flex-row items-center space-x-1",
      },
    },
  },
  compoundVariants: [
    ...alertVariants.flatMap(variant =>
      SEMANTIC_COLOR_VARIANTS.map(color => ({
        variant,
        color,
        class: {
          root: getGlobalVariantClasses(variant, color).base,
        },
      }))
    ),
  ],
});

export type AlertVariants = VariantProps<typeof alertStyles>;

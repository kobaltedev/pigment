import { tv, VariantProps } from "tailwind-variants";

import { getGlobalVariantClasses, SEMANTIC_COLOR_VARIANTS } from "../theme/variants";

const badgeVariants = ["solid", "soft", "outlined"] as const;

export const badgeStyles = tv({
  slots: {
    root: "inline-flex justify-center items-center border border-solid font-medium",
  },
  variants: {
    variant: {
      solid: {},
      soft: {},
      outlined: {},
    },
    color: {
      primary: {},
      neutral: {},
      success: {},
      info: {},
      warning: {},
      danger: {},
    },
    size: {
      xs: {
        root: "h-5 text-xs",
      },
      sm: {
        root: "h-6 text-xs",
      },
      md: {
        root: "h-7 text-sm",
      },
      lg: {
        root: "h-8 text-sm",
      },
      xl: {
        root: "h-9 text-base",
      },
    },
    rounded: {
      xs: {},
      sm: {},
      md: {},
      lg: {},
      xl: {},
    },
    circle: {
      true: {
        root: "p-0 rounded-full",
      },
      false: {},
    },
  },
  compoundVariants: [
    ...badgeVariants.flatMap(variant =>
      SEMANTIC_COLOR_VARIANTS.map(color => ({
        variant,
        color,
        class: {
          root: getGlobalVariantClasses(variant, color).base,
        },
      }))
    ),

    // not circle + rounded
    { circle: false, rounded: "xs", class: { root: "rounded-sm" } },
    { circle: false, rounded: "sm", class: { root: "rounded" } },
    { circle: false, rounded: "md", class: { root: "rounded-md" } },
    { circle: false, rounded: "lg", class: { root: "rounded-lg" } },
    { circle: false, rounded: "xl", class: { root: "rounded-full" } },

    // size + not circle + padding
    { size: "xs", circle: false, class: { root: "px-1.5" } },
    { size: "sm", circle: false, class: { root: "px-2" } },
    { size: "md", circle: false, class: { root: "px-2.5" } },
    { size: "lg", circle: false, class: { root: "px-3" } },
    { size: "xl", circle: false, class: { root: "px-3.5" } },

    // size + circle + width
    { size: "xs", circle: true, class: { root: "w-5" } },
    { size: "sm", circle: true, class: { root: "w-6" } },
    { size: "md", circle: true, class: { root: "w-7" } },
    { size: "lg", circle: true, class: { root: "w-8" } },
    { size: "xl", circle: true, class: { root: "w-9" } },
  ],
});

export type BadgeVariants = VariantProps<typeof badgeStyles>;

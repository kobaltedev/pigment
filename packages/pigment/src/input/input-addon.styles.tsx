import { tv, VariantProps } from "tailwind-variants";

export const inputAddonStyles = tv({
  slots: {
    root: "flex items-center border-y border-solid border-line text-content-subtle bg-surface-neutral-subtle",
  },
  variants: {
    size: {
      sm: {
        root: "px-2 text-sm",
      },
      md: {
        root: "px-3 text-base",
      },
      lg: {
        root: "px-3.5 text-lg",
      },
    },
    placement: {
      center: {},
      leading: {
        root: "border-s",
      },
      trailing: {
        root: "border-e",
      },
    },
  },
  compoundVariants: [
    // size + placement
    { size: "sm", placement: "leading", class: { root: "rounded-s" } },
    { size: "sm", placement: "trailing", class: { root: "rounded-e" } },

    { size: "md", placement: "leading", class: { root: "rounded-s-md" } },
    { size: "md", placement: "trailing", class: { root: "rounded-e-md" } },

    { size: "lg", placement: "leading", class: { root: "rounded-s-lg" } },
    { size: "lg", placement: "trailing", class: { root: "rounded-e-lg" } },
  ],
});

export type InputAddonVariants = VariantProps<typeof inputAddonStyles>;

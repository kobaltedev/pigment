import { tv, VariantProps } from "tailwind-variants";

export const closeButtonStyles = tv({
  base: [
    "appearance-none",
    "relative",
    "inline-flex justify-center items-center",
    "p-0",
    "bg-transparent",
    "reset-svg font-medium leading-none no-underline cursor-pointer",
    "transition-colors",
    "ui-disabled:text-content-disabled ui-disabled:pointer-events-none",
    "outline-none focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2",
  ],
  variants: {
    size: {
      sm: "h-6 w-6 text-base rounded",
      md: "h-8 w-8 text-xl rounded",
      lg: "h-10 w-10 text-2xl rounded-md",
    },
    inheritTextColor: {
      true: "text-current",
      false: [
        "text-content-subtle",
        "ui-not-disabled:hover:bg-surface-subtle-hover ui-not-disabled:active:bg-surface-subtle-active",
      ],
    },
    onSubtleBackground: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      inheritTextColor: true,
      onSubtleBackground: true,
      class: "ui-not-disabled:hover:bg-black/5 ui-not-disabled:active:bg-black/10",
    },
    {
      inheritTextColor: true,
      onSubtleBackground: false,
      class: "ui-not-disabled:hover:bg-white/10 ui-not-disabled:active:bg-white/20",
    },
  ],
});

export type CloseButtonVariants = VariantProps<typeof closeButtonStyles>;

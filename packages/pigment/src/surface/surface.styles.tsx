import { tv, VariantProps } from "tailwind-variants";

export const surfaceStyles = tv({
  slots: {
    root: "border-solid",
  },
  variants: {
    variant: {
      default: {
        root: "text-content-on-surface bg-surface",
      },
      raised: {
        root: "text-content-on-surface bg-surface-raised shadow dark:shadow-none",
      },
      subtle: {
        root: "text-content-on-surface bg-surface-sunken",
      },
      sunken: {
        root: "text-content-on-surface bg-surface-sunken shadow-inner",
      },
    },
    border: {
      none: {
        root: "border-0",
      },
      start: {
        root: "border-s border-line-subtle",
      },
      end: {
        root: "border-e border-line-subtle",
      },
      top: {
        root: "border-t border-line-subtle",
      },
      bottom: {
        root: "border-b border-line-subtle",
      },
      x: {
        root: "border-x border-line-subtle",
      },
      y: {
        root: "border-y border-line-subtle",
      },
      all: {
        root: "border border-line-subtle",
      },
    },
  },
});

export type SurfaceVariants = VariantProps<typeof surfaceStyles>;

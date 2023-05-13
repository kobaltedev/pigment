import { tv, VariantProps } from "tailwind-variants";

import { focusStyles } from "../utils/styles";

export const anchorStyles = tv({
  slots: {
    root: [
      "relative",
      "text-content-link border-transparent underline-offset-2",
      "ui-not-disabled:hover:text-content-link-hover",
      "ui-not-disabled:active:text-content-link-active",
      "ui-not-disabled:hover:underline ui-not-disabled:focus-visible:underline",
      "ui-disabled:text-content-disabled ui-disabled:opacity-50 ui-disabled:pointer-events-none",
      focusStyles,
    ],
  },
});

export type AnchorVariants = VariantProps<typeof anchorStyles>;

import { cva, VariantProps } from "class-variance-authority";

import { SemanticColor } from "../theme/types";
import { getGlobalVariantClasses, SEMANTIC_COLOR_VARIANTS } from "../theme/variants";
import { emptyObject } from "../utils/empty-object";

const badgeVariants = ["solid", "soft", "outlined"] as const;

export const badgeStyles = cva(
  "inline-flex justify-center items-center border border-solid font-medium",
  {
    variants: {
      variant: emptyObject(badgeVariants),
      color: SEMANTIC_COLOR_VARIANTS,
      size: {
        xs: "h-5 text-xs",
        sm: "h-6 text-xs",
        md: "h-7 text-sm",
        lg: "h-8 text-sm",
        xl: "h-9 text-base",
      },
      circle: {
        true: "rounded-full",
        false: "rounded-badge",
      },
    },
    compoundVariants: [
      ...badgeVariants.flatMap(variant =>
        (Object.keys(SEMANTIC_COLOR_VARIANTS) as SemanticColor[]).map(color => ({
          variant,
          color,
          class: getGlobalVariantClasses(variant, color).base,
        }))
      ),

      // size + circle
      { size: "xs", circle: true, class: "w-5" },
      { size: "sm", circle: true, class: "w-6" },
      { size: "md", circle: true, class: "w-7" },
      { size: "lg", circle: true, class: "w-8" },
      { size: "xl", circle: true, class: "w-9" },

      // size + not circle
      { size: "xs", circle: false, class: "px-1.5" },
      { size: "sm", circle: false, class: "px-2" },
      { size: "md", circle: false, class: "px-2.5" },
      { size: "lg", circle: false, class: "px-3" },
      { size: "xl", circle: false, class: "px-3.5" },
    ],
  }
);

export type BadgeVariants = VariantProps<typeof badgeStyles>;

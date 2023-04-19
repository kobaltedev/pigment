import { cva, VariantProps } from "class-variance-authority";

import { getGlobalVariantClasses, SEMANTIC_COLOR_VARIANTS } from "../theme/variants";
import { emptyObject } from "../utils/empty-object";
import { SemanticColor } from "../theme/types";

const badgeVariants = ["solid", "soft", "outlined"] as const;

export const badgeStyles = cva(
  "inline-flex justify-center items-center rounded-full border border-solid font-medium",
  {
    variants: {
      variant: emptyObject(badgeVariants),
      color: SEMANTIC_COLOR_VARIANTS,
      size: {
        sm: "h-5 px-2 text-xs",
        md: "h-6 px-2.5 text-sm",
        lg: "h-7 px-3 text-base",
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
    ],
  }
);

export type BadgeVariants = VariantProps<typeof badgeStyles>;

import { cva, VariantProps } from "class-variance-authority";

import { SemanticColor } from "../theme/types";
import { getGlobalVariantClasses, SEMANTIC_COLOR_VARIANTS } from "../theme/variants";
import { emptyObject } from "../utils/empty-object";

const alertVariants = ["solid", "soft"] as const;

export const alertStyles = cva(["flex space-x-1.5 py-3 border border-solid rounded-md text-sm"], {
  variants: {
    variant: emptyObject(alertVariants),
    color: SEMANTIC_COLOR_VARIANTS,
    hasIcon: {
      true: "pl-2",
      false: "pl-4",
    },
    isDismissible: {
      true: "pr-2",
      false: "pr-4",
    },
    isMultiline: {
      true: "items-start",
      false: "items-center",
    },
  },
  compoundVariants: [
    ...alertVariants.flatMap(variant =>
      (Object.keys(SEMANTIC_COLOR_VARIANTS) as SemanticColor[]).map(color => ({
        variant,
        color,
        class: getGlobalVariantClasses(variant, color).base,
      }))
    ),
  ],
});

export const alertContentVariants = cva("flex grow", {
  variants: {
    isMultiline: {
      true: "flex-col space-y-1 py-1",
      false: "flex-row items-center space-x-1",
    },
  },
});

export type AlertVariants = VariantProps<typeof alertStyles>;

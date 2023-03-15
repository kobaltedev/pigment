import { Polymorphic } from "@kobalte/core";
import { splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { BadgeProps, BadgeSlots } from "./badge.props";
import { badgeVariants } from "./badge.styles";

export function Badge(props: BadgeProps) {
  props = mergeThemeProps(
    "Badge",
    {
      variant: "soft",
      color: "neutral",
      size: "sm",
    },
    props
  );

  const themeClasses = useThemeClasses<BadgeSlots>("Badge", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses"],
    ["variant", "color", "size"]
  );

  return (
    <Polymorphic
      fallback="span"
      class={cn(
        badgeVariants(variantProps),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      {...others}
    />
  );
}

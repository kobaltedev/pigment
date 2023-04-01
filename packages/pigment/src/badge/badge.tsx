import { Polymorphic } from "@kobalte/core";
import { splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { BadgeProps, BadgeSlots } from "./badge.props";
import { badgeVariants } from "./badge.styles";

const badgeStaticClass = makeStaticClass<BadgeSlots>("badge");

export function Badge(props: BadgeProps) {
  props = mergeThemeProps(
    "Badge",
    {
      variant: "soft",
      color: "neutral",
      size: "md",
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
        badgeStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      {...others}
    />
  );
}

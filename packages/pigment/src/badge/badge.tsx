import { Polymorphic } from "@kobalte/core";
import { splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { BadgeProps, BadgeSlots } from "./badge.props";
import { badgeVariants } from "./badge.styles";

export function Badge(props: BadgeProps) {
  props = mergeThemeProps("Badge", {}, props);

  const themeClasses = useThemeClasses<BadgeSlots>("Badge", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class"],
    ["variant", "colorScheme", "size"]
  );

  return (
    <Polymorphic
      fallback="span"
      class={cn(badgeVariants(variantProps), themeClasses.root, local.class)}
      {...others}
    />
  );
}

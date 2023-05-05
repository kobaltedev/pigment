import { Polymorphic, useLocale } from "@kobalte/core";
import { ComponentProps, createMemo, Show, splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { BadgeProps, BadgeSlots } from "./badge.props";
import { badgeStyles } from "./badge.styles";

const badgeStaticClass = makeStaticClass<BadgeSlots>("badge");

function Dot(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 6 6" aria-hidden={true} {...props}>
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export function Badge(props: BadgeProps) {
  props = mergeThemeProps(
    "Badge",
    {
      variant: "solid",
      color: "primary",
      size: "md",
      shape: "rounded",
    },
    props
  );

  const themeClasses = useThemeClasses<BadgeSlots>("Badge", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses", "children"],
    ["variant", "color", "size", "shape"]
  );

  const { direction } = useLocale();

  const isRTL = () => direction() === "rtl";

  const showDot = () => variantProps.variant === "dot";

  const styles = createMemo(() => badgeStyles(variantProps));

  return (
    <Polymorphic
      as="span"
      class={styles().root({
        class: [badgeStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <Show when={showDot() && !isRTL()}>
        <Dot class={styles().dot()} />
      </Show>
      {local.children}
      <Show when={showDot() && isRTL()}>
        <Dot class={styles().dot()} />
      </Show>
    </Polymorphic>
  );
}

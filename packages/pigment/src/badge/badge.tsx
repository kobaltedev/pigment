import { ComponentProps, createMemo, Show, splitProps, ValidComponent } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { BadgeProps, BadgeSlots } from "./badge.props";
import { badgeStyles } from "./badge.styles";
import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";

const badgeStaticClass = makeStaticClass<BadgeSlots>("badge");

function Dot(props: ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 6 6" aria-hidden={true} {...props}>
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

export function Badge<T extends ValidComponent = "span">(props: PolymorphicProps<T, BadgeProps>) {
  const mergedProps = mergeThemeProps(
    "Badge",
    {
      variant: "solid",
      color: "primary",
      size: "md",
      shape: "rounded",
    },
    props as BadgeProps
  );

  const themeClasses = useThemeClasses<BadgeSlots>("Badge", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
    ["class", "slotClasses", "children"],
    ["variant", "color", "size", "shape"]
  );

  const styles = createMemo(() => badgeStyles(variantProps));

  return (
    <Polymorphic
      as="span"
      class={styles().root({
        class: [badgeStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <Show when={variantProps.variant === "dot"}>
        <Dot class={styles().dot()} />
      </Show>
      {local.children}
    </Polymorphic>
  );
}

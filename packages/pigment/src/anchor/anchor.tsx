import { Link as KLink } from "@kobalte/core/link";
import { PolymorphicProps } from "@kobalte/core/polymorphic";
import { createMemo, splitProps, ValidComponent } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { AnchorProps, AnchorSlots } from "./anchor.props";
import { anchorStyles } from "./anchor.styles";

const anchorStaticClass = makeStaticClass<AnchorSlots>("anchor");

export function Anchor<T extends ValidComponent = "a">(props: PolymorphicProps<T, AnchorProps<T>>) {
  const mergedProps = mergeThemeProps("Anchor", {}, props as AnchorProps);

  const themeClasses = useThemeClasses<AnchorSlots>("Anchor", mergedProps);

  const [local, others] = splitProps(mergedProps, ["class", "slotClasses", "external"]);

  const styles = createMemo(() => anchorStyles());

  return (
    <KLink
      target={local.external ? "_blank" : undefined}
      rel={local.external ? "noopener noreferrer" : undefined}
      class={styles().root({
        class: [anchorStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    />
  );
}

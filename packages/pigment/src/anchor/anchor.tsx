import { Link as KLink } from "@kobalte/core";
import { createMemo, splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { AnchorProps, AnchorSlots } from "./anchor.props";
import { anchorStyles } from "./anchor.styles";

const anchorStaticClass = makeStaticClass<AnchorSlots>("anchor");

export function Anchor(props: AnchorProps) {
  props = mergeThemeProps("Anchor", {}, props);

  const themeClasses = useThemeClasses<AnchorSlots>("Anchor", props);

  const [local, others] = splitProps(props, ["class", "slotClasses", "external"]);

  const styles = createMemo(() => anchorStyles());

  return (
    <KLink.Root
      target={local.external ? "_blank" : undefined}
      rel={local.external ? "noopener noreferrer" : undefined}
      class={styles().root({
        class: [anchorStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    />
  );
}

import { COMMON_INTL_MESSAGES, createMessageFormatter } from "@kobalte/core";
import { JSX, splitProps } from "solid-js";
import { cnBase } from "tailwind-variants";

import { IconButton } from "../button";
import { TablerCrossIcon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CloseButtonProps, CloseButtonSlots } from "./close-button.props";

const closeButtonStaticClass = makeStaticClass<CloseButtonSlots>("close-button");

export function CloseButton(props: CloseButtonProps) {
  props = mergeThemeProps(
    "CloseButton",
    {
      size: "md",
      children: (() => <TablerCrossIcon />) as unknown as JSX.Element,
    },
    props
  );

  const themeClasses = useThemeClasses<CloseButtonSlots>("CloseButton", props);

  const [local, others] = splitProps(props, ["class", "slotClasses", "aria-label"]);

  const messageFormatter = createMessageFormatter(() => COMMON_INTL_MESSAGES);

  return (
    <IconButton
      class={cnBase(
        closeButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      aria-label={local["aria-label"] || messageFormatter().format("dismiss")}
      {...others}
    />
  );
}

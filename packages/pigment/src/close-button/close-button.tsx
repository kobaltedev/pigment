import {
  Button as KButton,
  COMMON_INTL_MESSAGES,
  createLocalizedStringFormatter,
} from "@kobalte/core";
import { JSX, splitProps } from "solid-js";

import { CrossIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { CloseButtonProps, CloseButtonSlots } from "./close-button.props";
import { closeButtonVariants } from "./close-button.styles";

const closeButtonStaticClass = makeStaticClass<CloseButtonSlots>("close-button");

export function CloseButton(props: CloseButtonProps) {
  props = mergeThemeProps(
    "CloseButton",
    {
      size: "md",
      inheritTextColor: false,
      isDisabled: false,
      children: (() => <CrossIcon />) as unknown as JSX.Element,
    },
    props
  );

  const themeClasses = useThemeClasses<CloseButtonSlots>("CloseButton", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses", "aria-label"],
    ["size", "inheritTextColor", "isDisabled"]
  );

  const stringFormatter = createLocalizedStringFormatter(() => COMMON_INTL_MESSAGES);

  return (
    <KButton.Root
      class={cn(
        closeButtonVariants(variantProps),
        closeButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      aria-label={local["aria-label"] || stringFormatter().format("dismiss")}
      isDisabled={variantProps.isDisabled}
      {...others}
    />
  );
}

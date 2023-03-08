import {
  Button as KButton,
  COMMON_INTL_MESSAGES,
  createLocalizedStringFormatter,
} from "@kobalte/core";
import { splitProps } from "solid-js";

import { CrossIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { CloseButtonProps, CloseButtonSlots } from "./close-button.props";
import { closeButtonVariants } from "./close-button.styles";

export function CloseButton(props: CloseButtonProps) {
  props = mergeThemeProps(
    "CloseButton",
    {
      children: () => <CrossIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<CloseButtonSlots>("CloseButton", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "aria-label"],
    ["size", "inheritTextColor", "isDisabled"]
  );

  const stringFormatter = createLocalizedStringFormatter(() => COMMON_INTL_MESSAGES);

  return (
    <KButton.Root
      class={cn(closeButtonVariants(variantProps), themeClasses.root, local.class)}
      aria-label={local["aria-label"] || stringFormatter().format("dismiss")}
      isDisabled={variantProps.isDisabled}
      {...others}
    />
  );
}

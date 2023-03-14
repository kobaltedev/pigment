import { Alert as KAlert } from "@kobalte/core";
import { children, createMemo, Show, splitProps } from "solid-js";

import { CloseButton } from "../close-button";
import {
  AlertCircleIcon,
  AlertTriangleIcon,
  CheckCircleIcon,
  HelpCircleIcon,
  InfoCircleIcon,
} from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertContentVariants, alertIconVariants, alertVariants } from "./alert.styles";

export function Alert(props: AlertProps) {
  props = mergeThemeProps(
    "Alert",
    {
      variant: "soft",
      status: "info",
      hasIcon: true,
      isDismissible: false,
      isSingleLine: false,
      successIcon: () => <CheckCircleIcon />,
      infoIcon: () => <InfoCircleIcon />,
      warningIcon: () => <AlertTriangleIcon />,
      dangerIcon: () => <AlertCircleIcon />,
      helpIcon: () => <HelpCircleIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", props);

  const [local, variantProps, others] = splitProps(
    props,
    [
      "class",
      "children",
      "title",
      "dismissButtonLabel",
      "successIcon",
      "infoIcon",
      "warningIcon",
      "dangerIcon",
      "helpIcon",
      "onDismiss",
    ],
    ["variant", "status", "hasIcon", "isDismissible", "isSingleLine"]
  );

  const title = createMemo(() => local.title);
  const description = children(() => local.children);

  return (
    <KAlert.Root
      class={cn(alertVariants(variantProps), themeClasses.root, local.class)}
      {...others}
    >
      <Show when={variantProps.hasIcon}>
        <div class={cn(alertIconVariants(variantProps), themeClasses.icon)} aria-hidden="true">
          {variantProps.status != null && local[`${variantProps.status}Icon`]}
        </div>
      </Show>
      <div class={cn(alertContentVariants(variantProps), themeClasses.content)}>
        <Show when={title()}>
          <div class={cn("font-semibold", themeClasses.title)}>{title()}</div>
        </Show>
        <Show when={description()}>
          <div class={cn("grow", themeClasses.description)}>{description()}</div>
        </Show>
      </div>
      <Show when={variantProps.isDismissible}>
        <CloseButton
          inheritTextColor
          size="xs"
          aria-label={local.dismissButtonLabel}
          class={cn("shrink-0", themeClasses.dismissButton)}
          onClick={local.onDismiss}
        />
      </Show>
    </KAlert.Root>
  );
}

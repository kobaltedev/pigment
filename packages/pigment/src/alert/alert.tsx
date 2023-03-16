import { Alert as KAlert } from "@kobalte/core";
import { children, createMemo, Show, splitProps } from "solid-js";

import { CloseButton } from "../close-button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  LifeBuoyIcon,
  QuestionMarkCircleIcon,
} from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertContentVariants, alertIconVariants, alertVariants } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

export function Alert(props: AlertProps) {
  props = mergeThemeProps(
    "Alert",
    {
      variant: "soft",
      status: "info",
      hasIcon: true,
      isDismissible: false,
      isMultiline: false,
      neutralIcon: () => <LifeBuoyIcon />,
      successIcon: () => <CheckCircleIcon />,
      infoIcon: () => <InfoCircleIcon />,
      warningIcon: () => <ExclamationTriangleIcon />,
      dangerIcon: () => <ExclamationCircleIcon />,
      helpIcon: () => <QuestionMarkCircleIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", props);

  const [local, variantProps, others] = splitProps(
    props,
    [
      "class",
      "children",
      "slotClasses",
      "title",
      "dismissButtonLabel",
      "neutralIcon",
      "successIcon",
      "infoIcon",
      "warningIcon",
      "dangerIcon",
      "helpIcon",
      "onDismiss",
    ],
    ["variant", "status", "hasIcon", "isDismissible", "isMultiline"]
  );

  const title = createMemo(() => local.title);
  const description = children(() => local.children);

  return (
    <KAlert.Root
      class={cn(
        alertVariants(variantProps),
        alertStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      {...others}
    >
      <Show when={variantProps.hasIcon}>
        <div
          class={cn(
            alertIconVariants(variantProps),
            alertStaticClass("icon"),
            themeClasses.icon,
            local.slotClasses?.icon
          )}
          aria-hidden="true"
        >
          {variantProps.status != null && local[`${variantProps.status}Icon`]}
        </div>
      </Show>
      <div
        class={cn(
          alertContentVariants(variantProps),
          alertStaticClass("content"),
          themeClasses.content,
          local.slotClasses?.content
        )}
      >
        <Show when={title()}>
          <div
            class={cn(
              "font-semibold",
              alertStaticClass("title"),
              themeClasses.title,
              local.slotClasses?.title
            )}
          >
            {title()}
          </div>
        </Show>
        <Show when={description()}>
          <div
            class={cn(
              "grow",
              alertStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description
            )}
          >
            {description()}
          </div>
        </Show>
      </div>
      <Show when={variantProps.isDismissible}>
        <CloseButton
          inheritTextColor
          size="xs"
          aria-label={local.dismissButtonLabel}
          class={cn(
            "shrink-0",
            alertStaticClass("dismissButton"),
            themeClasses.dismissButton,
            local.slotClasses?.dismissButton
          )}
          onClick={local.onDismiss}
        />
      </Show>
    </KAlert.Root>
  );
}

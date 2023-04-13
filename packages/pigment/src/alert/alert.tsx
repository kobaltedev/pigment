import { Alert as KAlert } from "@kobalte/core";
import { isFunction } from "@kobalte/utils";
import { children, createMemo, Show, splitProps } from "solid-js";

import { CloseButton } from "../close-button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  LifeBuoyIcon,
} from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertContentVariants, alertVariants } from "./alert.styles";

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
    },
    props
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "children", "slotClasses", "icon", "title", "dismissButtonLabel", "onDismiss"],
    ["variant", "status", "hasIcon", "isDismissible", "isMultiline"]
  );

  const iconProp = createMemo(() => local.icon);
  const title = createMemo(() => local.title);
  const description = children(() => local.children);

  const icon = () => {
    const icon = iconProp();

    if (icon) {
      return isFunction(icon) ? icon(variantProps.status) : icon;
    }

    switch (variantProps.status) {
      case "neutral":
        return LifeBuoyIcon;
      case "success":
        return CheckCircleIcon;
      case "info":
        return InfoCircleIcon;
      case "warning":
        return ExclamationTriangleIcon;
      case "danger":
        return ExclamationCircleIcon;
    }
  };

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
            "flex justify-center items-center shrink-0 reset-svg h-7 w-7 text-xl leading-none",
            alertStaticClass("icon"),
            themeClasses.icon,
            local.slotClasses?.icon
          )}
          aria-hidden="true"
        >
          {runIfFn(icon())}
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

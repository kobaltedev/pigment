import { Alert as KAlert } from "@kobalte/core";
import { isFunction } from "@kobalte/utils";
import { children, createMemo, Show, splitProps } from "solid-js";

import { CloseButton } from "../close-button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  HelpCircleIcon,
  InfoCircleIcon,
} from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertContentVariants, alertStyles } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

export function Alert(props: AlertProps) {
  props = mergeThemeProps(
    "Alert",
    {
      variant: "solid",
      color: "primary",
      withIcon: true,
      dismissible: false,
      multiline: false,
    },
    props
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "children", "slotClasses", "icon", "title", "dismissButtonLabel", "onDismiss"],
    ["variant", "color", "withIcon", "dismissible", "multiline"]
  );

  const iconProp = createMemo(() => local.icon);
  const title = createMemo(() => local.title);
  const description = children(() => local.children);

  const icon = () => {
    const icon = iconProp();

    if (icon) {
      return isFunction(icon) ? icon(variantProps.color) : icon;
    }

    switch (variantProps.color) {
      case "success":
        return CheckCircleIcon;
      case "info":
        return InfoCircleIcon;
      case "warning":
        return ExclamationTriangleIcon;
      case "danger":
        return ExclamationCircleIcon;
      default:
        return HelpCircleIcon;
    }
  };

  return (
    <KAlert.Root
      class={cn(
        alertStyles(variantProps),
        alertStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      {...others}
    >
      <Show when={variantProps.withIcon}>
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
      <Show when={variantProps.dismissible}>
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

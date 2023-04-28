import { Alert as KAlert } from "@kobalte/core";
import { children, createMemo, Show, splitProps } from "solid-js";

import { CloseButton } from "../close-button";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  HelpCircleIcon,
  InfoCircleIcon,
  LifeBuoyIcon,
  RocketIcon,
} from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertStyles } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

export function Alert(props: AlertProps) {
  props = mergeThemeProps(
    "Alert",
    {
      variant: "solid",
      color: "primary",
      rounded: "md",
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
    ["variant", "color", "rounded", "withIcon", "dismissible", "multiline"]
  );

  const styles = createMemo(() => alertStyles(variantProps));

  const iconProp = createMemo(() => local.icon);
  const title = createMemo(() => local.title);
  const description = children(() => local.children);

  const icon = () => {
    const icon = iconProp();

    if (icon) {
      return runIfFn(icon, variantProps.color);
    }

    switch (variantProps.color) {
      case "primary":
        return RocketIcon;
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
      default:
        return HelpCircleIcon;
    }
  };

  return (
    <KAlert.Root
      class={styles().root({
        class: [alertStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <Show when={variantProps.withIcon}>
        <div
          class={styles().icon({
            class: [alertStaticClass("icon"), themeClasses.icon, local.slotClasses?.icon],
          })}
          aria-hidden="true"
        >
          {runIfFn(icon())}
        </div>
      </Show>
      <div
        class={styles().content({
          class: [alertStaticClass("content"), themeClasses.content, local.slotClasses?.content],
        })}
      >
        <Show when={title()}>
          <div
            class={styles().title({
              class: [alertStaticClass("title"), themeClasses.title, local.slotClasses?.title],
            })}
          >
            {title()}
          </div>
        </Show>
        <Show when={description()}>
          <div
            class={styles().description({
              class: [
                alertStaticClass("description"),
                themeClasses.description,
                local.slotClasses?.description,
              ],
            })}
          >
            {description()}
          </div>
        </Show>
      </div>
      <Show when={variantProps.dismissible}>
        <CloseButton
          inheritTextColor
          size="sm"
          rounded={variantProps.rounded}
          aria-label={local.dismissButtonLabel}
          class={styles().dismissButton({
            class: [
              alertStaticClass("dismissButton"),
              themeClasses.dismissButton,
              local.slotClasses?.dismissButton,
            ],
          })}
          onClick={local.onDismiss}
        />
      </Show>
    </KAlert.Root>
  );
}

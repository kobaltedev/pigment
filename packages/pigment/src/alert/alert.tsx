import { Alert as KAlert, useLocale } from "@kobalte/core";
import { createMemo, Match, Show, splitProps, Switch } from "solid-js";

import {
  TablerAlertOctagonIcon,
  TablerAlertTriangleIcon,
  TablerCircleCheckIcon,
  TablerHelpHexagonIcon,
  TablerInfoCircleIcon,
  TablerLifebuoyIcon,
} from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertStyles } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

const DEFAULT_ICON_CLASSES = "h-6 w-6";

export function Alert(props: AlertProps) {
  props = mergeThemeProps(
    "Alert",
    {
      variant: "soft",
      status: "info",
    },
    props
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "children", "slotClasses", "startDecorator", "endDecorator"],
    ["variant", "status"]
  );

  const { direction } = useLocale();

  const isRTL = () => direction() == "rtl";

  const styles = createMemo(() => alertStyles(variantProps));

  const defaultStartDecorator = () => {
    return (
      <Switch>
        <Match when={variantProps.status === "neutral"}>
          <TablerLifebuoyIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
        <Match when={variantProps.status === "success"}>
          <TablerCircleCheckIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
        <Match when={variantProps.status === "info"}>
          <TablerInfoCircleIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
        <Match when={variantProps.status === "warning"}>
          <TablerAlertTriangleIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
        <Match when={variantProps.status === "danger"}>
          <TablerAlertOctagonIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
        <Match when={variantProps.status === "discovery"}>
          <TablerHelpHexagonIcon aria-hidden="true" class={DEFAULT_ICON_CLASSES} />
        </Match>
      </Switch>
    );
  };

  const decorators = createMemo(() => {
    const start = runIfFn(local.startDecorator, variantProps.status!) ?? defaultStartDecorator();

    const end = runIfFn(local.endDecorator, variantProps.status!);

    return {
      left: isRTL() ? end : start,
      right: isRTL() ? start : end,
    };
  });

  const decoratorClasses = createMemo(() => {
    const start = styles().startDecorator({
      class: [
        alertStaticClass("startDecorator"),
        themeClasses.startDecorator,
        local.slotClasses?.startDecorator,
        isRTL() ? "ml-2.5" : "mr-2.5",
      ],
    });

    const end = styles().endDecorator({
      class: [
        alertStaticClass("endDecorator"),
        themeClasses.endDecorator,
        local.slotClasses?.endDecorator,
        isRTL() ? "mr-auto" : "ml-auto",
      ],
    });

    return {
      left: isRTL() ? end : start,
      right: isRTL() ? start : end,
    };
  });

  return (
    <KAlert.Root
      class={styles().root({
        class: [alertStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <Show when={decorators().left}>
        <span class={decoratorClasses().left}>{decorators().left}</span>
      </Show>
      {runIfFn(local.children)}
      <Show when={decorators().right}>
        <span class={decoratorClasses().right}>{decorators().right}</span>
      </Show>
    </KAlert.Root>
  );
}

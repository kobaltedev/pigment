import { Alert as KAlert } from "@kobalte/core";
import { createMemo, JSX, Show, splitProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

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
import { alertStyles, AlertVariants } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

const ALERT_ICONS: Record<Exclude<AlertVariants["status"], undefined>, ValidComponent> = {
  neutral: TablerLifebuoyIcon,
  success: TablerCircleCheckIcon,
  info: TablerInfoCircleIcon,
  warning: TablerAlertTriangleIcon,
  danger: TablerAlertOctagonIcon,
  discovery: TablerHelpHexagonIcon,
};

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

  const styles = createMemo(() => alertStyles(variantProps));

  const startDecorator = createMemo(() => {
    return runIfFn(local.startDecorator, variantProps.status!);
  });

  const endDecorator = createMemo(() => {
    return runIfFn(local.endDecorator, variantProps.status!);
  });

  return (
    <KAlert.Root
      class={styles().root({
        class: [alertStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <span
        class={styles().startDecorator({
          class: [
            alertStaticClass("startDecorator"),
            themeClasses.startDecorator,
            local.slotClasses?.startDecorator,
          ],
        })}
      >
        <Show
          when={startDecorator()}
          fallback={
            <Dynamic
              component={ALERT_ICONS[variantProps.status!]}
              aria-hidden="true"
              class="h-6 w-6"
            />
          }
        >
          {startDecorator()}
        </Show>
      </span>
      {local.children}
      <Show when={endDecorator()}>
        <span
          class={styles().endDecorator({
            class: [
              alertStaticClass("endDecorator"),
              themeClasses.endDecorator,
              local.slotClasses?.endDecorator,
            ],
          })}
        >
          {endDecorator()}
        </span>
      </Show>
    </KAlert.Root>
  );
}

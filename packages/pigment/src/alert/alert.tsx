import { Alert as KAlert } from "@kobalte/core";
import { createMemo, Show, splitProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";

import {
  TablerAlertCircleFilledIcon,
  TablerAlertTriangleFilledIcon,
  TablerCircleCheckFilledIcon,
  TablerHelpCircleFilledIcon,
  TablerInfoCircleFilledIcon,
} from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { AlertProps, AlertSlots } from "./alert.props";
import { alertStyles, AlertVariants } from "./alert.styles";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

const ALERT_ICONS: Record<Exclude<AlertVariants["status"], undefined>, ValidComponent> = {
  success: TablerCircleCheckFilledIcon,
  info: TablerInfoCircleFilledIcon,
  warning: TablerAlertTriangleFilledIcon,
  danger: TablerAlertCircleFilledIcon,
  discovery: TablerHelpCircleFilledIcon,
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
    ["class", "children", "slotClasses", "leadingSection", "trailingSection"],
    ["variant", "status"]
  );

  const styles = createMemo(() => alertStyles(variantProps));

  const leadingSection = createMemo(() => {
    return runIfFn(local.leadingSection, variantProps.status!);
  });

  const trailingSection = createMemo(() => {
    return runIfFn(local.trailingSection, variantProps.status!);
  });

  return (
    <KAlert.Root
      class={styles().root({
        class: [alertStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      {...others}
    >
      <span
        class={styles().leadingSection({
          class: [
            alertStaticClass("leadingSection"),
            themeClasses.leadingSection,
            local.slotClasses?.leadingSection,
          ],
        })}
      >
        <Show
          when={leadingSection()}
          fallback={
            <Dynamic
              component={ALERT_ICONS[variantProps.status!]}
              aria-hidden="true"
              class={styles().icon({
                class: [alertStaticClass("icon"), themeClasses.icon, local.slotClasses?.icon],
              })}
            />
          }
        >
          {leadingSection()}
        </Show>
      </span>
      {local.children}
      <Show when={trailingSection()}>
        <span
          class={styles().trailingSection({
            class: [
              alertStaticClass("trailingSection"),
              themeClasses.trailingSection,
              local.slotClasses?.trailingSection,
            ],
          })}
        >
          {trailingSection()}
        </span>
      </Show>
    </KAlert.Root>
  );
}

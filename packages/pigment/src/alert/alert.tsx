import { Alert as KAlert } from "@kobalte/core/alert";
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
import { PolymorphicProps } from "@kobalte/core/polymorphic";

const alertStaticClass = makeStaticClass<AlertSlots>("alert");

const ALERT_ICONS: Record<Exclude<AlertVariants["status"], undefined>, ValidComponent> = {
  success: TablerCircleCheckFilledIcon,
  info: TablerInfoCircleFilledIcon,
  warning: TablerAlertTriangleFilledIcon,
  danger: TablerAlertCircleFilledIcon,
  discovery: TablerHelpCircleFilledIcon,
};

export function Alert<T extends ValidComponent = "div">(props: PolymorphicProps<T, AlertProps<T>>) {
  const mergedProps = mergeThemeProps(
    "Alert",
    {
      variant: "soft",
      status: "info",
    },
    props as AlertProps
  );

  const themeClasses = useThemeClasses<AlertSlots>("Alert", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
    ["class", "children", "slotClasses", "icon", "leadingSection", "trailingSection"],
    ["variant", "status"]
  );

  const styles = createMemo(() => alertStyles(variantProps));

  const icon = createMemo(() => {
    return runIfFn(local.icon, variantProps.status!);
  });

  const leadingSection = createMemo(() => {
    return runIfFn(local.leadingSection, variantProps.status!);
  });

  const trailingSection = createMemo(() => {
    return runIfFn(local.trailingSection, variantProps.status!);
  });

  return (
    <KAlert
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
            <span
              aria-hidden="true"
              class={styles().icon({
                class: [alertStaticClass("icon"), themeClasses.icon, local.slotClasses?.icon],
              })}
            >
              <Show
                when={icon()}
                fallback={<Dynamic component={ALERT_ICONS[variantProps.status!]} />}
              >
                {icon()}
              </Show>
            </span>
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
    </KAlert>
  );
}

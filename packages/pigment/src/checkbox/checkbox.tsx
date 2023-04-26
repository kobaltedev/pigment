import { Checkbox as KCheckbox, useLocale } from "@kobalte/core";
import { createMemo, createUniqueId, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, MinusIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import { checkboxStyles } from "./checkbox.styles";

const checkboxStaticClass = makeStaticClass<CheckboxSlots>("checkbox");

export function Checkbox(props: CheckboxProps) {
  const descriptionId = `checkbox-${createUniqueId()}-description`;
  const errorId = `checkbox-${createUniqueId()}-error`;

  props = mergeThemeProps(
    "Checkbox",
    {
      variant: "outlined",
      size: "md",
      labelPlacement: "end",
      invalid: false,
      disabled: false,
      withErrorIcon: true,
      inputProps: {},
      errorIcon: () => <ExclamationCircleIcon />,
      checkedIcon: () => <CheckIcon />,
      indeterminateIcon: () => <MinusIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<CheckboxSlots>("Checkbox", props);

  const [local, variantProps, others] = splitProps(
    props,
    [
      "ref",
      "id",
      "class",
      "slotClasses",
      "inputProps",
      "labelPlacement",
      "label",
      "description",
      "error",
      "withErrorIcon",
      "errorIcon",
      "checkedIcon",
      "indeterminateIcon",
    ],
    ["variant", "size", "invalid", "disabled"]
  );

  const styles = createMemo(() => checkboxStyles(variantProps));

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const label = createMemo(() => runIfFn(local.label));
  const description = createMemo(() => runIfFn(local.description));
  const error = createMemo(() => runIfFn(local.error));
  const errorIcon = createMemo(() => runIfFn(local.errorIcon));

  const showError = () => {
    return variantProps.invalid && error();
  };

  const ariaDescribedBy = () => {
    return [
      showError() ? errorId : null,
      description() ? descriptionId : null,
      local.inputProps?.["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ");
  };

  const rootFlexDirection = createMemo(() => {
    if (local.labelPlacement === "start") {
      return isRtl() ? "flex-row" : "flex-row-reverse";
    } else if (local.labelPlacement === "end") {
      return isRtl() ? "flex-row-reverse" : "flex-row";
    }
  });

  return (
    <KCheckbox.Root
      class={styles().root({
        class: [
          rootFlexDirection(),
          checkboxStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      validationState={variantProps.invalid ? "invalid" : undefined}
      disabled={variantProps.disabled}
      {...others}
    >
      {state => (
        <>
          <KCheckbox.Input
            {...local.inputProps}
            ref={local.ref}
            id={local.id}
            class={styles().input({ class: local.inputProps?.class })}
            aria-describedby={ariaDescribedBy()}
          />
          <KCheckbox.Control
            class={styles().control({
              class: [
                checkboxStaticClass("control"),
                themeClasses.control,
                local.slotClasses?.control,
              ],
            })}
          >
            <KCheckbox.Indicator
              class={styles().indicator({
                class: [
                  checkboxStaticClass("indicator"),
                  themeClasses.indicator,
                  local.slotClasses?.indicator,
                ],
              })}
            >
              <Show when={state.indeterminate()} fallback={runIfFn(local.checkedIcon)}>
                {runIfFn(local.indeterminateIcon)}
              </Show>
            </KCheckbox.Indicator>
          </KCheckbox.Control>
          <div
            class={styles().labelWrapper({
              class: [
                checkboxStaticClass("labelWrapper"),
                themeClasses.labelWrapper,
                local.slotClasses?.labelWrapper,
              ],
            })}
          >
            <Show when={label()}>
              <KCheckbox.Label
                class={styles().label({
                  class: [
                    checkboxStaticClass("label"),
                    themeClasses.label,
                    local.slotClasses?.label,
                  ],
                })}
              >
                {label()}
              </KCheckbox.Label>
            </Show>
            <Show when={description()}>
              <span
                id={descriptionId}
                class={styles().supportText({
                  class: [
                    "text-content-subtler",
                    checkboxStaticClass("description"),
                    themeClasses.description,
                    local.slotClasses?.description,
                  ],
                })}
              >
                {description()}
              </span>
            </Show>
            <Show when={showError()}>
              <span
                id={errorId}
                class={styles().supportText({
                  class: [
                    "inline-flex items-center gap-x-1 text-content-danger",
                    checkboxStaticClass("error"),
                    themeClasses.error,
                    local.slotClasses?.error,
                  ],
                })}
              >
                <Show when={local.withErrorIcon} fallback={error()}>
                  <span
                    aria-hidden="true"
                    class={styles().errorIcon({
                      class: [
                        checkboxStaticClass("errorIcon"),
                        themeClasses.errorIcon,
                        local.slotClasses?.errorIcon,
                      ],
                    })}
                  >
                    {errorIcon()}
                  </span>
                  <span>{error()}</span>
                </Show>
              </span>
            </Show>
          </div>
        </>
      )}
    </KCheckbox.Root>
  );
}

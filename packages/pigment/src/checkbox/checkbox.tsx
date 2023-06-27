import { Checkbox as KCheckbox } from "@kobalte/core";
import { isString } from "@kobalte/utils";
import { createMemo, JSX, Show, splitProps } from "solid-js";

import { Icon } from "../icon";
import { mergeThemeProps, useThemeClasses, useThemeContext } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import { checkboxStyles } from "./checkbox.styles";

const checkboxStaticClass = makeStaticClass<CheckboxSlots>("checkbox");

export function Checkbox(props: CheckboxProps) {
  const themeContext = useThemeContext();

  props = mergeThemeProps(
    "Checkbox",
    {
      size: "md",
      disabled: false,
      inputProps: {},
      checkedIcon: "i-tabler-check",
      indeterminateIcon: "i-tabler-minus",
      errorIcon: themeContext.errorIcon,
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
      "invalid",
      "label",
      "description",
      "errorMessage",
      "checkedIcon",
      "indeterminateIcon",
      "errorIcon",
    ],
    ["size"]
  );

  const styles = createMemo(() => checkboxStyles(variantProps));

  const label = createMemo(() => local.label as unknown as JSX.Element);
  const description = createMemo(() => local.description as unknown as JSX.Element);
  const errorMessage = createMemo(() => local.errorMessage as unknown as JSX.Element);

  const showError = () => {
    return local.invalid && errorMessage();
  };

  // Prevent mounting the supporting texts wrapper when there is no text to show.
  const showSupportTextWrapper = () => {
    return description() || showError();
  };

  const checkedIcon = createMemo(() => {
    if (isString(local.checkedIcon)) {
      return <Icon name={local.checkedIcon as string} />;
    }

    return local.checkedIcon as unknown as JSX.Element;
  });

  const indeterminateIcon = createMemo(() => {
    if (isString(local.indeterminateIcon)) {
      return <Icon name={local.indeterminateIcon as string} />;
    }

    return local.indeterminateIcon as unknown as JSX.Element;
  });

  const errorIcon = createMemo(() => {
    if (isString(local.errorIcon)) {
      return <Icon name={local.errorIcon as string} />;
    }

    return local.errorIcon as unknown as JSX.Element;
  });

  return (
    <KCheckbox.Root
      class={styles().root({
        class: [
          checkboxStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      validationState={local.invalid ? "invalid" : undefined}
      {...others}
    >
      {state => (
        <>
          <div
            class={styles().actionWrapper({
              class: [
                checkboxStaticClass("actionWrapper"),
                themeClasses.actionWrapper,
                local.slotClasses?.actionWrapper,
              ],
            })}
          >
            <KCheckbox.Input
              {...local.inputProps}
              ref={local.ref}
              id={local.id}
              class={styles().input({ class: local.inputProps?.class })}
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
                class={styles().icon({
                  class: [checkboxStaticClass("icon"), themeClasses.icon, local.slotClasses?.icon],
                })}
              >
                <Show when={state.indeterminate()} fallback={checkedIcon()}>
                  {indeterminateIcon()}
                </Show>
              </KCheckbox.Indicator>
            </KCheckbox.Control>
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
          </div>
          <Show when={showSupportTextWrapper()}>
            <div
              class={styles().supportTextWrapper({
                class: [
                  checkboxStaticClass("supportTextWrapper"),
                  themeClasses.supportTextWrapper,
                  local.slotClasses?.supportTextWrapper,
                ],
              })}
            >
              <Show when={description()}>
                <KCheckbox.Description
                  class={styles().supportText({
                    class: [
                      "text-content-subtle",
                      checkboxStaticClass("description"),
                      themeClasses.description,
                      local.slotClasses?.description,
                    ],
                  })}
                >
                  {description()}
                </KCheckbox.Description>
              </Show>
              <Show when={showError()}>
                <KCheckbox.ErrorMessage
                  class={styles().supportText({
                    class: [
                      "flex items-center gap-x-1 text-content-danger",
                      checkboxStaticClass("errorMessage"),
                      themeClasses.errorMessage,
                      local.slotClasses?.errorMessage,
                    ],
                  })}
                >
                  <div
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
                  </div>
                  {errorMessage()}
                </KCheckbox.ErrorMessage>
              </Show>
            </div>
          </Show>
        </>
      )}
    </KCheckbox.Root>
  );
}

import { Checkbox as KCheckbox, useLocale } from "@kobalte/core";
import { createMemo, JSX, Show, splitProps } from "solid-js";

import { createIcon, TablerAlertOctagonIcon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import { checkboxStyles } from "./checkbox.styles";

const checkboxStaticClass = makeStaticClass<CheckboxSlots>("checkbox");

const CheckboxCheckIcon = createIcon({
  viewBox: "0 0 16 16",
  path: () => (
    <path
      fill="currentColor"
      d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
    />
  ),
});

const CheckboxIndeterminateIcon = createIcon({
  viewBox: "0 0 16 16",
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 8h8"
    />
  ),
});

export function Checkbox(props: CheckboxProps) {
  props = mergeThemeProps(
    "Checkbox",
    {
      size: "md",
      disabled: false,
      inputProps: {},
      errorIndicator: () => <TablerAlertOctagonIcon />,
      checkedIndicator: () => <CheckboxCheckIcon />,
      indeterminateIndicator: () => <CheckboxIndeterminateIcon />,
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
      "errorIndicator",
      "checkedIndicator",
      "indeterminateIndicator",
    ],
    ["size"]
  );

  const styles = createMemo(() => checkboxStyles(variantProps));

  const { direction } = useLocale();

  const isRTL = () => direction() === "rtl";

  const label = createMemo(() => local.label as unknown as JSX.Element);
  const description = createMemo(() => local.description as unknown as JSX.Element);
  const errorMessage = createMemo(() => local.errorMessage as unknown as JSX.Element);
  const errorIndicator = createMemo(() => local.errorIndicator as unknown as JSX.Element);

  const showError = () => {
    return local.invalid && errorMessage();
  };

  // Prevent mounting the label wrapper when there is no text to show.
  const showLabelWrapper = () => {
    return label() || description() || showError();
  };

  return (
    <KCheckbox.Root
      class={styles().root({
        class: [
          isRTL() ? "flex-row-reverse" : "flex-row",
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
              class={styles().indicator({
                class: [
                  checkboxStaticClass("indicator"),
                  themeClasses.indicator,
                  local.slotClasses?.indicator,
                ],
              })}
            >
              <Show
                when={state.indeterminate()}
                fallback={local.checkedIndicator as unknown as JSX.Element}
              >
                {local.indeterminateIndicator as unknown as JSX.Element}
              </Show>
            </KCheckbox.Indicator>
          </KCheckbox.Control>
          <Show when={showLabelWrapper()}>
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
                      description() ? "font-medium" : "",
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
                      label() || description() ? "mt-0.5" : "",
                      "inline-flex items-center gap-x-1 text-content-danger",
                      checkboxStaticClass("errorMessage"),
                      themeClasses.errorMessage,
                      local.slotClasses?.errorMessage,
                    ],
                  })}
                >
                  <span
                    aria-hidden="true"
                    class={styles().errorIndicator({
                      class: [
                        checkboxStaticClass("errorIndicator"),
                        themeClasses.errorIndicator,
                        local.slotClasses?.errorIndicator,
                      ],
                    })}
                  >
                    {errorIndicator()}
                  </span>
                  <span>{errorMessage()}</span>
                </KCheckbox.ErrorMessage>
              </Show>
            </div>
          </Show>
        </>
      )}
    </KCheckbox.Root>
  );
}

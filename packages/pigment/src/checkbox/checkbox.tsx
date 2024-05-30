import { Checkbox as KCheckbox } from "@kobalte/core/checkbox";
import { createMemo, JSX, Show, splitProps, ValidComponent } from "solid-js";

import { createIcon, TablerAlertCircleFilledIcon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import { checkboxStyles } from "./checkbox.styles";
import { PolymorphicProps } from "@kobalte/core/polymorphic";

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

export function Checkbox<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, CheckboxProps<T>>
) {
  const mergedProps = mergeThemeProps(
    "Checkbox",
    {
      size: "md",
      disabled: false,
      inputProps: {},
      checkedIcon: () => <CheckboxCheckIcon />,
      indeterminateIcon: () => <CheckboxIndeterminateIcon />,
      errorIcon: () => <TablerAlertCircleFilledIcon />,
    },
    props as CheckboxProps
  );

  const themeClasses = useThemeClasses<CheckboxSlots>("Checkbox", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
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

  return (
    <KCheckbox
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
                <Show
                  when={state.indeterminate()}
                  fallback={local.checkedIcon as unknown as JSX.Element}
                >
                  {local.indeterminateIcon as unknown as JSX.Element}
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
                    {local.errorIcon as unknown as JSX.Element}
                  </div>
                  {errorMessage()}
                </KCheckbox.ErrorMessage>
              </Show>
            </div>
          </Show>
        </>
      )}
    </KCheckbox>
  );
}

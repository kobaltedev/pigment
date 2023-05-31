import { TextField as KTextField } from "@kobalte/core";
import { ComponentProps, createMemo, JSX, mergeProps, Show, splitProps } from "solid-js";

import { TablerAlertTriangleFilled } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import { textFieldStyles } from "./text-field.styles";

const textFieldStaticClass = makeStaticClass<TextFieldSlots>("text-field");

export function TextField(props: TextFieldProps) {
  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      size: "md",
      invalid: false,
      disabled: false,
      inputProps: {},
      errorIcon: () => <TablerAlertTriangleFilled />,
    },
    props
  );

  const themeClasses = useThemeClasses<TextFieldSlots>("TextField", props);

  const [local, partialVariantProps, others] = splitProps(
    props,
    [
      "ref",
      "id",
      "class",
      "slotClasses",
      "inputProps",
      "type",
      "placeholder",
      "multiline",
      "invalid",
      "label",
      "description",
      "errorMessage",
      "errorIcon",
      "leadingIcon",
      "trailingIcon",
    ],
    ["size"]
  );

  const label = createMemo(() => local.label as unknown as JSX.Element);
  const description = createMemo(() => local.description as unknown as JSX.Element);
  const errorMessage = createMemo(() => local.errorMessage as unknown as JSX.Element);
  const leadingIcon = createMemo(() => local.leadingIcon as unknown as JSX.Element);
  const trailingIcon = createMemo(() => local.trailingIcon as unknown as JSX.Element);

  const showError = () => {
    return local.invalid && errorMessage() != null && errorMessage() != "";
  };

  const variantProps = mergeProps(
    {
      get hasLeadingIcon() {
        return leadingIcon() != null;
      },
      get hasTrailingIcon() {
        return showError() || trailingIcon() != null;
      },
    },
    partialVariantProps
  );

  const styles = createMemo(() => textFieldStyles(variantProps));

  return (
    <KTextField.Root
      class={styles().root({
        class: [
          textFieldStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      validationState={local.invalid ? "invalid" : undefined}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={styles().label({
            class: [
              description() ? "" : "mb-1",
              textFieldStaticClass("label"),
              themeClasses.label,
              local.slotClasses?.label,
            ],
          })}
        >
          {label()}
          <Show when={others.required}>
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KTextField.Label>
      </Show>
      <Show when={description()}>
        <KTextField.Description
          class={styles().supportText({
            class: [
              "text-content-subtle mb-1",
              textFieldStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description,
            ],
          })}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show
        when={!local.multiline}
        fallback={
          <KTextField.TextArea
            {...(local.inputProps as ComponentProps<"textarea">)}
            ref={local.ref as HTMLTextAreaElement}
            id={local.id}
            placeholder={local.placeholder}
            class={styles().textArea({
              class: [
                textFieldStaticClass("input"),
                themeClasses.input,
                local.slotClasses?.input,
                local.inputProps?.class,
              ],
            })}
          />
        }
      >
        <div class="relative self-stretch">
          <KTextField.Input
            {...(local.inputProps as ComponentProps<"input">)}
            ref={local.ref as HTMLInputElement}
            id={local.id}
            type={local.type}
            placeholder={local.placeholder}
            class={styles().input({
              class: [
                textFieldStaticClass("input"),
                themeClasses.input,
                local.slotClasses?.input,
                local.inputProps?.class,
              ],
            })}
          />
          <Show when={leadingIcon()}>
            <div
              data-invalid={local.invalid ? "" : undefined}
              data-disabled={others.disabled ? "" : undefined}
              class={styles().leadingIcon({
                class: [
                  textFieldStaticClass("leadingIcon"),
                  themeClasses.leadingIcon,
                  local.slotClasses?.leadingIcon,
                ],
              })}
            >
              {leadingIcon()}
            </div>
          </Show>
          <Show when={trailingIcon() && !showError()}>
            <div
              data-invalid={local.invalid ? "" : undefined}
              data-disabled={others.disabled ? "" : undefined}
              class={styles().trailingIcon({
                class: [
                  textFieldStaticClass("trailingIcon"),
                  themeClasses.trailingIcon,
                  local.slotClasses?.trailingIcon,
                ],
              })}
            >
              {trailingIcon()}
            </div>
          </Show>
          <Show when={showError()}>
            <div
              data-invalid={local.invalid ? "" : undefined}
              data-disabled={others.disabled ? "" : undefined}
              class={styles().errorIcon({
                class: [
                  textFieldStaticClass("errorIcon"),
                  themeClasses.errorIcon,
                  local.slotClasses?.errorIcon,
                ],
              })}
            >
              {local.errorIcon as unknown as JSX.Element}
            </div>
          </Show>
        </div>
      </Show>
      <Show when={showError()}>
        <KTextField.ErrorMessage
          class={styles().supportText({
            class: [
              "text-content-danger mt-1.5",
              textFieldStaticClass("errorMessage"),
              themeClasses.errorMessage,
              local.slotClasses?.errorMessage,
            ],
          })}
        >
          {errorMessage()}
        </KTextField.ErrorMessage>
      </Show>
    </KTextField.Root>
  );
}

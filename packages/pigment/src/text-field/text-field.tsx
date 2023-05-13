import { TextField as KTextField, useLocale } from "@kobalte/core";
import { callHandler } from "@kobalte/utils";
import {
  ComponentProps,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
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
    ],
    ["size"]
  );

  const [isFocused, setIsFocused] = createSignal(false);

  const label = createMemo(() => local.label as unknown as JSX.Element);
  const description = createMemo(() => local.description as unknown as JSX.Element);
  const errorMessage = createMemo(() => local.errorMessage as unknown as JSX.Element);

  const showError = () => {
    return local.invalid && errorMessage();
  };

  const variantProps = mergeProps(
    {
      get focused() {
        return isFocused();
      },
    },
    partialVariantProps
  );

  const styles = createMemo(() => textFieldStyles(variantProps));

  const onInputFocus: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onFocus as any);
    setIsFocused(true);
  };

  const onInputBlur: JSX.FocusEventHandlerUnion<HTMLInputElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onBlur as any);
    setIsFocused(false);
  };

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
            class: [textFieldStaticClass("label"), themeClasses.label, local.slotClasses?.label],
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
              "text-content-subtle",
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
        <div
          data-invalid={local.invalid ? "" : undefined}
          data-disabled={others.disabled ? "" : undefined}
          class={styles().control({
            class: [
              textFieldStaticClass("control"),
              themeClasses.control,
              local.slotClasses?.control,
            ],
          })}
        >
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
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
        </div>
      </Show>
      <Show when={showError()}>
        <KTextField.ErrorMessage
          class={styles().supportText({
            class: [
              "text-content-danger",
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

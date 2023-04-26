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

import { ExclamationCircleIcon } from "../icons";
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
      withRequiredIndicator: true,
      withErrorIcon: true,
      variant: "outlined",
      size: "md",
      invalid: false,
      disabled: false,
      inputProps: {},
      errorIcon: (() => <ExclamationCircleIcon />) as unknown as JSX.Element,
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
      "type",
      "placeholder",
      "inputProps",
      "multiline",
      "label",
      "description",
      "error",
      "withRequiredIndicator",
      "withErrorIcon",
      "errorIcon",
      "startDecorator",
      "endDecorator",
    ],
    ["variant", "size", "invalid", "disabled"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const [isFocused, setIsFocused] = createSignal(false);

  const label = createMemo(() => runIfFn(local.label));
  const description = createMemo(() => runIfFn(local.description));
  const error = createMemo(() => runIfFn(local.error));
  const errorIcon = createMemo(() => runIfFn(local.errorIcon));

  const showDescription = () => {
    return !variantProps.invalid && description();
  };

  const showError = () => {
    return variantProps.invalid && error();
  };

  const leftDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.endDecorator : local.startDecorator);
  });

  const rightDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.startDecorator : local.endDecorator);
  });

  const variantProps = mergeProps(
    {
      get withLeftDecorator() {
        return leftDecorator() != null;
      },
      get withRightDecorator() {
        return rightDecorator() != null;
      },
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
      validationState={variantProps.invalid ? "invalid" : undefined}
      disabled={variantProps.disabled}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={styles().label({
            class: [textFieldStaticClass("label"), themeClasses.label, local.slotClasses?.label],
          })}
        >
          {label()}
          <Show when={local.withRequiredIndicator && others.required}>
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KTextField.Label>
      </Show>
      <Show
        when={!local.multiline}
        fallback={
          <KTextField.TextArea
            {...(local.inputProps as ComponentProps<"textarea">)}
            ref={local.ref as HTMLTextAreaElement}
            id={local.id}
            placeholder={local.placeholder}
            autoResize
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
          class={styles().control({
            class: [
              textFieldStaticClass("control"),
              themeClasses.control,
              local.slotClasses?.control,
            ],
          })}
        >
          {leftDecorator()}
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
          {rightDecorator()}
        </div>
      </Show>
      <Show when={showDescription()}>
        <KTextField.Description
          class={styles().supportText({
            class: [
              "text-content-subtler",
              textFieldStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description,
            ],
          })}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show when={showError()}>
        <KTextField.ErrorMessage
          class={styles().supportText({
            class: [
              "flex items-center gap-x-1 text-content-danger",
              textFieldStaticClass("error"),
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
                  textFieldStaticClass("errorIcon"),
                  themeClasses.errorIcon,
                  local.slotClasses?.errorIcon,
                ],
              })}
            >
              {errorIcon()}
            </span>
            <span>{error()}</span>
          </Show>
        </KTextField.ErrorMessage>
      </Show>
    </KTextField.Root>
  );
}

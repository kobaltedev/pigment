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
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import {
  textFieldControlVariants,
  textFieldInputVariants,
  textFieldLabelVariants,
  textFieldSupportTextVariants,
  textFieldTextAreaVariants,
} from "./text-field.styles";

const textFieldStaticClass = makeStaticClass<TextFieldSlots>("text-field");

export function TextField(props: TextFieldProps) {
  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      hasRequiredIndicator: true,
      hasErrorIcon: true,
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
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
      "isMultiline",
      "label",
      "description",
      "error",
      "hasRequiredIndicator",
      "hasErrorIcon",
      "errorIcon",
      "startDecorator",
      "endDecorator",
    ],
    ["variant", "size", "isInvalid", "isDisabled"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const [isFocused, setIsFocused] = createSignal(false);

  const label = createMemo(() => local.label);
  const description = createMemo(() => local.description);
  const error = createMemo(() => local.error);
  const errorIcon = createMemo(() => local.errorIcon);

  const showDescription = () => {
    return !variantProps.isInvalid && description();
  };

  const showError = () => {
    return variantProps.isInvalid && error();
  };

  const leftDecorator = createMemo(() => {
    return isRtl() ? local.endDecorator : local.startDecorator;
  });

  const rightDecorator = createMemo(() => {
    return isRtl() ? local.startDecorator : local.endDecorator;
  });

  const variantProps = mergeProps(
    {
      get hasLeftDecorator() {
        return leftDecorator() != null;
      },
      get hasRightDecorator() {
        return rightDecorator() != null;
      },
      get isFocused() {
        return isFocused();
      },
    },
    partialVariantProps
  );

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
      class={cn(
        "group flex flex-col",
        textFieldStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={cn(
            textFieldLabelVariants(variantProps),
            textFieldStaticClass("label"),
            themeClasses.label,
            local.slotClasses?.label
          )}
        >
          {label()}
          <Show when={local.hasRequiredIndicator && others.isRequired}>
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KTextField.Label>
      </Show>
      <Show
        when={!local.isMultiline}
        fallback={
          <KTextField.TextArea
            {...(local.inputProps as ComponentProps<"textarea">)}
            ref={local.ref as HTMLTextAreaElement}
            id={local.id}
            placeholder={local.placeholder}
            //autoResize
            class={cn(
              textFieldTextAreaVariants(variantProps),
              textFieldStaticClass("input"),
              themeClasses.input,
              local.slotClasses?.input,
              local.inputProps?.class
            )}
          />
        }
      >
        <div
          class={cn(
            textFieldControlVariants(variantProps),
            textFieldStaticClass("control"),
            themeClasses.control,
            local.slotClasses?.control
          )}
        >
          {leftDecorator()}
          <KTextField.Input
            {...(local.inputProps as ComponentProps<"input">)}
            ref={local.ref as HTMLInputElement}
            id={local.id}
            type={local.type}
            placeholder={local.placeholder}
            class={cn(
              textFieldInputVariants(variantProps),
              textFieldStaticClass("input"),
              themeClasses.input,
              local.slotClasses?.input,
              local.inputProps?.class
            )}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
          />
          {rightDecorator()}
        </div>
      </Show>
      <Show when={showDescription()}>
        <KTextField.Description
          class={cn(
            "text-content-subtler",
            textFieldSupportTextVariants(variantProps),
            textFieldStaticClass("description"),
            themeClasses.description,
            local.slotClasses?.description
          )}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show when={showError()}>
        <KTextField.ErrorMessage
          class={cn(
            "flex items-center gap-x-1 text-content-danger",
            textFieldSupportTextVariants(variantProps),
            textFieldStaticClass("error"),
            themeClasses.error,
            local.slotClasses?.error
          )}
        >
          <Show when={local.hasErrorIcon} fallback={error()}>
            <span
              aria-hidden="true"
              class={cn(
                "reset-svg text-sm",
                textFieldStaticClass("errorIcon"),
                themeClasses.errorIcon,
                local.slotClasses?.errorIcon
              )}
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

import { TextField as KTextField, useLocale } from "@kobalte/core";
import { callHandler } from "@kobalte/utils";
import { mergeRefs } from "@solid-primitives/refs";
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
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import {
  textFieldIconVariants,
  textFieldInputVariants,
  textFieldLabelVariants,
  textFieldSupportTextVariants,
  textFieldTextAreaVariants,
  textFieldControlVariants,
  TextFieldControlVariants,
} from "./text-field.styles";

const textFieldStaticClass = makeStaticClass<TextFieldSlots>("text-field");

export function TextField(props: TextFieldProps) {
  let ref: HTMLInputElement | HTMLTextAreaElement | undefined;

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
      errorIcon: () => <ExclamationCircleIcon />,
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
      "startIcon",
      "endIcon",
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

  const leftIcon = createMemo(() => {
    return isRtl() ? local.endIcon : local.startIcon;
  });

  const rightIcon = createMemo(() => {
    return isRtl() ? local.startIcon : local.endIcon;
  });

  const leftDecorator = createMemo(() => {
    return isRtl() ? local.endDecorator : local.startDecorator;
  });

  const rightDecorator = createMemo(() => {
    return isRtl() ? local.startDecorator : local.endDecorator;
  });

  const leftIconClass = createMemo(() => {
    if (isRtl()) {
      return cn(
        "left-0",
        textFieldStaticClass("endIcon"),
        themeClasses.endIcon,
        local.slotClasses?.endIcon
      );
    } else {
      return cn(
        "left-0",
        textFieldStaticClass("startIcon"),
        themeClasses.startIcon,
        local.slotClasses?.startIcon
      );
    }
  });

  const rightIconClass = createMemo(() => {
    if (isRtl()) {
      return cn(
        "right-0",
        textFieldStaticClass("startIcon"),
        themeClasses.startIcon,
        local.slotClasses?.startIcon
      );
    } else {
      return cn(
        "right-0",
        textFieldStaticClass("endIcon"),
        themeClasses.endIcon,
        local.slotClasses?.endIcon
      );
    }
  });

  const variantProps = mergeProps(
    {
      get hasLeftIcon() {
        return leftIcon() != null;
      },
      get hasRightIcon() {
        return rightIcon() != null;
      },
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

  const TextFieldIcon = (props: { class?: string; children?: JSX.Element }) => (
    <span aria-hidden="true" class={cn(props.class, textFieldIconVariants(variantProps))}>
      {props.children}
    </span>
  );

  const onInputFocus: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onFocus);
    setIsFocused(true);
  };

  const onInputBlur: JSX.EventHandlerUnion<HTMLInputElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onBlur);
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
            <span class="text-text-danger ui-group-disabled:text-disabled-text ml-0.5">*</span>
          </Show>
        </KTextField.Label>
      </Show>
      <Show
        when={!local.isMultiline}
        fallback={
          <KTextField.TextArea
            {...(local.inputProps as ComponentProps<"textarea">)}
            ref={mergeRefs(el => (ref = el), local.ref)}
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
          <div class="relative flex items-center grow h-full">
            <KTextField.Input
              {...(local.inputProps as ComponentProps<"input">)}
              ref={mergeRefs(el => (ref = el), local.ref)}
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
            <Show when={leftIcon()}>
              <TextFieldIcon class={leftIconClass()}>{leftIcon()}</TextFieldIcon>
            </Show>
            <Show when={rightIcon()}>
              <TextFieldIcon class={rightIconClass()}>{rightIcon()}</TextFieldIcon>
            </Show>
          </div>
          {rightDecorator()}
        </div>
      </Show>
      <Show when={showDescription()}>
        <KTextField.Description
          class={cn(
            "text-text-subtlest",
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
            "flex items-center gap-x-1 text-text-danger",
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
                "reset-svg text-sm text-icon-danger ui-group-disabled:text-disabled-icon",
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

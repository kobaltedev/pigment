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
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import {
  textFieldIconVariants,
  textFieldInputVariants,
  textFieldTextAreaVariants,
  textFieldWrapperVariants,
} from "./text-field.styles";

export function TextField(props: TextFieldProps) {
  let ref: HTMLInputElement | HTMLTextAreaElement | undefined;

  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      descriptionPlacement: "bottom",
      hasRequiredIndicator: true,
      hasErrorIcon: true,
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
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
      "descriptionPlacement",
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
      "startSection",
      "endSection",
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

  const showTopDescription = () => {
    return description() && local.descriptionPlacement === "top";
  };

  const showBottomDescription = () => {
    return !variantProps.isInvalid && description() && local.descriptionPlacement === "bottom";
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

  const leftSection = createMemo(() => {
    return isRtl() ? local.endSection : local.startSection;
  });

  const rightSection = createMemo(() => {
    return isRtl() ? local.startSection : local.endSection;
  });

  const leftIconClass = createMemo(() => {
    if (isRtl()) {
      return cn("left-0", themeClasses.endIcon, local.slotClasses?.endIcon);
    } else {
      return cn("left-0", themeClasses.startIcon, local.slotClasses?.startIcon);
    }
  });

  const rightIconClass = createMemo(() => {
    if (isRtl()) {
      return cn("right-0", themeClasses.startIcon, local.slotClasses?.startIcon);
    } else {
      return cn("right-0", themeClasses.endIcon, local.slotClasses?.endIcon);
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
      get hasLeftSection() {
        return leftSection() != null;
      },
      get hasRightSection() {
        return rightSection() != null;
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

  return (
    <KTextField.Root
      class={cn(
        "group flex flex-col items-start",
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
            "text-sm font-medium text-text-subtle ui-group-disabled:text-disabled-text",
            showTopDescription() ? "mb-0.5" : "mb-1",
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
      <Show when={showTopDescription()}>
        <KTextField.Description
          class={cn(
            "text-xs text-text-subtlest ui-group-disabled:text-disabled-text mb-1",
            themeClasses.description,
            local.slotClasses?.description
          )}
        >
          {description()}
        </KTextField.Description>
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
              themeClasses.input,
              local.slotClasses?.input,
              local.inputProps?.class
            )}
          />
        }
      >
        <div
          class={cn(
            textFieldWrapperVariants(variantProps),
            themeClasses.wrapper,
            local.slotClasses?.wrapper
          )}
        >
          {leftSection()}
          <div class="relative flex items-center grow h-full">
            <KTextField.Input
              {...(local.inputProps as ComponentProps<"input">)}
              ref={mergeRefs(el => (ref = el), local.ref)}
              id={local.id}
              type={local.type}
              placeholder={local.placeholder}
              class={cn(
                textFieldInputVariants(variantProps),
                themeClasses.input,
                local.slotClasses?.input,
                local.inputProps?.class
              )}
              onFocus={e => {
                if (local.inputProps?.onFocus) {
                  callHandler(e, local.inputProps.onFocus as ComponentProps<"input">["onFocus"]);
                }
                setIsFocused(true);
              }}
              onBlur={e => {
                if (local.inputProps?.onBlur) {
                  callHandler(e, local.inputProps.onBlur as ComponentProps<"input">["onBlur"]);
                }
                setIsFocused(false);
              }}
            />
            <Show when={leftIcon()}>
              <TextFieldIcon class={leftIconClass()}>{leftIcon()}</TextFieldIcon>
            </Show>
            <Show when={rightIcon()}>
              <TextFieldIcon class={rightIconClass()}>{rightIcon()}</TextFieldIcon>
            </Show>
          </div>
          {rightSection()}
        </div>
      </Show>
      <Show when={showBottomDescription()}>
        <KTextField.Description
          class={cn(
            "text-xs text-text-subtlest ui-group-disabled:text-disabled-text mt-1.5",
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
            "flex items-center space-x-1 text-xs text-text-danger ui-group-disabled:text-disabled-text mt-1.5",
            themeClasses.error,
            local.slotClasses?.error
          )}
        >
          <Show when={local.hasErrorIcon} fallback={error()}>
            <span
              aria-hidden="true"
              class={cn(
                "reset-svg text-sm text-icon-danger ui-group-disabled:text-disabled-icon",
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

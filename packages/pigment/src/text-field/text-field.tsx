import { TextField as KTextField, useLocale } from "@kobalte/core";
import { callHandler } from "@kobalte/utils";
import { mergeRefs } from "@solid-primitives/refs";
import { createMemo, createSignal, JSX, mergeProps, Show, splitProps } from "solid-js";

import { AlertCircleIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import {
  textFieldIconVariants,
  textFieldInputVariants,
  textFieldWrapperVariants,
} from "./text-field.styles";

export function TextField(props: TextFieldProps) {
  let ref: HTMLInputElement | undefined;

  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      descriptionPlacement: "bottom",
      hasErrorIcon: true,
      errorIcon: () => <AlertCircleIcon />,
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
      "type",
      "placeholder",
      "descriptionPlacement",
      "inputProps",
      "label",
      "description",
      "error",
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

  const leftIconThemeClasses = createMemo(() => {
    return isRtl() ? themeClasses.endIcon : themeClasses.startIcon;
  });

  const rightIconThemeClasses = createMemo(() => {
    return isRtl() ? themeClasses.startIcon : themeClasses.endIcon;
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
      class={cn("pg-group pg-flex pg-flex-col pg-items-start", themeClasses.root, local.class)}
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={cn(
            "pg-text-sm pg-font-medium pg-text-text-subtle pg-disabled:pg-text-disabled-text",
            showTopDescription() ? "pg-mb-0.5" : "pg-mb-1",
            themeClasses.label
          )}
        >
          {label()}
        </KTextField.Label>
      </Show>
      <Show when={showTopDescription()}>
        <KTextField.Description
          class={cn(
            "pg-text-xs pg-text-text-subtlest pg-disabled:pg-text-disabled-text pg-mb-1",
            themeClasses.description
          )}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <div class={cn(textFieldWrapperVariants(variantProps), themeClasses.wrapper)}>
        {leftSection()}
        <div class="pg-relative pg-flex pg-items-center pg-grow pg-h-full">
          <KTextField.Input
            {...local.inputProps}
            ref={mergeRefs(el => (ref = el), local.ref)}
            id={local.id}
            type={local.type}
            placeholder={local.placeholder}
            class={cn(
              textFieldInputVariants(variantProps),
              themeClasses.input,
              local.inputProps?.class
            )}
            onFocus={e => {
              local.inputProps?.onFocus && callHandler(e, local.inputProps.onFocus);
              setIsFocused(true);
            }}
            onBlur={e => {
              local.inputProps?.onBlur && callHandler(e, local.inputProps.onBlur);
              setIsFocused(false);
            }}
          />
          <Show when={leftIcon()}>
            <TextFieldIcon class={cn("pg-left-0", leftIconThemeClasses())}>
              {leftIcon()}
            </TextFieldIcon>
          </Show>
          <Show when={rightIcon()}>
            <TextFieldIcon class={cn("pg-right-0", rightIconThemeClasses())}>
              {rightIcon()}
            </TextFieldIcon>
          </Show>
        </div>
        {rightSection()}
      </div>
      <Show when={showBottomDescription()}>
        <KTextField.Description
          class={cn(
            "pg-text-xs pg-text-text-subtlest pg-disabled:pg-text-disabled-text pg-mt-1.5",
            themeClasses.description
          )}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show when={showError()}>
        <KTextField.ErrorMessage
          class={cn(
            "pg-flex pg-items-center pg-space-x-1 pg-text-xs pg-text-text-danger pg-disabled:pg-text-disabled-text pg-mt-1.5",
            themeClasses.error
          )}
        >
          <Show when={local.hasErrorIcon} fallback={error()}>
            <span
              aria-hidden="true"
              class={cn(
                "pg-reset-svg pg-text-sm pg-text-icon-danger pg-group-disabled:pg-text-disabled-icon",
                themeClasses.errorIcon
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

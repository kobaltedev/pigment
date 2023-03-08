import { TextField as KTextField, useLocale } from "@kobalte/core";
import { createMemo, mergeProps, Show, splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import { textFieldInputVariants } from "./text-field.styles";
import { l } from "@storybook/theming/dist/create-4436cfc3";
import { AlertCircleIcon } from "../icons";

export function TextField(props: TextFieldProps) {
  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      descriptionPlacement: "bottom",
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
      "isMultiline",
      "descriptionPlacement",
      "inputProps",
      "label",
      "description",
      "error",
      "startIcon",
      "endIcon",
    ],
    ["variant", "size", "isDisabled", "isInvalid"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const label = createMemo(() => local.label);
  const description = createMemo(() => local.description);
  const error = createMemo(() => local.error);

  const leftIcon = createMemo(() => {
    return isRtl() ? local.endIcon : local.startIcon;
  });

  const rightIcon = createMemo(() => {
    return isRtl() ? local.startIcon : local.endIcon;
  });

  const variantProps = mergeProps(
    {
      get hasLeftIcon() {
        return leftIcon() != null;
      },
      get hasRightIcon() {
        return rightIcon() != null;
      },
    },
    partialVariantProps
  );

  const fieldProps = () => ({
    ...local.inputProps,
    ref: local.ref,
    id: local.id,
    placeholder: local.placeholder,
    class: cn(textFieldInputVariants(variantProps), themeClasses.input, local.inputProps?.class),
  });

  return (
    <KTextField.Root
      class={cn("pg-flex pg-flex-col", themeClasses.root, local.class)}
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={cn(
            "pg-text-sm pg-font-medium pg-text-text-subtle pg-disabled:pg-text-disabled-text",
            description() && local.descriptionPlacement === "top" ? "pg-mb-0.5" : "pg-mb-1",
            themeClasses.label
          )}
        >
          {label()}
        </KTextField.Label>
      </Show>
      <Show when={description() && local.descriptionPlacement === "top"}>
        <KTextField.Description
          class={cn(
            "pg-text-xs pg-text-text-subtlest pg-disabled:pg-text-disabled-text pg-mb-1",
            themeClasses.description
          )}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <div class={cn("pg-relative pg-flex pg-w-full", themeClasses.wrapper)}>
        <Show
          when={!local.isMultiline}
          fallback={<KTextField.TextArea {...fieldProps} autoResize />}
        >
          <Show when={leftIcon()}>
            <span aria-hidden="true" class={cn("pg-reset-svg pg-shrink-0", themeClasses.icon)}>
              {leftIcon()}
            </span>
          </Show>
          <KTextField.Input {...fieldProps} type={local.type} />
          <Show when={rightIcon()}>
            <span aria-hidden="true">{rightIcon()}</span>
          </Show>
        </Show>
      </div>
      <Show
        when={!variantProps.isInvalid && description() && local.descriptionPlacement === "bottom"}
      >
        <KTextField.Description
          class={cn(
            "pg-text-xs pg-text-text-subtlest pg-disabled:pg-text-disabled-text pg-mt-1",
            themeClasses.description
          )}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show when={variantProps.isInvalid && error()}>
        <KTextField.ErrorMessage
          class={cn(
            "pg-flex pg-items-center pg-space-x-1 pg-text-xs pg-text-text-danger pg-disabled:pg-text-disabled-text pg-mt-1",
            themeClasses.error
          )}
        >
          <AlertCircleIcon class="pg-h-3.5 pg-w-3.5 pg-text-icon-danger" />
          <span>{error()}</span>
        </KTextField.ErrorMessage>
      </Show>
    </KTextField.Root>
  );
}

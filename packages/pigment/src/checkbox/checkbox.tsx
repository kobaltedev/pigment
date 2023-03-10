import { Checkbox as KCheckbox, useLocale } from "@kobalte/core";
import { createMemo, createUniqueId, Show, splitProps } from "solid-js";

import { AlertCircleIcon, CheckIcon, MinusIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import {
  checkboxDescriptionVariants,
  checkboxLabelVariants,
  checkboxRootVariants,
  checkboxVariants,
} from "./checkbox.styles";

export function Checkbox(props: CheckboxProps) {
  const descriptionId = `checkbox-${createUniqueId()}-description`;
  const errorId = `checkbox-${createUniqueId()}-error`;

  props = mergeThemeProps(
    "Checkbox",
    {
      hasErrorIcon: true,
      errorIcon: () => <AlertCircleIcon />,
      checkedIcon: () => <CheckIcon />,
      indeterminateIcon: () => <MinusIcon />,
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
      "inputProps",
      "label",
      "description",
      "error",
      "hasErrorIcon",
      "errorIcon",
      "checkedIcon",
      "indeterminateIcon",
    ],
    ["variant", "size", "isInvalid", "isDisabled"]
  );

  const label = createMemo(() => local.label);
  const description = createMemo(() => local.description);
  const error = createMemo(() => local.error);
  const errorIcon = createMemo(() => local.errorIcon);

  const showError = () => {
    return variantProps.isInvalid && error();
  };

  const ariaDescribedBy = () => {
    return [
      showError() ? errorId : null,
      description() ? descriptionId : null,
      local.inputProps?.["aria-describedby"],
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <KCheckbox.Root
      class={cn(checkboxRootVariants(variantProps), themeClasses.root, local.class)}
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      {state => (
        <>
          <KCheckbox.Input
            {...local.inputProps}
            ref={local.ref}
            id={local.id}
            class={cn("pg-peer", local.inputProps?.class)}
            aria-describedby={ariaDescribedBy()}
          />
          <KCheckbox.Control class={cn(checkboxVariants(variantProps), themeClasses.checkbox)}>
            <KCheckbox.Indicator
              class={cn(
                "pg-reset-svg pg-flex pg-justify-center pg-items-center",
                themeClasses.icon
              )}
            >
              <Show when={state.isIndeterminate()} fallback={local.checkedIcon}>
                {local.indeterminateIcon}
              </Show>
            </KCheckbox.Indicator>
          </KCheckbox.Control>
          <div class={cn("pg-flex pg-flex-col pg-space-y-1 pg-grow", themeClasses.labelWrapper)}>
            <Show when={label()}>
              <KCheckbox.Label class={cn(checkboxLabelVariants(variantProps), themeClasses.label)}>
                {label()}
              </KCheckbox.Label>
            </Show>
            <Show when={description()}>
              <span
                id={descriptionId}
                class={cn(checkboxDescriptionVariants(variantProps), themeClasses.description)}
              >
                {description()}
              </span>
            </Show>
            <Show when={showError()}>
              <span
                id={errorId}
                class={cn(
                  "pg-flex pg-items-center pg-space-x-1 pg-text-xs pg-text-text-danger pg-group-disabled:pg-text-disabled-text pg-mt-1.5",
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
              </span>
            </Show>
          </div>
        </>
      )}
    </KCheckbox.Root>
  );
}

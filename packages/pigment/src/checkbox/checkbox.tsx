import { Checkbox as KCheckbox } from "@kobalte/core";
import { createMemo, createUniqueId, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, MinusIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import {
  checkboxDescriptionVariants,
  checkboxLabelVariants,
  checkboxRootVariants,
  checkboxControlVariants,
} from "./checkbox.styles";

const checkboxStaticClass = makeStaticClass<CheckboxSlots>("checkbox");

export function Checkbox(props: CheckboxProps) {
  const descriptionId = `checkbox-${createUniqueId()}-description`;
  const errorId = `checkbox-${createUniqueId()}-error`;

  props = mergeThemeProps(
    "Checkbox",
    {
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
      hasErrorIcon: true,
      errorIcon: () => <ExclamationCircleIcon />,
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
      "slotClasses",
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
      class={cn(
        checkboxRootVariants(variantProps),
        checkboxStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
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
            class={cn("peer", local.inputProps?.class)}
            aria-describedby={ariaDescribedBy()}
          />
          <KCheckbox.Control
            class={cn(
              checkboxControlVariants(variantProps),
              checkboxStaticClass("control"),
              themeClasses.control,
              local.slotClasses?.control
            )}
          >
            <KCheckbox.Indicator
              class={cn(
                "reset-svg flex justify-center items-center",
                checkboxStaticClass("indicator"),
                themeClasses.indicator,
                local.slotClasses?.indicator
              )}
            >
              <Show when={state.isIndeterminate()} fallback={local.checkedIcon}>
                {local.indeterminateIcon}
              </Show>
            </KCheckbox.Indicator>
          </KCheckbox.Control>
          <div
            class={cn(
              "flex flex-col space-y-1 grow",
              checkboxStaticClass("labelWrapper"),
              themeClasses.labelWrapper,
              local.slotClasses?.labelWrapper
            )}
          >
            <Show when={label()}>
              <KCheckbox.Label
                class={cn(
                  checkboxLabelVariants(variantProps),
                  checkboxStaticClass("label"),
                  themeClasses.label,
                  local.slotClasses?.label
                )}
              >
                {label()}
              </KCheckbox.Label>
            </Show>
            <Show when={description()}>
              <span
                id={descriptionId}
                class={cn(
                  checkboxDescriptionVariants(variantProps),
                  checkboxStaticClass("description"),
                  themeClasses.description,
                  local.slotClasses?.description
                )}
              >
                {description()}
              </span>
            </Show>
            <Show when={showError()}>
              <span
                id={errorId}
                class={cn(
                  "flex items-center space-x-1 text-xs text-text-danger ui-group-disabled:text-disabled-text mt-1.5",
                  checkboxStaticClass("error"),
                  themeClasses.error,
                  local.slotClasses?.error
                )}
              >
                <Show when={local.hasErrorIcon} fallback={error()}>
                  <span
                    aria-hidden="true"
                    class={cn(
                      "reset-svg text-sm text-icon-danger ui-group-disabled:text-disabled-icon",
                      checkboxStaticClass("errorIcon"),
                      themeClasses.errorIcon,
                      local.slotClasses?.errorIcon
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

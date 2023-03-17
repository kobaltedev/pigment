import { Checkbox as KCheckbox, useLocale } from "@kobalte/core";
import { createMemo, createUniqueId, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, MinusIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { CheckboxProps, CheckboxSlots } from "./checkbox.props";
import {
  checkboxControlVariants,
  checkboxDescriptionVariants,
  checkboxErrorVariants,
  checkboxLabelVariants,
  checkboxRootVariants,
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
      labelPlacement: "end",
      isInvalid: false,
      isDisabled: false,
      hasErrorIcon: true,
      inputProps: {},
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
      "labelPlacement",
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

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

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

  const controlOrderClass = () => {
    if (local.labelPlacement === "end") {
      return isRtl() ? "order-2" : "order-1";
    } else if (local.labelPlacement === "start") {
      return isRtl() ? "order-1" : "order-2";
    }
  };

  const labelOrderClass = () => {
    if (local.labelPlacement === "end") {
      return isRtl() ? "order-1" : "order-2";
    } else if (local.labelPlacement === "start") {
      return isRtl() ? "order-2" : "order-1";
    }
  };

  const supportTextColStartClass = createMemo(() => {
    if (local.labelPlacement === "end") {
      return isRtl() ? "col-start-1" : "col-start-2";
    } else if (local.labelPlacement === "start") {
      return isRtl() ? "col-start-2" : "col-start-1";
    }
  });

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
              controlOrderClass(),
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
          <Show when={label()}>
            <KCheckbox.Label
              class={cn(
                labelOrderClass(),
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
                supportTextColStartClass(),
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
                supportTextColStartClass(),
                checkboxErrorVariants(variantProps),
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
        </>
      )}
    </KCheckbox.Root>
  );
}

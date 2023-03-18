import { Select as KSelect, useLocale } from "@kobalte/core";
import { callHandler, isFunction, isString } from "@kobalte/utils";
import { Accessor, createMemo, createSignal, JSX, mergeProps, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, SelectorIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { SelectProps, SelectSlots } from "./select.props";
import {
  selectButtonVariants,
  selectDropdownVariants,
  selectControlVariants,
  selectIconVariants,
  selectLabelVariants,
  selectListboxVariants,
  selectOptGroupVariants,
  selectOptionIndicatorVariants,
  selectOptionVariants,
  selectSupportTextVariants,
  selectValueVariants,
} from "./select.styles";

const selectStaticClass = makeStaticClass<SelectSlots>("select");

export function Select<Option, OptGroup = never>(props: SelectProps<Option, OptGroup>) {
  props = mergeThemeProps(
    "Select",
    {
      hasRequiredIndicator: true,
      hasErrorIcon: true,
      variant: "outlined",
      size: "sm",
      isInvalid: false,
      isDisabled: false,
      allowEmptySelection: false,
      inputProps: {},
      optionValue: "value" as any,
      optionTextValue: "label" as any,
      optionLabel: "label" as any,
      optionDisabled: "disabled" as any,
      optionGroupLabel: "label" as any,
      optionGroupChildren: "options" as any,
      endIcon: () => <SelectorIcon />,
      errorIcon: () => <ExclamationCircleIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<SelectSlots>("Select", props);

  const [local, rootProps, partialVariantProps, others] = splitProps(
    props,
    [
      "class",
      "slotClasses",
      "inputProps",
      "allowEmptySelection",
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
      "optionLabel",
      "optionGroupLabel",
      "valueTemplate",
      "optionTemplate",
      "optionGroupTemplate",
    ],
    [
      "defaultIsOpen",
      "isOpen",
      "onOpenChange",
      "defaultValue",
      "value",
      "onValueChange",
      "options",
      "optionValue",
      "optionTextValue",
      "optionDisabled",
      "optionGroupChildren",
      "isOptionGroup",
      "isModal",
      "placeholder",
      "id",
      "name",
      "isRequired",
      "isDisabled",
      "isReadOnly",
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
        selectStaticClass("endIcon"),
        themeClasses.endIcon,
        local.slotClasses?.endIcon
      );
    } else {
      return cn(
        "left-0",
        selectStaticClass("startIcon"),
        themeClasses.startIcon,
        local.slotClasses?.startIcon
      );
    }
  });

  const rightIconClass = createMemo(() => {
    if (isRtl()) {
      return cn(
        "right-0",
        selectStaticClass("startIcon"),
        themeClasses.startIcon,
        local.slotClasses?.startIcon
      );
    } else {
      return cn(
        "right-0",
        selectStaticClass("endIcon"),
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

  const SelectIcon = (props: { class?: string; children?: JSX.Element }) => (
    <KSelect.Icon class={cn(props.class, selectIconVariants(variantProps))}>
      {props.children}
    </KSelect.Icon>
  );

  const getOptionLabel = (option: Option) => {
    if (isString(option)) {
      return option;
    }

    if (isFunction(local.optionLabel)) {
      return local.optionLabel(option);
    }

    return option[local.optionLabel!] as string;
  };

  const valueTemplate = (selectedOption: Accessor<Option>) => {
    return (
      <Show when={!local.valueTemplate} fallback={local.valueTemplate?.(selectedOption)}>
        {getOptionLabel(selectedOption())}
      </Show>
    );
  };

  const optionTemplate = (option: Accessor<Option>) => {
    return (
      <Show when={!local.optionTemplate} fallback={local.optionTemplate?.(option)}>
        <KSelect.ItemLabel>{getOptionLabel(option())}</KSelect.ItemLabel>
        <KSelect.ItemIndicator
          class={cn(
            selectOptionIndicatorVariants(variantProps),
            selectStaticClass("optionIndicator"),
            themeClasses.optionIndicator,
            local.slotClasses?.optionIndicator
          )}
        >
          <CheckIcon />
        </KSelect.ItemIndicator>
      </Show>
    );
  };

  const getOptionGroupLabel = (optGroup: OptGroup) => {
    if (isFunction(local.optionGroupLabel)) {
      return local.optionGroupLabel(optGroup);
    }

    return optGroup[local.optionGroupLabel!] as string;
  };

  const optionGroupTemplate = (optGroup: Accessor<OptGroup>) => {
    return (
      <Show when={!local.optionGroupTemplate} fallback={local.optionGroupTemplate?.(optGroup)}>
        {getOptionGroupLabel(optGroup())}
      </Show>
    );
  };

  const onButtonFocus: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onFocus);
    setIsFocused(true);
  };

  const onButtonBlur: JSX.EventHandlerUnion<HTMLButtonElement, FocusEvent> = e => {
    callHandler<any, FocusEvent>(e, local.inputProps?.onBlur);
    setIsFocused(false);
  };

  return (
    <KSelect.Root
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      disallowEmptySelection={!local.allowEmptySelection}
      renderValue={valueTemplate}
      renderItem={item => (
        <KSelect.Item
          item={item()}
          class={cn(
            selectOptionVariants(variantProps),
            selectStaticClass("option"),
            themeClasses.option,
            local.slotClasses?.option
          )}
        >
          {optionTemplate(() => item().rawValue)}
        </KSelect.Item>
      )}
      renderSection={section => (
        <KSelect.Section
          class={cn(
            selectOptGroupVariants(variantProps),
            selectStaticClass("optionGroup"),
            themeClasses.optionGroup,
            local.slotClasses?.optionGroup
          )}
        >
          {optionGroupTemplate(() => section().rawValue)}
        </KSelect.Section>
      )}
      {...rootProps}
    >
      <div
        class={cn(
          "group flex flex-col",
          selectStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class
        )}
        data-disabled={rootProps.isDisabled ? "" : undefined}
      >
        <KSelect.HiddenSelect />
        <Show when={label()}>
          <KSelect.Label
            class={cn(
              selectLabelVariants(variantProps),
              selectStaticClass("label"),
              themeClasses.label,
              local.slotClasses?.label
            )}
          >
            {label()}
            <Show when={local.hasRequiredIndicator && rootProps.isRequired}>
              <span class="text-text-danger ui-group-disabled:text-disabled-text ml-0.5">*</span>
            </Show>
          </KSelect.Label>
        </Show>
        <div
          class={cn(
            selectControlVariants(variantProps),
            selectStaticClass("control"),
            themeClasses.control,
            local.slotClasses?.control
          )}
        >
          {leftDecorator()}
          <div class="relative flex items-center grow h-full">
            <KSelect.Trigger
              class={cn(
                selectButtonVariants(variantProps),
                selectStaticClass("button"),
                themeClasses.button,
                local.slotClasses?.button
              )}
              onFocus={onButtonFocus}
              onBlur={onButtonBlur}
              {...others}
            >
              <KSelect.Value
                class={cn(
                  selectValueVariants(variantProps),
                  selectStaticClass("value"),
                  themeClasses.value,
                  local.slotClasses?.value
                )}
              />
            </KSelect.Trigger>
            <Show when={leftIcon()}>
              <SelectIcon class={leftIconClass()}>{leftIcon()}</SelectIcon>
            </Show>
            <Show when={rightIcon()}>
              <SelectIcon class={rightIconClass()}>{rightIcon()}</SelectIcon>
            </Show>
          </div>
          {rightDecorator()}
        </div>
        <Show when={showDescription()}>
          <KSelect.Description
            class={cn(
              "text-text-subtlest",
              selectSupportTextVariants(variantProps),
              selectStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description
            )}
          >
            {description()}
          </KSelect.Description>
        </Show>
        <Show when={showError()}>
          <KSelect.ErrorMessage
            class={cn(
              "flex items-center gap-x-1 text-text-danger",
              selectSupportTextVariants(variantProps),
              selectStaticClass("error"),
              themeClasses.error,
              local.slotClasses?.error
            )}
          >
            <Show when={local.hasErrorIcon} fallback={error()}>
              <span
                aria-hidden="true"
                class={cn(
                  "reset-svg text-sm text-icon-danger ui-group-disabled:text-disabled-icon",
                  selectStaticClass("errorIcon"),
                  themeClasses.errorIcon,
                  local.slotClasses?.errorIcon
                )}
              >
                {errorIcon()}
              </span>
              <span>{error()}</span>
            </Show>
          </KSelect.ErrorMessage>
        </Show>
      </div>
      <KSelect.Portal>
        <KSelect.Content
          class={cn(
            selectDropdownVariants(variantProps),
            selectStaticClass("dropdown"),
            themeClasses.dropdown,
            local.slotClasses?.dropdown
          )}
        >
          <KSelect.Listbox
            class={cn(
              selectListboxVariants(variantProps),
              selectStaticClass("listbox"),
              themeClasses.listbox,
              local.slotClasses?.listbox
            )}
          />
        </KSelect.Content>
      </KSelect.Portal>
    </KSelect.Root>
  );
}

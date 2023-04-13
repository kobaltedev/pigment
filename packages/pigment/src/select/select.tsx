import { Select as KSelect, useLocale } from "@kobalte/core";
import { isFunction, isString, mergeRefs } from "@kobalte/utils";
import { createMemo, JSX, mergeProps, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, SelectorIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { SelectProps, SelectSlots } from "./select.props";
import {
  selectButtonVariants,
  selectDropdownVariants,
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
  let triggerRef: HTMLButtonElement | undefined;

  props = mergeThemeProps(
    "Select",
    {
      hasRequiredIndicator: true,
      hasDropdownIcon: true,
      hasSelectedIcon: true,
      hasErrorIcon: true,
      variant: "outlined",
      size: "md",
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
      dropdownIcon: (() => <SelectorIcon />) as unknown as JSX.Element,
      errorIcon: (() => <ExclamationCircleIcon />) as unknown as JSX.Element,
    },
    props
  );

  const themeClasses = useThemeClasses<SelectSlots>("Select", props);

  const [local, rootProps, partialVariantProps, others] = splitProps(
    props,
    [
      "ref",
      "class",
      "slotClasses",
      "inputProps",
      "allowEmptySelection",
      "label",
      "description",
      "error",
      "hasRequiredIndicator",
      "hasSelectedIcon",
      "hasErrorIcon",
      "dropdownIcon",
      "errorIcon",
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
      "sameWidth",
    ],
    ["variant", "size", "hasDropdownIcon", "isInvalid", "isDisabled"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const label = createMemo(() => runIfFn(local.label));
  const description = createMemo(() => runIfFn(local.description));
  const error = createMemo(() => runIfFn(local.error));
  const errorIcon = createMemo(() => runIfFn(local.errorIcon));

  const showDescription = () => {
    return !variantProps.isInvalid && description();
  };

  const showError = () => {
    return variantProps.isInvalid && error();
  };

  const leftDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.endDecorator : local.startDecorator);
  });

  const rightDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.startDecorator : local.endDecorator);
  });

  const variantProps = mergeProps(
    {
      get hasLeftDecorator() {
        return leftDecorator() != null;
      },
      get hasRightDecorator() {
        return rightDecorator() != null;
      },
    },
    partialVariantProps
  );

  const dropdownGutter = () => {
    switch (variantProps.size) {
      case "xs":
        return 4;
      case "sm":
        return 6;
      case "md":
        return 8;
      case "lg":
        return 10;
      case "xl":
        return 12;
    }
  };

  const getOptionLabel = (option: Option) => {
    if (isString(option)) {
      return option;
    }

    if (isFunction(local.optionLabel)) {
      return local.optionLabel(option);
    }

    return option[local.optionLabel!] as string;
  };

  const getOptionGroupLabel = (optGroup: OptGroup) => {
    if (isFunction(local.optionGroupLabel)) {
      return local.optionGroupLabel(optGroup);
    }

    return optGroup[local.optionGroupLabel!] as string;
  };

  const optionTemplate = (option: Option) => {
    return (
      <>
        <Show
          when={local.optionTemplate}
          fallback={<KSelect.ItemLabel>{getOptionLabel(option)}</KSelect.ItemLabel>}
        >
          {local.optionTemplate?.(option)}
        </Show>
        <Show when={local.hasSelectedIcon}>
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
      </>
    );
  };

  const optionGroupTemplate = (optGroup: OptGroup) => {
    return (
      <Show when={local.optionGroupTemplate} fallback={getOptionGroupLabel(optGroup)}>
        {local.optionGroupTemplate?.(optGroup)}
      </Show>
    );
  };

  return (
    <KSelect.Root
      class={cn(
        "group flex flex-col",
        selectStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      validationState={variantProps.isInvalid ? "invalid" : undefined}
      disallowEmptySelection={!local.allowEmptySelection}
      gutter={dropdownGutter()}
      valueComponent={props => (
        <Show when={local.valueTemplate} fallback={getOptionLabel(props.item.rawValue)}>
          {local.valueTemplate?.(props.item.rawValue)}
        </Show>
      )}
      itemComponent={props => (
        <KSelect.Item
          item={props.item}
          class={cn(
            selectOptionVariants(variantProps),
            selectStaticClass("option"),
            themeClasses.option,
            local.slotClasses?.option
          )}
        >
          {optionTemplate(props.item.rawValue)}
        </KSelect.Item>
      )}
      sectionComponent={props => (
        <KSelect.Section
          class={cn(
            selectOptGroupVariants(variantProps),
            selectStaticClass("optionGroup"),
            themeClasses.optionGroup,
            local.slotClasses?.optionGroup
          )}
        >
          {optionGroupTemplate(props.section.rawValue)}
        </KSelect.Section>
      )}
      {...rootProps}
    >
      <Show when={triggerRef?.closest("form") != null}>
        <KSelect.HiddenSelect {...local.inputProps} />
      </Show>
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
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KSelect.Label>
      </Show>
      <KSelect.Trigger
        ref={mergeRefs(el => (triggerRef = el), local.ref)}
        class={cn(
          selectButtonVariants(variantProps),
          selectStaticClass("button"),
          themeClasses.button,
          local.slotClasses?.button
        )}
        {...others}
      >
        {leftDecorator()}
        <KSelect.Value
          class={cn(
            selectValueVariants(variantProps),
            selectStaticClass("value"),
            themeClasses.value,
            local.slotClasses?.value
          )}
        />
        {rightDecorator()}
        <Show when={variantProps.hasDropdownIcon}>
          <KSelect.Icon
            class={cn(
              selectIconVariants(variantProps),
              selectStaticClass("icon"),
              themeClasses.icon,
              local.slotClasses?.icon
            )}
          >
            {runIfFn(local.dropdownIcon)}
          </KSelect.Icon>
        </Show>
      </KSelect.Trigger>
      <Show when={showDescription()}>
        <KSelect.Description
          class={cn(
            "text-content-subtler",
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
            "flex items-center gap-x-1 text-content-danger",
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
                "reset-svg",
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

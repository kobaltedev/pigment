import { Select as KSelect, useLocale } from "@kobalte/core";
import { isFunction, mergeRefs } from "@kobalte/utils";
import { createMemo, JSX, mergeProps, Show, splitProps } from "solid-js";

import { CheckIcon, ExclamationCircleIcon, SelectorIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import { SelectProps, SelectSlots } from "./select.props";
import { selectStyles } from "./select.styles";

const selectStaticClass = makeStaticClass<SelectSlots>("select");

export function Select<Option, OptGroup = never>(props: SelectProps<Option, OptGroup>) {
  let triggerRef: HTMLButtonElement | undefined;

  props = mergeThemeProps(
    "Select",
    {
      withRequiredIndicator: true,
      withDropdownIcon: true,
      withSelectionIcon: true,
      withErrorIcon: true,
      variant: "outlined",
      size: "md",
      invalid: false,
      disabled: false,
      allowEmptySelection: false,
      inputProps: {},
      dropdownIcon: (() => <SelectorIcon />) as unknown as JSX.Element,
      selectionIcon: (() => <CheckIcon />) as unknown as JSX.Element,
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
      "value",
      "defaultValue",
      "onChange",
      "multiple",
      "inputProps",
      "allowEmptySelection",
      "label",
      "description",
      "error",
      "withRequiredIndicator",
      "withSelectionIcon",
      "withErrorIcon",
      "dropdownIcon",
      "selectionIcon",
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
      "open",
      "defaultOpen",
      "onOpenChange",
      "options",
      "optionValue",
      "optionTextValue",
      "optionDisabled",
      "optionGroupChildren",
      "modal",
      "placeholder",
      "id",
      "name",
      "required",
      "disabled",
      "readOnly",
      "sameWidth",
    ],
    ["variant", "size", "withDropdownIcon", "invalid", "disabled"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  const label = createMemo(() => runIfFn(local.label));
  const description = createMemo(() => runIfFn(local.description));
  const error = createMemo(() => runIfFn(local.error));
  const errorIcon = createMemo(() => runIfFn(local.errorIcon));

  const showDescription = () => {
    return !variantProps.invalid && description();
  };

  const showError = () => {
    return variantProps.invalid && error();
  };

  const leftDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.endDecorator : local.startDecorator);
  });

  const rightDecorator = createMemo(() => {
    return runIfFn(isRtl() ? local.startDecorator : local.endDecorator);
  });

  const variantProps = mergeProps(
    {
      get withLeftDecorator() {
        return leftDecorator() != null;
      },
      get withRightDecorator() {
        return rightDecorator() != null;
      },
    },
    partialVariantProps
  );

  const styles = createMemo(() => selectStyles(variantProps));

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

  const getOptionLabel = (option: Option): string => {
    if (local.optionLabel == null) {
      // The option itself is the label (ex: a string[] of options)
      return String(option);
    }

    if (isFunction(local.optionLabel)) {
      return local.optionLabel(option);
    }

    return String(option[local.optionLabel!]);
  };

  const getOptionGroupLabel = (optGroup: OptGroup): string => {
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
        <Show when={local.withSelectionIcon}>
          <KSelect.ItemIndicator
            class={styles().optionIndicator({
              class: [
                selectStaticClass("optionIndicator"),
                themeClasses.optionIndicator,
                local.slotClasses?.optionIndicator,
              ],
            })}
          >
            {runIfFn(local.selectionIcon)}
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
    <KSelect.Root<Option, OptGroup>
      class={styles().root({
        class: [selectStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      value={local.value as any}
      defaultValue={local.defaultValue as any}
      onChange={local.onChange as any}
      multiple={local.multiple as any}
      validationState={variantProps.invalid ? "invalid" : undefined}
      disallowEmptySelection={!local.allowEmptySelection}
      gutter={dropdownGutter()}
      itemComponent={props => (
        <KSelect.Item
          item={props.item}
          class={styles().option({
            class: [selectStaticClass("option"), themeClasses.option, local.slotClasses?.option],
          })}
        >
          {optionTemplate(props.item.rawValue)}
        </KSelect.Item>
      )}
      sectionComponent={props => (
        <KSelect.Section
          class={styles().optionGroup({
            class: [
              selectStaticClass("optionGroup"),
              themeClasses.optionGroup,
              local.slotClasses?.optionGroup,
            ],
          })}
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
          class={styles().label({
            class: [selectStaticClass("label"), themeClasses.label, local.slotClasses?.label],
          })}
        >
          {label()}
          <Show when={local.withRequiredIndicator && rootProps.required}>
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KSelect.Label>
      </Show>
      <KSelect.Trigger
        ref={mergeRefs(el => (triggerRef = el), local.ref)}
        class={styles().trigger({
          class: [selectStaticClass("trigger"), themeClasses.trigger, local.slotClasses?.trigger],
        })}
        {...others}
      >
        {leftDecorator()}
        <KSelect.Value<Option>
          class={styles().value({
            class: [selectStaticClass("value"), themeClasses.value, local.slotClasses?.value],
          })}
        >
          {state => (
            <Show when={local.valueTemplate} fallback={getOptionLabel(state.selectedOption())}>
              {local.valueTemplate?.(state.selectedOption())}
            </Show>
          )}
        </KSelect.Value>
        {rightDecorator()}
        <Show when={variantProps.withDropdownIcon}>
          <KSelect.Icon
            class={styles().icon({
              class: [selectStaticClass("icon"), themeClasses.icon, local.slotClasses?.icon],
            })}
          >
            {runIfFn(local.dropdownIcon)}
          </KSelect.Icon>
        </Show>
      </KSelect.Trigger>
      <Show when={showDescription()}>
        <KSelect.Description
          class={styles().supportText({
            class: [
              "text-content-subtler",
              selectStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description,
            ],
          })}
        >
          {description()}
        </KSelect.Description>
      </Show>
      <Show when={showError()}>
        <KSelect.ErrorMessage
          class={styles().supportText({
            class: [
              "flex items-center gap-x-1 text-content-danger",
              selectStaticClass("error"),
              themeClasses.error,
              local.slotClasses?.error,
            ],
          })}
        >
          <Show when={local.withErrorIcon} fallback={error()}>
            <span
              aria-hidden="true"
              class={styles().errorIcon({
                class: [
                  selectStaticClass("errorIcon"),
                  themeClasses.errorIcon,
                  local.slotClasses?.errorIcon,
                ],
              })}
            >
              {errorIcon()}
            </span>
            <span>{error()}</span>
          </Show>
        </KSelect.ErrorMessage>
      </Show>
      <KSelect.Portal>
        <KSelect.Content
          class={styles().dropdown({
            class: [
              selectStaticClass("dropdown"),
              themeClasses.dropdown,
              local.slotClasses?.dropdown,
            ],
          })}
        >
          <KSelect.Listbox
            class={styles().listbox({
              class: [
                selectStaticClass("listbox"),
                themeClasses.listbox,
                local.slotClasses?.listbox,
              ],
            })}
          />
        </KSelect.Content>
      </KSelect.Portal>
    </KSelect.Root>
  );
}

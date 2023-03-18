import { Select as KSelect } from "@kobalte/core";
import { Accessor, ComponentProps, JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { SelectFieldVariants } from "./select.styles";

export type SelectSlots =
  | "root"
  | "label"
  | "wrapper"
  | "button"
  | "value"
  | "startIcon"
  | "endIcon"
  | "description"
  | "error"
  | "errorIcon"
  | "dropdown"
  | "listbox"
  | "option"
  | "optionIndicator"
  | "optionGroup";

export interface SelectProps<Option, OptGroup = never>
  extends KSelect.SelectTriggerProps,
    Pick<
      KSelect.SelectRootProps<Option, OptGroup>,
      | "defaultIsOpen"
      | "isOpen"
      | "onOpenChange"
      | "defaultValue"
      | "value"
      | "onValueChange"
      | "options"
      | "optionValue"
      | "optionTextValue"
      | "optionDisabled"
      | "optionGroupChildren"
      | "isOptionGroup"
      | "isModal"
      | "id"
      | "name"
      | "isRequired"
      | "isDisabled"
      | "isReadOnly"
    >,
    Omit<SelectFieldVariants, "isFocused" | "isDisabled">,
    SlotProp<SelectSlots> {
  /** Property name or getter function to use as the label of an option. */
  optionLabel?: keyof Option | ((option: Option) => string);

  /** Property name or getter function to use as the label of an option group. */
  optionGroupLabel?: keyof OptGroup | ((optGroup: OptGroup) => string);

  /** Template of selected option. */
  valueTemplate?: (selectedOption: Accessor<Option>) => JSX.Element;

  /** Template of an option items. */
  optionTemplate?: (option: Accessor<Option>) => JSX.Element;

  /** Template of an option group item. */
  optionGroupTemplate?: (optGroup: Accessor<OptGroup>) => JSX.Element;

  /** The placeholder displayed when the select is empty. */
  placeholder?: string;

  /** Additional props to be spread on the inner `<select>` or `<input>` element. */
  inputProps?: ComponentProps<"select"> | ComponentProps<"input">;

  /** The label that gives the user information on the select. */
  label?: JSX.Element;

  /** The description that gives the user more information on the select. */
  description?: JSX.Element;

  /** The error message that gives the user information about how to fix a validation error on the select. */
  error?: JSX.Element;

  /** Whether an asterisk should appear next to the label when the select is required. */
  hasRequiredIndicator?: boolean;

  /** Whether an icon should appear next to the error message. */
  hasErrorIcon?: boolean;

  /** The icon to show next to the error message. */
  errorIcon?: JSX.Element;

  /** The icon to show before the select field content. */
  startIcon?: JSX.Element;

  /** The icon to show after the select field content. */
  endIcon?: JSX.Element;

  /** The section to show before the select field start icon and content. */
  startSection?: JSX.Element;

  /** The section to show after the select field end icon and content. */
  endSection?: JSX.Element;
}

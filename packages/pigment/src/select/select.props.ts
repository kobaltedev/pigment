import { Select as KSelect } from "@kobalte/core";
import { Accessor, ComponentProps, JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { SelectControlVariants } from "./select.styles";

export type SelectSlots =
  | "root"
  | "label"
  | "button"
  | "value"
  | "icon"
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
      | "placeholder"
      | "id"
      | "name"
      | "isRequired"
      | "isDisabled"
      | "isReadOnly"
      | "sameWidth"
    >,
    Omit<SelectControlVariants, "isFocused" | "isDisabled">,
    SlotProp<SelectSlots> {
  /** Property name or getter function to use as the label of an option. */
  optionLabel?: keyof Option | ((option: Option) => string);

  /** Property name or getter function to use as the label of an option group. */
  optionGroupLabel?: keyof OptGroup | ((optGroup: OptGroup) => string);

  /** Template of selected option. */
  valueTemplate?: (selectedOption: Accessor<Option>) => JSX.Element;

  /** Template of an option item. */
  optionTemplate?: (option: Accessor<Option>) => JSX.Element;

  /** Template of an option group item. */
  optionGroupTemplate?: (optGroup: Accessor<OptGroup>) => JSX.Element;

  /** Additional props to be spread on the inner `<select>` element. */
  inputProps?: ComponentProps<"select">;

  /** Whether the select allows empty selection. */
  allowEmptySelection?: boolean;

  /** The label that gives the user information on the select. */
  label?: JSX.Element;

  /** The description that gives the user more information on the select. */
  description?: JSX.Element;

  /** The error message that gives the user information about how to fix a validation error on the select. */
  error?: JSX.Element;

  /** Whether an asterisk should appear next to the label when the select is required. */
  hasRequiredIndicator?: boolean;

  /** Whether an icon should appear next to the selected option in the listbox. */
  hasSelectedIcon?: boolean;

  /** Whether an icon should appear next to the error message. */
  hasErrorIcon?: boolean;

  /** The icon to show next to the error message. */
  errorIcon?: JSX.Element;

  /** The icon to show next to the value as a visual affordance for the fact it can be open. */
  dropdownIcon?: JSX.Element;

  /** The leading adornment of the select. */
  startDecorator?: JSX.Element;

  /** The trailing adornment of the select. */
  endDecorator?: JSX.Element;
}

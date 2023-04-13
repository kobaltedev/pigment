import { Checkbox as KCheckbox } from "@kobalte/core";
import { JSX, Ref } from "solid-js";

import { SlotProp } from "../utils/slot";
import { CheckboxControlVariants } from "./checkbox.styles";

export type CheckboxSlots =
  | "root"
  | "control"
  | "indicator"
  | "labelWrapper"
  | "label"
  | "description"
  | "error"
  | "errorIcon";

export interface CheckboxProps
  extends Omit<KCheckbox.CheckboxRootProps, "ref" | "validationState">,
    Omit<CheckboxControlVariants, "isDisabled">,
    SlotProp<CheckboxSlots> {
  /** A ref to the inner `<input>` element. */
  ref?: Ref<HTMLInputElement>;

  /** Additional props to be spread on the inner `<input>` element. */
  inputProps?: KCheckbox.CheckboxInputProps;

  /** Whether the label, description and error message should appear before or after the checkbox. */
  labelPlacement?: "start" | "end";

  /** The label that gives the user information on the checkbox. */
  label?: JSX.Element | (() => JSX.Element);

  /** The description that gives the user more information on the checkbox. */
  description?: JSX.Element | (() => JSX.Element);

  /** The error message that gives the user information about how to fix a validation error on the checkbox. */
  error?: JSX.Element | (() => JSX.Element);

  /** Whether an icon should appear next to the error message. */
  hasErrorIcon?: boolean;

  /** The icon to show next to the error message. */
  errorIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show when the checkbox is in a checked state. */
  checkedIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show when the checkbox is in an indeterminate state. */
  indeterminateIcon?: JSX.Element | (() => JSX.Element);
}

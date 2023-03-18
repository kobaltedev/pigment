import { TextField as KTextField } from "@kobalte/core";
import { ComponentProps, JSX, Ref } from "solid-js";

import { SlotProp } from "../utils/slot";
import { TextFieldControlVariants } from "./text-field.styles";

export type TextFieldSlots =
  | "root"
  | "label"
  | "control"
  | "input"
  | "description"
  | "error"
  | "errorIcon";

export interface TextFieldProps
  extends Omit<KTextField.TextFieldRootProps, "ref" | "validationState">,
    Omit<TextFieldControlVariants, "isFocused" | "isDisabled">,
    SlotProp<TextFieldSlots> {
  /** A ref to the inner `<input>` or `<textarea>` element. */
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;

  /** The type of content handled by the text field. */
  type?: "text" | "email" | "tel" | "password" | "url" | "number" | "date" | string;

  /** The placeholder displayed when the text field is empty. */
  placeholder?: string;

  /** Additional props to be spread on the inner `<input>` or `<textarea>` element. */
  inputProps?: ComponentProps<"input"> | ComponentProps<"textarea">;

  /** Whether the text field should render a `<textarea>` instead of an `<input>`. */
  isMultiline?: boolean;

  /** The label that gives the user information on the text field. */
  label?: JSX.Element;

  /** The description that gives the user more information on the text field. */
  description?: JSX.Element;

  /** The error message that gives the user information about how to fix a validation error on the text field. */
  error?: JSX.Element;

  /** Whether an asterisk should appear next to the label when the text field is required. */
  hasRequiredIndicator?: boolean;

  /** Whether an icon should appear next to the error message. */
  hasErrorIcon?: boolean;

  /** The icon to show next to the error message. */
  errorIcon?: JSX.Element;

  /** The leading adornment of the text field. */
  startDecorator?: JSX.Element;

  /** The trailing adornment of the text field. */
  endDecorator?: JSX.Element;
}

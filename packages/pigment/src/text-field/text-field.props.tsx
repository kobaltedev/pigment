import { TextField as KTextField } from "@kobalte/core";
import { ComponentProps, JSX, Ref } from "solid-js";

import { SlotProp } from "../utils/slot";
import { TextFieldVariants } from "./text-field.styles";

export type TextFieldSlots =
  | "root"
  | "label"
  | "input"
  | "leadingIcon"
  | "trailingIcon"
  | "errorIcon"
  | "description"
  | "errorMessage";

export interface TextFieldProps
  extends Omit<KTextField.TextFieldRootProps, "ref" | "validationState">,
    Omit<TextFieldVariants, "hasLeadingIcon" | "hasTrailingIcon">,
    SlotProp<TextFieldSlots> {
  /** A ref to the inner `<input>` or `<textarea>` element. */
  ref?: Ref<HTMLInputElement | HTMLTextAreaElement>;

  /** Additional props to be spread on the inner `<input>` or `<textarea>` element. */
  inputProps?: ComponentProps<"input"> | ComponentProps<"textarea">;

  /** The type of content handled by the text field. */
  type?: "text" | "email" | "tel" | "password" | "url" | "number" | "date" | string;

  /** The placeholder displayed when the text field is empty. */
  placeholder?: string;

  /** Whether the text field should render a `<textarea>` instead of an `<input>`. */
  multiline?: boolean;

  /** Whether the text field is invalid regarding the validation rules. */
  invalid?: boolean;

  /** The label that gives the user information on the text field. */
  label?: JSX.Element | (() => JSX.Element);

  /** The description that gives the user more information on the text field. */
  description?: JSX.Element | (() => JSX.Element);

  /** The error message that gives the user information about how to fix a validation error on the text field. */
  errorMessage?: JSX.Element | (() => JSX.Element);

  /** The icon to show next to the error message. */
  errorIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show before the input value. */
  leadingIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the input value. */
  trailingIcon?: JSX.Element | (() => JSX.Element);

  /** The element to show before the input value, in place of the `leadingIcon`. */
  leadingSection?: JSX.Element | (() => JSX.Element);

  /** The element to show after the input value, in place of the `trailingIcon`. */
  trailingSection?: JSX.Element | (() => JSX.Element);

  /** Width of leading element, used to calculate the input `padding-inline-start`. */
  leadingSectionWidth?: JSX.CSSProperties["padding-inline-start"];

  /** Width of trailing element, used to calculate the input `padding-inline-end`. */
  trailingSectionWidth?: JSX.CSSProperties["padding-inline-end"];

  /** The element to show before the input element. */
  leadingAddon?: JSX.Element | (() => JSX.Element);

  /** The element to show after the input element. */
  trailingAddon?: JSX.Element | (() => JSX.Element);
}

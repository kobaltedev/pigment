import { TextField as KTextField } from "@kobalte/core";
import { JSX, Ref } from "solid-js";

import { TextFieldInputVariants } from "./text-field.styles";

export interface TextFieldProps
  extends Omit<KTextField.TextFieldRootProps, "ref" | "validationState">,
    Omit<TextFieldInputVariants, "hasLeftIcon" | "hasRightIcon" | "isDisabled"> {
  /** A ref to the inner `<input>` or `textarea` element. */
  ref: Ref<HTMLInputElement | HTMLTextAreaElement>;

  /** The type of content handled by the text field. */
  type?: "text" | "email" | "tel" | "password" | "url" | "number" | "date" | string;

  /** The placeholder displayed when the text field is empty. */
  placeholder?: string;

  /** Whether the text field accept multiline content. */
  isMultiline?: boolean;

  /** Whether the description should appear above or below the input. */
  descriptionPlacement?: "top" | "bottom";

  /** Additional props to be spread on the inner `<input>` or `textarea` element. */
  inputProps?: Record<string, any>;

  /** The label that gives the user information on the text field. */
  label?: JSX.Element;

  /** The description that gives the user more information on the text field. */
  description?: JSX.Element;

  /** The error message that gives the user information about how to fix a validation error on the text field. */
  error?: JSX.Element;

  /** The icon to show before the text field content. */
  startIcon?: JSX.Element;

  /** The icon to show after the text field content. */
  endIcon?: JSX.Element;
}

export type TextFieldSlots =
  | "root"
  | "label"
  | "wrapper"
  | "input"
  | "icon"
  | "description"
  | "error";

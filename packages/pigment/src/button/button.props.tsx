import { Button as KButton, ButtonRootProps } from "@kobalte/core/button";
import { Link as KLink, LinkRootProps } from "@kobalte/core/link";
import { JSX, ValidComponent } from "solid-js";

import { SlotProp } from "../utils/slot";
import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export type ButtonSlots = "root" | "leadingIcon" | "trailingIcon" | "loadingIcon";

export interface ButtonBaseProps<T extends ValidComponent = "button">
  extends Omit<ButtonRootProps<T>, "color">,
    ButtonVariants,
    SlotProp<ButtonSlots> {
  /** The icon to show before the button content. */
  leadingIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the button content. */
  trailingIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show when the button is in loading state. */
  loadingIcon?: JSX.Element | (() => JSX.Element);

  /** The placement of the loading icon when the button is in a loading state. */
  loadingPlacement?: "center" | "leading" | "trailing";

  /** The children of the element */
  children?: JSX.Element;

  /** Custom classes applied to the element */
  class?: string;
}

export interface ButtonContentProps
  extends Pick<ButtonBaseProps, "leadingIcon" | "trailingIcon" | "children"> {
  leadingIconClass?: string;

  trailingIconClass?: string;
}

export interface ButtonProps<T extends ValidComponent = "button">
  extends Omit<ButtonBaseProps<T>, "iconOnly"> {}

export type IconButtonSlots = "root" | "loadingIcon";

export interface IconButtonProps<T extends ValidComponent = "button">
  extends Omit<
      ButtonBaseProps<T>,
      "iconOnly" | "loadingPlacement" | "leadingIcon" | "trailingIcon" | "slotClasses"
    >,
    SlotProp<IconButtonSlots> {
  /** An accessible label for the button. */
  "aria-label": string;
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export type LinkButtonSlots = "root" | "leadingIcon" | "trailingIcon";

export interface LinkButtonBaseProps<T extends ValidComponent = "a">
  extends Omit<LinkRootProps<T>, "color">,
    Omit<ButtonVariants, "loading">,
    SlotProp<LinkButtonSlots> {
  /** The icon to show before the link button content. */
  leadingIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the link button content. */
  trailingIcon?: JSX.Element | (() => JSX.Element);

  /** The children of the element */
  children?: JSX.Element;

  /** Custom classes applied to the element */
  class?: string;
}

export interface LinkButtonProps<T extends ValidComponent = "a">
  extends Omit<LinkButtonBaseProps<T>, "iconOnly"> {}

export type LinkIconButtonSlots = "root";

export interface LinkIconButtonProps<T extends ValidComponent = "a">
  extends Omit<LinkButtonBaseProps<T>, "iconOnly" | "leadingIcon" | "trailingIcon" | "slotClasses">,
    SlotProp<LinkIconButtonSlots> {
  /** An accessible label for the button. */
  "aria-label": string;
}

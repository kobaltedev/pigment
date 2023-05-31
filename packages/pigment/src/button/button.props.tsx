import { Button as KButton, Link as KLink } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export type ButtonSlots = "root" | "leadingIcon" | "trailingIcon" | "loadingIcon";

export interface ButtonBaseProps
  extends Omit<KButton.ButtonRootProps, "asChild" | "color">,
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
}

export interface ButtonContentProps
  extends Pick<ButtonBaseProps, "leadingIcon" | "trailingIcon" | "children"> {
  leadingIconClass?: string;

  trailingIconClass?: string;
}

export interface ButtonProps extends Omit<ButtonBaseProps, "iconOnly"> {}

export type IconButtonSlots = "root" | "loadingIcon";

export interface IconButtonProps
  extends Omit<
      ButtonBaseProps,
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

export interface LinkButtonBaseProps
  extends Omit<KLink.LinkRootProps, "color">,
    Omit<ButtonVariants, "loading">,
    SlotProp<LinkButtonSlots> {
  /** The icon to show before the link button content. */
  leadingIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the link button content. */
  trailingIcon?: JSX.Element | (() => JSX.Element);
}

export interface LinkButtonProps extends Omit<LinkButtonBaseProps, "iconOnly"> {}

export type LinkIconButtonSlots = "root";

export interface LinkIconButtonProps
  extends Omit<LinkButtonBaseProps, "iconOnly" | "leadingIcon" | "trailingIcon" | "slotClasses">,
    SlotProp<LinkIconButtonSlots> {
  /** An accessible label for the button. */
  "aria-label": string;
}

import { Button as KButton, Link as KLink } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export type ButtonSlots = "root" | "startDecorator" | "endDecorator" | "loadingIndicator";

export interface ButtonBaseProps
  extends Omit<KButton.ButtonRootProps, "asChild" | "color">,
    ButtonVariants,
    SlotProp<ButtonSlots> {
  /** The icon to show when the button is in a loading state. */
  loadingIndicator?: JSX.Element | (() => JSX.Element);

  /** The placement of the loading indicator when the button is in a loading state. */
  loadingPlacement?: "center" | "start" | "end";

  /** The icon to show before the button content. */
  startDecorator?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the button content. */
  endDecorator?: JSX.Element | (() => JSX.Element);
}

export interface ButtonContentProps
  extends Pick<ButtonBaseProps, "startDecorator" | "endDecorator" | "children"> {
  rtl?: boolean;

  startDecoratorClass?: string;

  endDecoratorClass?: string;
}

export interface ButtonProps extends Omit<ButtonBaseProps, "iconOnly"> {}

export interface IconButtonProps
  extends Omit<
    ButtonBaseProps,
    "iconOnly" | "loadingPlacement" | "startDecorator" | "endDecorator"
  > {}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export type LinkButtonSlots = "root" | "startDecorator" | "endDecorator";

export interface LinkButtonBaseProps
  extends Omit<KLink.LinkRootProps, "color">,
    Omit<ButtonVariants, "loading">,
    SlotProp<LinkButtonSlots> {
  /** The icon to show before the link button content. */
  startDecorator?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the link button content. */
  endDecorator?: JSX.Element | (() => JSX.Element);
}

export interface LinkButtonProps extends Omit<LinkButtonBaseProps, "iconOnly"> {}

export interface LinkIconButtonProps
  extends Omit<LinkButtonBaseProps, "iconOnly" | "startDecorator" | "endDecorator"> {}

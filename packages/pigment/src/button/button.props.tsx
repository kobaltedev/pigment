import { Button as KButton, Link as KLink } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export type ButtonSlots = "root" | "startIcon" | "endIcon" | "loadingIcon";

export interface ButtonBaseProps
  extends Omit<KButton.ButtonRootProps, "asChild" | "color">,
    ButtonVariants,
    SlotProp<ButtonSlots> {
  /** The label to show when the button is in a loading state. */
  loadingText?: string;

  /** The icon to show when the button is in a loading state. */
  loadingIcon?: JSX.Element | (() => JSX.Element);

  /**
   * The placement of the loading icon when the button is in a loading state
   * and a loading text is provided.
   */
  loadingIconPlacement?: "start" | "end";

  /** The icon to show before the button content. */
  startIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the button content. */
  endIcon?: JSX.Element | (() => JSX.Element);
}

export interface ButtonContentProps
  extends Pick<ButtonBaseProps, "startIcon" | "endIcon" | "children"> {
  rtl?: boolean;

  startIconClass?: string;

  endIconClass?: string;
}

export interface ButtonProps extends Omit<ButtonBaseProps, "iconOnly"> {}

export interface IconButtonProps
  extends Omit<
    ButtonBaseProps,
    "iconOnly" | "loadingText" | "loadingIconPlacement" | "startIcon" | "endIcon"
  > {}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export type LinkButtonSlots = "root" | "startIcon" | "endIcon";

export interface LinkButtonBaseProps
  extends Omit<KLink.LinkRootProps, "color">,
    Omit<ButtonVariants, "loading">,
    SlotProp<LinkButtonSlots> {
  /** The icon to show before the link button content. */
  startIcon?: JSX.Element | (() => JSX.Element);

  /** The icon to show after the link button content. */
  endIcon?: JSX.Element | (() => JSX.Element);
}

export interface LinkButtonProps extends Omit<LinkButtonBaseProps, "iconOnly"> {}

export interface LinkIconButtonProps
  extends Omit<LinkButtonBaseProps, "iconOnly" | "startIcon" | "endIcon"> {}

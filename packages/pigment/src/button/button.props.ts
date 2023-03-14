import { Button as KButton, Link as KLink } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";
import { JSX } from "solid-js";

import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * ButtonBase
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonBaseProps
  extends Omit<KButton.ButtonRootProps, "asChild" | "color">,
    Omit<ButtonVariants, "isDisabled"> {
  /** The label to show when the button is in a loading state. */
  loadingText?: string;

  /** The icon to show when the button is in a loading state. */
  loadingIcon?: JSX.Element;

  /**
   * The placement of the loading icon when the button is in a loading state
   * and a loading text is provided.
   */
  loadingIconPlacement?: "start" | "end";

  /** The icon to show before the button content. */
  startIcon?: JSX.Element;

  /** The icon to show after the button content. */
  endIcon?: JSX.Element;
}

export interface ButtonBaseContentProps
  extends Pick<
    ButtonBaseProps,
    "variant" | "color" | "size" | "isDisabled" | "startIcon" | "endIcon" | "children"
  > {
  isRtl: boolean;
}

export interface ButtonBaseIconProps
  extends OverrideComponentProps<
    "span",
    Pick<ButtonBaseProps, "variant" | "color" | "size" | "isIconOnly" | "isDisabled">
  > {}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonProps extends Omit<ButtonBaseProps, "isIconOnly"> {}

export type ButtonSlots = "root";

/* -------------------------------------------------------------------------------------------------
 * IconButton
 * -----------------------------------------------------------------------------------------------*/

export interface IconButtonProps
  extends Omit<
    ButtonBaseProps,
    "isIconOnly" | "loadingText" | "loadingIconPlacement" | "startIcon" | "endIcon" | "isFullWidth"
  > {}

/* -------------------------------------------------------------------------------------------------
 * LinkButtonBase
 * -----------------------------------------------------------------------------------------------*/

export interface LinkButtonBaseProps
  extends Omit<KLink.LinkRootProps, "color">,
    Omit<ButtonVariants, "isLoading" | "isDisabled"> {
  /** The icon to show before the link button content. */
  startIcon?: JSX.Element;

  /** The icon to show after the link button content. */
  endIcon?: JSX.Element;
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export interface LinkButtonProps extends Omit<LinkButtonBaseProps, "isIconOnly"> {}

export type LinkButtonSlots = "root";

/* -------------------------------------------------------------------------------------------------
 * LinkIconButton
 * -----------------------------------------------------------------------------------------------*/

export interface LinkIconButtonProps
  extends Omit<LinkButtonBaseProps, "isIconOnly" | "startIcon" | "endIcon" | "isFullWidth"> {}

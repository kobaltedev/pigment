import { Button as KButton, Link as KLink } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export type ButtonSlots = "root" | "startIcon" | "endIcon" | "loadingIcon";

export interface ButtonBaseProps
  extends Omit<KButton.ButtonRootProps, "asChild" | "color">,
    Omit<ButtonVariants, "isDisabled">,
    SlotProp<ButtonSlots> {
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

  startIconClass?: string;

  endIconClass?: string;
}

export interface ButtonBaseIconProps
  extends OverrideComponentProps<
    "span",
    Pick<ButtonBaseProps, "variant" | "color" | "size" | "isIconOnly" | "isDisabled">
  > {}

export interface ButtonProps extends Omit<ButtonBaseProps, "isIconOnly"> {}

export interface IconButtonProps
  extends Omit<
    ButtonBaseProps,
    "isIconOnly" | "loadingText" | "loadingIconPlacement" | "startIcon" | "endIcon" | "isFullWidth"
  > {}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

export type LinkButtonSlots = "root" | "startIcon" | "endIcon";

export interface LinkButtonBaseProps
  extends Omit<KLink.LinkRootProps, "color">,
    Omit<ButtonVariants, "isLoading" | "isDisabled">,
    SlotProp<LinkButtonSlots> {
  /** The icon to show before the link button content. */
  startIcon?: JSX.Element;

  /** The icon to show after the link button content. */
  endIcon?: JSX.Element;
}

export interface LinkButtonProps extends Omit<LinkButtonBaseProps, "isIconOnly"> {}

export interface LinkIconButtonProps
  extends Omit<LinkButtonBaseProps, "isIconOnly" | "startIcon" | "endIcon" | "isFullWidth"> {}

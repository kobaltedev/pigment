import { Button as KButton } from "@kobalte/core";
import { ComponentProps, JSX } from "solid-js";

import { ButtonVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * ButtonBase
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonBaseProps
  extends KButton.ButtonRootOptions,
    Omit<ButtonVariants, "isLoading" | "isDisabled"> {
  /** Whether the button is in a loading state. */
  isLoading?: boolean;

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

  /** The content of the button. */
  children?: JSX.Element;
}

export interface ButtonBaseContentProps
  extends Pick<
    ButtonBaseProps,
    "variant" | "colorScheme" | "size" | "isDisabled" | "startIcon" | "endIcon" | "children"
  > {
  isRtl: boolean;
}

export interface ButtonBaseIconProps
  extends ComponentProps<"span">,
    Pick<ButtonBaseProps, "variant" | "colorScheme" | "size" | "isIconOnly" | "isDisabled"> {}

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
    | "isIconOnly"
    | "loadingText"
    | "loadingIconPlacement"
    | "startIcon"
    | "endIcon"
    | "isFullWidth"
    | "children"
  > {
  /** An accessible label that describes the button. */
  "aria-label": string;

  /** The icon to be used in the button. */
  children?: JSX.Element;
}

export type IconButtonSlots = "root";

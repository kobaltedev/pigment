import { Button as KButton, createPolymorphicComponent, useLocale } from "@kobalte/core";
import { clsx } from "clsx";
import { JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonProps extends KButton.ButtonRootOptions {
  /** The label to show in the button when `isLoading` is true. */
  loadingText?: string;

  /** Whether the button is in a loading state. */
  isLoading?: boolean;

  /** The icon to show before the button's label. */
  startIcon?: JSX.Element;

  /** The icon to show after the button's label. */
  endIcon?: JSX.Element;

  /** The label of the button. */
  children?: JSX.Element;
}

export const Button = createPolymorphicComponent<"button", ButtonProps>(props => {
  const [local, contentProps, others] = splitProps(
    props,
    ["class", "loadingText", "isLoading", "isDisabled"],
    ["startIcon", "endIcon", "children"]
  );

  const { direction } = useLocale();

  const isRtl = () => direction() === "rtl";

  return (
    <KButton.Root {...others}>
      <Show when={local.isLoading && !isRtl()}>
        <ButtonLoader isPositionAbsolute={!local.loadingText} />
      </Show>
      <Show when={local.isLoading} fallback={<ButtonContent isRtl={isRtl()} {...contentProps} />}>
        <Show
          when={local.loadingText}
          fallback={
            <span class="opacity-0">
              <ButtonContent isRtl={isRtl()} {...contentProps} />
            </span>
          }
        >
          {local.loadingText}
        </Show>
      </Show>
      <Show when={local.isLoading && isRtl()}>
        <ButtonLoader isPositionAbsolute={!local.loadingText} />
      </Show>
    </KButton.Root>
  );
});

/* -------------------------------------------------------------------------------------------------
 * ButtonContent
 * -----------------------------------------------------------------------------------------------*/

interface ButtonContentProps extends Pick<ButtonProps, "startIcon" | "endIcon" | "children"> {
  isRtl: boolean;
}

function ButtonContent(props: ButtonContentProps) {
  const leftIcon = () => {
    return props.isRtl ? props.endIcon : props.startIcon;
  };

  const rightIcon = () => {
    return props.isRtl ? props.startIcon : props.endIcon;
  };

  const iconClass = "shrink-0 reset-svg";

  return (
    <>
      <Show when={leftIcon()}>
        <span aria-hidden="true" class={iconClass}>
          {leftIcon()}
        </span>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <span aria-hidden="true" class={iconClass}>
          {rightIcon()}
        </span>
      </Show>
    </>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonLoader
 * -----------------------------------------------------------------------------------------------*/

interface ButtonLoaderProps {
  isPositionAbsolute: boolean;
}

function ButtonLoader(props: ButtonLoaderProps) {
  return (
    <LoaderIcon
      width="1em"
      height="1em"
      class={clsx("shrink-0 animate-spin", props.isPositionAbsolute && "absolute")}
    />
  );
}

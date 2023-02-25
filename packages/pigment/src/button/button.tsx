import { Button as KButton, createPolymorphicComponent, useLocale } from "@kobalte/core";
import { mergeDefaultProps, PolymorphicComponent } from "@kobalte/utils";
import { Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme/theme-context";
import { cn } from "../utils/cn";
import {
  ButtonBaseContentProps,
  ButtonBaseIconProps,
  ButtonBaseProps,
  ButtonProps,
  ButtonSlots,
  IconButtonProps,
} from "./button.props";
import { buttonIconVariants, buttonVariants, loadingContentVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * ButtonBase
 * -----------------------------------------------------------------------------------------------*/

const ButtonBase: PolymorphicComponent<"button", ButtonBaseProps> = createPolymorphicComponent(
  props => {
    props = mergeThemeProps(
      "Button",
      {
        loadingIconPlacement: "start",
      },
      props
    );

    const buttonThemeClasses = useThemeClasses<ButtonSlots>("Button", props);

    const [local, variantProps, contentProps, loadingIconProps, loadingContentProps, others] =
      splitProps(
        props,
        ["class", "isLoading", "loadingText", "loadingIcon", "loadingIconPlacement"],
        ["variant", "colorScheme", "size", "isIconOnly", "isFullWidth", "isLoading", "isDisabled"],
        ["variant", "colorScheme", "size", "isDisabled", "startIcon", "endIcon", "children"],
        ["variant", "colorScheme", "size", "isIconOnly", "isDisabled"],
        ["size"]
      );

    const { direction } = useLocale();

    const isRtl = () => direction() === "rtl";

    const isLoadingIconLeft = () => {
      if (isRtl()) {
        return local.loadingIconPlacement === "end";
      } else {
        return local.loadingIconPlacement === "start";
      }
    };

    const content = () => {
      return <ButtonBaseContent isRtl={isRtl()} {...contentProps} />;
    };

    return (
      <KButton.Root
        class={cn(buttonVariants(variantProps), buttonThemeClasses.root, local.class)}
        isDisabled={variantProps.isDisabled}
        {...others}
      >
        <Show when={local.isLoading} fallback={content()}>
          <Show
            when={local.loadingText}
            fallback={
              <>
                <ButtonBaseLoadingIcon class="pg-absolute" {...loadingIconProps} />
                <Show when={!variantProps.isIconOnly}>
                  <span class={loadingContentVariants(loadingContentProps)}>{content()}</span>
                </Show>
              </>
            }
          >
            <Show
              when={isLoadingIconLeft()}
              fallback={
                <>
                  {local.loadingText}
                  <ButtonBaseLoadingIcon {...loadingIconProps} />
                </>
              }
            >
              <ButtonBaseLoadingIcon {...loadingIconProps} />
              {local.loadingText}
            </Show>
          </Show>
        </Show>
      </KButton.Root>
    );
  }
);

function ButtonBaseContent(props: ButtonBaseContentProps) {
  const [iconProps, others] = splitProps(
    props,

    ["variant", "colorScheme", "size", "isDisabled"]
  );

  const leftIcon = () => {
    return props.isRtl ? props.endIcon : props.startIcon;
  };

  const rightIcon = () => {
    return props.isRtl ? props.startIcon : props.endIcon;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonBaseIcon isIconOnly={false} {...iconProps}>
          {leftIcon()}
        </ButtonBaseIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonBaseIcon isIconOnly={false} {...iconProps}>
          {rightIcon()}
        </ButtonBaseIcon>
      </Show>
    </>
  );
}

function ButtonBaseIcon(props: ButtonBaseIconProps) {
  const [local, variantProps, others] = splitProps(
    props,
    ["class"],
    ["variant", "colorScheme", "size", "isIconOnly", "isDisabled"]
  );

  return (
    <span
      aria-hidden="true"
      class={cn(buttonIconVariants(variantProps), local.class)}
      {...others}
    />
  );
}

function ButtonBaseLoadingIcon(props: ButtonBaseIconProps) {
  props = mergeDefaultProps(
    {
      children: () => <LoaderIcon class="pg-animate-spin" />,
    },
    props
  );

  return <ButtonBaseIcon {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export const Button: PolymorphicComponent<"button", ButtonProps> = createPolymorphicComponent(
  props => {
    return <ButtonBase isIconOnly={false} {...props} />;
  }
);

/* -------------------------------------------------------------------------------------------------
 * IconButton
 * -----------------------------------------------------------------------------------------------*/

export const IconButton: PolymorphicComponent<"button", IconButtonProps> =
  createPolymorphicComponent(props => {
    return <ButtonBase isIconOnly {...props} />;
  });

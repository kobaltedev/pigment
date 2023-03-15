import { Button as KButton, Link as KLink, useLocale } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import { createMemo, Show, splitProps } from "solid-js";

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
  LinkButtonBaseProps,
  LinkButtonProps,
  LinkButtonSlots,
  LinkIconButtonProps,
} from "./button.props";
import { buttonIconVariants, buttonVariants, loadingContentVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

function ButtonBase(props: ButtonBaseProps) {
  props = mergeThemeProps(
    "Button",
    {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
      loadingIconPlacement: "start",
    },
    props
  );

  const themeClasses = useThemeClasses<ButtonSlots>("Button", props);

  const [local, variantProps, contentProps, loadingIconProps, loadingContentProps, others] =
    splitProps(
      props,
      [
        "class",
        "slotClasses",
        "startIcon",
        "endIcon",
        "isLoading",
        "loadingText",
        "loadingIcon",
        "loadingIconPlacement",
      ],
      ["variant", "color", "size", "isIconOnly", "isFullWidth", "isLoading", "isDisabled"],
      ["variant", "color", "size", "isDisabled", "children"],
      ["variant", "color", "size", "isIconOnly", "isDisabled"],
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
    return (
      <ButtonBaseContent
        isRtl={direction() === "rtl"}
        startIconClass={cn(themeClasses.startIcon, local.slotClasses?.startIcon)}
        endIconClass={cn(themeClasses.endIcon, local.slotClasses?.endIcon)}
        {...contentProps}
      />
    );
  };

  return (
    <KButton.Root
      class={cn(
        buttonVariants(variantProps),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <Show when={local.isLoading} fallback={content()}>
        <Show
          when={local.loadingText}
          fallback={
            <>
              <ButtonBaseLoadingIcon
                class={cn("absolute", themeClasses.loadingIcon, local.slotClasses?.loadingIcon)}
                {...loadingIconProps}
              />
              <Show when={!variantProps.isIconOnly}>
                <span class={loadingContentVariants(loadingContentProps)}>{content()}</span>
              </Show>
            </>
          }
        >
          <Show when={isLoadingIconLeft()}>
            <ButtonBaseLoadingIcon
              class={cn(themeClasses.loadingIcon, local.slotClasses?.loadingIcon)}
              {...loadingIconProps}
            />
          </Show>
          {local.loadingText}
          <Show when={!isLoadingIconLeft()}>
            <ButtonBaseLoadingIcon
              class={cn(themeClasses.loadingIcon, local.slotClasses?.loadingIcon)}
              {...loadingIconProps}
            />
          </Show>
        </Show>
      </Show>
    </KButton.Root>
  );
}

function ButtonBaseContent(props: ButtonBaseContentProps) {
  const [iconProps] = splitProps(props, ["variant", "color", "size", "isDisabled"]);

  const leftIcon = createMemo(() => {
    return props.isRtl ? props.endIcon : props.startIcon;
  });

  const rightIcon = createMemo(() => {
    return props.isRtl ? props.startIcon : props.endIcon;
  });

  const leftIconClass = () => {
    return props.isRtl ? props.endIconClass : props.startIconClass;
  };

  const rightIconClass = () => {
    return props.isRtl ? props.startIconClass : props.endIconClass;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonBaseIcon class={leftIconClass()} isIconOnly={false} {...iconProps}>
          {leftIcon()}
        </ButtonBaseIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonBaseIcon class={rightIconClass()} isIconOnly={false} {...iconProps}>
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
    ["variant", "color", "size", "isIconOnly", "isDisabled"]
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
      children: () => <LoaderIcon class="animate-spin" />,
    },
    props
  );

  return <ButtonBaseIcon {...props} />;
}

export function Button(props: ButtonProps) {
  return <ButtonBase isIconOnly={false} {...props} />;
}

export function IconButton(props: IconButtonProps) {
  return <ButtonBase isIconOnly {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

function LinkButtonBase(props: LinkButtonBaseProps) {
  props = mergeThemeProps(
    "LinkButton",
    {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
    },
    props
  );

  const themeClasses = useThemeClasses<LinkButtonSlots>("LinkButton", props);

  const [local, variantProps, contentProps, others] = splitProps(
    props,
    ["class", "slotClasses"],
    ["variant", "color", "size", "isIconOnly", "isFullWidth", "isDisabled"],
    ["variant", "color", "size", "isDisabled", "startIcon", "endIcon", "children"]
  );

  const { direction } = useLocale();

  return (
    <KLink.Root
      class={cn(
        buttonVariants(variantProps),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <ButtonBaseContent
        isRtl={direction() === "rtl"}
        startIconClass={cn(themeClasses.startIcon, local.slotClasses?.startIcon)}
        endIconClass={cn(themeClasses.endIcon, local.slotClasses?.endIcon)}
        {...contentProps}
      />
    </KLink.Root>
  );
}

export function LinkButton(props: LinkButtonProps) {
  return <LinkButtonBase isIconOnly={false} {...props} />;
}

export function LinkIconButton(props: LinkIconButtonProps) {
  return <LinkButtonBase isIconOnly {...props} />;
}

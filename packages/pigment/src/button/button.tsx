import { Button as KButton, Link as KLink, useLocale } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import { createMemo, JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import {
  ButtonBaseProps,
  ButtonContentProps,
  ButtonIconProps,
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
 * Common
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ButtonIconProps) {
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

function ButtonLoadingIcon(props: ButtonIconProps) {
  props = mergeDefaultProps(
    {
      children: (() => <LoaderIcon class="animate-spin" />) as unknown as JSX.Element,
    },
    props
  );

  return <ButtonIcon {...props} />;
}

function ButtonContent(props: ButtonContentProps) {
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
        <ButtonIcon class={leftIconClass()} isIconOnly={false} {...iconProps}>
          {leftIcon()}
        </ButtonIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonIcon class={rightIconClass()} isIconOnly={false} {...iconProps}>
          {rightIcon()}
        </ButtonIcon>
      </Show>
    </>
  );
}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

const buttonStaticClass = makeStaticClass<ButtonSlots>("button");

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
      ["class", "slotClasses", "isLoading", "loadingText", "loadingIcon", "loadingIconPlacement"],
      ["variant", "color", "size", "isIconOnly", "isFullWidth", "isLoading", "isDisabled"],
      ["variant", "color", "size", "isDisabled", "startIcon", "endIcon", "children"],
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

  const loadingIconClass = (additionalClasses?: string) => {
    return cn(
      additionalClasses,
      buttonStaticClass("loadingIcon"),
      themeClasses.loadingIcon,
      local.slotClasses?.loadingIcon
    );
  };

  const content = () => {
    return (
      <ButtonContent
        isRtl={direction() === "rtl"}
        startIconClass={cn(
          buttonStaticClass("startIcon"),
          themeClasses.startIcon,
          local.slotClasses?.startIcon
        )}
        endIconClass={cn(
          buttonStaticClass("endIcon"),
          themeClasses.endIcon,
          local.slotClasses?.endIcon
        )}
        {...contentProps}
      />
    );
  };

  return (
    <KButton.Root
      class={cn(
        buttonVariants(variantProps),
        buttonStaticClass("root"),
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
              <ButtonLoadingIcon class={loadingIconClass("absolute")} {...loadingIconProps} />
              <Show when={!variantProps.isIconOnly}>
                <span class={loadingContentVariants(loadingContentProps)}>{content()}</span>
              </Show>
            </>
          }
        >
          <Show when={isLoadingIconLeft()}>
            <ButtonLoadingIcon class={loadingIconClass()} {...loadingIconProps} />
          </Show>
          {local.loadingText}
          <Show when={!isLoadingIconLeft()}>
            <ButtonLoadingIcon class={loadingIconClass()} {...loadingIconProps} />
          </Show>
        </Show>
      </Show>
    </KButton.Root>
  );
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

const linkButtonStaticClass = makeStaticClass<LinkButtonSlots>("link-button");

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
        linkButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      isDisabled={variantProps.isDisabled}
      {...others}
    >
      <ButtonContent
        isRtl={direction() === "rtl"}
        startIconClass={cn(
          linkButtonStaticClass("startIcon"),
          themeClasses.startIcon,
          local.slotClasses?.startIcon
        )}
        endIconClass={cn(
          linkButtonStaticClass("endIcon"),
          themeClasses.endIcon,
          local.slotClasses?.endIcon
        )}
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

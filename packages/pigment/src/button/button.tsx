import { Button as KButton, Link as KLink, useLocale } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import { createMemo, JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { cn } from "../utils/cn";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
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
import { buttonIconVariants, buttonStyles, loadingContentVariants } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Common
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ButtonIconProps) {
  const [local, variantProps, others] = splitProps(
    props,
    ["class"],
    ["variant", "color", "size", "iconOnly", "disabled"]
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
  const [iconProps] = splitProps(props, ["variant", "color", "size", "disabled"]);

  const leftIcon = createMemo(() => {
    return runIfFn(props.rtl ? props.endIcon : props.startIcon);
  });

  const rightIcon = createMemo(() => {
    return runIfFn(props.rtl ? props.startIcon : props.endIcon);
  });

  const leftIconClass = () => {
    return props.rtl ? props.endIconClass : props.startIconClass;
  };

  const rightIconClass = () => {
    return props.rtl ? props.startIconClass : props.endIconClass;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonIcon class={leftIconClass()} iconOnly={false} {...iconProps}>
          {leftIcon()}
        </ButtonIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonIcon class={rightIconClass()} iconOnly={false} {...iconProps}>
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
      size: "md",
      iconOnly: false,
      fullWidth: false,
      disabled: false,
      loadingIconPlacement: "start",
    },
    props
  );

  const themeClasses = useThemeClasses<ButtonSlots>("Button", props);

  const [local, variantProps, contentProps, loadingIconProps, loadingContentProps, others] =
    splitProps(
      props,
      ["class", "slotClasses", "loading", "loadingText", "loadingIcon", "loadingIconPlacement"],
      ["variant", "color", "size", "iconOnly", "fullWidth", "loading", "disabled"],
      ["variant", "color", "size", "disabled", "startIcon", "endIcon", "children"],
      ["variant", "color", "size", "iconOnly", "disabled"],
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
        rtl={direction() === "rtl"}
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
        buttonStyles(variantProps),
        buttonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      disabled={variantProps.disabled}
      {...others}
    >
      <Show when={local.loading} fallback={content()}>
        <Show
          when={local.loadingText}
          fallback={
            <>
              <ButtonLoadingIcon class={loadingIconClass("absolute")} {...loadingIconProps} />
              <Show when={!variantProps.iconOnly}>
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
  return <ButtonBase iconOnly={false} {...props} />;
}

export function IconButton(props: IconButtonProps) {
  return <ButtonBase iconOnly {...props} />;
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
      size: "md",
      iconOnly: false,
      fullWidth: false,
      disabled: false,
    },
    props
  );

  const themeClasses = useThemeClasses<LinkButtonSlots>("LinkButton", props);

  const [local, variantProps, contentProps, others] = splitProps(
    props,
    ["class", "slotClasses"],
    ["variant", "color", "size", "iconOnly", "fullWidth", "disabled"],
    ["variant", "color", "size", "disabled", "startIcon", "endIcon", "children"]
  );

  const { direction } = useLocale();

  return (
    <KLink.Root
      class={cn(
        buttonStyles(variantProps),
        linkButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      disabled={variantProps.disabled}
      {...others}
    >
      <ButtonContent
        rtl={direction() === "rtl"}
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
  return <LinkButtonBase iconOnly={false} {...props} />;
}

export function LinkIconButton(props: LinkIconButtonProps) {
  return <LinkButtonBase iconOnly {...props} />;
}

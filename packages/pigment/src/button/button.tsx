import { Button as KButton, Link as KLink, useLocale } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import { ComponentProps, createMemo, JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { runIfFn } from "../utils/run-if-fn";
import {
  ButtonBaseProps,
  ButtonContentProps,
  ButtonProps,
  ButtonSlots,
  IconButtonProps,
  LinkButtonBaseProps,
  LinkButtonProps,
  LinkButtonSlots,
  LinkIconButtonProps,
} from "./button.props";
import { buttonStyles } from "./button.styles";

/* -------------------------------------------------------------------------------------------------
 * Common
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ComponentProps<"span">) {
  return <span aria-hidden="true" {...props} />;
}

function ButtonLoadingIcon(props: ComponentProps<"span">) {
  props = mergeDefaultProps(
    {
      children: (() => <LoaderIcon class="animate-spin" />) as unknown as JSX.Element,
    },
    props
  );

  return <ButtonIcon {...props} />;
}

function ButtonContent(props: ButtonContentProps) {
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
        <ButtonIcon class={leftIconClass()}>{leftIcon()}</ButtonIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonIcon class={rightIconClass()}>{rightIcon()}</ButtonIcon>
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

  const [local, variantProps, others] = splitProps(
    props,
    [
      "class",
      "slotClasses",
      "children",
      "loadingText",
      "loadingIcon",
      "loadingIconPlacement",
      "startIcon",
      "endIcon",
    ],
    ["variant", "color", "size", "iconOnly", "fullWidth", "loading", "disabled"]
  );

  const styles = createMemo(() => buttonStyles(variantProps));

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
    return styles().icon({
      class: [
        additionalClasses,
        buttonStaticClass("loadingIcon"),
        themeClasses.loadingIcon,
        local.slotClasses?.loadingIcon,
      ],
    });
  };

  const content = () => {
    return (
      <ButtonContent
        rtl={direction() === "rtl"}
        startIconClass={styles().icon({
          class: [
            buttonStaticClass("startIcon"),
            themeClasses.startIcon,
            local.slotClasses?.startIcon,
          ],
        })}
        endIconClass={styles().icon({
          class: [buttonStaticClass("endIcon"), themeClasses.endIcon, local.slotClasses?.endIcon],
        })}
        startIcon={local.startIcon}
        endIcon={local.endIcon}
      >
        {local.children}
      </ButtonContent>
    );
  };

  return (
    <KButton.Root
      class={styles().root({
        class: [buttonStaticClass("root"), themeClasses.root, local.slotClasses?.root, local.class],
      })}
      disabled={variantProps.disabled}
      {...others}
    >
      <Show when={variantProps.loading} fallback={content()}>
        <Show
          when={local.loadingText}
          fallback={
            <>
              <ButtonLoadingIcon class={loadingIconClass("absolute")} />
              <Show when={!variantProps.iconOnly}>
                <span class={styles().loadingContent()}>{content()}</span>
              </Show>
            </>
          }
        >
          <Show when={isLoadingIconLeft()}>
            <ButtonLoadingIcon class={loadingIconClass()} />
          </Show>
          {local.loadingText}
          <Show when={!isLoadingIconLeft()}>
            <ButtonLoadingIcon class={loadingIconClass()} />
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

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses", "children", "startIcon", "endIcon"],
    ["variant", "color", "size", "iconOnly", "fullWidth", "disabled"]
  );

  const { direction } = useLocale();

  const styles = createMemo(() => buttonStyles(variantProps));

  return (
    <KLink.Root
      class={styles().root({
        class: [
          linkButtonStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      disabled={variantProps.disabled}
      {...others}
    >
      <ButtonContent
        rtl={direction() === "rtl"}
        startIconClass={styles().icon({
          class: [
            linkButtonStaticClass("startIcon"),
            themeClasses.startIcon,
            local.slotClasses?.startIcon,
          ],
        })}
        endIconClass={styles().icon({
          class: [
            linkButtonStaticClass("endIcon"),
            themeClasses.endIcon,
            local.slotClasses?.endIcon,
          ],
        })}
        startIcon={local.startIcon}
        endIcon={local.endIcon}
      >
        {local.children}
      </ButtonContent>
    </KLink.Root>
  );
}

export function LinkButton(props: LinkButtonProps) {
  return <LinkButtonBase iconOnly={false} {...props} />;
}

export function LinkIconButton(props: LinkIconButtonProps) {
  return <LinkButtonBase iconOnly {...props} />;
}

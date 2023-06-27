import { Button as KButton, Link as KLink } from "@kobalte/core";
import { children, ComponentProps, createMemo, JSX, Show, splitProps } from "solid-js";

import { Icon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
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
import { isString } from "@kobalte/utils";

/* -------------------------------------------------------------------------------------------------
 * Common
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ComponentProps<"span">) {
  return <span aria-hidden="true" {...props} />;
}

function ButtonContent(props: ButtonContentProps) {
  const leadingIcon = createMemo(() => props.leadingIcon as unknown as JSX.Element);
  const trailingIcon = createMemo(() => props.trailingIcon as unknown as JSX.Element);

  return (
    <>
      <Show when={leadingIcon()}>
        <ButtonIcon class={props.leadingIconClass}>{leadingIcon()}</ButtonIcon>
      </Show>
      {props.children}
      <Show when={trailingIcon()}>
        <ButtonIcon class={props.trailingIconClass}>{trailingIcon()}</ButtonIcon>
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
      variant: "default",
      color: "primary",
      size: "md",
      iconOnly: false,
      fullWidth: false,
      disabled: false,
      loadingPlacement: "center",
      loadingIcon: "i-tabler-loader-2",
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
      "loadingIcon",
      "loadingPlacement",
      "leadingIcon",
      "trailingIcon",
    ],
    ["variant", "color", "size", "iconOnly", "fullWidth", "loading"]
  );

  const styles = createMemo(() => buttonStyles(variantProps));

  const loadingIconClasses = createMemo(() => {
    return styles().icon({
      class: [
        local.loadingPlacement === "center" ? "absolute" : "",
        buttonStaticClass("loadingIcon"),
        themeClasses.loadingIcon,
        local.slotClasses?.loadingIcon,
      ],
    });
  });

  const loadingIcon = createMemo(() => {
    if (isString(local.loadingIcon)) {
      return <Icon name={local.loadingIcon as string} class="animate-spin" />;
    }

    return local.loadingIcon as unknown as JSX.Element;
  });

  const leadingIcon = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "leading") {
      return <ButtonIcon class={loadingIconClasses()}>{loadingIcon()}</ButtonIcon>;
    }

    if (isString(local.leadingIcon)) {
      return <Icon name={local.leadingIcon as string} />;
    }

    return local.leadingIcon as unknown as JSX.Element;
  });

  const trailingIcon = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "trailing") {
      return <ButtonIcon class={loadingIconClasses()}>{loadingIcon()}</ButtonIcon>;
    }

    if (isString(local.trailingIcon)) {
      return <Icon name={local.trailingIcon as string} />;
    }

    return local.trailingIcon as unknown as JSX.Element;
  });

  const leadingIconClasses = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "leading") {
      return undefined;
    }

    return styles().icon({
      class: [
        buttonStaticClass("leadingIcon"),
        themeClasses.leadingIcon,
        local.slotClasses?.leadingIcon,
      ],
    });
  });

  const trailingIconClasses = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "trailing") {
      return undefined;
    }

    return styles().icon({
      class: [
        buttonStaticClass("trailingIcon"),
        themeClasses.trailingIcon,
        local.slotClasses?.trailingIcon,
      ],
    });
  });

  const content = () => {
    return (
      <ButtonContent
        leadingIconClass={leadingIconClasses()}
        trailingIconClass={trailingIconClasses()}
        leadingIcon={leadingIcon()}
        trailingIcon={trailingIcon()}
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
      {...others}
    >
      <Show when={variantProps.loading && local.loadingPlacement === "center"} fallback={content()}>
        <ButtonIcon class={loadingIconClasses()}>{loadingIcon()}</ButtonIcon>
        <Show when={!variantProps.iconOnly}>
          <span class={styles().loadingContent()}>{content()}</span>
        </Show>
      </Show>
    </KButton.Root>
  );
}

export function Button(props: ButtonProps) {
  return <ButtonBase iconOnly={false} {...props} />;
}

export function IconButton(props: IconButtonProps) {
  const [local, others] = splitProps(props, ["icon", "children"]);

  const resolvedChildren = children(() => local.children);

  return (
    <ButtonBase iconOnly {...others}>
      <Show
        when={resolvedChildren()}
        fallback={
          <Show when={isString(local.icon)} fallback={local.icon as unknown as JSX.Element}>
            <Icon name={local.icon as string} />
          </Show>
        }
      >
        {resolvedChildren()}
      </Show>
    </ButtonBase>
  );
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

const linkButtonStaticClass = makeStaticClass<LinkButtonSlots>("link-button");

function LinkButtonBase(props: LinkButtonBaseProps) {
  props = mergeThemeProps(
    "LinkButton",
    {
      variant: "default",
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
    ["class", "slotClasses", "children", "leadingIcon", "trailingIcon"],
    ["variant", "size", "iconOnly", "fullWidth"]
  );

  const styles = createMemo(() => buttonStyles(variantProps));

  const leadingIcon = createMemo(() => {
    if (isString(local.leadingIcon)) {
      return <Icon name={local.leadingIcon as string} />;
    }

    return local.leadingIcon as unknown as JSX.Element;
  });

  const trailingIcon = createMemo(() => {
    if (isString(local.trailingIcon)) {
      return <Icon name={local.trailingIcon as string} />;
    }

    return local.trailingIcon as unknown as JSX.Element;
  });

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
      {...others}
    >
      <ButtonContent
        leadingIconClass={styles().icon({
          class: [
            linkButtonStaticClass("leadingIcon"),
            themeClasses.leadingIcon,
            local.slotClasses?.leadingIcon,
          ],
        })}
        trailingIconClass={styles().icon({
          class: [
            linkButtonStaticClass("trailingIcon"),
            themeClasses.trailingIcon,
            local.slotClasses?.trailingIcon,
          ],
        })}
        leadingIcon={leadingIcon()}
        trailingIcon={trailingIcon()}
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
  const [local, others] = splitProps(props, ["icon", "children"]);

  const resolvedChildren = children(() => local.children);

  return (
    <LinkButtonBase iconOnly {...others}>
      <Show
        when={resolvedChildren()}
        fallback={
          <Show when={isString(local.icon)} fallback={local.icon as unknown as JSX.Element}>
            <Icon name={local.icon as string} />
          </Show>
        }
      >
        {resolvedChildren()}
      </Show>
    </LinkButtonBase>
  );
}

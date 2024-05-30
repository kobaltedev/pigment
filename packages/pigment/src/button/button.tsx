import { Button as KButton } from "@kobalte/core/button";
import { Link as KLink } from "@kobalte/core/link";
import { ComponentProps, createMemo, JSX, Show, splitProps, ValidComponent } from "solid-js";

import { TablerLoaderIcon } from "../icon";
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
import { PolymorphicProps } from "@kobalte/core/polymorphic";

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

function ButtonBase<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonBaseProps<T>>
) {
  const mergedProps = mergeThemeProps(
    "Button",
    {
      variant: "default",
      color: "primary",
      size: "md",
      iconOnly: false,
      fullWidth: false,
      disabled: false,
      loadingPlacement: "center",
      loadingIcon: () => <TablerLoaderIcon class="animate-spin" />,
    },
    props as ButtonBaseProps
  );

  const themeClasses = useThemeClasses<ButtonSlots>("Button", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
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

  const loadingIcon = createMemo(() => local.loadingIcon as unknown as JSX.Element);

  const leadingIcon = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "leading") {
      return <ButtonIcon class={loadingIconClasses()}>{loadingIcon()}</ButtonIcon>;
    }

    return local.leadingIcon;
  });

  const trailingIcon = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "trailing") {
      return <ButtonIcon class={loadingIconClasses()}>{loadingIcon()}</ButtonIcon>;
    }

    return local.trailingIcon;
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
    <KButton
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
    </KButton>
  );
}

export function Button<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, ButtonProps<T>>
) {
  return <ButtonBase iconOnly={false} {...(props as ButtonProps)} />;
}

export function IconButton<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, IconButtonProps<T>>
) {
  return <ButtonBase iconOnly {...(props as IconButtonProps)} />;
}

/* -------------------------------------------------------------------------------------------------
 * LinkButton
 * -----------------------------------------------------------------------------------------------*/

const linkButtonStaticClass = makeStaticClass<LinkButtonSlots>("link-button");

function LinkButtonBase<T extends ValidComponent = "a">(
  props: PolymorphicProps<T, LinkButtonBaseProps<T>>
) {
  const mergedProps = mergeThemeProps(
    "LinkButton",
    {
      variant: "default",
      size: "md",
      iconOnly: false,
      fullWidth: false,
      disabled: false,
    },
    props as LinkButtonBaseProps
  );

  const themeClasses = useThemeClasses<LinkButtonSlots>("LinkButton", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
    ["class", "slotClasses", "children", "leadingIcon", "trailingIcon"],
    ["variant", "size", "iconOnly", "fullWidth"]
  );

  const styles = createMemo(() => buttonStyles(variantProps));

  return (
    <KLink
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
        leadingIcon={local.leadingIcon}
        trailingIcon={local.trailingIcon}
      >
        {local.children}
      </ButtonContent>
    </KLink>
  );
}

export function LinkButton<T extends ValidComponent = "a">(
  props: PolymorphicProps<T, LinkButtonProps<T>>
) {
  return <LinkButtonBase iconOnly={false} {...(props as LinkButtonProps)} />;
}

export function LinkIconButton<T extends ValidComponent = "a">(
  props: PolymorphicProps<T, LinkIconButtonProps<T>>
) {
  return <LinkButtonBase iconOnly {...(props as LinkIconButtonProps)} />;
}

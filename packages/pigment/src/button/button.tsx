import { Button as KButton, Link as KLink } from "@kobalte/core";
import { ComponentProps, createMemo, JSX, Show, splitProps } from "solid-js";

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

/* -------------------------------------------------------------------------------------------------
 * Common
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ComponentProps<"span">) {
  return <span aria-hidden="true" {...props} />;
}

function ButtonContent(props: ButtonContentProps) {
  const startDecorator = createMemo(() => props.startDecorator as unknown as JSX.Element);
  const endDecorator = createMemo(() => props.endDecorator as unknown as JSX.Element);

  return (
    <>
      <Show when={startDecorator()}>
        <ButtonIcon class={props.startDecoratorClass}>{startDecorator()}</ButtonIcon>
      </Show>
      {props.children}
      <Show when={endDecorator()}>
        <ButtonIcon class={props.endDecoratorClass}>{endDecorator()}</ButtonIcon>
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
      loadingIndicator: (() => <TablerLoaderIcon class="animate-spin" />) as unknown as JSX.Element,
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
      "loadingIndicator",
      "loadingPlacement",
      "startDecorator",
      "endDecorator",
    ],
    ["variant", "color", "size", "iconOnly", "fullWidth", "loading"]
  );

  const styles = createMemo(() => buttonStyles(variantProps));

  const loadingIndicatorClasses = createMemo(() => {
    return styles().decorator({
      class: [
        local.loadingPlacement === "center" ? "absolute" : "",
        buttonStaticClass("loadingIndicator"),
        themeClasses.loadingIndicator,
        local.slotClasses?.loadingIndicator,
      ],
    });
  });

  const loadingIndicator = createMemo(() => local.loadingIndicator as unknown as JSX.Element);

  const startDecorator = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "start") {
      return <ButtonIcon class={loadingIndicatorClasses()}>{loadingIndicator()}</ButtonIcon>;
    }

    return local.startDecorator;
  });

  const endDecorator = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "end") {
      return <ButtonIcon class={loadingIndicatorClasses()}>{loadingIndicator()}</ButtonIcon>;
    }

    return local.endDecorator;
  });

  const startDecoratorClasses = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "start") {
      return undefined;
    }

    return styles().decorator({
      class: [
        buttonStaticClass("startDecorator"),
        themeClasses.startDecorator,
        local.slotClasses?.startDecorator,
      ],
    });
  });

  const endDecoratorClasses = createMemo(() => {
    if (variantProps.loading && local.loadingPlacement === "end") {
      return undefined;
    }

    return styles().decorator({
      class: [
        buttonStaticClass("endDecorator"),
        themeClasses.endDecorator,
        local.slotClasses?.endDecorator,
      ],
    });
  });

  const content = () => {
    return (
      <ButtonContent
        startDecoratorClass={startDecoratorClasses()}
        endDecoratorClass={endDecoratorClasses()}
        startDecorator={startDecorator()}
        endDecorator={endDecorator()}
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
        <ButtonIcon class={loadingIndicatorClasses()}>{loadingIndicator()}</ButtonIcon>
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
    ["class", "slotClasses", "children", "startDecorator", "endDecorator"],
    ["variant", "size", "iconOnly", "fullWidth"]
  );

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
      {...others}
    >
      <ButtonContent
        startDecoratorClass={styles().decorator({
          class: [
            linkButtonStaticClass("startDecorator"),
            themeClasses.startDecorator,
            local.slotClasses?.startDecorator,
          ],
        })}
        endDecoratorClass={styles().decorator({
          class: [
            linkButtonStaticClass("endDecorator"),
            themeClasses.endDecorator,
            local.slotClasses?.endDecorator,
          ],
        })}
        startDecorator={local.startDecorator}
        endDecorator={local.endDecorator}
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

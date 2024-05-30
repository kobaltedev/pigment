import { PolymorphicProps } from "@kobalte/core/polymorphic";
import { JSX, splitProps, ValidComponent } from "solid-js";
import { cnBase } from "tailwind-variants";

import { IconButton } from "../button";
import { TablerCrossIcon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { CloseButtonProps, CloseButtonSlots } from "./close-button.props";
import { CLOSE_BUTTON_INTL_TRANSLATIONS } from "./close-button.intl";

const closeButtonStaticClass = makeStaticClass<CloseButtonSlots>("close-button");

export function CloseButton<T extends ValidComponent = "button">(
  props: PolymorphicProps<T, CloseButtonProps>
) {
  const mergedProps = mergeThemeProps(
    "CloseButton",
    {
      size: "md",
      children: (() => <TablerCrossIcon />) as unknown as JSX.Element,
      translations: CLOSE_BUTTON_INTL_TRANSLATIONS,
    },
    props as CloseButtonProps
  );

  const themeClasses = useThemeClasses<CloseButtonSlots>("CloseButton", mergedProps);

  const [local, others] = splitProps(mergedProps, ["class", "slotClasses", "aria-label"]);

  return (
    <IconButton
      class={cnBase(
        closeButtonStaticClass("root"),
        themeClasses.root,
        local.slotClasses?.root,
        local.class
      )}
      aria-label={local["aria-label"] || mergedProps.translations!.dismiss}
      {...others}
    />
  );
}

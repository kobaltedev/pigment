import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";
import { createMemo, splitProps, ValidComponent } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { InputAddonProps, InputAddonSlots } from "./input-addon.props";
import { inputAddonStyles } from "./input-addon.styles";

const inputAddonStaticClass = makeStaticClass<InputAddonSlots>("input-addon");

export function InputAddon<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, InputAddonProps>
) {
  const mergedProps = mergeThemeProps(
    "InputAddon",
    {
      size: "md",
      placement: "leading",
    },
    props as InputAddonProps
  );

  const themeClasses = useThemeClasses<InputAddonSlots>("InputAddon", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
    ["class", "slotClasses"],
    ["size", "placement"]
  );

  const styles = createMemo(() => inputAddonStyles(variantProps));

  return (
    <Polymorphic
      as="div"
      class={styles().root({
        class: [
          inputAddonStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      {...others}
    />
  );
}

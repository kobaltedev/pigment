import { Polymorphic } from "@kobalte/core";
import { createMemo, splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { InputAddonProps, InputAddonSlots } from "./input-addon.props";
import { inputAddonStyles } from "./input-addon.styles";

const inputAddonStaticClass = makeStaticClass<InputAddonSlots>("input-addon");

export function InputAddon(props: InputAddonProps) {
  props = mergeThemeProps(
    "InputAddon",
    {
      size: "md",
      placement: "leading",
    },
    props
  );

  const themeClasses = useThemeClasses<InputAddonSlots>("InputAddon", props);

  const [local, variantProps, others] = splitProps(
    props,
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

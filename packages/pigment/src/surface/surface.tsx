import { Polymorphic } from "@kobalte/core";
import { createMemo, splitProps } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { SurfaceProps, SurfaceSlots } from "./surface.props";
import { surfaceStyles } from "./surface.styles";

const surfaceStaticClass = makeStaticClass<SurfaceSlots>("surface");

export function Surface(props: SurfaceProps) {
  props = mergeThemeProps(
    "Surface",
    {
      variant: "default",
      border: "none",
    },
    props
  );

  const themeClasses = useThemeClasses<SurfaceSlots>("Surface", props);

  const [local, variantProps, others] = splitProps(
    props,
    ["class", "slotClasses"],
    ["variant", "border"]
  );

  const styles = createMemo(() => surfaceStyles(variantProps));

  return (
    <Polymorphic
      as="div"
      class={styles().root({
        class: [
          surfaceStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      {...others}
    />
  );
}

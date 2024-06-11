import { Polymorphic, PolymorphicProps } from "@kobalte/core/polymorphic";
import { createMemo, splitProps, ValidComponent } from "solid-js";

import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { SurfaceProps, SurfaceSlots } from "./surface.props";
import { surfaceStyles } from "./surface.styles";

const surfaceStaticClass = makeStaticClass<SurfaceSlots>("surface");

export function Surface<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, SurfaceProps>
) {
  const mergedProps = mergeThemeProps(
    "Surface",
    {
      variant: "default",
      border: "none",
    },
    props as SurfaceProps
  );

  const themeClasses = useThemeClasses<SurfaceSlots>("Surface", mergedProps);

  const [local, variantProps, others] = splitProps(
    mergedProps,
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

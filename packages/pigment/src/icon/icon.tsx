import { isString, mergeDefaultProps } from "@kobalte/utils";
import { createMemo, JSX, Show, splitProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { tv } from "tailwind-variants";

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  /** The custom icon component to render. */
  as?: ValidComponent;
}

const iconStyles = tv({
  base: "block align-middle shrink-0 text-current h-[1em] w-[1em]",
});

export function Icon(props: IconProps) {
  props = mergeDefaultProps(
    {
      viewBox: "0 0 24 24",
      color: "currentColor",
      width: "1em",
      height: "1em",
    },
    props
  );

  const [local, others] = splitProps(props, ["as", "class"]);

  const classes = createMemo(() => iconStyles({ class: local.class }));

  return (
    <Show when={local.as && !isString(local.as)} fallback={<svg class={classes()} {...others} />}>
      <Dynamic component={local.as} class={classes()} {...others} />
    </Show>
  );
}

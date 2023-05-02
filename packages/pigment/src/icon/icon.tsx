import { mergeDefaultProps } from "@kobalte/utils";
import { JSX, splitProps, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { tv } from "tailwind-variants";

export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  /** The custom icon component to render. */
  as?: ValidComponent;
}

const iconStyles = tv({
  base: "inline-block shrink-0 text-current align-middle h-[1em] w-[1em] leading-[1em]",
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

  return (
    <Dynamic component={local.as ?? "svg"} class={iconStyles({ class: local.class })} {...others} />
  );
}

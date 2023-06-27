import { ComponentProps, createMemo, splitProps } from "solid-js";
import { tv } from "tailwind-variants";

const iconStyles = tv({
  base: "block shrink-0",
});

export interface IconProps extends ComponentProps<"span"> {
  /** The name of the icon following the pattern `i-{collection_name}-{icon_name}`. */
  name: string;
}

export function Icon(props: IconProps) {
  const [local, others] = splitProps(props, ["name", "class"]);

  const classes = createMemo(() => iconStyles({ class: [local.name, local.class] }));

  return <span class={classes()} {...others} />;
}

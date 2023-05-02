import { clsx } from "clsx";
import { ComponentProps, mergeProps, splitProps } from "solid-js";

interface PreviewProps extends ComponentProps<"div"> {
  isCentered?: boolean;
  isRounded?: boolean;
}

export function Preview(props: PreviewProps) {
  props = mergeProps({ isCentered: true }, props);

  const [local, others] = splitProps(props, ["class", "isCentered", "isRounded"]);

  return (
    <div
      class={clsx(
        local.class,
        "pg-preview not-prose flex flex-col justify-center mt-4 overflow-y-auto p-4 border border-solid border-slate-200 dark:bg-slate-900 dark:border-slate-800",
        local.isCentered ? "items-center" : "items-stretch",
        local.isRounded ? "rounded-lg" : "rounded-t-lg"
      )}
      {...others}
    />
  );
}

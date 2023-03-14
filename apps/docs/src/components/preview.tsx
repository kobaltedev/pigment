import { cn } from "@kobalte/pigment";
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
      class={cn(
        local.class,
        "pg-preview not-prose flex flex-col justify-center mt-4 overflow-y-auto p-4 border border-solid border-slate-200 dark:bg-[#121212] dark:border-slate-700",
        local.isCentered ? "items-center" : "items-stretch",
        local.isRounded ? "rounded-lg" : "rounded-t-lg"
      )}
      {...others}
    />
  );
}

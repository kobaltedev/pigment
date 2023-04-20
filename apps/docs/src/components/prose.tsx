import { cn } from "@kobalte/pigment";
import { ComponentProps, splitProps } from "solid-js";

export function Prose(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      class={cn(
        local.class,
        "prose prose-neutral max-w-none dark:prose-invert dark:text-neutral-400",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-neutral-500 dark:prose-lead:text-neutral-400",
        // links
        "prose-a:font-medium",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.sky.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]",
        // hr
        "dark:prose-hr:border-neutral-800"
      )}
      {...others}
    />
  );
}

/*



*/

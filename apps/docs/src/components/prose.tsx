import { clsx } from "clsx";
import { ComponentProps, splitProps } from "solid-js";

export function Prose(props: ComponentProps<"div">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      class={clsx(
        local.class,
        "prose prose-slate max-w-none dark:prose-invert dark:text-slate-400",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
        // links
        "prose-a:font-medium",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.slate.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.teal.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]",
        // hr
        "dark:prose-hr:border-slate-800"
      )}
      {...others}
    />
  );
}

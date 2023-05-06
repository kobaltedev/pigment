import { clsx } from "clsx";
import { ComponentProps, ParentProps, Show } from "solid-js";

export function ColorPreviewItem(props: {
  class: string;
  rootClass?: string;
  name?: string;
  value: string;
}) {
  return (
    <div class={clsx("relative flex max-w-[100px]", props.rootClass)}>
      <div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1.5">
        <div
          class={clsx(
            "h-10 w-10 shrink-0 grow-0 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full shadow-inner",
            props.class
          )}
        ></div>
        <div class="px-0.5">
          <Show when={props.name}>
            <div class="w-6 font-medium text-xs text-slate-900 2xl:w-full dark:text-white">
              {props.name}
            </div>
          </Show>
          <div class="text-slate-500 text-xs font-mono dark:text-slate-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
            {props.value}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ColorPreviewSection(props: ParentProps<{ name: string }>) {
  return (
    <div class="2xl:contents">
      <div class="text-sm font-semibold text-slate-900 dark:text-slate-200 2xl:col-end-1 2xl:pt-2.5">
        {props.name}
      </div>
      <div class="grid mt-3 grid-cols-1 sm:grid-cols-11 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
        {props.children}
      </div>
    </div>
  );
}

export function ColorPreview(props: ComponentProps<"div">) {
  return (
    <div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
      {props.children}
    </div>
  );
}

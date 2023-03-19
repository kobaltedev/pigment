import { cn } from "@kobalte/pigment";
import { ComponentProps, JSX, splitProps } from "solid-js";

import { Highlight } from "./highlight";

interface PlaygroundProps extends ComponentProps<"div"> {
  preview: JSX.Element;
  snippet: string;
}

export function Playground(props: PlaygroundProps) {
  const [local, others] = splitProps(props, ["class", "children", "preview", "snippet"]);

  return (
    <div class="not-prose flex flex-col rounded-lg">
      <div
        class={cn(
          "not-prose flex flex-col lg:flex-row rounded-t-lg overflow-y-auto mt-4 border border-solid border-slate-200 dark:border-slate-700 dark:bg-[#121212]",
          local.class
        )}
        {...others}
      >
        <div class="pg-playground-preview flex items-center justify-center grow shrink p-4">
          {local.preview}
        </div>
        <div class="flex flex-col space-y-4 border-solid border-slate-200 dark:border-slate-700 border-t lg:border-t-0 lg:border-l w-full lg:w-64 p-4">
          {local.children}
        </div>
      </div>
      <Highlight class="rounded-b-lg" language="tsx" code={local.snippet} />
    </div>
  );
}

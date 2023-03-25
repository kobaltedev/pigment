import { Tabs } from "@kobalte/core";
import { cn } from "@kobalte/pigment";
import { ComponentProps, ParentComponent, splitProps } from "solid-js";

type TabsSnippetsComposite = {
  List: typeof Tabs.List;
  Trigger: typeof Tabs.Trigger;
  Content: typeof Tabs.Content;
};

export const TabsSnippets: ParentComponent<ComponentProps<typeof Tabs.Root>> &
  TabsSnippetsComposite = props => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Tabs.Root
      class={cn(
        "pg-tabs-snippets not-prose my-6 overflow-y-auto rounded-lg border border-solid border-slate-200 bg-[#fafafa] dark:bg-[#27272a] dark:border-[#3f3f46]",
        local.class
      )}
      {...others}
    />
  );
};

TabsSnippets.List = (props: ComponentProps<typeof Tabs.List>) => {
  const [local, others] = splitProps(props, ["children", "class"]);

  return (
    <Tabs.List
      class={cn("relative border-b border-slate-300 dark:border-slate-700", local.class)}
      {...others}
    >
      {local.children}
      <Tabs.Indicator class="absolute bottom-[-1px] h-0.5 bg-blue-600 transition-all" />
    </Tabs.List>
  );
};

TabsSnippets.Trigger = (props: ComponentProps<typeof Tabs.Trigger>) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Tabs.Trigger
      class={cn(
        "outline-none text-sm px-3 py-2 text-slate-700 ui-selected:font-medium focus-visible:bg-slate-200 dark:text-white/80 dark:focus-visible:bg-slate-700",
        local.class
      )}
      {...others}
    />
  );
};

TabsSnippets.Content = Tabs.Content;
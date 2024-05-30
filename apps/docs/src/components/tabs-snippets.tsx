import { Tabs, TabsTriggerProps } from "@kobalte/core/tabs";
import { clsx } from "clsx";
import { ComponentProps, ParentComponent, splitProps } from "solid-js";

type TabsSnippetsComposite = {
  List: typeof Tabs.List;
  Trigger: typeof Tabs.Trigger;
  Content: typeof Tabs.Content;
};

export const TabsSnippets: ParentComponent<ComponentProps<typeof Tabs>> &
  TabsSnippetsComposite = props => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Tabs
      class={clsx(
        "pg-tabs-snippets not-prose my-6 overflow-y-auto rounded-lg border border-solid border-slate-200 bg-slate-50 dark:bg-slate-950 dark:border-slate-800",
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
      class={clsx("relative border-b border-slate-300 dark:border-slate-700", local.class)}
      {...others}
    >
      {local.children}
      <Tabs.Indicator class="absolute bottom-[-1px] h-0.5 bg-content-primary transition-all" />
    </Tabs.List>
  );
};

TabsSnippets.Trigger = (props: ComponentProps<typeof Tabs.Trigger>) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Tabs.Trigger
      class={clsx(
        "outline-none text-sm px-3 py-2 text-slate-700 ui-selected:font-medium focus-visible:bg-slate-200 dark:text-white/80 dark:focus-visible:bg-slate-800",
        local.class
      )}
      {...(others as TabsTriggerProps)}
    />
  );
};

TabsSnippets.Content = Tabs.Content;

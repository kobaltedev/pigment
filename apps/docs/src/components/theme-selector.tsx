import { cn, Select } from "@kobalte/pigment";
import { ComponentProps, createSignal, onCleanup, onMount, splitProps } from "solid-js";

function PrimaryColorIndicator(props: ComponentProps<"span">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <span class={cn("h-4 w-4 rounded-full bg-solid-primary-surface", local.class)} {...others} />
  );
}

const THEMES = [
  { value: "base", label: "Base", icon: () => <PrimaryColorIndicator class="bg-blue-600" /> },
  { value: "violet", label: "Violet", icon: () => <PrimaryColorIndicator class="bg-violet-600" /> },
  { value: "scarlet", label: "Scarlet", icon: () => <PrimaryColorIndicator class="bg-pink-600" /> },
  { value: "sun", label: "Sun", icon: () => <PrimaryColorIndicator class="bg-amber-600" /> },
  { value: "moon", label: "Moon", icon: () => <PrimaryColorIndicator class="bg-slate-800" /> },
  {
    value: "emerald",
    label: "Emerald",
    icon: () => <PrimaryColorIndicator class="bg-emerald-600" />,
  },
];

const [theme, setTheme] = createSignal("base");

export function ThemeSelector() {
  const updateTheme = (value: string) => {
    setTheme(value);
    document.documentElement.dataset.pgTheme = value;
  };

  return (
    <Select
      options={THEMES}
      defaultValue={theme()}
      onValueChange={updateTheme}
      hasSelectedIcon={false}
      sameWidth={false}
      slotClasses={{
        button: "text-content-subtle border-none hover:bg-ghost-neutral-surface-hover px-2",
        listbox: "w-32",
      }}
      valueTemplate={props => (
        <span class="flex items-center gap-x-2.5 ui-group-selected:text-soft-selected-text">
          {props.icon()}
          Theme
        </span>
      )}
      optionTemplate={option => (
        <span class="flex items-center gap-x-2.5 ui-group-selected:text-soft-selected-text">
          {option.icon()}
          {option.label}
        </span>
      )}
    />
  );
}

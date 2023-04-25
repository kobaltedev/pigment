import { cn, ColorSchemeWithSystem, Select } from "@kobalte/pigment";
import { ComponentProps, createSignal, JSX, splitProps } from "solid-js";

function ColorIndicator(props: ComponentProps<"span">) {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <span class={cn("h-4 w-4 rounded-full bg-solid-primary-surface", local.class)} {...others} />
  );
}

interface ThemeOption {
  value: string;
  label: string;
  icon: () => JSX.Element;
}

const THEMES: ThemeOption[] = [
  { value: "moon", label: "Moon", icon: () => <ColorIndicator class="bg-neutral-800" /> },
  { value: "violet", label: "Violet", icon: () => <ColorIndicator class="bg-violet-600" /> },
  { value: "sapphire", label: "Sapphire", icon: () => <ColorIndicator class="bg-blue-600" /> },
  { value: "emerald", label: "Emerald", icon: () => <ColorIndicator class="bg-emerald-600" /> },
  { value: "sun", label: "Sun", icon: () => <ColorIndicator class="bg-amber-600" /> },
  { value: "scarlet", label: "Scarlet", icon: () => <ColorIndicator class="bg-pink-600" /> },
];

const [theme, setTheme] = createSignal(THEMES[2]);

export function ThemeSelector() {
  const updateTheme = (selectedTheme: ThemeOption) => {
    setTheme(selectedTheme);
    document.documentElement.dataset.pgTheme = selectedTheme.value;
  };

  return (
    <Select
      options={THEMES}
      defaultValue={theme()}
      optionValue="value"
      onChange={updateTheme}
      withSelectionIcon={false}
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

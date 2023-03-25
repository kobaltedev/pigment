import {
  colorSchemeStorageManager,
  ColorSchemeWithSystem,
  Select,
  useColorScheme,
} from "@kobalte/pigment";
import { createSignal, onMount, Show } from "solid-js";

import { DesktopIcon, MoonIcon, SunIcon } from "./icons";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: () => <SunIcon class="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: () => <MoonIcon class="h-4 w-4" /> },
  { value: "system", label: "System", icon: () => <DesktopIcon class="h-4 w-4" /> },
];

export function ThemeSelector() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  return (
    <Show when={isMounted()} fallback={<div class="h-9 w-9" />}>
      <Select
        options={THEME_OPTIONS}
        defaultValue={colorSchemeStorageManager.get("system")}
        onValueChange={value => setColorScheme(value as ColorSchemeWithSystem)}
        hasDropdownIcon={false}
        hasSelectedIcon={false}
        sameWidth={false}
        slotClasses={{
          button: "border-none hover:bg-ghost-neutral-bg-hover px-2",
          value: "reset-svg text-xl",
          dropdown: "z-50",
          listbox: "w-32",
        }}
        valueTemplate={() => (
          <Show when={colorScheme() === "dark"} fallback={<SunIcon class="h-4 w-4" />}>
            <MoonIcon class="h-4 w-4" />
          </Show>
        )}
        optionTemplate={option => (
          <span class="flex items-center gap-x-2.5 ui-group-selected:text-soft-selected-text">
            {option.icon()}
            {option.label}
          </span>
        )}
      />
    </Show>
  );
}

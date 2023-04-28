import {
  colorSchemeStorageManager,
  ColorSchemeWithSystem,
  Select,
  useColorScheme,
} from "@kobalte/pigment";
import { createSignal, JSX, onMount, Show } from "solid-js";

import { DesktopIcon, MoonIcon, SunIcon } from "./icons";

interface ColorSchemeOption {
  value: ColorSchemeWithSystem;
  label: string;
  icon: () => JSX.Element;
}

const COLOR_SCHEMES: ColorSchemeOption[] = [
  { value: "light", label: "Light", icon: () => <SunIcon class="h-4 w-4" /> },
  { value: "dark", label: "Dark", icon: () => <MoonIcon class="h-4 w-4" /> },
  { value: "system", label: "System", icon: () => <DesktopIcon class="h-4 w-4" /> },
];

export function ColorSchemeSelector() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  return (
    <Show when={isMounted()} fallback={<div class="h-9 w-9" />}>
      <Select
        options={COLOR_SCHEMES}
        optionValue="value"
        defaultValue={COLOR_SCHEMES.find(
          option => option.value === colorSchemeStorageManager.get("system")
        )}
        onChange={(value: ColorSchemeOption) => setColorScheme(value.value)}
        withDropdownIcon={false}
        withSelectionIcon={false}
        sameWidth={false}
        slotClasses={{
          button: "border-none hover:bg-ghost-neutral-surface-hover px-2",
          value: "reset-svg text-xl",
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

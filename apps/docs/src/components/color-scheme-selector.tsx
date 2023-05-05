import { ToggleButton as KToggleButton } from "@kobalte/core";
import { IconButton, useColorScheme } from "@kobalte/pigment";
import { createSignal, onMount, Show } from "solid-js";

import { TablerMoonFilledIcon, TablerSunFilledIcon } from "./icons";

export function ColorSchemeSelector() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  return (
    <Show when={isMounted()} fallback={<div class="h-9 w-9" />}>
      <IconButton
        as={KToggleButton.Root}
        variant="text"
        size="sm"
        aria-label="Toggle color scheme"
        value={colorScheme()}
        onChange={toggleColorScheme}
      >
        <Show when={colorScheme() === "dark"} fallback={<TablerSunFilledIcon class="h-5 w-5" />}>
          <TablerMoonFilledIcon class="h-5 w-5" />
        </Show>
      </IconButton>
    </Show>
  );
}

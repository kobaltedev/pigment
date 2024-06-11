import { ToggleButton as KToggleButton } from "@kobalte/core/toggle-button";
import { Icon, IconButton, useColorScheme } from "@kobalte/pigment";
import { createSignal, onMount, Show } from "solid-js";

export function ColorSchemeSelector() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  return (
    <Show when={isMounted()} fallback={<div class="h-9 w-9" />}>
      <IconButton
        as={KToggleButton}
        variant="text"
        size="sm"
        aria-label="Toggle color scheme"
        value={colorScheme()}
        onChange={toggleColorScheme}
        icon={
          <Icon
            name={colorScheme() === "dark" ? "i-tabler-moon-filled" : "i-tabler-sun-filled"}
            class="h-5 w-5"
          />
        }
      />
    </Show>
  );
}

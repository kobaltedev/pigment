import { Button, useColorScheme } from "@kobalte/pigment";

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <Button onClick={toggleColorScheme}>Turn {colorScheme() === "light" ? "dark" : "light"}</Button>
  );
}

export function TailwindExample() {
  return (
    <div class="flex flex-col items-center gap-y-4">
      <div class="rounded p-4 bg-amber-400 text-sand-900 dark:bg-amber-800 dark:text-amber-300">
        This box's style will change based on the color scheme.
      </div>
      <ColorSchemeToggle />
    </div>
  );
}

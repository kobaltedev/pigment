/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/26800eebaa52e49b2dd3f1b191c34b368a75bc54/packages/components/color-mode/src/color-mode-context.ts
 */

import { createContext, createMemo, useContext } from "solid-js";

import { ColorSchemeContextType } from "./types";

export const ColorSchemeContext = createContext<ColorSchemeContextType>();

/**
 * Primitive that reads from `ColorSchemeProvider` context,
 * Returns the color scheme and function to toggle it.
 */
export function useColorScheme() {
  const context = useContext(ColorSchemeContext);

  if (context === undefined) {
    throw new Error("[kobalte]: `useColorScheme` must be used within a `ColorSchemeProvider`");
  }

  return context;
}

/**
 * Change value based on color scheme.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 * @return A memoized value based on the color scheme.
 *
 * @example
 *
 * ```js
 * const Icon = useColorSchemeValue(MoonIcon, SunIcon)
 * ```
 */
export function useColorSchemeValue<TLight = unknown, TDark = unknown>(light: TLight, dark: TDark) {
  const { colorScheme } = useColorScheme();

  return createMemo(() => (colorScheme() === "dark" ? dark : light));
}

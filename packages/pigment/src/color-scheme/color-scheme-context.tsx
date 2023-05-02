/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/26800eebaa52e49b2dd3f1b191c34b368a75bc54/packages/components/color-mode/src/color-mode-context.ts
 */

import { createContext, useContext } from "solid-js";

import { ColorSchemeContextType } from "./types";

export const ColorSchemeContext = createContext<ColorSchemeContextType>();

/**
 * Primitive that reads from `ColorSchemeProvider` context,
 * Returns the color scheme and function to toggle it.
 */
export function useColorScheme() {
  const context = useContext(ColorSchemeContext);

  if (context === undefined) {
    throw new Error("[pigment]: `useColorScheme` must be used within a `ColorSchemeProvider`");
  }

  return context;
}

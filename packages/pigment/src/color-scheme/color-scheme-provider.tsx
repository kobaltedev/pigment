/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/26800eebaa52e49b2dd3f1b191c34b368a75bc54/packages/components/color-mode/src/color-mode-provider.tsx
 */

import { createEffect, createSignal, onCleanup } from "solid-js";

import { ColorSchemeContext } from "./color-scheme-context";
import { colorSchemeStorageManager } from "./color-scheme-storage-manager";
import {
  ColorScheme,
  ColorSchemeContextType,
  ColorSchemeProviderProps,
  ColorSchemeWithSystem,
} from "./types";
import {
  addColorSchemeListener,
  FALLBACK_COLOR_SCHEME_VALUE,
  getInitialColorScheme,
  getSystemColorScheme,
  setColorSchemeDataset,
} from "./utils";

/**
 * Provides context for the color scheme based on config in `theme`.
 * Returns the color scheme and function to toggle it.
 */
export function ColorSchemeProvider(props: ColorSchemeProviderProps) {
  const fallbackColorScheme = () => props.defaultScheme ?? FALLBACK_COLOR_SCHEME_VALUE;
  let colorSchemeListenerCleanupFn: (() => unknown) | undefined;

  const [colorScheme, rawSetColorScheme] = createSignal(
    getInitialColorScheme(colorSchemeStorageManager)
  );

  const applyColorScheme = (value: ColorScheme) => {
    rawSetColorScheme(value);

    setColorSchemeDataset(value, props.disableTransitionOnChange);
  };

  const setColorScheme = (value: ColorSchemeWithSystem) => {
    if (colorSchemeListenerCleanupFn) {
      colorSchemeListenerCleanupFn();
      colorSchemeListenerCleanupFn = undefined;
    }

    const isSystem = value === "system";

    if (isSystem) {
      colorSchemeListenerCleanupFn = addColorSchemeListener(applyColorScheme);
    }

    applyColorScheme(isSystem ? getSystemColorScheme() : value);
    colorSchemeStorageManager.set(value);
  };

  const toggleColorScheme = () => {
    setColorScheme(colorScheme() === "dark" ? "light" : "dark");
  };

  createEffect(() => {
    setColorScheme(colorSchemeStorageManager.get(fallbackColorScheme()));
  });

  onCleanup(() => {
    // ensure listener is always cleaned when component is destroyed.
    colorSchemeListenerCleanupFn?.();
  });

  const context: ColorSchemeContextType = {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
  };

  return (
    <ColorSchemeContext.Provider value={context}>{props.children}</ColorSchemeContext.Provider>
  );
}

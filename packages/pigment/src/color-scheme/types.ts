/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode-types.ts
 */

import { Accessor, ParentProps } from "solid-js";

export type ColorScheme = "light" | "dark";

export type ConfigColorScheme = ColorScheme | "system";

export interface ColorSchemeStorageManager {
  /** Get the color scheme from the storage. */
  get: (fallback: ConfigColorScheme) => ConfigColorScheme;

  /** Save the color scheme in the storage. */
  set: (value: ConfigColorScheme) => void;
}

export interface ColorSchemeContextType {
  colorScheme: Accessor<ColorScheme>;
  setColorScheme: (value: ConfigColorScheme) => void;
  toggleColorScheme: () => void;
}

export interface ColorSchemeOptions {
  /** The initial color scheme to use. */
  initialColorScheme?: ConfigColorScheme;

  /** Whether css transitions should be disabled during the color scheme changes. */
  disableTransitionOnChange?: boolean;
}

export type ColorSchemeProviderProps = ParentProps<ColorSchemeOptions>;

export type ColorSchemeScriptProps = {
  /** The initial color scheme to use. */
  initialColorScheme?: ConfigColorScheme;

  /** The key used to store color scheme preference in localStorage or cookie. */
  storageKey?: string;

  nonce?: string;
};

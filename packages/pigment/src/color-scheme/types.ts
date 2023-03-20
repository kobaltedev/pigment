/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/26800eebaa52e49b2dd3f1b191c34b368a75bc54/packages/components/color-mode/src/color-mode-types.ts
 */

import { Accessor, ParentProps } from "solid-js";

export type ColorScheme = "light" | "dark";

export type ColorSchemeWithSystem = ColorScheme | "system";

export interface ColorSchemeStorageManager {
  /** Get the color scheme from the storage. */
  get: (fallback: ColorSchemeWithSystem) => ColorSchemeWithSystem;

  /** Save the color scheme in the storage. */
  set: (value: ColorSchemeWithSystem) => void;
}

export interface ColorSchemeContextType {
  colorScheme: Accessor<ColorScheme>;
  setColorScheme: (value: ColorSchemeWithSystem) => void;
  toggleColorScheme: () => void;
}

export interface ColorSchemeOptions {
  /** The default color scheme to use. */
  defaultScheme?: ColorSchemeWithSystem;

  /** Whether css transitions should be disabled during the color scheme changes. */
  disableTransitionOnChange?: boolean;
}

export type ColorSchemeProviderProps = ParentProps<ColorSchemeOptions>;

export type ColorSchemeScriptProps = {
  /** The default color scheme to use. */
  defaultScheme?: ColorSchemeWithSystem;

  /** The key used to store color scheme preference in localStorage. */
  storageKey?: string;

  /** The `nonce` attribute that will be passed to the script when used on a site with strict Content-Security-Policy. */
  nonce?: string;
};

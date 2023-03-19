/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/26800eebaa52e49b2dd3f1b191c34b368a75bc54/packages/components/color-mode/src/storage-manager.ts
 */

import { isServer } from "solid-js/web";

import { ColorSchemeStorageManager } from "./types";

export const COLOR_SCHEME_STORAGE_KEY = "pg-color-scheme";

export const colorSchemeStorageManager: ColorSchemeStorageManager = {
  get: fallback => {
    if (isServer) {
      return fallback;
    }

    let value: any;
    try {
      value = localStorage.getItem(COLOR_SCHEME_STORAGE_KEY);
    } catch (e) {
      // noop
    }

    return value ?? fallback;
  },
  set: value => {
    try {
      localStorage.setItem(COLOR_SCHEME_STORAGE_KEY, value);
    } catch (e) {
      // noop
    }
  },
};

/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/storage-manager.ts
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

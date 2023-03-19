/*!
 * Original code by Chakra UI
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/color-mode/src/color-mode.utils.ts
 */

import { isServer } from "solid-js/web";

import { ColorScheme, ColorSchemeStorageManager, ConfigColorScheme } from "./types";

export const FALLBACK_COLOR_SCHEME_VALUE: ConfigColorScheme = "system";

function query() {
  return window.matchMedia("(prefers-color-scheme: dark)");
}

function preventTransition() {
  const css = document.createElement("style");
  css.appendChild(
    document.createTextNode(
      `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
    )
  );
  document.head.appendChild(css);

  return () => {
    // force a reflow
    (() => window.getComputedStyle(document.body))();

    // wait for next tick
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.head.removeChild(css);
      });
    });
  };
}

export function setColorSchemeDataset(value: ColorScheme, shouldPreventTransition = true) {
  const cleanup = shouldPreventTransition ? preventTransition() : undefined;
  document.documentElement.dataset.pgColorScheme = value;
  document.documentElement.style.colorScheme = value;
  cleanup?.();
}

export function getSystemColorScheme(fallback?: ColorScheme): ColorScheme {
  const isDark = query().matches ?? fallback === "dark";
  return isDark ? "dark" : "light";
}

export function getInitialColorScheme(manager: ColorSchemeStorageManager): ColorScheme {
  const fallback: ColorScheme = "light";

  const initialColorScheme = manager.get(fallback) ?? fallback;

  if (initialColorScheme === "system") {
    // We can't know the client system preference in SSR so just return the fallback.
    return isServer ? fallback : getSystemColorScheme();
  }

  return initialColorScheme;
}
export function addColorSchemeListener(fn: (cm: ColorScheme) => unknown) {
  const mql = query();

  const listener = (e: MediaQueryListEvent) => {
    fn(e.matches ? "dark" : "light");
  };

  mql.addEventListener("change", listener);

  return () => {
    mql.removeEventListener("change", listener);
  };
}

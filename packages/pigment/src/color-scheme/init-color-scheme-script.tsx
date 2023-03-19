/* eslint-disable solid/no-innerhtml */

/*!
 * Portions of this file are based on code from chakra-ui.
 * MIT Licensed, Copyright (c) 2019 Segun Adebayo.
 *
 * Credits to the Chakra UI team:
 * https://github.com/chakra-ui/chakra-ui/blob/132a98958be64e46619b1e280ca6405d0a833cb0/packages/components/color-mode/src/color-mode-script.tsx
 */

import { mergeDefaultProps } from "@kobalte/utils";

import { COLOR_SCHEME_STORAGE_KEY } from "./color-scheme-storage-manager";
import { ColorSchemeScriptProps, ColorSchemeWithSystem } from "./types";
import { FALLBACK_COLOR_SCHEME_VALUE } from "./utils";

const VALID_VALUES = new Set<ColorSchemeWithSystem>(["light", "dark", "system"]);

/**
 * runtime safe-guard against invalid color mode values
 */
function normalize(initialColorScheme: ColorSchemeWithSystem) {
  if (!VALID_VALUES.has(initialColorScheme)) {
    return FALLBACK_COLOR_SCHEME_VALUE;
  }

  return initialColorScheme;
}

export function InitColorSchemeScript(props: ColorSchemeScriptProps) {
  props = mergeDefaultProps(
    {
      initialColorScheme: FALLBACK_COLOR_SCHEME_VALUE,
      storageKey: COLOR_SCHEME_STORAGE_KEY,
    },
    props
  );

  const init = normalize(props.initialColorScheme!);

  return (
    <script
      id="pg-init-color-scheme-script"
      nonce={props.nonce}
      innerHTML={`!(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,i=r==="dark";return o.style.colorScheme=r,o.dataset.pgColorScheme=r,c},n=a,m="${init}",e="${props.storageKey}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();`.trim()}
    />
  );
}

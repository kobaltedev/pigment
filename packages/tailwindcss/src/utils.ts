import { PigmentOptions, VarsFn } from "./types";

export const DARK_DATA_ATTR_SELECTOR = "[data-pg-color-scheme='dark']";

export function tokenToKebabCase(token: string) {
  return (
    token
      .replace(
        /[A-Z]+(?![a-z])|[0-9]+[A-Z]|[A-Z]|[0-9]+/g,
        ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
      )
      // keep parts like "300A" in upper case.
      .replace(/[0-9]+[a-z]/g, $ => $.toUpperCase())
  );
}

/**
 * Create a flatted object with kebab-case keys and custom value transformer.
 */
export function flattenKebabCase(
  obj: Record<string, any>,
  transformValue: (prefixedKey: string, value: string) => any,
  keyPrefix = "",
  valuePrefix = "",
  prefix = ""
) {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + "-" : "";

    const prefixedKey = pre + tokenToKebabCase(key);

    if (typeof obj[key] === "object") {
      Object.assign(
        acc,
        flattenKebabCase(obj[key], transformValue, keyPrefix, valuePrefix, prefixedKey)
      );
    } else {
      acc[keyPrefix + prefixedKey] = transformValue(valuePrefix + prefixedKey, obj[key]);
    }

    return acc;
  }, {} as any);
}

/** Create a function to get the css variable of a token with a given css vars prefix. */
export function createVarsFn(cssVarsPrefix: string): VarsFn {
  return token => {
    return `var(--${cssVarsPrefix}${tokenToKebabCase(token.replace(".", "-"))})`;
  };
}

export function getCssVarsPrefix(options: PigmentOptions) {
  return options.cssVarsPrefix ?? "pg-";
}

export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
}

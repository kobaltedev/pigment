import { PigmentOptions, VarsFn } from "./types";

export const DARK_DATA_ATTR_SELECTOR = "[data-pg-color-scheme='dark']";

export function toKebabCase(value: string) {
  // TODO: find better regex
  return (
    value
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g)
      ?.map(x => x.toLowerCase())
      .join("-") ?? value
  );
}

/**
 * Create a flatted object with kebab-case keys and custom value transformer.
 */
export function flattenKebabCase(
  obj: Record<any, any>,
  transformValue: (prefixedKey: string, value: any) => any,
  keyPrefix = "",
  valuePrefix = "",
  prefix = ""
) {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + "-" : "";

    const prefixedKey = pre + toKebabCase(key);

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
    return `var(--${cssVarsPrefix}${toKebabCase(token.replace(".", "-"))})`;
  };
}

export function getCssVarsPrefix(options: PigmentOptions) {
  return options.cssVarsPrefix ?? "pg-";
}

export function createPalette(cssVarsPrefix: string, color: string) {
  return {
    50: `var(--${cssVarsPrefix}color-${color}-50)`,
    100: `var(--${cssVarsPrefix}color-${color}-100)`,
    200: `var(--${cssVarsPrefix}color-${color}-200)`,
    300: `var(--${cssVarsPrefix}color-${color}-300)`,
    400: `var(--${cssVarsPrefix}color-${color}-400)`,
    500: `var(--${cssVarsPrefix}color-${color}-500)`,
    600: `var(--${cssVarsPrefix}color-${color}-600)`,
    700: `var(--${cssVarsPrefix}color-${color}-700)`,
    800: `var(--${cssVarsPrefix}color-${color}-800)`,
    900: `var(--${cssVarsPrefix}color-${color}-900)`,
  };
}

export function colorToken(cssVarsPrefix: string, suffix: string) {
  return {
    [suffix]: `var(--${cssVarsPrefix}color-${suffix})`,
  };
}

export function globalVariantTokens(cssVarsPrefix: string, variant: string, color: string) {
  return {
    ...colorToken(cssVarsPrefix, `${variant}-${color}-text`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-icon`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-bg`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-border`),

    ...colorToken(cssVarsPrefix, `${variant}-${color}-text-hover`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-icon-hover`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-bg-hover`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-border-hover`),

    ...colorToken(cssVarsPrefix, `${variant}-${color}-text-active`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-icon-active`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-bg-active`),
    ...colorToken(cssVarsPrefix, `${variant}-${color}-border-active`),
  };
}

import { PigmentOptions, VarsFn } from "./types";

export const DARK_DATA_ATTR_SELECTOR = "[data-pg-color-scheme='dark']";

export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
}

export function isArray<T>(value: any): value is Array<T> {
  return Array.isArray(value);
}

export function isObject(value: any): value is Record<string, any> {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}

export function toKebabCase(value: string) {
  return value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
}

/** Flatten an object. */
export function flatten<Value = any>(
  target: Record<string, Value> | undefined | null,
  separator: string,
  maxDepth = Infinity
) {
  if ((!isObject(target) && !Array.isArray(target)) || !maxDepth) {
    return target;
  }

  return Object.entries(target).reduce((result, [key, value]) => {
    if (isObject(value) || isArray(value)) {
      Object.entries(flatten(value, separator, maxDepth - 1)).forEach(([childKey, childValue]) => {
        // e.g. gray.500
        result[`${key}${separator}${childKey}`] = childValue;
      });
    } else {
      // e.g. transparent
      result[key] = value;
    }

    return result;
  }, {} as any);
}

export function removeDefaultSuffix(token: string) {
  return token.replace("-DEFAULT", "");
}

/** Create a function to get the css variable of a token with a given css vars prefix. */
export function createVarsFn(cssVarPrefix: string): VarsFn {
  return token => {
    return `var(--${cssVarPrefix}${toKebabCase(removeDefaultSuffix(token.replace(/\./g, "-")))})`;
  };
}

export function getCssVarsPrefix(options: PigmentOptions) {
  return options.cssVarPrefix ?? "pg-";
}

export function isHexColor(hex: string): boolean {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}$/i;

  return HEX_REGEXP.test(hex);
}

export function rgbColorChannel(hexColor: string): string {
  let hexString = hexColor.replace("#", "");

  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2],
    ].join("");
  }

  const parsed = parseInt(hexString, 16);
  const r = (parsed >> 16) & 255;
  const g = (parsed >> 8) & 255;
  const b = parsed & 255;

  return `${r} ${g} ${b}`;
}

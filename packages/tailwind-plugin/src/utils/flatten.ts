function toKebabCase(value: string) {
  return (
    value
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
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

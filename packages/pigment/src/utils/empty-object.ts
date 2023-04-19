export function emptyObject(keys: string[] | readonly string[]): Record<string, ""> {
  return Object.fromEntries(keys.map(key => [key, ""]));
}

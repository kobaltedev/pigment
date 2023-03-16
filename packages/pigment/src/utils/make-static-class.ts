import { toKebabCase } from "./kebab-case";

export function makeStaticClass<T extends string>(component: string) {
  return function (slot: T) {
    return toKebabCase(`pg-${component}-${slot}`);
  };
}

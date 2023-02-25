import { ClassValue, clsx } from "clsx";

/** A utility function for constructing CSS `class` strings conditionally. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

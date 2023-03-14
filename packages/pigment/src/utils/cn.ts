import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** A utility function for constructing CSS `class` strings conditionally with support for TailwindCSS class overrides. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

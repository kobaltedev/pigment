import { GlobalVariant, GlobalVariants, SemanticColor } from "./types";

const globalVariants: GlobalVariants = {
  solid: {
    neutral: {
      base: "text-solid-neutral-content bg-solid-neutral-surface border-solid-neutral-surface",
      hover: "hover:bg-solid-neutral-surface-hover hover:border-solid-neutral-surface-hover",
      active: "active:bg-solid-neutral-surface-active active:border-solid-neutral-surface-active",
    },
    primary: {
      base: "text-solid-primary-content bg-solid-primary-surface border-solid-primary-surface",
      hover: "hover:bg-solid-primary-surface-hover hover:border-solid-primary-surface-hover",
      active: "active:bg-solid-primary-surface-active active:border-solid-primary-surface-active",
    },
    success: {
      base: "text-solid-success-content bg-solid-success-surface border-solid-success-surface",
      hover: "hover:bg-solid-success-surface-hover hover:border-solid-success-surface-hover",
      active: "active:bg-solid-success-surface-active active:border-solid-success-surface-active",
    },
    info: {
      base: "text-solid-info-content bg-solid-info-surface border-solid-info-surface",
      hover: "hover:bg-solid-info-surface-hover hover:border-solid-info-surface-hover",
      active: "active:bg-solid-info-surface-active active:border-solid-info-surface-active",
    },
    warning: {
      base: "text-solid-warning-content bg-solid-warning-surface border-solid-warning-surface",
      hover: "hover:bg-solid-warning-surface-hover hover:border-solid-warning-surface-hover",
      active: "active:bg-solid-warning-surface-active active:border-solid-warning-surface-active",
    },
    danger: {
      base: "text-solid-danger-content bg-solid-danger-surface border-solid-danger-surface",
      hover: "hover:bg-solid-danger-surface-hover hover:border-solid-danger-surface-hover",
      active: "active:bg-solid-danger-surface-active active:border-solid-danger-surface-active",
    },
  },
  soft: {
    neutral: {
      base: "text-soft-neutral-content bg-soft-neutral-surface border-soft-neutral-surface",
      hover: "hover:bg-soft-neutral-surface-hover hover:border-soft-neutral-surface-hover",
      active: "active:bg-soft-neutral-surface-active active:border-soft-neutral-surface-active",
    },
    primary: {
      base: "text-soft-primary-content bg-soft-primary-surface border-soft-primary-surface",
      hover: "hover:bg-soft-primary-surface-hover hover:border-soft-primary-surface-hover",
      active: "active:bg-soft-primary-surface-active active:border-soft-primary-surface-active",
    },
    success: {
      base: "text-soft-success-content bg-soft-success-surface border-soft-success-surface",
      hover: "hover:bg-soft-success-surface-hover hover:border-soft-success-surface-hover",
      active: "active:bg-soft-success-surface-active active:border-soft-success-surface-active",
    },
    info: {
      base: "text-soft-info-content bg-soft-info-surface border-soft-info-surface",
      hover: "hover:bg-soft-info-surface-hover hover:border-soft-info-surface-hover",
      active: "active:bg-soft-info-surface-active active:border-soft-info-surface-active",
    },
    warning: {
      base: "text-soft-warning-content bg-soft-warning-surface border-soft-warning-surface",
      hover: "hover:bg-soft-warning-surface-hover hover:border-soft-warning-surface-hover",
      active: "active:bg-soft-warning-surface-active active:border-soft-warning-surface-active",
    },
    danger: {
      base: "text-soft-danger-content bg-soft-danger-surface border-soft-danger-surface",
      hover: "hover:bg-soft-danger-surface-hover hover:border-soft-danger-surface-hover",
      active: "active:bg-soft-danger-surface-active active:border-soft-danger-surface-active",
    },
  },
  outlined: {
    neutral: {
      base: "text-outlined-neutral-content bg-transparent border-outlined-neutral-line",
      hover: "hover:bg-outlined-neutral-surface-hover hover:border-outlined-neutral-line-hover",
      active:
        "active:bg-outlined-neutral-surface-active active:border-outlined-neutral-line-active",
    },
    primary: {
      base: "text-outlined-primary-content bg-transparent border-outlined-primary-line",
      hover: "hover:bg-outlined-primary-surface-hover hover:border-outlined-primary-line-hover",
      active:
        "active:bg-outlined-primary-surface-active active:border-outlined-primary-line-active",
    },
    success: {
      base: "text-outlined-success-content bg-transparent border-outlined-success-line",
      hover: "hover:bg-outlined-success-surface-hover hover:border-outlined-success-line-hover",
      active:
        "active:bg-outlined-success-surface-active active:border-outlined-success-line-active",
    },
    info: {
      base: "text-outlined-info-content bg-transparent border-outlined-info-line",
      hover: "hover:bg-outlined-info-surface-hover hover:border-outlined-info-line-hover",
      active: "active:bg-outlined-info-surface-active active:border-outlined-info-line-active",
    },
    warning: {
      base: "text-outlined-warning-content bg-transparent border-outlined-warning-line",
      hover: "hover:bg-outlined-warning-surface-hover hover:border-outlined-warning-line-hover",
      active:
        "active:bg-outlined-warning-surface-active active:border-outlined-warning-line-active",
    },
    danger: {
      base: "text-outlined-danger-content bg-transparent border-outlined-danger-line",
      hover: "hover:bg-outlined-danger-surface-hover hover:border-outlined-danger-line-hover",
      active: "active:bg-outlined-danger-surface-active active:border-outlined-danger-line-active",
    },
  },
  ghost: {
    neutral: {
      base: "text-ghost-neutral-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-neutral-surface-hover hover:border-ghost-neutral-surface-hover",
      active: "active:bg-ghost-neutral-surface-active active:border-ghost-neutral-surface-active",
    },
    primary: {
      base: "text-ghost-primary-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-primary-surface-hover hover:border-ghost-primary-surface-hover",
      active: "active:bg-ghost-primary-surface-active active:border-ghost-primary-surface-active",
    },
    success: {
      base: "text-ghost-success-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-success-surface-hover hover:border-ghost-success-surface-hover",
      active: "active:bg-ghost-success-surface-active active:border-ghost-success-surface-active",
    },
    info: {
      base: "text-ghost-info-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-info-surface-hover hover:border-ghost-info-surface-hover",
      active: "active:bg-ghost-info-surface-active active:border-ghost-info-surface-active",
    },
    warning: {
      base: "text-ghost-warning-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-warning-surface-hover hover:border-ghost-warning-surface-hover",
      active: "active:bg-ghost-warning-surface-active active:border-ghost-warning-surface-active",
    },
    danger: {
      base: "text-ghost-danger-content bg-transparent border-transparent",
      hover: "hover:bg-ghost-danger-surface-hover hover:border-ghost-danger-surface-hover",
      active: "active:bg-ghost-danger-surface-active active:border-ghost-danger-surface-active",
    },
  },
};

export function getGlobalVariantClasses(variant: GlobalVariant, color: SemanticColor) {
  return globalVariants[variant][color];
}

/** Color variants object used in `cva` of several components. */
export const SEMANTIC_COLOR_VARIANTS: Record<SemanticColor, ""> = {
  neutral: "",
  primary: "",
  success: "",
  info: "",
  warning: "",
  danger: "",
};

/** Variant variants object used in `cva` of several components. */
export const VARIANT_VARIANTS: Record<GlobalVariant, ""> = {
  solid: "",
  soft: "",
  outlined: "",
  ghost: "",
};

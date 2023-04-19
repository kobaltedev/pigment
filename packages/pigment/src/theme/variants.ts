import { GlobalVariant, GlobalVariants, SemanticColor } from "./types";

const globalVariants: GlobalVariants = {
  solid: {
    neutral: {
      base: "text-solid-neutral-content bg-solid-neutral-surface border-solid-neutral-line",
      hover:
        "hover:text-solid-neutral-content-hover hover:bg-solid-neutral-surface-hover hover:border-solid-neutral-line-hover",
      active:
        "active:text-solid-neutral-content-active active:bg-solid-neutral-surface-active active:border-solid-neutral-line-active",
    },
    primary: {
      base: "text-solid-primary-content bg-solid-primary-surface border-solid-primary-line",
      hover:
        "hover:text-solid-primary-content-hover hover:bg-solid-primary-surface-hover hover:border-solid-primary-line-hover",
      active:
        "active:text-solid-primary-content-active active:bg-solid-primary-surface-active active:border-solid-primary-line-active",
    },
    accent: {
      base: "text-solid-accent-content bg-solid-accent-surface border-solid-accent-line",
      hover:
        "hover:text-solid-accent-content-hover hover:bg-solid-accent-surface-hover hover:border-solid-accent-line-hover",
      active:
        "active:text-solid-accent-content-active active:bg-solid-accent-surface-active active:border-solid-accent-line-active",
    },
    success: {
      base: "text-solid-success-content bg-solid-success-surface border-solid-success-line",
      hover:
        "hover:text-solid-success-content-hover hover:bg-solid-success-surface-hover hover:border-solid-success-line-hover",
      active:
        "active:text-solid-success-content-active active:bg-solid-success-surface-active active:border-solid-success-line-active",
    },
    info: {
      base: "text-solid-info-content bg-solid-info-surface border-solid-info-line",
      hover:
        "hover:text-solid-info-content-hover hover:bg-solid-info-surface-hover hover:border-solid-info-line-hover",
      active:
        "active:text-solid-info-content-active active:bg-solid-info-surface-active active:border-solid-info-line-active",
    },
    warning: {
      base: "text-solid-warning-content bg-solid-warning-surface border-solid-warning-line",
      hover:
        "hover:text-solid-warning-content-hover hover:bg-solid-warning-surface-hover hover:border-solid-warning-line-hover",
      active:
        "active:text-solid-warning-content-active active:bg-solid-warning-surface-active active:border-solid-warning-line-active",
    },
    danger: {
      base: "text-solid-danger-content bg-solid-danger-surface border-solid-danger-line",
      hover:
        "hover:text-solid-danger-content-hover hover:bg-solid-danger-surface-hover hover:border-solid-danger-line-hover",
      active:
        "active:text-solid-danger-content-active active:bg-solid-danger-surface-active active:border-solid-danger-line-active",
    },
  },
  soft: {
    neutral: {
      base: "text-soft-neutral-content bg-soft-neutral-surface border-soft-neutral-line",
      hover:
        "hover:text-soft-neutral-content-hover hover:bg-soft-neutral-surface-hover hover:border-soft-neutral-line-hover",
      active:
        "active:text-soft-neutral-content-active active:bg-soft-neutral-surface-active active:border-soft-neutral-line-active",
    },
    primary: {
      base: "text-soft-primary-content bg-soft-primary-surface border-soft-primary-line",
      hover:
        "hover:text-soft-primary-content-hover hover:bg-soft-primary-surface-hover hover:border-soft-primary-line-hover",
      active:
        "active:text-soft-primary-content-active active:bg-soft-primary-surface-active active:border-soft-primary-line-active",
    },
    accent: {
      base: "text-soft-accent-content bg-soft-accent-surface border-soft-accent-line",
      hover:
        "hover:text-soft-accent-content-hover hover:bg-soft-accent-surface-hover hover:border-soft-accent-line-hover",
      active:
        "active:text-soft-accent-content-active active:bg-soft-accent-surface-active active:border-soft-accent-line-active",
    },
    success: {
      base: "text-soft-success-content bg-soft-success-surface border-soft-success-line",
      hover:
        "hover:text-soft-success-content-hover hover:bg-soft-success-surface-hover hover:border-soft-success-line-hover",
      active:
        "active:text-soft-success-content-active active:bg-soft-success-surface-active active:border-soft-success-line-active",
    },
    info: {
      base: "text-soft-info-content bg-soft-info-surface border-soft-info-line",
      hover:
        "hover:text-soft-info-content-hover hover:bg-soft-info-surface-hover hover:border-soft-info-line-hover",
      active:
        "active:text-soft-info-content-active active:bg-soft-info-surface-active active:border-soft-info-line-active",
    },
    warning: {
      base: "text-soft-warning-content bg-soft-warning-surface border-soft-warning-line",
      hover:
        "hover:text-soft-warning-content-hover hover:bg-soft-warning-surface-hover hover:border-soft-warning-line-hover",
      active:
        "active:text-soft-warning-content-active active:bg-soft-warning-surface-active active:border-soft-warning-line-active",
    },
    danger: {
      base: "text-soft-danger-content bg-soft-danger-surface border-soft-danger-line",
      hover:
        "hover:text-soft-danger-content-hover hover:bg-soft-danger-surface-hover hover:border-soft-danger-line-hover",
      active:
        "active:text-soft-danger-content-active active:bg-soft-danger-surface-active active:border-soft-danger-line-active",
    },
    input: {
      base: "text-soft-input-content bg-soft-input-surface border-soft-input-line",
      hover:
        "hover:text-soft-input-content-hover hover:bg-soft-input-surface-hover hover:border-soft-input-line-hover",
      active:
        "active:text-soft-input-content-active active:bg-soft-input-surface-active active:border-soft-input-line-active",
    },
  },
  outlined: {
    neutral: {
      base: "text-outlined-neutral-content bg-transparent border-outlined-neutral-line",
      hover:
        "hover:text-outlined-neutral-content-hover hover:bg-outlined-neutral-surface-hover hover:border-outlined-neutral-line-hover",
      active:
        "active:text-outlined-neutral-content-active active:bg-outlined-neutral-surface-active active:border-outlined-neutral-line-active",
    },
    primary: {
      base: "text-outlined-primary-content bg-transparent border-outlined-primary-line",
      hover:
        "hover:text-outlined-primary-content-hover hover:bg-outlined-primary-surface-hover hover:border-outlined-primary-line-hover",
      active:
        "active:text-outlined-primary-content-active active:bg-outlined-primary-surface-active active:border-outlined-primary-line-active",
    },
    accent: {
      base: "text-outlined-accent-content bg-transparent border-outlined-accent-line",
      hover:
        "hover:text-outlined-accent-content-hover hover:bg-outlined-accent-surface-hover hover:border-outlined-accent-line-hover",
      active:
        "active:text-outlined-accent-content-active active:bg-outlined-accent-surface-active active:border-outlined-accent-line-active",
    },
    success: {
      base: "text-outlined-success-content bg-transparent border-outlined-success-line",
      hover:
        "hover:text-outlined-success-content-hover hover:bg-outlined-success-surface-hover hover:border-outlined-success-line-hover",
      active:
        "active:text-outlined-success-content-active active:bg-outlined-success-surface-active active:border-outlined-success-line-active",
    },
    info: {
      base: "text-outlined-info-content bg-transparent border-outlined-info-line",
      hover:
        "hover:text-outlined-info-content-hover hover:bg-outlined-info-surface-hover hover:border-outlined-info-line-hover",
      active:
        "active:text-outlined-info-content-active active:bg-outlined-info-surface-active active:border-outlined-info-line-active",
    },
    warning: {
      base: "text-outlined-warning-content bg-transparent border-outlined-warning-line",
      hover:
        "hover:text-outlined-warning-content-hover hover:bg-outlined-warning-surface-hover hover:border-outlined-warning-line-hover",
      active:
        "active:text-outlined-warning-content-active active:bg-outlined-warning-surface-active active:border-outlined-warning-line-active",
    },
    danger: {
      base: "text-outlined-danger-content bg-transparent border-outlined-danger-line",
      hover:
        "hover:text-outlined-danger-content-hover hover:bg-outlined-danger-surface-hover hover:border-outlined-danger-line-hover",
      active:
        "active:text-outlined-danger-content-active active:bg-outlined-danger-surface-active active:border-outlined-danger-line-active",
    },
    input: {
      base: "text-outlined-input-content bg-transparent border-outlined-input-line",
      hover:
        "hover:text-outlined-input-content-hover hover:bg-outlined-input-surface-hover hover:border-outlined-input-line-hover",
      active:
        "active:text-outlined-input-content-active active:bg-outlined-input-surface-active active:border-outlined-input-line-active",
    },
  },
  ghost: {
    neutral: {
      base: "text-ghost-neutral-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-neutral-content-hover hover:bg-ghost-neutral-surface-hover hover:border-ghost-neutral-line-hover",
      active:
        "active:text-ghost-neutral-content-active active:bg-ghost-neutral-surface-active active:border-ghost-neutral-line-active",
    },
    primary: {
      base: "text-ghost-primary-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-primary-content-hover hover:bg-ghost-primary-surface-hover hover:border-ghost-primary-line-hover",
      active:
        "active:text-ghost-primary-content-active active:bg-ghost-primary-surface-active active:border-ghost-primary-line-active",
    },
    accent: {
      base: "text-ghost-accent-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-accent-content-hover hover:bg-ghost-accent-surface-hover hover:border-ghost-accent-line-hover",
      active:
        "active:text-ghost-accent-content-active active:bg-ghost-accent-surface-active active:border-ghost-accent-line-active",
    },
    success: {
      base: "text-ghost-success-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-success-content-hover hover:bg-ghost-success-surface-hover hover:border-ghost-success-line-hover",
      active:
        "active:text-ghost-success-content-active active:bg-ghost-success-surface-active active:border-ghost-success-line-active",
    },
    info: {
      base: "text-ghost-info-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-info-content-hover hover:bg-ghost-info-surface-hover hover:border-ghost-info-line-hover",
      active:
        "active:text-ghost-info-content-active active:bg-ghost-info-surface-active active:border-ghost-info-line-active",
    },
    warning: {
      base: "text-ghost-warning-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-warning-content-hover hover:bg-ghost-warning-surface-hover hover:border-ghost-warning-line-hover",
      active:
        "active:text-ghost-warning-content-active active:bg-ghost-warning-surface-active active:border-ghost-warning-line-active",
    },
    danger: {
      base: "text-ghost-danger-content bg-transparent border-transparent",
      hover:
        "hover:text-ghost-danger-content-hover hover:bg-ghost-danger-surface-hover hover:border-ghost-danger-line-hover",
      active:
        "active:text-ghost-danger-content-active active:bg-ghost-danger-surface-active active:border-ghost-danger-line-active",
    },
  },
};

export function getGlobalVariantClasses(variant: GlobalVariant, color: SemanticColor) {
  return globalVariants[variant][color];
}

/** Color variants object used in `cva` of several components. */
export const COLOR_VARIANTS: Record<SemanticColor, ""> = {
  neutral: "",
  primary: "",
  accent: "",
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

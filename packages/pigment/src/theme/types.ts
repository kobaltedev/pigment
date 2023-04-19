export type SemanticColor =
  | "neutral"
  | "primary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type StateVariant = "base" | "hover" | "active";

export interface GlobalVariants {
  solid: Record<SemanticColor, Record<StateVariant, string>>;
  soft: Record<SemanticColor | "input", Record<StateVariant, string>>;
  outlined: Record<SemanticColor | "input", Record<StateVariant, string>>;
  ghost: Record<SemanticColor, Record<StateVariant, string>>;
}

export type GlobalVariant = keyof GlobalVariants;

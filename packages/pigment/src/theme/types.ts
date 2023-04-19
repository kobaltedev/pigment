export type SemanticColor =
  | "neutral"
  | "primary"
  | "accent"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type StateVariant = "base" | "hover" | "active";

export type GlobalVariant = "solid" | "soft" | "outlined" | "ghost";

export type GlobalVariants = Record<
  GlobalVariant,
  Record<SemanticColor, Record<StateVariant, string>>
>;

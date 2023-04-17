export type Color =
  | "gray"
  | "mauve"
  | "slate"
  | "sage"
  | "olive"
  | "sand"
  | "maroon"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "red";

export type GlobalVariant = "solid" | "soft" | "outlined" | "ghost";

export type StateVariant = "base" | "hover" | "active" | "disabled";

export type GlobalVariantMap = Record<GlobalVariant, Record<Color, Record<StateVariant, string>>>;

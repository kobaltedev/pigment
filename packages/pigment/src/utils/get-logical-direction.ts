import { Direction } from "@kobalte/core/i18n";

export type LogicalPlacement = "center" | "left" | "right";

export function getLogicalPlacement(
  readingDirection: Direction,
  placement: "center" | "start" | "end"
): LogicalPlacement {
  const isRTL = readingDirection === "rtl";

  switch (placement) {
    case "center":
      return placement;
    case "start":
      return isRTL ? "right" : "left";
    case "end":
      return isRTL ? "left" : "right";
  }
}

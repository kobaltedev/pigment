import { JSX } from "solid-js";
import { SlotProp } from "../utils/slot";
import { BadgeVariants } from "./badge.styles";

export type BadgeSlots = "root";

export interface BadgeProps extends BadgeVariants, SlotProp<BadgeSlots> {
  /** The children of the element */
  children?: JSX.Element;

  /** Custom classes applied to the element */
  class?: string;
}

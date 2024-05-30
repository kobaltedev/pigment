import { SlotProp } from "../utils/slot";
import { SurfaceVariants } from "./surface.styles";

export type SurfaceSlots = "root";

export interface SurfaceProps extends SurfaceVariants, SlotProp<SurfaceSlots> {
  /** Custom classes applied to the element */
  class?: string;
}

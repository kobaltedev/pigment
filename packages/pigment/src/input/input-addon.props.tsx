import { SlotProp } from "../utils/slot";
import { InputAddonVariants } from "./input-addon.styles";

export type InputAddonSlots = "root";

export interface InputAddonProps extends InputAddonVariants, SlotProp<InputAddonSlots> {
  /** Custom classes applied to the element */
  class?: string;
}

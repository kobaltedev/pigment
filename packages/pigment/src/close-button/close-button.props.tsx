import { IconButtonProps } from "../button";
import { SlotProp } from "../utils/slot";

export type CloseButtonSlots = "root";

export interface CloseButtonProps
  extends Omit<Partial<IconButtonProps>, "slotClasses">,
    SlotProp<CloseButtonSlots> {}

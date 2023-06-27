import { JSX } from "solid-js";

import { IconButtonProps } from "../button";
import { SlotProp } from "../utils/slot";

export type CloseButtonSlots = "root";

export interface CloseButtonProps
  extends Omit<Partial<IconButtonProps>, "slotClasses" | "children">,
    SlotProp<CloseButtonSlots> {
  /**
   * The icon to show as the button content.
   * Can be an Iconify icon name following the pattern `i-{collection_name}-{icon_name}`.
   */
  icon?: string | JSX.Element | (() => JSX.Element);
}

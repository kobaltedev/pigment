import { JSX } from "solid-js";

import { IconButtonProps } from "../button";
import { SlotProp } from "../utils/slot";
import { CloseButtonIntlTranslations } from "./close-button.intl";

export type CloseButtonSlots = "root";

export interface CloseButtonProps
  extends Omit<Partial<IconButtonProps>, "slotClasses">,
    SlotProp<CloseButtonSlots> {
  /**
   * The icon to show as the button content.
   * Can be an Iconify icon name following the pattern `i-{collection_name}-{icon_name}`.
   */
  icon?: string | JSX.Element | (() => JSX.Element);

  /** The localized strings of the component. */
  translations?: CloseButtonIntlTranslations;
}

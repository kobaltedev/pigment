import { IconButtonProps } from "../button";
import { SlotProp } from "../utils/slot";
import { CloseButtonIntlTranslations } from "./close-button.intl";

export type CloseButtonSlots = "root";

export interface CloseButtonProps
  extends Omit<Partial<IconButtonProps>, "slotClasses">,
    SlotProp<CloseButtonSlots> {
  /** The localized strings of the component. */
  translations?: CloseButtonIntlTranslations;
}

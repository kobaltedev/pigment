import { Button as KButton } from "@kobalte/core";

import { SlotProp } from "../utils/slot";
import { CloseButtonVariants } from "./close-button.styles";

export type CloseButtonSlots = "root";

export interface CloseButtonProps
  extends KButton.ButtonRootProps,
    Omit<CloseButtonVariants, "isDisabled">,
    SlotProp<CloseButtonSlots> {}

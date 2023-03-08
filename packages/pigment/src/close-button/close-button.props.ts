import { Button as KButton } from "@kobalte/core";

import { CloseButtonVariants } from "./close-button.styles";

export interface CloseButtonProps
  extends KButton.ButtonRootProps,
    Omit<CloseButtonVariants, "isDisabled"> {}

export type CloseButtonSlots = "root";

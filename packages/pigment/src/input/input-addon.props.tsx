import { AsChildProp } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";

import { SlotProp } from "../utils/slot";
import { InputAddonVariants } from "./input-addon.styles";

export type InputAddonSlots = "root";

export interface InputAddonProps
  extends OverrideComponentProps<"div", InputAddonVariants>,
    AsChildProp,
    SlotProp<InputAddonSlots> {}

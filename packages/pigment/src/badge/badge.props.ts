import { AsChildProp } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";

import { SlotProp } from "../utils/slot";
import { BadgeVariants } from "./badge.styles";

export type BadgeSlots = "root";

export interface BadgeProps
  extends OverrideComponentProps<"span", AsChildProp & BadgeVariants & SlotProp<BadgeSlots>> {}

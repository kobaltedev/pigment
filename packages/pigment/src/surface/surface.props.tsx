import { AsChildProp } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";

import { SlotProp } from "../utils/slot";
import { SurfaceVariants } from "./surface.styles";

export type SurfaceSlots = "root";

export interface SurfaceProps
  extends OverrideComponentProps<"div", AsChildProp & SurfaceVariants & SlotProp<SurfaceSlots>> {}

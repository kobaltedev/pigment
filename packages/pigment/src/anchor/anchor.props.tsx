import { Link as KLink } from "@kobalte/core";

import { SlotProp } from "../utils/slot";
import { AnchorVariants } from "./anchor.styles";

export type AnchorSlots = "root";

export interface AnchorProps extends KLink.LinkRootProps, AnchorVariants, SlotProp<AnchorSlots> {
  /** Whether the link should be opened in a new tab. */
  external?: boolean;
}

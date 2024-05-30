import { LinkRootProps } from "@kobalte/core/link";
import { ValidComponent } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AnchorVariants } from "./anchor.styles";

export type AnchorSlots = "root";

export interface AnchorProps<T extends ValidComponent = "a">
  extends LinkRootProps<T>,
    AnchorVariants,
    SlotProp<AnchorSlots> {
  /** Whether the link should be opened in a new tab. */
  external?: boolean;

  /** Custom classes applied to the element */
  class?: string;
}

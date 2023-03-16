import { Alert as KAlert } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AlertVariants } from "./alert.styles";

export type AlertSlots = "root" | "icon" | "content" | "title" | "description" | "dismissButton";

export interface AlertProps
  extends Omit<KAlert.AlertRootProps, "title">,
    AlertVariants,
    SlotProp<AlertSlots> {
  /** The title of the alert. */
  title?: JSX.Element;

  /** The icon displayed next to the title. */
  icon?: ((status: AlertVariants["status"]) => JSX.Element) | JSX.Element;

  /** An accessible label for the dismiss button. */
  dismissButtonLabel?: string;

  /** Event handler called when the dismiss button is clicked. */
  onDismiss?: () => void;
}

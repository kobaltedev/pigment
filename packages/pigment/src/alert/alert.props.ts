import { Alert as KAlert } from "@kobalte/core";
import { JSX } from "solid-js";

import { AlertVariants } from "./alert.styles";
import { SlotProp } from "../utils/slot";

export type AlertSlots = "root" | "icon" | "content" | "title" | "description" | "dismissButton";

export interface AlertProps
  extends Omit<KAlert.AlertRootProps, "title">,
    AlertVariants,
    SlotProp<AlertSlots> {
  /** The title of the alert. */
  title?: JSX.Element;

  /** An accessible label for the dismiss button. */
  dismissButtonLabel?: string;

  /** The icon to show when the alert has a `success` status. */
  successIcon?: JSX.Element;

  /** The icon to show when the alert has an `info` status. */
  infoIcon?: JSX.Element;

  /** The icon to show when the alert has a `warning` status. */
  warningIcon?: JSX.Element;

  /** The icon to show when the alert has a `danger` status. */
  dangerIcon?: JSX.Element;

  /** The icon to show when the alert has an `help` status. */
  helpIcon?: JSX.Element;

  /** Event handler called when the dismiss button is clicked. */
  onDismiss?: () => void;
}

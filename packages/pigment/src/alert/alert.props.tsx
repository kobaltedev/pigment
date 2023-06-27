import { Alert as KAlert } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AlertVariants } from "./alert.styles";

export type AlertSlots = "root" | "icon" | "leadingSection" | "trailingSection";

export type AlertStatus = Exclude<AlertVariants["status"], undefined>;

export interface AlertProps extends KAlert.AlertRootProps, AlertVariants, SlotProp<AlertSlots> {
  /**
   * The icon to show before the alert content.
   * Can be an Iconify icon name following the pattern `i-{collection_name}-{icon_name}`.
   */
  icon?: (string | JSX.Element) | ((status: AlertStatus) => string | JSX.Element);

  /** The element to show before the alert content, in place of the `icon`. */
  leadingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The element to show after the alert content. */
  trailingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);
}

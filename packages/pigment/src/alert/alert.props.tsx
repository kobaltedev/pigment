import { Alert as KAlert } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AlertVariants } from "./alert.styles";

export type AlertSlots = "root" | "icon" | "leadingSection" | "trailingSection";

export type AlertStatus = Exclude<AlertVariants["status"], undefined>;

export interface AlertProps extends KAlert.AlertRootProps, AlertVariants, SlotProp<AlertSlots> {
  /** The element to show before the alert content. */
  leadingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The element to show after the alert content. */
  trailingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);
}

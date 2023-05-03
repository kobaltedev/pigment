import { Alert as KAlert } from "@kobalte/core";
import { JSX } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AlertVariants } from "./alert.styles";

export type AlertSlots = "root" | "startDecorator" | "endDecorator";

export type AlertStatus = Exclude<AlertVariants["status"], undefined>;

export interface AlertProps extends KAlert.AlertRootProps, AlertVariants, SlotProp<AlertSlots> {
  /** Whether the default start decorator should be shown. */
  withDefaultStartDecorator?: boolean;

  /** The element(s) placed before the alert content. */
  startDecorator?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The element(s) placed after the alert content. */
  endDecorator?: JSX.Element | ((status: AlertStatus) => JSX.Element);
}

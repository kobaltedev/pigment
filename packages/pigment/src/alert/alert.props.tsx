import { AlertRootProps } from "@kobalte/core/alert";
import { JSX, ValidComponent } from "solid-js";

import { SlotProp } from "../utils/slot";
import { AlertVariants } from "./alert.styles";

export type AlertSlots = "root" | "icon" | "leadingSection" | "trailingSection";

export type AlertStatus = Exclude<AlertVariants["status"], undefined>;

export interface AlertProps<T extends ValidComponent = "div">
  extends AlertRootProps<T>,
    AlertVariants,
    SlotProp<AlertSlots> {
  /** The icon to show before the alert content. */
  icon?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The element to show before the alert content, in place of the `icon`. */
  leadingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The element to show after the alert content. */
  trailingSection?: JSX.Element | ((status: AlertStatus) => JSX.Element);

  /** The children of the element */
  children?: JSX.Element;

  /** Custom classes applied to the element */
  class?: string;
}

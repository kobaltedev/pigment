import { AsChildProp } from "@kobalte/core";
import { OverrideComponentProps } from "@kobalte/utils";

import { BadgeVariants } from "./badge.styles";

export interface BadgeProps extends OverrideComponentProps<"span", AsChildProp>, BadgeVariants {}

export type BadgeSlots = "root";

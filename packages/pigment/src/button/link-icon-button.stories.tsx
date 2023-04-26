import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { SEMANTIC_COLOR_VARIANTS, VARIANT_VARIANTS } from "../theme/variants";
import { LinkIconButton } from "./button";
import { LinkIconButtonProps } from "./button.props";

type Story = StoryObj<LinkIconButtonProps>;

export default {
  title: "LinkIconButton",
  argTypes: {
    variant: {
      options: ["default", ...VARIANT_VARIANTS],
      control: { type: "select" },
    },
    color: {
      options: SEMANTIC_COLOR_VARIANTS,
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
  },
  render: props => (
    <LinkIconButton {...props} aria-label="Go to Kobalte website">
      <InfoCircleIcon />
    </LinkIconButton>
  ),
} as Meta<ComponentProps<typeof LinkIconButton>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    disabled: false,
    href: "https://kobalte.dev",
  },
};

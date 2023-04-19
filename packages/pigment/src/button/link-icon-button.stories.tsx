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
      options: ["default", ...Object.keys(VARIANT_VARIANTS)],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(SEMANTIC_COLOR_VARIANTS),
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    isDisabled: {
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
    isDisabled: false,
    href: "https://kobalte.dev",
  },
};

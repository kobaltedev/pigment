import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { LinkIconButton } from "./button";
import { LinkIconButtonProps } from "./button.props";

type Story = StoryObj<LinkIconButtonProps>;

export default {
  title: "LinkIconButton",
  argTypes: {
    variant: {
      options: ["solid", "soft", "outlined", "ghost"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "neutral", "success", "info", "warning", "danger"],
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

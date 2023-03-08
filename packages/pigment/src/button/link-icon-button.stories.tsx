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
    colorScheme: {
      options: ["primary", "neutral", "warning", "danger"],
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
  render: props => <LinkIconButton {...props} aria-label="Go to Kobalte website" />,
} as Meta<ComponentProps<typeof LinkIconButton>>;

export const Default: Story = {
  args: {
    variant: "solid",
    colorScheme: "primary",
    size: "sm",
    isDisabled: false,
    href: "https://kobalte.dev",
    children: () => <InfoCircleIcon />,
  },
};

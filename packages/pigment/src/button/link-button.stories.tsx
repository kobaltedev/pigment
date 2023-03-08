import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { LinkButton } from "./button";
import { LinkButtonProps } from "./button.props";

type Story = StoryObj<LinkButtonProps>;

export default {
  title: "LinkButton",
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
    isFullWidth: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: props => <LinkButton {...props} />,
} as Meta<ComponentProps<typeof LinkButton>>;

export const Default: Story = {
  args: {
    variant: "solid",
    colorScheme: "primary",
    size: "sm",
    isFullWidth: false,
    isDisabled: false,
    href: "https://kobalte.dev",
    children: "Link",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "solid",
    colorScheme: "primary",
    size: "sm",
    isFullWidth: false,
    isDisabled: false,
    href: "https://kobalte.dev",
    children: "Link",
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
  },
};

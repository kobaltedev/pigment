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
    color: {
      options: ["primary", "neutral", "success", "info", "warning", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg", "xl"],
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
    color: "primary",
    size: "md",
    isFullWidth: false,
    isDisabled: false,
    href: "https://kobalte.dev",
    children: "Link",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    isFullWidth: false,
    isDisabled: false,
    href: "https://kobalte.dev",
    children: "Link",
    startIcon: <InfoCircleIcon />,
    endIcon: <InfoCircleIcon />,
  },
};

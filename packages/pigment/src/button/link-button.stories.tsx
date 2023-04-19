import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { SEMANTIC_COLOR_VARIANTS, VARIANT_VARIANTS } from "../theme/variants";
import { LinkButton } from "./button";
import { LinkButtonProps } from "./button.props";

type Story = StoryObj<LinkButtonProps>;

export default {
  title: "LinkButton",
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
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
  },
};

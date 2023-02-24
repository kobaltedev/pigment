import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { IconButton, IconButtonProps } from "./button";

type Story = StoryObj<IconButtonProps>;

export default {
  title: "IconButton",
  argTypes: {
    variant: {
      options: ["solid", "soft", "outlined", "ghost"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "neutral", "warning", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
  render: props => <IconButton {...props} aria-label="example" />,
} as Meta<ComponentProps<typeof IconButton>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "sm",
    isLoading: false,
    isDisabled: false,
    children: () => <InfoCircleIcon />,
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Badge } from "./badge";
import { BadgeProps } from "./badge.props";

type Story = StoryObj<BadgeProps>;

export default {
  title: "Badge",
  argTypes: {
    variant: {
      options: ["solid", "soft", "outlined"],
      control: { type: "select" },
    },
    colorScheme: {
      options: ["primary", "neutral", "success", "info", "warning", "danger", "help"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md"],
      control: { type: "select" },
    },
  },
  render: props => (
    <div class="pg-flex pg-items-center pg-space-x-2">
      <Badge {...props}>Badge</Badge>
      <Badge {...props}>1</Badge>
      <Badge {...props}>10</Badge>
      <Badge {...props}>100</Badge>
      <Badge {...props}>1000</Badge>
      <Badge {...props}>+1000</Badge>
    </div>
  ),
} as Meta<ComponentProps<typeof Badge>>;

export const Default: Story = {
  args: {
    variant: "soft",
    colorScheme: "neutral",
    size: "sm",
  },
};

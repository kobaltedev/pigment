import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { SEMANTIC_COLOR_VARIANTS } from "../theme/variants";
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
    color: {
      options: Object.keys(SEMANTIC_COLOR_VARIANTS),
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
  render: props => (
    <div class="flex items-center space-x-2">
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
    variant: "solid",
    color: "primary",
    size: "sm",
  },
};

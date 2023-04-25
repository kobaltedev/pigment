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
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    circle: {
      control: { type: "boolean" },
    },
  },
  render: props => <Badge {...props} />,
} as Meta<ComponentProps<typeof Badge>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    circle: false,
    children: "Badge",
  },
};

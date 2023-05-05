import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Badge } from "./badge";
import { BadgeProps } from "./badge.props";
import { For } from "solid-js";

type Story = StoryObj<BadgeProps>;

export default {
  title: "Badge",
  argTypes: {
    variant: {
      options: ["solid", "soft", "dot"],
      control: { type: "select" },
    },
    pill: {
      control: { type: "boolean" },
    },
  },
  render: props => (
    <div class="flex flex-col gap-4">
      <For each={["md", "lg"] as const}>
        {size => (
          <div class="flex items-center space-x-4">
            <For
              each={
                ["primary", "neutral", "success", "info", "warning", "danger", "discovery"] as const
              }
            >
              {color => <Badge {...props} size={size} color={color} />}
            </For>
          </div>
        )}
      </For>
    </div>
  ),
} as Meta<ComponentProps<typeof Badge>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    pill: false,
    children: "Badge",
  },
};

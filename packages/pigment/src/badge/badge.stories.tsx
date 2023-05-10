import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { For } from "solid-js";

import { Badge } from "./badge";
import { BadgeProps } from "./badge.props";

type Story = StoryObj<BadgeProps>;

export default {
  title: "Badge",
  argTypes: {
    variant: {
      options: ["solid", "soft", "inverted", "dot"],
      control: { type: "select" },
    },
    shape: {
      options: ["rounded", "pill", "circle"],
      control: { type: "select" },
    },
  },
  render: props => (
    <div class="flex flex-col gap-4">
      <For each={["md", "lg"] as const}>
        {size => (
          <div class="flex items-center space-x-4">
            <For each={["primary", "success", "info", "warning", "danger", "discovery"] as const}>
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
    shape: "rounded",
    children: "Badge",
  },
};

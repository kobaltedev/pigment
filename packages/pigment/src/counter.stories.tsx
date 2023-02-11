import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Counter, CounterProps } from "./counter";

type Story = StoryObj<CounterProps>;

export const Default: Story = {
  args: {
    initialValue: 12,
    theme: "default",
  },
};

export default {
  title: "Example/Counter",
  argTypes: {
    initialValue: { control: "number" },
    theme: {
      options: ["default", "red"],
      control: { type: "radio" },
    },
  },
  render: props => <Counter {...props} />,
} as Meta<ComponentProps<typeof Counter>>;

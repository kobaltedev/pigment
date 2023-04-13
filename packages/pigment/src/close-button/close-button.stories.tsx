import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { CloseButton } from "./close-button";
import { CloseButtonProps } from "./close-button.props";

type Story = StoryObj<CloseButtonProps>;

export default {
  title: "CloseButton",
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
  render: props => <CloseButton {...props} />,
} as Meta<ComponentProps<typeof CloseButton>>;

export const Default: Story = {
  args: {
    size: "md",
    isDisabled: false,
  },
};

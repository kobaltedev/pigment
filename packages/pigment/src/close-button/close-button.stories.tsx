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
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  render: props => (
    <div class="flex items-center space-x-4">
      <CloseButton {...props} size="xs" />
      <CloseButton {...props} size="sm" />
      <CloseButton {...props} size="md" />
      <CloseButton {...props} size="lg" />
      <CloseButton {...props} size="xl" />
    </div>
  ),
} as Meta<ComponentProps<typeof CloseButton>>;

export const Default: Story = {
  args: {
    size: "md",
    rounded: "md",
    disabled: false,
  },
};

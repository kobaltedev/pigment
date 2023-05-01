import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { CloseButton } from "./close-button";
import { CloseButtonProps } from "./close-button.props";

type Story = StoryObj<CloseButtonProps>;

export default {
  title: "CloseButton",
  argTypes: {
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
  render: props => (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-4">
        <CloseButton {...props} size="sm" />
        <CloseButton {...props} size="md" />
        <CloseButton {...props} size="lg" />
      </div>
      <div class="flex items-center space-x-4 text-content-on-danger bg-surface-danger">
        <CloseButton {...props} size="sm" inheritTextColor />
        <CloseButton {...props} size="md" inheritTextColor />
        <CloseButton {...props} size="lg" inheritTextColor />
      </div>
      <div class="flex items-center space-x-4 text-content-on-danger-subtle bg-surface-danger-subtle">
        <CloseButton {...props} size="sm" inheritTextColor onSubtleBackground />
        <CloseButton {...props} size="md" inheritTextColor onSubtleBackground />
        <CloseButton {...props} size="lg" inheritTextColor onSubtleBackground />
      </div>
      <div class="flex items-center space-x-4 text-content-on-warning bg-surface-warning">
        <CloseButton {...props} size="sm" inheritTextColor />
        <CloseButton {...props} size="md" inheritTextColor />
        <CloseButton {...props} size="lg" inheritTextColor />
      </div>
      <div class="flex items-center space-x-4 text-content-on-warning-subtle bg-surface-warning-subtle">
        <CloseButton {...props} size="sm" inheritTextColor onSubtleBackground />
        <CloseButton {...props} size="md" inheritTextColor onSubtleBackground />
        <CloseButton {...props} size="lg" inheritTextColor onSubtleBackground />
      </div>
    </div>
  ),
} as Meta<ComponentProps<typeof CloseButton>>;

export const Default: Story = {
  args: {
    size: "md",
    disabled: false,
  },
};

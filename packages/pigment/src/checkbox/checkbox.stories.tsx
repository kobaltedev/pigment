import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Checkbox } from "./checkbox";
import { CheckboxProps } from "./checkbox.props";

type Story = StoryObj<CheckboxProps>;

export default {
  title: "Checkbox",
  argTypes: {
    variant: {
      options: ["soft", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    hasErrorIcon: {
      control: { type: "boolean" },
    },
    isIndeterminate: {
      control: { type: "boolean" },
    },
    isInvalid: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
  },
  render: props => <Checkbox {...props} />,
} as Meta<ComponentProps<typeof Checkbox>>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isIndeterminate: false,
    isInvalid: false,
    isDisabled: false,
    label: "Remember me",
    error: "Please check the box.",
  },
};

export const WithDescription: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isIndeterminate: false,
    isInvalid: false,
    isDisabled: false,
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
    error: "Please check the box.",
  },
};

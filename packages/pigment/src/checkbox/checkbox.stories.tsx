import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Checkbox } from "./checkbox";
import { CheckboxProps } from "./checkbox.props";

type Story = StoryObj<CheckboxProps>;

export default {
  title: "Checkbox",
  argTypes: {
    size: {
      options: ["md", "lg"],
      control: { type: "select" },
    },
    indeterminate: {
      control: { type: "boolean" },
    },
    invalid: {
      control: { type: "boolean" },
    },
    disabled: {
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
    size: "md",
    indeterminate: false,
    invalid: false,
    disabled: false,
    label: "Remember me",
    error: "Please check the box.",
  },
};

export const WithDescription: Story = {
  args: {
    size: "md",
    indeterminate: false,
    invalid: false,
    disabled: false,
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
    error: "Please check the box.",
  },
};

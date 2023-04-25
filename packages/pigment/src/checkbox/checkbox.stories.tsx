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
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    labelPlacement: {
      options: ["start", "end"],
      control: { type: "select" },
    },
    withErrorIcon: {
      control: { type: "boolean" },
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
    variant: "outlined",
    size: "md",
    labelPlacement: "end",
    withErrorIcon: true,
    indeterminate: false,
    invalid: false,
    disabled: false,
    label: "Remember me",
    error: "Please check the box.",
  },
};

export const WithDescription: Story = {
  args: {
    variant: "outlined",
    size: "md",
    labelPlacement: "end",
    withErrorIcon: true,
    indeterminate: false,
    invalid: false,
    disabled: false,
    label: "Comments",
    description: "Get notified when someones posts a comment on a posting.",
    error: "Please check the box.",
  },
};

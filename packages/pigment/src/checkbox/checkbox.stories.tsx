import { OverrideComponentProps } from "@kobalte/utils";
import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Checkbox } from "./checkbox";
import { CheckboxProps } from "./checkbox.props";

type Story = StoryObj<OverrideComponentProps<"div", CheckboxProps>>;

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
    errorMessage: {
      control: { type: "text" },
    },
  },
  render: props => <Checkbox {...props} />,
} as Meta<OverrideComponentProps<"div", CheckboxProps>>;

export const Default: Story = {
  args: {
    size: "md",
    indeterminate: false,
    invalid: false,
    disabled: false,
    label: "Remember me",
    errorMessage: "Please check the box.",
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
    errorMessage: "Please check the box.",
  },
};

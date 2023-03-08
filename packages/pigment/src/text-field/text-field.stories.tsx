import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { TextField } from "./text-field";
import { TextFieldProps } from "./text-field.props";

type Story = StoryObj<TextFieldProps>;

export default {
  title: "TextField",
  argTypes: {
    variant: {
      options: ["soft", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    descriptionPlacement: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
    isMultiline: {
      control: { type: "boolean" },
    },
    isInvalid: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
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
  render: props => <TextField {...props} />,
} as Meta<ComponentProps<typeof TextField>>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    descriptionPlacement: "bottom",
    isMultiline: false,
    isInvalid: false,
    isDisabled: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
  },
};

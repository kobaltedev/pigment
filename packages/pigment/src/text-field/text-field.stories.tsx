import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button } from "../button";
import { InfoCircleIcon } from "../icons";
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
    withErrorIcon: {
      control: { type: "boolean" },
    },
    invalid: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    multiline: {
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
  render: props => <TextField class="w-full max-w-xs" {...props} />,
} as Meta<ComponentProps<typeof TextField>>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
  },
};

export const WithDecorator: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
    startDecorator: () => <InfoCircleIcon class="h-4 w-4 mx-2.5" />,
    endDecorator: () => (
      <Button size="md" variant="solid" color="neutral" class="rounded-l-none z-10 ml-2.5">
        Search
      </Button>
    ),
  },
};

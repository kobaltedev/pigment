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
      options: ["sm", "md"],
      control: { type: "select" },
    },
    hasErrorIcon: {
      control: { type: "boolean" },
    },
    isInvalid: {
      control: { type: "boolean" },
    },
    isRequired: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    isMultiline: {
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
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    isMultiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
  },
};

export const WithDecorator: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    hasErrorIcon: true,
    isInvalid: false,
    isRequired: false,
    isDisabled: false,
    isMultiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
    startDecorator: () => <InfoCircleIcon class="h-4 w-4 mx-2.5" />,
    endDecorator: () => (
      <Button size="sm" variant="solid" color="neutral" class="rounded-l-none z-10 ml-2.5">
        Search
      </Button>
    ),
  },
};

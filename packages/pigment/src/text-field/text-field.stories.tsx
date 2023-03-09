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
    descriptionPlacement: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
    hasErrorIcon: {
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
    hasErrorIcon: true,
    isInvalid: false,
    isDisabled: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    descriptionPlacement: "bottom",
    hasErrorIcon: true,
    isInvalid: false,
    isDisabled: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
  },
};

export const WithSection: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    descriptionPlacement: "bottom",
    hasErrorIcon: true,
    isInvalid: false,
    isDisabled: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
    startSection: () => <span class="pg-mx-2">http://</span>,
    endSection: () => (
      <Button
        size="sm"
        variant="solid"
        colorScheme="neutral"
        class="pg-rounded-l-none pg-z-10 pg-ml-2"
      >
        Search
      </Button>
    ),
  },
};

export const WithIconAndSection: Story = {
  args: {
    variant: "outlined",
    size: "sm",
    descriptionPlacement: "bottom",
    hasErrorIcon: true,
    isInvalid: false,
    isDisabled: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    error: "Please enter a valid email address.",
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
    startSection: () => <span class="pg-ml-2">http://</span>,
    endSection: () => (
      <Button size="sm" variant="solid" colorScheme="neutral" class="pg-rounded-l-none pg-z-10">
        Search
      </Button>
    ),
  },
};

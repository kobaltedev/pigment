import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, IconButton } from "../button";
import { Icon } from "../icon";
import { InputAddon } from "../input";
import { TextField } from "./text-field";
import { TextFieldProps } from "./text-field.props";

type Story = StoryObj<TextFieldProps>;

export default {
  title: "TextField",
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
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
    errorMessage: {
      control: { type: "text" },
    },
  },
  render: props => <TextField class="w-full max-w-xs" {...props} />,
} as Meta<ComponentProps<typeof TextField>>;

export const Default: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    errorMessage: "Please enter a valid email address.",
  },
};

export const WithIcon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    errorMessage: "Please enter a valid email address.",
    leadingIcon: "i-tabler-alert-circle-filled",
    trailingIcon: "i-tabler-help-circle-filled",
  },
};

export const WithSection: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "example@acme.com",
    label: "E-mail",
    description: "We will never share your email.",
    errorMessage: "Please enter a valid email address.",
    leadingSectionWidth: 32,
    trailingSectionWidth: 32,
    leadingSection: () => (
      <IconButton variant="text" size="sm" class="my-1 ms-1" aria-label="Eye" icon="i-tabler-eye" />
    ),
    trailingSection: () => (
      <IconButton variant="text" size="sm" class="my-1 me-1" aria-label="Eye" icon="i-tabler-eye" />
    ),
  },
};

export const WithStringAddon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "acme",
    label: "Website",
    errorMessage: "Please enter a valid url.",
    leadingAddon: "https://",
    trailingAddon: ".com",
  },
};

export const WithCustomInputAddon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "acme",
    label: "Website",
    errorMessage: "Please enter a valid url.",
    leadingAddon: () => (
      <InputAddon class="px-2">
        <Icon name="i-tabler-eye" class="text-xl" />
      </InputAddon>
    ),
    trailingAddon: () => (
      <InputAddon placement="trailing" class="px-2">
        <Icon name="i-tabler-alert-triangle-filled" class="text-xl" />
      </InputAddon>
    ),
  },
};

export const WithMultipleCustomInputAddon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "acme",
    label: "Website",
    errorMessage: "Please enter a valid url.",
    leadingAddon: () => (
      <div class="flex divide-x divide-line">
        <InputAddon>$</InputAddon>
        <InputAddon placement="center">0.00</InputAddon>
      </div>
    ),
  },
};

export const WithCustomAddon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "acme",
    label: "Website",
    errorMessage: "Please enter a valid input.",
    leadingAddon: () => (
      <IconButton
        class="border-e-0 rounded-e-none shadow-none"
        aria-label=""
        icon="i-tabler-info-circle-filled"
      />
    ),
    trailingAddon: () => (
      <Button variant="solid" class="-ml-px rounded-s-none shadow-none">
        Subscribe
      </Button>
    ),
  },
};

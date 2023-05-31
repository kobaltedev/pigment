import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, IconButton } from "../button";
import {
  TablerAlertCircleFilledIcon,
  TablerEyeIcon,
  TablerHelpCircleFilledIcon,
  TablerInfoCircleFilledIcon,
} from "../icon";
import { InputAddon, TextField } from "./text-field";
import { TextFieldProps } from "./text-field.props";

type Story = StoryObj<TextFieldProps>;

export default {
  title: "TextField",
  argTypes: {
    size: {
      options: ["md"],
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
    leadingIcon: () => <TablerAlertCircleFilledIcon />,
    trailingIcon: () => <TablerHelpCircleFilledIcon />,
  },
};

export const WithElement: Story = {
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
    leadingElementWidth: "40px",
    trailingElementWidth: "2.5rem",
    leadingElement: () => (
      <IconButton variant="text" size="sm" class="mt-1 ms-1" aria-label="">
        <TablerEyeIcon />
      </IconButton>
    ),
    trailingElement: () => (
      <IconButton variant="text" size="sm" class="mt-1 me-1" aria-label="">
        <TablerEyeIcon />
      </IconButton>
    ),
  },
};

export const WithInputAddon: Story = {
  args: {
    size: "md",
    invalid: false,
    required: false,
    disabled: false,
    multiline: false,
    placeholder: "acme",
    label: "Website",
    errorMessage: "Please enter a valid url.",
    leadingAddon: () => <InputAddon>https://</InputAddon>,
    trailingAddon: () => <InputAddon trailing>.com</InputAddon>,
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
      <IconButton class="border-e-0 rounded-e-none shadow-none" aria-label="">
        <TablerInfoCircleFilledIcon />
      </IconButton>
    ),
    trailingAddon: () => (
      <Button variant="solid" class="-ml-px rounded-s-none shadow-none">
        Subscribe
      </Button>
    ),
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { SEMANTIC_COLOR_VARIANTS } from "../theme/variants";
import { Alert } from "./alert";
import { AlertProps } from "./alert.props";

type Story = StoryObj<AlertProps>;

export default {
  title: "Alert",
  argTypes: {
    variant: {
      options: ["solid", "soft"],
      control: { type: "select" },
    },
    color: {
      options: SEMANTIC_COLOR_VARIANTS,
      control: { type: "select" },
    },
    withIcon: {
      control: { type: "boolean" },
    },
    dismissible: {
      control: { type: "boolean" },
    },
    multiline: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: props => <Alert {...props} />,
} as Meta<ComponentProps<typeof Alert>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    title: "Announcement",
    withIcon: true,
    dismissible: true,
    multiline: false,
    children: "Pigment is going live soon, get ready!",
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

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
    status: {
      options: ["success", "info", "warning", "danger", "help"],
      control: { type: "select" },
    },
    hasIcon: {
      control: { type: "boolean" },
    },
    isDismissible: {
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
    status: "info",
    title: "Announcement",
    hasIcon: true,
    isDismissible: true,
    children: "Pigment is going live soon, get ready!",
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, ButtonProps } from "./button";

type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    variant: "solid",
    colorScheme: "primary",
    size: "md",
    rounded: "md",
    isSquare: false,
    isFullWidth: false,
    isLoading: false,
    isDisabled: false,
    loadingText: "",
    loadingIconPlacement: "start",
    children: "Button",
  },
};

export default {
  title: "Button",
  argTypes: {
    variant: {
      options: ["solid", "soft", "outlined", "text"],
      control: { type: "select" },
    },
    colorScheme: {
      options: ["primary", "neutral", "danger"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg", "xl", "2xl"],
      control: { type: "select" },
    },
    rounded: {
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
      control: { type: "select" },
    },
    isSquare: {
      control: { type: "boolean" },
    },
    isFullWidth: {
      control: { type: "boolean" },
    },
    isLoading: {
      control: { type: "boolean" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
    loadingText: {
      control: { type: "text" },
    },
    loadingIconPlacement: {
      options: ["start", "end"],
      control: { type: "radio" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: props => <Button {...props} />,
} as Meta<ComponentProps<typeof Button>>;

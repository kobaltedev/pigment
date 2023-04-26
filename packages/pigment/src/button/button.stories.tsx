import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { InfoCircleIcon } from "../icons";
import { SEMANTIC_COLOR_VARIANTS, VARIANT_VARIANTS } from "../theme/variants";
import { Button } from "./button";
import { ButtonProps } from "./button.props";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Button",
  argTypes: {
    variant: {
      options: ["default", ...VARIANT_VARIANTS],
      control: { type: "select" },
    },
    color: {
      options: SEMANTIC_COLOR_VARIANTS,
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    rounded: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
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
  render: props => (
    <div class="flex items-center space-x-4">
      <Button {...props} size="xs" />
      <Button {...props} size="sm" />
      <Button {...props} size="md" />
      <Button {...props} size="lg" />
      <Button {...props} size="xl" />
    </div>
  ),
} as Meta<ComponentProps<typeof Button>>;

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    fullWidth: false,
    loading: false,
    disabled: false,
    loadingText: "",
    loadingIconPlacement: "start",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    fullWidth: false,
    loading: false,
    disabled: false,
    loadingText: "",
    loadingIconPlacement: "start",
    children: "Button",
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
  },
};

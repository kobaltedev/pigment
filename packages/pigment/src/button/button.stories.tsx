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
      options: ["default", ...Object.keys(VARIANT_VARIANTS)],
      control: { type: "select" },
    },
    color: {
      options: Object.keys(SEMANTIC_COLOR_VARIANTS),
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
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

export const Default: Story = {
  args: {
    variant: "solid",
    color: "primary",
    size: "md",
    isFullWidth: false,
    isLoading: false,
    isDisabled: false,
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
    isFullWidth: false,
    isLoading: false,
    isDisabled: false,
    loadingText: "",
    loadingIconPlacement: "start",
    children: "Button",
    startIcon: () => <InfoCircleIcon />,
    endIcon: () => <InfoCircleIcon />,
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, IconButton } from "./button";
import { ButtonProps } from "./button.props";
import { TablerLoader2 } from "../icons";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Button",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "default", "dashed", "text", "link", "destructive"],
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
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" />
        <Button {...props} size="sm" />
        <Button {...props} size="md" />
        <Button {...props} size="lg" />
        <Button {...props} size="xl" />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" startIcon={<TablerLoader2 />} />
        <Button {...props} size="sm" startIcon={<TablerLoader2 />} />
        <Button {...props} size="md" startIcon={<TablerLoader2 />} />
        <Button {...props} size="lg" startIcon={<TablerLoader2 />} />
        <Button {...props} size="xl" startIcon={<TablerLoader2 />} />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" endIcon={<TablerLoader2 />} />
        <Button {...props} size="sm" endIcon={<TablerLoader2 />} />
        <Button {...props} size="md" endIcon={<TablerLoader2 />} />
        <Button {...props} size="lg" endIcon={<TablerLoader2 />} />
        <Button {...props} size="xl" endIcon={<TablerLoader2 />} />
      </div>
      <div class="flex items-center space-x-4">
        <IconButton {...props} size="xs" children={<TablerLoader2 />} />
        <IconButton {...props} size="sm" children={<TablerLoader2 />} />
        <IconButton {...props} size="md" children={<TablerLoader2 />} />
        <IconButton {...props} size="lg" children={<TablerLoader2 />} />
        <IconButton {...props} size="xl" children={<TablerLoader2 />} />
      </div>
    </div>
  ),
} as Meta<ComponentProps<typeof Button>>;

export const Default: Story = {
  args: {
    variant: "default",
    fullWidth: false,
    loading: false,
    disabled: false,
    loadingText: "",
    loadingIconPlacement: "start",
    children: "Button",
  },
};

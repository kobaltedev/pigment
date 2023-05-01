import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { LinkIconButton, LinkButton } from "./button";
import { LinkButtonProps } from "./button.props";
import { TablerLoader2 } from "../icons";

type Story = StoryObj<LinkButtonProps>;

export default {
  title: "LinkButton",
  argTypes: {
    variant: {
      options: ["primary", "secondary", "default", "dashed", "text", "link", "destructive"],
      control: { type: "select" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: props => (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-4">
        <LinkButton {...props} size="xs" />
        <LinkButton {...props} size="sm" />
        <LinkButton {...props} size="md" />
        <LinkButton {...props} size="lg" />
        <LinkButton {...props} size="xl" />
      </div>
      <div class="flex items-center space-x-4">
        <LinkButton {...props} size="xs" startIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="sm" startIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="md" startIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="lg" startIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="xl" startIcon={<TablerLoader2 />} />
      </div>
      <div class="flex items-center space-x-4">
        <LinkButton {...props} size="xs" endIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="sm" endIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="md" endIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="lg" endIcon={<TablerLoader2 />} />
        <LinkButton {...props} size="xl" endIcon={<TablerLoader2 />} />
      </div>
      <div class="flex items-center space-x-4">
        <LinkIconButton {...props} size="xs" children={<TablerLoader2 />} />
        <LinkIconButton {...props} size="sm" children={<TablerLoader2 />} />
        <LinkIconButton {...props} size="md" children={<TablerLoader2 />} />
        <LinkIconButton {...props} size="lg" children={<TablerLoader2 />} />
        <LinkIconButton {...props} size="xl" children={<TablerLoader2 />} />
      </div>
    </div>
  ),
} as Meta<ComponentProps<typeof LinkButton>>;

export const Default: Story = {
  args: {
    variant: "default",
    fullWidth: false,
    disabled: false,
    href: "https://pigment.kobalte.dev",
    children: "Link",
  },
};

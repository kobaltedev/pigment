import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Button, IconButton } from "./button";
import { ButtonProps } from "./button.props";
import { TablerLoader2 } from "../icons";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Button",
  argTypes: {
    fullWidth: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    loadingPlacement: {
      options: ["center", "start", "end"],
      control: { type: "radio" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: props => (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-4">
        <Button {...props} variant="primary" />
        <Button {...props} variant="secondary" />
        <Button {...props} variant="default" />
        <Button {...props} variant="dashed" />
        <Button {...props} variant="text" />
        <Button {...props} variant="link" />
        <Button {...props} variant="destructive" />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" />
        <Button {...props} size="sm" />
        <Button {...props} size="md" />
        <Button {...props} size="lg" />
        <Button {...props} size="xl" />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" startDecorator={<TablerLoader2 />} />
        <Button {...props} size="sm" startDecorator={<TablerLoader2 />} />
        <Button {...props} size="md" startDecorator={<TablerLoader2 />} />
        <Button {...props} size="lg" startDecorator={<TablerLoader2 />} />
        <Button {...props} size="xl" startDecorator={<TablerLoader2 />} />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" endDecorator={<TablerLoader2 />} />
        <Button {...props} size="sm" endDecorator={<TablerLoader2 />} />
        <Button {...props} size="md" endDecorator={<TablerLoader2 />} />
        <Button {...props} size="lg" endDecorator={<TablerLoader2 />} />
        <Button {...props} size="xl" endDecorator={<TablerLoader2 />} />
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
    fullWidth: false,
    loading: false,
    disabled: false,
    loadingPlacement: "center",
    children: "Button",
  },
};

import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { For, JSX } from "solid-js";

import { TablerLoader2 } from "../icons";
import { Button, IconButton } from "./button";
import { ButtonProps } from "./button.props";

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
} as Meta<ComponentProps<typeof Button>>;

export const Variants: Story = {
  args: {
    children: "Button",
  },
  // @ts-ignore
  render: props => (
    <div class="flex items-center space-x-4">
      <Button {...props} variant="solid" />
      <Button {...props} variant="soft" />
      <Button {...props} variant="inverted" />
      <Button {...props} variant="default" />
      <Button {...props} variant="dashed" />
      <Button {...props} variant="text" />
      <Button {...props} variant="link" />
    </div>
  ),
};

export const Colors: Story = {
  args: {
    children: "Button",
  },
  // @ts-ignore
  render: props => (
    <div class="flex flex-col gap-4">
      <For each={["solid", "soft", "inverted"] as const}>
        {variant => (
          <div class="flex items-center space-x-4">
            <For
              each={
                ["primary", "neutral", "success", "info", "warning", "danger", "discovery"] as const
              }
            >
              {color => <Button {...props} variant={variant} color={color} />}
            </For>
          </div>
        )}
      </For>
    </div>
  ),
};

export const Sizes: Story = {
  args: {
    children: "Button",
  },
  // @ts-ignore
  render: props => (
    <div class="flex items-center space-x-4">
      <Button {...props} size="xs" />
      <Button {...props} size="sm" />
      <Button {...props} size="md" />
      <Button {...props} size="lg" />
      <Button {...props} size="xl" />
    </div>
  ),
};

export const Decorators: Story = {
  args: {
    children: "Button",
  },
  // @ts-ignore
  render: props => (
    <div class="flex flex-col gap-4">
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
    </div>
  ),
};

export const IconOnly: Story = {
  args: {
    children: TablerLoader2 as unknown as JSX.Element,
  },
  // @ts-ignore
  render: props => (
    <div class="flex items-center space-x-4">
      <IconButton {...props} size="xs" aria-label="Button" />
      <IconButton {...props} size="sm" aria-label="Button" />
      <IconButton {...props} size="md" aria-label="Button" />
      <IconButton {...props} size="lg" aria-label="Button" />
      <IconButton {...props} size="xl" aria-label="Button" />
    </div>
  ),
};

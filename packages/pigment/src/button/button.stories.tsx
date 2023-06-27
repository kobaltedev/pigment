import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { For, JSX } from "solid-js";

import { Button, IconButton } from "./button";
import { ButtonProps } from "./button.props";

type Story = StoryObj<ButtonProps>;

export default {
  title: "Button",
  argTypes: {
    variant: {
      options: ["solid", "soft", "inverted", "default", "dashed", "text", "link"],
      control: { type: "select" },
    },
    color: {
      options: ["primary", "success", "info", "warning", "danger", "discovery"],
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
    loadingPlacement: {
      options: ["center", "leading", "trailing"],
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
            <For each={["primary", "success", "info", "warning", "danger", "discovery"] as const}>
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

export const Icons: Story = {
  args: {
    children: "Button",
  },
  // @ts-ignore
  render: props => (
    <div class="flex flex-col gap-4">
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" leadingIcon="i-tabler-loader-2" />
        <Button {...props} size="sm" leadingIcon="i-tabler-loader-2" />
        <Button {...props} size="md" leadingIcon="i-tabler-loader-2" />
        <Button {...props} size="lg" leadingIcon="i-tabler-loader-2" />
        <Button {...props} size="xl" leadingIcon="i-tabler-loader-2" />
      </div>
      <div class="flex items-center space-x-4">
        <Button {...props} size="xs" trailingIcon="i-tabler-loader-2" />
        <Button {...props} size="sm" trailingIcon="i-tabler-loader-2" />
        <Button {...props} size="md" trailingIcon="i-tabler-loader-2" />
        <Button {...props} size="lg" trailingIcon="i-tabler-loader-2" />
        <Button {...props} size="xl" trailingIcon="i-tabler-loader-2" />
      </div>
    </div>
  ),
};

export const IconOnly: Story = {
  // @ts-ignore
  render: props => (
    <div class="flex items-center space-x-4">
      <IconButton {...props} icon="i-tabler-loader-2" size="xs" aria-label="Button" />
      <IconButton {...props} icon="i-tabler-loader-2" size="sm" aria-label="Button" />
      <IconButton {...props} icon="i-tabler-loader-2" size="md" aria-label="Button" />
      <IconButton {...props} icon="i-tabler-loader-2" size="lg" aria-label="Button" />
      <IconButton {...props} icon="i-tabler-loader-2" size="xl" aria-label="Button" />
    </div>
  ),
};

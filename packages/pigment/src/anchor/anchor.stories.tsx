import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Anchor } from "./anchor";
import { AnchorProps } from "./anchor.props";
import { OverrideComponentProps } from "@kobalte/utils";

type Story = StoryObj<OverrideComponentProps<"a", AnchorProps>>;

export default {
  title: "Anchor",
  argTypes: {
    external: {
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
} as Meta<OverrideComponentProps<"a", AnchorProps>>;

export const Default: Story = {
  args: {
    href: "https://pigment.kobalte.dev",
    children: "Pigment",
  },
  // @ts-ignore
  render: props => <Anchor {...props} />,
};

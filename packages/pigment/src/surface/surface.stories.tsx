import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Surface } from "./surface";
import { SurfaceProps } from "./surface.props";

type Story = StoryObj<SurfaceProps>;

export default {
  title: "Surface",
  argTypes: {
    border: {
      options: ["none", "start", "end", "top", "bottom", "x", "y", "all"],
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },
    },
  },
} as Meta<ComponentProps<typeof Surface>>;

export const Variants: Story = {
  args: {
    class: "flex items-center justify-center p-4",
    children: "Surface",
  },
  // @ts-ignore
  render: props => (
    <div class="flex items-center space-x-4">
      <Surface {...props} variant="default" />
      <Surface {...props} variant="raised" />
      <Surface {...props} variant="subtle" />
      <Surface {...props} variant="sunken" />
    </div>
  ),
};

export const Combinations: Story = {
  args: {
    class: "flex flex-col items-center justify-center gap-3 p-3 text-xs",
  },
  // @ts-ignore
  render: props => (
    <div class="flex gap-4 flex-wrap">
      <Surface {...props} variant="default">
        Default
        <Surface {...props} variant="raised">
          Raised
          <Surface {...props} variant="default">
            Default
            <Surface {...props} variant="raised">
              Raised
            </Surface>
          </Surface>
        </Surface>
      </Surface>
      <Surface {...props} variant="default">
        Default
        <Surface {...props} variant="subtle">
          Subtle
          <Surface {...props} variant="default">
            Default
          </Surface>
        </Surface>
      </Surface>
      <Surface {...props} variant="default">
        Default
        <Surface {...props} variant="subtle">
          Subtle
          <Surface {...props} variant="raised">
            Raised
          </Surface>
        </Surface>
      </Surface>
      <Surface {...props} variant="default">
        Default
        <Surface {...props} variant="sunken">
          Sunken
          <Surface {...props} variant="default">
            Default
          </Surface>
        </Surface>
      </Surface>
      <Surface {...props} variant="default">
        Default
        <Surface {...props} variant="sunken">
          Sunken
          <Surface {...props} variant="raised">
            Raised
          </Surface>
        </Surface>
      </Surface>
    </div>
  ),
};

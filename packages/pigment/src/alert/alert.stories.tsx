import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";
import { For } from "solid-js";

import { CloseButton } from "../close-button";
import { Alert } from "./alert";
import { AlertProps } from "./alert.props";

type Story = StoryObj<AlertProps>;

export default {
  title: "Alert",
  argTypes: {
    withoutDefaultStatusIcon: {
      control: { type: "boolean" },
    },
  },
  render: props => (
    <div class="flex items-center space-x-4">
      <For each={["solid", "soft"] as const}>
        {variant => (
          <div class="flex flex-col gap-4">
            <Alert
              variant={variant}
              status="neutral"
              endDecorator={<CloseButton size="sm" variant={variant} color="neutral" />}
              {...props}
            >
              <span>We are currently migrating our infrastructure.</span>
            </Alert>
            <Alert
              variant={variant}
              status="success"
              endDecorator={<CloseButton size="sm" variant={variant} color="success" />}
              {...props}
            >
              <span>The data has been successfully saved on our server.</span>
            </Alert>
            <Alert
              variant={variant}
              status="info"
              endDecorator={<CloseButton size="sm" variant={variant} color="info" />}
              {...props}
            >
              <span class="font-semibold">Software update</span>
              <span class="text-sm">A new software update is available.</span>
            </Alert>
            <Alert
              variant={variant}
              status="warning"
              endDecorator={<CloseButton size="sm" variant={variant} color="warning" />}
              {...props}
            >
              <span>Your registration token is about to expire.</span>
            </Alert>
            <Alert
              variant={variant}
              status="danger"
              endDecorator={<CloseButton size="sm" variant={variant} color="danger" />}
              {...props}
            >
              <span>There was an error processing your request.</span>
            </Alert>
            <Alert
              variant={variant}
              status="discovery"
              endDecorator={<CloseButton size="sm" variant={variant} color="discovery" />}
              {...props}
            >
              <span>Learn what's new in v1.0.</span>
            </Alert>
          </div>
        )}
      </For>
    </div>
  ),
} as Meta<ComponentProps<typeof Alert>>;

export const Default: Story = {
  args: {
    withDefaultStatusIcon: false,
  },
};

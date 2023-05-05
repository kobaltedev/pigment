import { Alert, As, Button, IconButton, LinkButton, LinkIconButton } from "@kobalte/pigment";
import { Link } from "@solidjs/router";
import { For } from "solid-js";

import {
  BeatLoaderIcon,
  TablerArrowNarrowRightIcon,
  TablerClipboardIcon,
  TablerGitHubIcon,
  TablerPlusIcon,
  TablerTrashIcon,
} from "../components";

export function WithSolidPrimaryVariant() {
  return (
    <Button variant="solid" color="primary">
      Create survey
    </Button>
  );
}

export function WithSoftPrimaryVariant() {
  return (
    <Button variant="soft" color="primary">
      Export results
    </Button>
  );
}

export function WithDefaultVariant() {
  return (
    <div class="flex items-center gap-3">
      <Button>Copy</Button>
      <Button variant="default">Export</Button>
    </div>
  );
}

export function WithDashedVariant() {
  return (
    <Button variant="dashed" startDecorator={<TablerPlusIcon />}>
      Add new row
    </Button>
  );
}

export function WithTextVariant() {
  return <Button variant="text">Cancel</Button>;
}

export function WithLinkLikeVariant() {
  return <Button variant="link">Show more</Button>;
}

export function WithDangerVariant() {
  return (
    <div class="flex items-center gap-3">
      <Button variant="solid" color="danger">
        Delete survey
      </Button>
      <Button variant="soft" color="danger">
        Remove answer
      </Button>
    </div>
  );
}

export function WithOtherStatusButtons() {
  return (
    <div class="flex flex-col gap-3">
      <For each={["solid", "soft"] as const}>
        {variant => (
          <div class="flex items-center gap-3">
            <For
              each={
                ["primary", "neutral", "success", "info", "warning", "danger", "discovery"] as const
              }
            >
              {color => (
                <Button variant={variant} color={color} class="capitalize">
                  {color}
                </Button>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}

export function WithStatusAlertExample() {
  return (
    <Alert
      variant="soft"
      status="discovery"
      withDefaultStartDecorator
      endDecorator={
        <div class="flex items-center gap-2.5">
          <Button variant="soft" color="discovery" size="sm">
            Skip
          </Button>
          <Button variant="solid" color="discovery" size="sm">
            Take a tour
          </Button>
        </div>
      }
      class="w-full"
    >
      <span class="font-semibold">Learn about the latest features.</span>
    </Alert>
  );
}

export function WithInvertedAlertExample() {
  return (
    <Alert
      variant="solid"
      status="info"
      withDefaultStartDecorator
      endDecorator={
        <Button variant="inverted" color="info" size="sm">
          Install now
        </Button>
      }
      class="w-full"
    >
      <span class="font-semibold">New software update available.</span>
    </Alert>
  );
}

export function WithSizes() {
  return (
    <div class="flex items-center gap-3">
      <For each={["xs", "sm", "md", "lg", "xl"] as const}>
        {size => <Button size={size}>Button</Button>}
      </For>
    </div>
  );
}

export function WithDecorators() {
  return (
    <div class="flex items-center gap-3">
      <Button startDecorator={<TablerClipboardIcon />}>Copy to clipboard</Button>
      <Button endDecorator={<TablerArrowNarrowRightIcon />}>Next</Button>
    </div>
  );
}

export function WithFullWidth() {
  return <Button fullWidth>Create Survey</Button>;
}

export function WithDisabled() {
  return (
    <div class="flex items-center gap-3">
      <Button variant="solid" disabled>
        Solid
      </Button>
      <Button variant="soft" disabled>
        Soft
      </Button>
      <Button disabled>Default</Button>
      <Button variant="dashed" disabled>
        Dashed
      </Button>
      <Button variant="text" disabled>
        Text
      </Button>
      <Button variant="link" disabled>
        Link
      </Button>
    </div>
  );
}

export function WithLoading() {
  return (
    <div class="flex items-center gap-3">
      <Button variant="solid" loading>
        Solid
      </Button>
      <Button variant="soft" loading>
        Soft
      </Button>
      <Button loading>Default</Button>
      <Button variant="dashed" loading>
        Dashed
      </Button>
      <Button variant="text" loading>
        Text
      </Button>
      <Button variant="link" loading>
        Link
      </Button>
    </div>
  );
}

export function WithCustomLoadingIndicator() {
  return (
    <Button loading loadingIndicator={<BeatLoaderIcon />}>
      Export results
    </Button>
  );
}

export function WithLoadingPlacement() {
  return (
    <div class="flex items-center gap-3">
      <Button loading loadingPlacement="start">
        Export results
      </Button>
      <Button variant="solid" loading loadingPlacement="end">
        Create survey
      </Button>
    </div>
  );
}

export function WithIconButton() {
  return (
    <IconButton aria-label="Delete">
      <TablerTrashIcon />
    </IconButton>
  );
}

export function WithLinkButton() {
  return (
    <div class="flex items-center gap-3">
      <LinkButton href="https://github.com/kobaltedev/pigment" target="_blank">
        Open on GitHub
      </LinkButton>
      <LinkIconButton
        href="https://github.com/kobaltedev/pigment"
        target="_blank"
        aria-label="Open on GitHub"
      >
        <TablerGitHubIcon />
      </LinkIconButton>
    </div>
  );
}

export function WithLinkButtonAsChild() {
  return (
    <LinkButton asChild>
      <As component={Link} href="/" target="_blank">
        Back to home
      </As>
    </LinkButton>
  );
}

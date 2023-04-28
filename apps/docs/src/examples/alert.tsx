import { Alert, AlertProps, Checkbox, Select } from "@kobalte/pigment";
import { createMemo, createSignal } from "solid-js";

import { BuoyIcon, Playground, RocketIcon } from "../components";

export function WithPlayground() {
  const [variant, setVariant] = createSignal<AlertProps["variant"]>("soft");
  const [color, setColor] = createSignal<AlertProps["color"]>("info");
  const [dismissible, setDismissible] = createSignal(false);
  const [multiline, setMultiline] = createSignal(false);

  const snippet = createMemo(() => {
    return `<Alert
  variant="${variant()}"
  color="${color()}"
  dismissible={${dismissible()}}
  multiline={${multiline()}}
  title="Software update."
>
  A new software update is available.
</Alert>`;
  });

  return (
    <Playground
      preview={
        <Alert
          variant={variant()}
          color={color()}
          dismissible={dismissible()}
          multiline={multiline()}
          title="Software update."
        >
          A new software update is available.
        </Alert>
      }
      snippet={snippet()}
    >
      <Select
        label="Variant"
        value={variant()!}
        onChange={setVariant}
        options={["solid", "soft"]}
      />
      <Select
        label="Color"
        value={color()!}
        onChange={setColor}
        options={["neutral", "primary", "success", "info", "warning", "danger"]}
      />
      <Checkbox label="Dismissible" checked={dismissible()} onChange={setDismissible} />
      <Checkbox label="Multiline" checked={multiline()} onChange={setMultiline} />
    </Playground>
  );
}

export function WithMultiline() {
  return (
    <Alert variant="soft" color="info" title="Software update" multiline>
      A new software update is available.
    </Alert>
  );
}

export function WithVariants() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert variant="solid" color="info" title="Software update.">
        A new software update is available.
      </Alert>
      <Alert variant="soft" color="info" title="Software update.">
        A new software update is available.
      </Alert>
    </div>
  );
}

export function WithStatuses() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert
        variant="soft"
        color="neutral"
        title="Service temporarily unavailable."
        icon={<BuoyIcon />}
      >
        We are currently migrating our infrastructure.
      </Alert>
      <Alert variant="soft" color="primary" title="Announcement." icon={<RocketIcon />}>
        Pigment is going live soon, get ready!.
      </Alert>
      <Alert variant="soft" color="success" title="Well done.">
        The data has been successfully saved on our server.
      </Alert>
      <Alert variant="soft" color="info" title="Software update.">
        A new software update is available.
      </Alert>
      <Alert variant="soft" color="warning" title="Attention needed.">
        Your registration token is about to expire.
      </Alert>
      <Alert variant="soft" color="danger" title="Something went wrong.">
        There was an error processing your request.
      </Alert>
    </div>
  );
}

export function WithCustomIcon() {
  return (
    <Alert variant="soft" color="info" title="Software update" icon={<RocketIcon />}>
      A new software update is available.
    </Alert>
  );
}

export function WithDismissButton() {
  return (
    <Alert
      variant="soft"
      color="info"
      title="Software update."
      dismissible
      dismissButtonLabel="Close"
      onDismiss={() => alert("dismissed")}
    >
      A new software update is available.
    </Alert>
  );
}

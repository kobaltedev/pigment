import { Alert, AlertProps, Checkbox, Select } from "@kobalte/pigment";
import { createMemo, createSignal } from "solid-js";

import { Playground, RocketIcon } from "../components";

export function WithPlayground() {
  const [variant, setVariant] = createSignal<AlertProps["variant"]>("soft");
  const [status, setStatus] = createSignal<AlertProps["status"]>("info");
  const [isDismissible, setIsDismissible] = createSignal(false);
  const [isMultiline, setIsMultiline] = createSignal(false);

  const snippet = createMemo(() => {
    return `<Alert
  variant="${variant()}"
  status="${status()}"
  isDismissible={${isDismissible()}}
  isMultiline={${isMultiline()}}
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
          status={status()}
          isDismissible={isDismissible()}
          isMultiline={isMultiline()}
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
        onValueChange={setVariant}
        options={["solid", "soft"]}
      />
      <Select
        label="Status"
        value={status()!}
        onValueChange={setStatus}
        options={["neutral", "success", "info", "warning", "danger"]}
      />
      <Checkbox
        label="Dismissible"
        isChecked={isDismissible()}
        onCheckedChange={setIsDismissible}
      />
      <Checkbox label="Multiline" isChecked={isMultiline()} onCheckedChange={setIsMultiline} />
    </Playground>
  );
}

export function WithMultiline() {
  return (
    <Alert variant="soft" status="info" title="Software update" isMultiline>
      A new software update is available.
    </Alert>
  );
}

export function WithVariants() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert variant="solid" status="info" title="Software update.">
        A new software update is available.
      </Alert>
      <Alert variant="soft" status="info" title="Software update.">
        A new software update is available.
      </Alert>
    </div>
  );
}

export function WithStatuses() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert variant="soft" status="neutral" title="Service temporarily unavailable.">
        We are currently migrating our infrastructure.
      </Alert>
      <Alert variant="soft" status="success" title="Well done.">
        The data has been successfully saved on our server.
      </Alert>
      <Alert variant="soft" status="info" title="Software update.">
        A new software update is available.
      </Alert>
      <Alert variant="soft" status="warning" title="Attention needed.">
        Your registration token is about to expire.
      </Alert>
      <Alert variant="soft" status="danger" title="Something went wrong.">
        There was an error processing your request.
      </Alert>
    </div>
  );
}

export function WithCustomIcon() {
  return (
    <Alert variant="soft" status="info" title="Software update" icon={<RocketIcon />}>
      A new software update is available.
    </Alert>
  );
}

export function WithDismissButton() {
  return (
    <Alert
      variant="soft"
      status="info"
      title="Software update."
      isDismissible
      dismissButtonLabel="Close"
      onDismiss={() => alert("dismissed")}
    >
      A new software update is available.
    </Alert>
  );
}

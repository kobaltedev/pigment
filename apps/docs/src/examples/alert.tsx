import { Alert, AlertProps, TextField } from "@kobalte/pigment";
import { createSignal } from "solid-js";

import { Playground } from "../components";

export function WithPlayground() {
  const [variant, setVariant] = createSignal<AlertProps["variant"]>("soft");
  const [status, setStatus] = createSignal<AlertProps["status"]>("info");
  const [title, setTitle] = createSignal("Software update.");
  const [children, setChildren] = createSignal("A new software update is available.");

  return (
    <Playground
      preview={
        <Alert variant={variant()} status={status()} title={title}>
          {children()}
        </Alert>
      }
    >
      <TextField label="Title" value={title()} onValueChange={setTitle} />
      <TextField label="Children" value={children()} onValueChange={setChildren} />
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
      <Alert variant="soft" status="help" title="What's new in 1.0.">
        Learn about the exciting new features in the next major release.
      </Alert>
    </div>
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

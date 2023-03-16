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

function RocketIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
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

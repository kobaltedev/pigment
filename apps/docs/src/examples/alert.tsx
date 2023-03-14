import { Alert, Button } from "@kobalte/pigment";

export function BasicUsage() {
  return (
    <Alert variant="soft" status="info" title="Software update">
      A new software update is available. See what's new in version 1.0.
    </Alert>
  );
}

export function WithSingleLine() {
  return (
    <Alert variant="soft" status="info" title="Software update" isSingleLine>
      A new software update is available. See what's new in version 1.0.
    </Alert>
  );
}

export function WithVariants() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert variant="solid" status="info" title="Software update">
        A new software update is available. See what's new in version 1.0.
      </Alert>
      <Alert variant="soft" status="info" title="Software update">
        A new software update is available. See what's new in version 1.0.
      </Alert>
    </div>
  );
}

export function WithStatuses() {
  return (
    <div class="flex flex-col space-y-4">
      <Alert variant="soft" status="success" title="Well done">
        The data has been successfully saved on our server.
      </Alert>
      <Alert variant="soft" status="info" title="Software update">
        A new software update is available. See what's new in version 1.0.
      </Alert>
      <Alert variant="soft" status="warning" title="Attention needed">
        Your registration token is about to expire, sign up now.
      </Alert>
      <Alert variant="soft" status="danger" title="Something went wrong">
        There was an error processing your request.
      </Alert>
      <Alert variant="soft" status="help" title="What's new in 1.0">
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
      title="Software update"
      isDismissible
      onDismiss={() => alert("dismissed")}
    >
      A new software update is available. See what's new in version 1.0.
    </Alert>
  );
}

export function WithComposition() {
  return (
    <Alert variant="soft" status="info" title="Software update" isSingleLine>
      <div class="flex items-center justify-between space-x-2">
        <span>A new software update is available.</span>
        <Button variant="solid" color="primary" size="xs">
          Update now
        </Button>
      </div>
    </Alert>
  );
}

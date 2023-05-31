import { Alert, CloseButton } from "@kobalte/pigment";

import { TablerRocketIcon } from "../components";

export function WithBasicUsage() {
  return <Alert>A new software update is available.</Alert>;
}

export function WithVariant() {
  return (
    <div class="flex flex-col gap-4">
      <Alert variant="solid" status="info">
        A new software update is available.
      </Alert>
      <Alert variant="soft" status="info">
        A new software update is available.
      </Alert>
    </div>
  );
}

export function WithStatus() {
  return (
    <div class="flex flex-col gap-4">
      <Alert variant="soft" status="success">
        The data has been successfully saved on our server.
      </Alert>
      <Alert variant="soft" status="info">
        A new software update is available.
      </Alert>
      <Alert variant="soft" status="warning">
        Your registration token is about to expire.
      </Alert>
      <Alert variant="soft" status="danger">
        There was an error processing your request.
      </Alert>
      <Alert variant="soft" status="discovery">
        Learn about the latest features.
      </Alert>
    </div>
  );
}

export function WithDecorator() {
  return (
    <Alert
      variant="soft"
      color="info"
      leadingSection={<TablerRocketIcon class="h-6 w-6" />}
      trailingSection={<CloseButton variant="soft" color="info" size="sm" />}
    >
      A new software update is available.
    </Alert>
  );
}

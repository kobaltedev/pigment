import { Checkbox } from "@kobalte/pigment";

export function WithBasicUsage() {
  return <Checkbox label="Subscribe" />;
}

export function WithSize() {
  return (
    <div class="flex items-center gap-3">
      <Checkbox size="md" label="Medium" />
      <Checkbox size="lg" label="Large" />
    </div>
  );
}

export function WithDescription() {
  return <Checkbox label="Subscribe" description="You will receive our weekly newsletter" />;
}

export function WithInvalid() {
  return (
    <Checkbox
      label="Subscribe"
      errorMessage="You must be a subscriber to receive our newsletter"
      invalid
    />
  );
}

export function WithDisabled() {
  return <Checkbox label="Subscribe" disabled />;
}

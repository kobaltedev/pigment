import { Checkbox } from "@kobalte/pigment";
import { createSignal } from "solid-js";

export function WithBasicUsage() {
  return <Checkbox label="Subscribe" />;
}

export function WithDefaultChecked() {
  return <Checkbox label="Subscribe" defaultChecked />;
}

export function WithControlledChecked() {
  const [checked, setChecked] = createSignal(false);

  return (
    <Checkbox
      label={checked() ? "Unsubscribe" : "Subscribe"}
      checked={checked()}
      onChange={setChecked}
    />
  );
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

export function WithCustomIcon() {
  return (
    <div class="flex items-center gap-3">
      <Checkbox label="Checked" checkedIcon="i-tabler-x" checked />
      <Checkbox label="Indeterminate" indeterminateIcon="i-tabler-question-mark" indeterminate />
    </div>
  );
}

export function WithIndeterminate() {
  const [checkedItems, setCheckedItems] = createSignal([true, false]);

  const allChecked = () => checkedItems().every(Boolean);
  const isIndeterminate = () => checkedItems().some(Boolean) && !allChecked();

  return (
    <div class="flex flex-col">
      <Checkbox
        label="Permissions"
        checked={allChecked()}
        indeterminate={isIndeterminate()}
        onChange={checked => setCheckedItems([checked, checked])}
      />
      <div class="flex flex-col items-start ps-6 mt-2 gap-2">
        <Checkbox
          label="Read"
          checked={checkedItems()[0]}
          onChange={checked => setCheckedItems([checked, checkedItems()[1]])}
        />
        <Checkbox
          label="Write"
          checked={checkedItems()[1]}
          onChange={checked => setCheckedItems([checkedItems()[0], checked])}
        />
      </div>
    </div>
  );
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

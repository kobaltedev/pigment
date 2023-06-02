import { Button, IconButton, InputAddon, TextField } from "@kobalte/pigment";
import { createSignal } from "solid-js";
import {
  TablerDiscordIcon,
  TablerMailIcon,
  TablerQuestionCircleIcon,
  TablerSearchIcon,
  TablerTwitterIcon,
} from "../components";

export function WithBasicUsage() {
  return <TextField placeholder="E-mail" />;
}

export function WithDefaultValue() {
  return <TextField defaultValue="example@acme.com" placeholder="E-mail" />;
}

export function WithControlledValue() {
  const [value, setValue] = createSignal("example@acme.com");

  return (
    <div>
      <TextField value={value()} onChange={setValue} placeholder="E-mail" />
      <p class="text-sm text-content-subtle mt-2">
        Value: <span class="font-medium italic">{value()}</span>
      </p>
    </div>
  );
}

export function WithMultiline() {
  return <TextField multiline placeholder="Tell us more about you..." />;
}

export function WithSize() {
  return (
    <div class="flex flex-col gap-3">
      <TextField size="sm" placeholder="Small" />
      <TextField size="md" placeholder="Medium" />
      <TextField size="lg" placeholder="Large" />
    </div>
  );
}

export function WithLabel() {
  return <TextField label="E-mail" placeholder="example@acme.com" />;
}

export function WithDescription() {
  return (
    <TextField
      label="E-mail"
      description="We'll never share your email"
      placeholder="example@acme.com"
    />
  );
}

export function WithIcon() {
  return (
    <div class="flex flex-col gap-3">
      <TextField label="E-mail" placeholder="example@acme.com" leadingIcon={<TablerMailIcon />} />
      <TextField
        label="Account number"
        placeholder="000-00-0000"
        trailingIcon={<TablerQuestionCircleIcon />}
      />
    </div>
  );
}

export function WithSection() {
  return (
    <div class="flex flex-col gap-3">
      <TextField
        placeholder="Search..."
        leadingSectionWidth={32}
        leadingSection={
          <IconButton variant="text" size="sm" class="my-1 ms-1" aria-label="Perform search">
            <TablerSearchIcon />
          </IconButton>
        }
      />
      <TextField
        placeholder="E-mail"
        trailingSectionWidth={94}
        trailingSection={
          <Button variant="solid" size="sm" class="my-1 me-1">
            Subscribe
          </Button>
        }
      />
    </div>
  );
}

export function WithTextAddon() {
  return (
    <div class="flex flex-col gap-3">
      <TextField placeholder="Twitter" leadingAddon="@" />
      <TextField placeholder="Height" trailingAddon="inch" />
      <TextField placeholder="Amount" leadingAddon="$" trailingAddon="USD" />
    </div>
  );
}

export function WithCustomInputAddon() {
  return (
    <div class="flex flex-col gap-3">
      <TextField
        placeholder="Twitter"
        leadingAddon={
          <InputAddon class="px-2">
            <TablerTwitterIcon class="text-xl" />
          </InputAddon>
        }
      />
      <TextField
        placeholder="Discord"
        trailingAddon={
          <InputAddon placement="trailing" class="px-2">
            <TablerDiscordIcon class="text-xl" />
          </InputAddon>
        }
      />
    </div>
  );
}

export function WithCustomAddon() {
  return (
    <TextField
      placeholder="E-mail"
      trailingAddon={
        <Button variant="solid" class="rounded-s-none -ms-px">
          Subscribe
        </Button>
      }
    />
  );
}

export function WithInvalidState() {
  return (
    <TextField
      placeholder="E-mail"
      defaultValue="example@acme"
      errorMessage="Please enter a valid email address"
      invalid
    />
  );
}

export function WithDisabledState() {
  return (
    <TextField
      placeholder="example@acme.com"
      label="E-mail"
      description="We'll never share your email"
      disabled
    />
  );
}

import { Badge, Button } from "@kobalte/pigment";
import { For } from "solid-js";

export function WithBasicUsage() {
  return <Badge>v1.0.0</Badge>;
}

export function WithVariant() {
  return (
    <div class="flex items-center gap-3">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="dot">Dot</Badge>
    </div>
  );
}

export function WithInvertedVariant() {
  return (
    <Button
      variant="solid"
      color="primary"
      leadingIcon="i-tabler-tag"
      trailingIcon={
        <Badge variant="inverted" color="primary" class="flex">
          12
        </Badge>
      }
    >
      Labels
    </Button>
  );
}

export function WithColor() {
  return (
    <div class="flex flex-col gap-3">
      <For each={["solid", "soft", "inverted", "dot"] as const}>
        {variant => (
          <div class="flex items-center gap-3">
            <For each={["primary", "success", "info", "warning", "danger", "discovery"] as const}>
              {color => (
                <Badge variant={variant} color={color} class="capitalize">
                  {color}
                </Badge>
              )}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}

export function WithSize() {
  return (
    <div class="flex items-center gap-3">
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}

export function WithShape() {
  return (
    <div class="flex items-center gap-3">
      <Badge shape="rounded">+100</Badge>
      <Badge shape="pill">12</Badge>
      <Badge shape="circle">1</Badge>
    </div>
  );
}

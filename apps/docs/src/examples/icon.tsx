import { createIcon } from "@kobalte/pigment";

export const WithCreateIcon = createIcon({
  viewBox: "0 0 24 24",
  path: () => (
    <path
      d="m20 7l-8-4l-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    />
  ),
});

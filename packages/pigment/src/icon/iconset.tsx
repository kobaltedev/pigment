import { createIcon } from "./create-icon";

export const TablerLoaderIcon = createIcon({
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 3a9 9 0 1 0 9 9"
    />
  ),
});

export const TablerCrossIcon = createIcon({
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M18 6L6 18M6 6l12 12"
    />
  ),
});

export const TablerInfoCircleIcon = createIcon({
  path: () => (
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-3h.01" />
      <path d="M11 12h1v4h1" />
    </g>
  ),
});

export const TablerCircleCheckIcon = createIcon({
  path: () => (
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0" />
      <path d="m9 12l2 2l4-4" />
    </g>
  ),
});

export const TablerAlertTriangleIcon = createIcon({
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m10.24 3.957l-8.422 14.06A1.989 1.989 0 0 0 3.518 21h16.845a1.989 1.989 0 0 0 1.7-2.983L13.64 3.957a1.989 1.989 0 0 0-3.4 0zM12 9v4m0 4h.01"
    />
  ),
});

export const TablerAlertCircleIcon = createIcon({
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-4v4m0 4h.01"
    />
  ),
});

export const TablerHelpCircleIcon = createIcon({
  path: () => (
    <g
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9 4v.01" />
      <path d="M12 13a2 2 0 0 0 .914-3.782a1.98 1.98 0 0 0-2.414.483" />
    </g>
  ),
});

export const TablerAlertTriangleFilled = createIcon({
  path: () => (
    <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M0 0h24v24H0z" />
      <path
        fill="currentColor"
        d="M11.94 2a2.99 2.99 0 0 1 2.45 1.279l.108.164l8.431 14.074a2.989 2.989 0 0 1-2.366 4.474l-.2.009H3.507a2.99 2.99 0 0 1-2.648-4.308l.101-.189L9.385 3.438A2.989 2.989 0 0 1 11.94 2zm.07 14l-.127.007a1 1 0 0 0 0 1.986L12 18l.127-.007a1 1 0 0 0 0-1.986L12.01 16zM12 8a1 1 0 0 0-.993.883L11 9v4l.007.117a1 1 0 0 0 1.986 0L13 13V9l-.007-.117A1 1 0 0 0 12 8z"
      />
    </g>
  ),
});

export const TablerCheckIcon = createIcon({
  path: () => (
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m5 12l5 5L20 7"
    />
  ),
});

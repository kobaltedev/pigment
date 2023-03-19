export const defaultTheme = {
  ":root": {
    /* -------------------------------------------------------------------------------------------------
     * Color - Reference tokens
     * -----------------------------------------------------------------------------------------------*/

    /* Tailwind - slate */
    "--pg-color-neutral-0": "#ffffff",
    "--pg-color-neutral-50": "#f8fafc",
    "--pg-color-neutral-100": "#f1f5f9",
    "--pg-color-neutral-200": "#e2e8f0",
    "--pg-color-neutral-300": "#cbd5e1",
    "--pg-color-neutral-400": "#94a3b8",
    "--pg-color-neutral-500": "#64748b",
    "--pg-color-neutral-600": "#475569",
    "--pg-color-neutral-700": "#334155",
    "--pg-color-neutral-800": "#1e293b",
    "--pg-color-neutral-900": "#0f172a",
    "--pg-color-neutral-1000": "#070c18",

    /* Based on Tailwind - slate-900 */
    "--pg-color-neutral-100A": "#0f172a08",
    "--pg-color-neutral-200A": "#0f172a0f",
    "--pg-color-neutral-300A": "#0f172a24",
    "--pg-color-neutral-400A": "#0f172a4f",
    "--pg-color-neutral-500A": "#0f172a7d",

    /* Tailwind - blue */
    "--pg-color-primary-50": "#eff6ff",
    "--pg-color-primary-100": "#dbeafe",
    "--pg-color-primary-200": "#bfdbfe",
    "--pg-color-primary-300": "#93c5fd",
    "--pg-color-primary-400": "#60a5fa",
    "--pg-color-primary-500": "#3b82f6",
    "--pg-color-primary-600": "#2563eb",
    "--pg-color-primary-700": "#1d4ed8",
    "--pg-color-primary-800": "#1e40af",
    "--pg-color-primary-900": "#1e3a8a",

    /* Tailwind - blue */
    "--pg-color-info-50": "#eff6ff",
    "--pg-color-info-100": "#dbeafe",
    "--pg-color-info-200": "#bfdbfe",
    "--pg-color-info-300": "#93c5fd",
    "--pg-color-info-400": "#60a5fa",
    "--pg-color-info-500": "#3b82f6",
    "--pg-color-info-600": "#2563eb",
    "--pg-color-info-700": "#1d4ed8",
    "--pg-color-info-800": "#1e40af",
    "--pg-color-info-900": "#1e3a8a",

    /* Tailwind - green */
    "--pg-color-success-50": "#f0fdf4",
    "--pg-color-success-100": "#dcfce7",
    "--pg-color-success-200": "#bbf7d0",
    "--pg-color-success-300": "#86efac",
    "--pg-color-success-400": "#4ade80",
    "--pg-color-success-500": "#22c55e",
    "--pg-color-success-600": "#16a34a",
    "--pg-color-success-700": "#15803d",
    "--pg-color-success-800": "#166534",
    "--pg-color-success-900": "#14532d",

    /* Tailwind - amber */
    "--pg-color-warning-50": "#fffbeb",
    "--pg-color-warning-100": "#fef3c7",
    "--pg-color-warning-200": "#fde68a",
    "--pg-color-warning-300": "#fcd34d",
    "--pg-color-warning-400": "#fbbf24",
    "--pg-color-warning-500": "#f59e0b",
    "--pg-color-warning-600": "#d97706",
    "--pg-color-warning-700": "#b45309",
    "--pg-color-warning-800": "#92400e",
    "--pg-color-warning-900": "#78350f",

    /* Tailwind - red */
    "--pg-color-danger-50": "#fef2f2",
    "--pg-color-danger-100": "#fee2e2",
    "--pg-color-danger-200": "#fecaca",
    "--pg-color-danger-300": "#fca5a5",
    "--pg-color-danger-400": "#f87171",
    "--pg-color-danger-500": "#ef4444",
    "--pg-color-danger-600": "#dc2626",
    "--pg-color-danger-700": "#b91c1c",
    "--pg-color-danger-800": "#991b1b",
    "--pg-color-danger-900": "#7f1d1d",

    /* Tailwind - violet */
    "--pg-color-help-50": "#f5f3ff",
    "--pg-color-help-100": "#ede9fe",
    "--pg-color-help-200": "#ddd6fe",
    "--pg-color-help-300": "#c4b5fd",
    "--pg-color-help-400": "#a78bfa",
    "--pg-color-help-500": "#8b5cf6",
    "--pg-color-help-600": "#7c3aed",
    "--pg-color-help-700": "#6d28d9",
    "--pg-color-help-800": "#5b21b6",
    "--pg-color-help-900": "#4c1d95",

    /* -------------------------------------------------------------------------------------------------
     * Color - Texts
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-text": "var(--pg-color-neutral-800)",
    "--pg-color-text-subtle": "var(--pg-color-neutral-700)",
    "--pg-color-text-subtlest": "var(--pg-color-neutral-600)",
    "--pg-color-text-dimmed": "var(--pg-color-neutral-500)",
    "--pg-color-text-inverse": "var(--pg-color-neutral-0)",
    "--pg-color-text-warning-inverse": "#1c1917",
    "--pg-color-text-success": "var(--pg-color-success-600)",
    "--pg-color-text-danger": "var(--pg-color-danger-600)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Icons
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-icon": "var(--pg-color-neutral-800)",
    "--pg-color-icon-subtle": "var(--pg-color-neutral-700)",
    "--pg-color-icon-subtlest": "var(--pg-color-neutral-600)",
    "--pg-color-icon-dimmed": "var(--pg-color-neutral-500)",
    "--pg-color-icon-inverse": "var(--pg-color-neutral-0)",
    "--pg-color-icon-warning-inverse": "#292524",
    "--pg-color-icon-success": "var(--pg-color-success-600)",
    "--pg-color-icon-danger": "var(--pg-color-danger-600)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Backgrounds
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-body-bg": "var(--pg-color-neutral-0)",

    /* Subtle */
    "--pg-color-subtle-bg": "transparent",
    "--pg-color-subtle-bg-hover": "var(--pg-color-neutral-200A)",
    "--pg-color-subtle-bg-active": "var(--pg-color-neutral-300A)",

    /* Inverse */
    "--pg-color-inverse-bg": "#00000029",
    "--pg-color-inverse-bg-hover": "#0000003d",
    "--pg-color-inverse-bg-active": "#00000052",

    /* Surface */
    "--pg-color-surface-bg": "var(--pg-color-neutral-0)",
    "--pg-color-surface-bg-hover": "var(--pg-color-neutral-100)",
    "--pg-color-surface-bg-active": "var(--pg-color-neutral-200)",
    "--pg-color-surface-raised-bg": "var(--pg-color-neutral-0)",
    "--pg-color-surface-raised-bg-hover": "var(--pg-color-neutral-100)",
    "--pg-color-surface-raised-bg-active": "var(--pg-color-neutral-200)",
    "--pg-color-surface-overlay-bg": "var(--pg-color-neutral-0)",
    "--pg-color-surface-overlay-bg-hover": "var(--pg-color-neutral-100)",
    "--pg-color-surface-overlay-bg-active": "var(--pg-color-neutral-200)",
    "--pg-color-surface-sunken-bg": "var(--pg-color-neutral-50)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Border
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-border": "var(--pg-color-neutral-300A)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Misc.
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-focus-ring": "var(--pg-color-primary-500)",
    "--pg-color-backdrop": "var(--pg-color-neutral-500A)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global - Disabled
     * -----------------------------------------------------------------------------------------------*/

    "--pg-color-disabled-text": "var(--pg-color-neutral-400A)",
    "--pg-color-disabled-icon": "var(--pg-color-neutral-400A)",
    "--pg-color-disabled-bg": "var(--pg-color-neutral-100A)",
    "--pg-color-disabled-border": "var(--pg-color-neutral-200A)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global - Selected
     * -----------------------------------------------------------------------------------------------*/

    /* Solid */
    "--pg-color-solid-selected-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-selected-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-selected-bg": "var(--pg-color-primary-600)",
    "--pg-color-solid-selected-border": "var(--pg-color-primary-600)",
    "--pg-color-solid-selected-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-selected-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-selected-bg-hover": "var(--pg-color-primary-700)",
    "--pg-color-solid-selected-border-hover": "var(--pg-color-primary-700)",
    "--pg-color-solid-selected-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-selected-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-selected-bg-active": "var(--pg-color-primary-800)",
    "--pg-color-solid-selected-border-active": "var(--pg-color-primary-800)",

    /* Soft */
    "--pg-color-soft-selected-text": "var(--pg-color-primary-700)",
    "--pg-color-soft-selected-icon": "var(--pg-color-primary-700)",
    "--pg-color-soft-selected-bg": "var(--pg-color-primary-50)",
    "--pg-color-soft-selected-border": "var(--pg-color-primary-50)",
    "--pg-color-soft-selected-text-hover": "var(--pg-color-primary-800)",
    "--pg-color-soft-selected-icon-hover": "var(--pg-color-primary-800)",
    "--pg-color-soft-selected-bg-hover": "var(--pg-color-primary-100)",
    "--pg-color-soft-selected-border-hover": "var(--pg-color-primary-100)",
    "--pg-color-soft-selected-text-active": "var(--pg-color-primary-800)",
    "--pg-color-soft-selected-icon-active": "var(--pg-color-primary-800)",
    "--pg-color-soft-selected-bg-active": "var(--pg-color-primary-200)",
    "--pg-color-soft-selected-border-active": "var(--pg-color-primary-200)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global - Input
     * -----------------------------------------------------------------------------------------------*/

    /* Soft */
    "--pg-color-soft-input-text": "var(--pg-color-neutral-800)",
    "--pg-color-soft-input-icon": "var(--pg-color-neutral-600)",
    "--pg-color-soft-input-bg": "var(--pg-color-neutral-100)",
    "--pg-color-soft-input-border": "var(--pg-color-neutral-200)",
    "--pg-color-soft-input-text-hover": "var(--pg-color-neutral-800)",
    "--pg-color-soft-input-icon-hover": "var(--pg-color-neutral-600)",
    "--pg-color-soft-input-bg-hover": "var(--pg-color-neutral-100)",
    "--pg-color-soft-input-border-hover": "var(--pg-color-neutral-200)",
    "--pg-color-soft-input-text-active": "var(--pg-color-neutral-800)",
    "--pg-color-soft-input-icon-active": "var(--pg-color-neutral-600)",
    "--pg-color-soft-input-bg-active": "var(--pg-color-neutral-100)",
    "--pg-color-soft-input-border-active": "var(--pg-color-neutral-200)",

    /* Outlined */
    "--pg-color-outlined-input-text": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-input-icon": "var(--pg-color-neutral-600)",
    "--pg-color-outlined-input-bg": "transparent",
    "--pg-color-outlined-input-border": "var(--pg-color-neutral-300A)",
    "--pg-color-outlined-input-text-hover": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-input-icon-hover": "var(--pg-color-neutral-600)",
    "--pg-color-outlined-input-bg-hover": "transparent",
    "--pg-color-outlined-input-border-hover": "var(--pg-color-neutral-300A)",
    "--pg-color-outlined-input-text-active": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-input-icon-active": "var(--pg-color-neutral-600)",
    "--pg-color-outlined-input-bg-active": "transparent",
    "--pg-color-outlined-input-border-active": "var(--pg-color-neutral-300A)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global variants - Solid
     * -----------------------------------------------------------------------------------------------*/

    /* Primary */
    "--pg-color-solid-primary-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-primary-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-primary-bg": "var(--pg-color-primary-600)",
    "--pg-color-solid-primary-border": "var(--pg-color-primary-600)",
    "--pg-color-solid-primary-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-primary-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-primary-bg-hover": "var(--pg-color-primary-700)",
    "--pg-color-solid-primary-border-hover": "var(--pg-color-primary-700)",
    "--pg-color-solid-primary-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-primary-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-primary-bg-active": "var(--pg-color-primary-800)",
    "--pg-color-solid-primary-border-active": "var(--pg-color-primary-800)",

    /* Neutral */
    "--pg-color-solid-neutral-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-neutral-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-neutral-bg": "var(--pg-color-neutral-700)",
    "--pg-color-solid-neutral-border": "var(--pg-color-neutral-700)",
    "--pg-color-solid-neutral-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-neutral-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-neutral-bg-hover": "var(--pg-color-neutral-800)",
    "--pg-color-solid-neutral-border-hover": "var(--pg-color-neutral-800)",
    "--pg-color-solid-neutral-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-neutral-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-neutral-bg-active": "var(--pg-color-neutral-900)",
    "--pg-color-solid-neutral-border-active": "var(--pg-color-neutral-900)",

    /* Success */
    "--pg-color-solid-success-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-success-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-success-bg": "var(--pg-color-success-600)",
    "--pg-color-solid-success-border": "var(--pg-color-success-600)",
    "--pg-color-solid-success-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-success-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-success-bg-hover": "var(--pg-color-success-700)",
    "--pg-color-solid-success-border-hover": "var(--pg-color-success-700)",
    "--pg-color-solid-success-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-success-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-success-bg-active": "var(--pg-color-success-800)",
    "--pg-color-solid-success-border-active": "var(--pg-color-success-800)",

    /* Info */
    "--pg-color-solid-info-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-info-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-info-bg": "var(--pg-color-info-600)",
    "--pg-color-solid-info-border": "var(--pg-color-info-600)",
    "--pg-color-solid-info-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-info-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-info-bg-hover": "var(--pg-color-info-700)",
    "--pg-color-solid-info-border-hover": "var(--pg-color-info-700)",
    "--pg-color-solid-info-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-info-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-info-bg-active": "var(--pg-color-info-800)",
    "--pg-color-solid-info-border-active": "var(--pg-color-info-800)",

    /* Warning */
    "--pg-color-solid-warning-text": "var(--pg-color-text-warning-inverse)",
    "--pg-color-solid-warning-icon": "var(--pg-color-icon-warning-inverse)",
    "--pg-color-solid-warning-bg": "var(--pg-color-warning-300)",
    "--pg-color-solid-warning-border": "var(--pg-color-warning-300)",
    "--pg-color-solid-warning-text-hover": "var(--pg-color-text-warning-inverse)",
    "--pg-color-solid-warning-icon-hover": "var(--pg-color-icon-warning-inverse)",
    "--pg-color-solid-warning-bg-hover": "var(--pg-color-warning-400)",
    "--pg-color-solid-warning-border-hover": "var(--pg-color-warning-400)",
    "--pg-color-solid-warning-text-active": "var(--pg-color-text-warning-inverse)",
    "--pg-color-solid-warning-icon-active": "var(--pg-color-icon-warning-inverse)",
    "--pg-color-solid-warning-bg-active": "var(--pg-color-warning-500)",
    "--pg-color-solid-warning-border-active": "var(--pg-color-warning-500)",

    /* Danger */
    "--pg-color-solid-danger-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-danger-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-danger-bg": "var(--pg-color-danger-600)",
    "--pg-color-solid-danger-border": "var(--pg-color-danger-600)",
    "--pg-color-solid-danger-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-danger-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-danger-bg-hover": "var(--pg-color-danger-700)",
    "--pg-color-solid-danger-border-hover": "var(--pg-color-danger-700)",
    "--pg-color-solid-danger-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-danger-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-danger-bg-active": "var(--pg-color-danger-800)",
    "--pg-color-solid-danger-border-active": "var(--pg-color-danger-800)",

    /* Help */
    "--pg-color-solid-help-text": "var(--pg-color-text-inverse)",
    "--pg-color-solid-help-icon": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-help-bg": "var(--pg-color-help-600)",
    "--pg-color-solid-help-border": "var(--pg-color-help-600)",
    "--pg-color-solid-help-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-solid-help-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-help-bg-hover": "var(--pg-color-help-700)",
    "--pg-color-solid-help-border-hover": "var(--pg-color-help-700)",
    "--pg-color-solid-help-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-solid-help-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-solid-help-bg-active": "var(--pg-color-help-800)",
    "--pg-color-solid-help-border-active": "var(--pg-color-help-800)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global variants - Soft
     * -----------------------------------------------------------------------------------------------*/

    /* Primary */
    "--pg-color-soft-primary-text": "var(--pg-color-primary-700)",
    "--pg-color-soft-primary-icon": "var(--pg-color-primary-700)",
    "--pg-color-soft-primary-bg": "var(--pg-color-primary-50)",
    "--pg-color-soft-primary-border": "var(--pg-color-primary-50)",
    "--pg-color-soft-primary-text-hover": "var(--pg-color-primary-800)",
    "--pg-color-soft-primary-icon-hover": "var(--pg-color-primary-800)",
    "--pg-color-soft-primary-bg-hover": "var(--pg-color-primary-100)",
    "--pg-color-soft-primary-border-hover": "var(--pg-color-primary-100)",
    "--pg-color-soft-primary-text-active": "var(--pg-color-primary-800)",
    "--pg-color-soft-primary-icon-active": "var(--pg-color-primary-800)",
    "--pg-color-soft-primary-bg-active": "var(--pg-color-primary-200)",
    "--pg-color-soft-primary-border-active": "var(--pg-color-primary-200)",

    /* Neutral */
    "--pg-color-soft-neutral-text": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-icon": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-bg": "var(--pg-color-neutral-200A)",
    "--pg-color-soft-neutral-border": "transparent",
    "--pg-color-soft-neutral-text-hover": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-icon-hover": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-bg-hover": "var(--pg-color-neutral-300A)",
    "--pg-color-soft-neutral-border-hover": "transparent",
    "--pg-color-soft-neutral-text-active": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-icon-active": "var(--pg-color-neutral-800)",
    "--pg-color-soft-neutral-bg-active": "var(--pg-color-neutral-400A)",
    "--pg-color-soft-neutral-border-active": "transparent",

    /* Success */
    "--pg-color-soft-success-text": "var(--pg-color-success-700)",
    "--pg-color-soft-success-icon": "var(--pg-color-success-700)",
    "--pg-color-soft-success-bg": "var(--pg-color-success-50)",
    "--pg-color-soft-success-border": "var(--pg-color-success-50)",
    "--pg-color-soft-success-text-hover": "var(--pg-color-success-800)",
    "--pg-color-soft-success-icon-hover": "var(--pg-color-success-800)",
    "--pg-color-soft-success-bg-hover": "var(--pg-color-success-100)",
    "--pg-color-soft-success-border-hover": "var(--pg-color-success-100)",
    "--pg-color-soft-success-text-active": "var(--pg-color-success-800)",
    "--pg-color-soft-success-icon-active": "var(--pg-color-success-800)",
    "--pg-color-soft-success-bg-active": "var(--pg-color-success-200)",
    "--pg-color-soft-success-border-active": "var(--pg-color-success-200)",

    /* Info */
    "--pg-color-soft-info-text": "var(--pg-color-info-700)",
    "--pg-color-soft-info-icon": "var(--pg-color-info-700)",
    "--pg-color-soft-info-bg": "var(--pg-color-info-50)",
    "--pg-color-soft-info-border": "var(--pg-color-info-50)",
    "--pg-color-soft-info-text-hover": "var(--pg-color-info-800)",
    "--pg-color-soft-info-icon-hover": "var(--pg-color-info-800)",
    "--pg-color-soft-info-bg-hover": "var(--pg-color-info-100)",
    "--pg-color-soft-info-border-hover": "var(--pg-color-info-100)",
    "--pg-color-soft-info-text-active": "var(--pg-color-info-800)",
    "--pg-color-soft-info-icon-active": "var(--pg-color-info-800)",
    "--pg-color-soft-info-bg-active": "var(--pg-color-info-200)",
    "--pg-color-soft-info-border-active": "var(--pg-color-info-200)",

    /* Warning */
    "--pg-color-soft-warning-text": "var(--pg-color-warning-700)",
    "--pg-color-soft-warning-icon": "var(--pg-color-warning-700)",
    "--pg-color-soft-warning-bg": "var(--pg-color-warning-100)",
    "--pg-color-soft-warning-border": "var(--pg-color-warning-100)",
    "--pg-color-soft-warning-text-hover": "var(--pg-color-warning-800)",
    "--pg-color-soft-warning-icon-hover": "var(--pg-color-warning-800)",
    "--pg-color-soft-warning-bg-hover": "var(--pg-color-warning-200)",
    "--pg-color-soft-warning-border-hover": "var(--pg-color-warning-200)",
    "--pg-color-soft-warning-text-active": "var(--pg-color-warning-800)",
    "--pg-color-soft-warning-icon-active": "var(--pg-color-warning-800)",
    "--pg-color-soft-warning-bg-active": "var(--pg-color-warning-300)",
    "--pg-color-soft-warning-border-active": "var(--pg-color-warning-300)",

    /* Danger */
    "--pg-color-soft-danger-text": "var(--pg-color-danger-700)",
    "--pg-color-soft-danger-icon": "var(--pg-color-danger-700)",
    "--pg-color-soft-danger-bg": "var(--pg-color-danger-50)",
    "--pg-color-soft-danger-border": "var(--pg-color-danger-50)",
    "--pg-color-soft-danger-text-hover": "var(--pg-color-danger-800)",
    "--pg-color-soft-danger-icon-hover": "var(--pg-color-danger-800)",
    "--pg-color-soft-danger-bg-hover": "var(--pg-color-danger-100)",
    "--pg-color-soft-danger-border-hover": "var(--pg-color-danger-100)",
    "--pg-color-soft-danger-text-active": "var(--pg-color-danger-800)",
    "--pg-color-soft-danger-icon-active": "var(--pg-color-danger-800)",
    "--pg-color-soft-danger-bg-active": "var(--pg-color-danger-200)",
    "--pg-color-soft-danger-border-active": "var(--pg-color-danger-200)",

    /* Help */
    "--pg-color-soft-help-text": "var(--pg-color-help-700)",
    "--pg-color-soft-help-icon": "var(--pg-color-help-700)",
    "--pg-color-soft-help-bg": "var(--pg-color-help-50)",
    "--pg-color-soft-help-border": "var(--pg-color-help-50)",
    "--pg-color-soft-help-text-hover": "var(--pg-color-help-800)",
    "--pg-color-soft-help-icon-hover": "var(--pg-color-help-800)",
    "--pg-color-soft-help-bg-hover": "var(--pg-color-help-100)",
    "--pg-color-soft-help-border-hover": "var(--pg-color-help-100)",
    "--pg-color-soft-help-text-active": "var(--pg-color-help-800)",
    "--pg-color-soft-help-icon-active": "var(--pg-color-help-800)",
    "--pg-color-soft-help-bg-active": "var(--pg-color-help-200)",
    "--pg-color-soft-help-border-active": "var(--pg-color-help-200)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global variants - Outlined
     * -----------------------------------------------------------------------------------------------*/

    /* Primary */
    "--pg-color-outlined-primary-text": "var(--pg-color-primary-600)",
    "--pg-color-outlined-primary-icon": "var(--pg-color-primary-600)",
    "--pg-color-outlined-primary-bg": "transparent",
    "--pg-color-outlined-primary-border": "var(--pg-color-primary-600)",
    "--pg-color-outlined-primary-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-primary-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-primary-bg-hover": "var(--pg-color-primary-600)",
    "--pg-color-outlined-primary-border-hover": "var(--pg-color-primary-600)",
    "--pg-color-outlined-primary-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-primary-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-primary-bg-active": "var(--pg-color-primary-700)",
    "--pg-color-outlined-primary-border-active": "var(--pg-color-primary-700)",

    /* Neutral */
    "--pg-color-outlined-neutral-text": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-icon": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-bg": "transparent",
    "--pg-color-outlined-neutral-border": "var(--pg-color-neutral-300A)",
    "--pg-color-outlined-neutral-text-hover": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-icon-hover": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-bg-hover": "var(--pg-color-neutral-200A)",
    "--pg-color-outlined-neutral-border-hover": "var(--pg-color-neutral-300A)",
    "--pg-color-outlined-neutral-text-active": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-icon-active": "var(--pg-color-neutral-800)",
    "--pg-color-outlined-neutral-bg-active": "var(--pg-color-neutral-300A)",
    "--pg-color-outlined-neutral-border-active": "var(--pg-color-neutral-300A)",

    /* Success */
    "--pg-color-outlined-success-text": "var(--pg-color-success-700)",
    "--pg-color-outlined-success-icon": "var(--pg-color-success-700)",
    "--pg-color-outlined-success-bg": "transparent",
    "--pg-color-outlined-success-border": "var(--pg-color-success-700)",
    "--pg-color-outlined-success-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-success-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-success-bg-hover": "var(--pg-color-success-600)",
    "--pg-color-outlined-success-border-hover": "var(--pg-color-success-600)",
    "--pg-color-outlined-success-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-success-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-success-bg-active": "var(--pg-color-success-700)",
    "--pg-color-outlined-success-border-active": "var(--pg-color-success-700)",

    /* Info */
    "--pg-color-outlined-info-text": "var(--pg-color-info-600)",
    "--pg-color-outlined-info-icon": "var(--pg-color-info-600)",
    "--pg-color-outlined-info-bg": "transparent",
    "--pg-color-outlined-info-border": "var(--pg-color-info-600)",
    "--pg-color-outlined-info-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-info-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-info-bg-hover": "var(--pg-color-info-600)",
    "--pg-color-outlined-info-border-hover": "var(--pg-color-info-600)",
    "--pg-color-outlined-info-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-info-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-info-bg-active": "var(--pg-color-info-700)",
    "--pg-color-outlined-info-border-active": "var(--pg-color-info-700)",

    /* Warning */
    "--pg-color-outlined-warning-text": "var(--pg-color-warning-700)",
    "--pg-color-outlined-warning-icon": "var(--pg-color-warning-700)",
    "--pg-color-outlined-warning-bg": "transparent",
    "--pg-color-outlined-warning-border": "var(--pg-color-warning-600)",
    "--pg-color-outlined-warning-text-hover": "var(--pg-color-text-warning-inverse)",
    "--pg-color-outlined-warning-icon-hover": "var(--pg-color-icon-warning-inverse)",
    "--pg-color-outlined-warning-bg-hover": "var(--pg-color-warning-300)",
    "--pg-color-outlined-warning-border-hover": "var(--pg-color-warning-300)",
    "--pg-color-outlined-warning-text-active": "var(--pg-color-text-warning-inverse)",
    "--pg-color-outlined-warning-icon-active": "var(--pg-color-icon-warning-inverse)",
    "--pg-color-outlined-warning-bg-active": "var(--pg-color-warning-400)",
    "--pg-color-outlined-warning-border-active": "var(--pg-color-warning-400)",

    /* Danger */
    "--pg-color-outlined-danger-text": "var(--pg-color-danger-600)",
    "--pg-color-outlined-danger-icon": "var(--pg-color-danger-600)",
    "--pg-color-outlined-danger-bg": "transparent",
    "--pg-color-outlined-danger-border": "var(--pg-color-danger-600)",
    "--pg-color-outlined-danger-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-danger-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-danger-bg-hover": "var(--pg-color-danger-600)",
    "--pg-color-outlined-danger-border-hover": "var(--pg-color-danger-600)",
    "--pg-color-outlined-danger-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-danger-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-danger-bg-active": "var(--pg-color-danger-700)",
    "--pg-color-outlined-danger-border-active": "var(--pg-color-danger-600)",

    /* Help */
    "--pg-color-outlined-help-text": "var(--pg-color-help-600)",
    "--pg-color-outlined-help-icon": "var(--pg-color-help-600)",
    "--pg-color-outlined-help-bg": "transparent",
    "--pg-color-outlined-help-border": "var(--pg-color-help-600)",
    "--pg-color-outlined-help-text-hover": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-help-icon-hover": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-help-bg-hover": "var(--pg-color-help-600)",
    "--pg-color-outlined-help-border-hover": "var(--pg-color-help-600)",
    "--pg-color-outlined-help-text-active": "var(--pg-color-text-inverse)",
    "--pg-color-outlined-help-icon-active": "var(--pg-color-icon-inverse)",
    "--pg-color-outlined-help-bg-active": "var(--pg-color-help-700)",
    "--pg-color-outlined-help-border-active": "var(--pg-color-help-700)",

    /* -------------------------------------------------------------------------------------------------
     * Color - Global variants - Ghost
     * -----------------------------------------------------------------------------------------------*/

    /* Primary */
    "--pg-color-ghost-primary-text": "var(--pg-color-primary-600)",
    "--pg-color-ghost-primary-icon": "var(--pg-color-primary-600)",
    "--pg-color-ghost-primary-bg": "transparent",
    "--pg-color-ghost-primary-border": "transparent",
    "--pg-color-ghost-primary-text-hover": "var(--pg-color-primary-700)",
    "--pg-color-ghost-primary-icon-hover": "var(--pg-color-primary-700)",
    "--pg-color-ghost-primary-bg-hover": "var(--pg-color-primary-50)",
    "--pg-color-ghost-primary-border-hover": "var(--pg-color-primary-50)",
    "--pg-color-ghost-primary-text-active": "var(--pg-color-primary-800)",
    "--pg-color-ghost-primary-icon-active": "var(--pg-color-primary-800)",
    "--pg-color-ghost-primary-bg-active": "var(--pg-color-primary-100)",
    "--pg-color-ghost-primary-border-active": "var(--pg-color-primary-100)",

    /* Neutral */
    "--pg-color-ghost-neutral-text": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-icon": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-bg": "transparent",
    "--pg-color-ghost-neutral-border": "transparent",
    "--pg-color-ghost-neutral-text-hover": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-icon-hover": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-bg-hover": "var(--pg-color-neutral-200A)",
    "--pg-color-ghost-neutral-border-hover": "transparent",
    "--pg-color-ghost-neutral-text-active": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-icon-active": "var(--pg-color-neutral-800)",
    "--pg-color-ghost-neutral-bg-active": "var(--pg-color-neutral-300A)",
    "--pg-color-ghost-neutral-border-active": "transparent",

    /* Success */
    "--pg-color-ghost-success-text": "var(--pg-color-success-700)",
    "--pg-color-ghost-success-icon": "var(--pg-color-success-700)",
    "--pg-color-ghost-success-bg": "transparent",
    "--pg-color-ghost-success-border": "transparent",
    "--pg-color-ghost-success-text-hover": "var(--pg-color-success-700)",
    "--pg-color-ghost-success-icon-hover": "var(--pg-color-success-700)",
    "--pg-color-ghost-success-bg-hover": "var(--pg-color-success-50)",
    "--pg-color-ghost-success-border-hover": "var(--pg-color-success-50)",
    "--pg-color-ghost-success-text-active": "var(--pg-color-success-800)",
    "--pg-color-ghost-success-icon-active": "var(--pg-color-success-800)",
    "--pg-color-ghost-success-bg-active": "var(--pg-color-success-100)",
    "--pg-color-ghost-success-border-active": "var(--pg-color-success-100)",

    /* Info */
    "--pg-color-ghost-info-text": "var(--pg-color-info-600)",
    "--pg-color-ghost-info-icon": "var(--pg-color-info-600)",
    "--pg-color-ghost-info-bg": "transparent",
    "--pg-color-ghost-info-border": "transparent",
    "--pg-color-ghost-info-text-hover": "var(--pg-color-info-700)",
    "--pg-color-ghost-info-icon-hover": "var(--pg-color-info-700)",
    "--pg-color-ghost-info-bg-hover": "var(--pg-color-info-50)",
    "--pg-color-ghost-info-border-hover": "var(--pg-color-info-50)",
    "--pg-color-ghost-info-text-active": "var(--pg-color-info-800)",
    "--pg-color-ghost-info-icon-active": "var(--pg-color-info-800)",
    "--pg-color-ghost-info-bg-active": "var(--pg-color-info-100)",
    "--pg-color-ghost-info-border-active": "var(--pg-color-info-100)",

    /* Warning */
    "--pg-color-ghost-warning-text": "var(--pg-color-warning-700)",
    "--pg-color-ghost-warning-icon": "var(--pg-color-warning-700)",
    "--pg-color-ghost-warning-bg": "transparent",
    "--pg-color-ghost-warning-border": "transparent",
    "--pg-color-ghost-warning-text-hover": "var(--pg-color-warning-700)",
    "--pg-color-ghost-warning-icon-hover": "var(--pg-color-warning-700)",
    "--pg-color-ghost-warning-bg-hover": "var(--pg-color-warning-100)",
    "--pg-color-ghost-warning-border-hover": "var(--pg-color-warning-100)",
    "--pg-color-ghost-warning-text-active": "var(--pg-color-warning-800)",
    "--pg-color-ghost-warning-icon-active": "var(--pg-color-warning-800)",
    "--pg-color-ghost-warning-bg-active": "var(--pg-color-warning-200)",
    "--pg-color-ghost-warning-border-active": "var(--pg-color-warning-200)",

    /* Danger */
    "--pg-color-ghost-danger-text": "var(--pg-color-danger-600)",
    "--pg-color-ghost-danger-icon": "var(--pg-color-danger-600)",
    "--pg-color-ghost-danger-bg": "transparent",
    "--pg-color-ghost-danger-border": "transparent",
    "--pg-color-ghost-danger-text-hover": "var(--pg-color-danger-700)",
    "--pg-color-ghost-danger-icon-hover": "var(--pg-color-danger-700)",
    "--pg-color-ghost-danger-bg-hover": "var(--pg-color-danger-50)",
    "--pg-color-ghost-danger-border-hover": "var(--pg-color-danger-50)",
    "--pg-color-ghost-danger-text-active": "var(--pg-color-danger-800)",
    "--pg-color-ghost-danger-icon-active": "var(--pg-color-danger-800)",
    "--pg-color-ghost-danger-bg-active": "var(--pg-color-danger-100)",
    "--pg-color-ghost-danger-border-active": "var(--pg-color-danger-100)",

    /* Help */
    "--pg-color-ghost-help-text": "var(--pg-color-help-600)",
    "--pg-color-ghost-help-icon": "var(--pg-color-help-600)",
    "--pg-color-ghost-help-bg": "transparent",
    "--pg-color-ghost-help-border": "transparent",
    "--pg-color-ghost-help-text-hover": "var(--pg-color-help-700)",
    "--pg-color-ghost-help-icon-hover": "var(--pg-color-help-700)",
    "--pg-color-ghost-help-bg-hover": "var(--pg-color-help-50)",
    "--pg-color-ghost-help-border-hover": "var(--pg-color-help-50)",
    "--pg-color-ghost-help-text-active": "var(--pg-color-help-800)",
    "--pg-color-ghost-help-icon-active": "var(--pg-color-help-800)",
    "--pg-color-ghost-help-bg-active": "var(--pg-color-help-100)",
    "--pg-color-ghost-help-border-active": "var(--pg-color-help-100)",

    /* -------------------------------------------------------------------------------------------------
     * Shadows
     * -----------------------------------------------------------------------------------------------*/

    "--pg-shadow-surface-raised":
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
    "--pg-shadow-surface-overlay":
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
  },
  '.dark, [data-pg-color-scheme="dark"]': {
    /* -------------------------------------------------------------------------------------------------
     * Color - Reference tokens
     * -----------------------------------------------------------------------------------------------*/

    /* Based on Tailwind - slate */
    "--pg-color-neutral-100A": "#cbd5e10a",
    "--pg-color-neutral-200A": "#cbd5e114",
    "--pg-color-neutral-300A": "#cbd5e129",
    "--pg-color-neutral-400A": "#cbd5e147",
    "--pg-color-neutral-500A": "#cbd5e180",

    /* -------------------------------------------------------------------------------------------------
     * Color - Backgrounds
     * -----------------------------------------------------------------------------------------------*/

    /* Inverse */
    "--pg-color-inverse-bg": "#ffffff29",
    "--pg-color-inverse-bg-hover": "#ffffff3d",
    "--pg-color-inverse-bg-active": "#ffffff52",
  },
};

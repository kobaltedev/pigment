import { Alert, Button, cn, ThemeProvider } from "@kobalte/pigment";

export function SlotClassesExample() {
  return (
    <Alert
      variant="soft"
      status="info"
      isMultiline
      isDismissible
      title="Software update."
      slotClasses={{
        root: "rounded-md bg-primary-50 border-primary-300 w-full max-w-sm dark:bg-primary-900 dark:border-primary-700",
        contentDisabled: "gap-y-1 text-neutral-800 dark:text-neutral-100",
        icon: "text-primary-500 text-2xl mt-0.5 dark:text-primary-400",
        title: "text-base font-normal italic",
        description: "text-sm",
        dismissButton: "text-neutral-500 text-xl dark:text-neutral-400",
      }}
    >
      A new software update is available.
    </Alert>
  );
}

export function GithubThemeExample() {
  return (
    <div data-pg-theme="github">
      <ThemeProvider
        components={{
          Button: {
            defaultProps: {
              variant: "solid",
              color: "primary",
              size: "md",
            },
            slotClasses: props => ({
              root: cn(
                "font-sans",
                "rounded-md",
                "shadow-[0_1px_0_0_rgba(27,31,35,0.04),inset_0_1px_0_rgba(255,255,255,0.03)]",
                "duration-75",
                "ease-[cubic-bezier(0.33,1,0.68,1)]",
                "transition-[color,background-color,box-shadow,border-color]",
                "font-medium",
                "text-sm",
                props.size === "md" && "h-8 px-4",
                props.variant === "solid" && props.color === "primary" && "border border-solid"
              ),
            }),
          },
        }}
      >
        <Button>New pull request</Button>
      </ThemeProvider>
    </div>
  );
}

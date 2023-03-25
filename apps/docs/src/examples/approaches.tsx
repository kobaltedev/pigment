import { Alert, Button, cn, createTheme, ThemeProvider } from "@kobalte/pigment";

export function SlotClassesExample() {
  return (
    <Alert
      variant="soft"
      status="info"
      isMultiline
      isDismissible
      title="Software update."
      slotClasses={{
        root: "rounded-md border-blue-300 w-96",
        content: "gap-y-1 text-slate-800",
        icon: "text-2xl mt-0.5",
        title: "text-base font-normal italic",
        description: "text-sm",
        dismissButton: "text-xl",
      }}
    >
      A new software update is available.
    </Alert>
  );
}

const githubTheme = createTheme({
  components: {
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
  },
});

export function GithubThemeExample() {
  return (
    <div data-pg-theme="github">
      <ThemeProvider theme={githubTheme}>
        <Button>New pull request</Button>
      </ThemeProvider>
    </div>
  );
}

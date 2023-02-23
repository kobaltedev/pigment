export default {};

/*

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        variant: "soft",
      },
      additionalClasses: {
        root: ({ props, state, cn }) => cn([
          "base",
          props.size === "md" && "size-md-variant",
          props.variant === "solid" && props.colorScheme === "primary" && "solid-primary-compound-variant",
          props.variant === "solid" && props.colorScheme === "secondary" && "hover:bg-secondary-500/60"
        ]),
      }
    }
  }
});

<ThemeProvider theme={theme}>
  <App/>
</ThemeProvider>

*/

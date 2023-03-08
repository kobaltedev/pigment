/* @refresh reload */
import "./index.css";

import { extendTheme, ThemeProvider } from "@kobalte/pigment";
import { render } from "solid-js/web";

import App from "./App";

const theme = extendTheme({
  components: {},
});

render(
  () => (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  ),
  document.getElementById("root") as HTMLElement
);

/* @refresh reload */
import "./index.css";

import { createTheme, ThemeProvider } from "@kobalte/pigment";
import { render } from "solid-js/web";

import App from "./App";

const theme = createTheme({
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

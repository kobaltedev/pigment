/* @refresh reload */
import "./index.css";

import { ThemeProvider } from "@kobalte/pigment";
import { render } from "solid-js/web";

import App from "./App";

render(
  () => (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  ),
  document.getElementById("root") as HTMLElement
);

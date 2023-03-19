import { ParentProps } from "solid-js";

import { Button, I18nProvider } from "../src";
import { InfoCircleIcon } from "../src/icons";

function RTLVisualizer(props: ParentProps) {
  return (
    <>
      <I18nProvider>{props.children}</I18nProvider>
      <I18nProvider locale="ar">{props.children}</I18nProvider>
    </>
  );
}

export default function App() {
  return (
    <RTLVisualizer>
      <Button startIcon={<InfoCircleIcon />}>Button</Button>
    </RTLVisualizer>
  );
}

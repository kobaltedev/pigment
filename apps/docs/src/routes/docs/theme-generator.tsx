import { Outlet } from "@solidjs/router";

import { Footer, Header, Prose } from "../../components";
import { Button, cn, Select, TextField, useColorScheme } from "@kobalte/pigment";
import { createSignal, onMount, ParentProps, Show } from "solid-js";

function ThemeGeneratorFormSection(props: ParentProps<{ title: string }>) {
  return (
    <div>
      <div class="font-display font-medium text-lg text-slate-900 dark:text-white/90">
        {props.title}
      </div>
      <div class="mt-3">
        <div class="space-y-4">{props.children}</div>
      </div>
    </div>
  );
}

export default function ThemeGeneratorLayout() {
  let previewRef: HTMLDivElement | undefined;

  const { colorScheme, toggleColorScheme } = useColorScheme();

  const [isMounted, setIsMounted] = createSignal(false);

  onMount(() => {
    setIsMounted(true);
  });

  const getCssVarValue = (cssVar: string) => {
    if (!previewRef) {
      return "";
    }

    return getComputedStyle(previewRef).getPropertyValue(cssVar).trim();
  };

  return (
    <>
      <Header
        drawerContent={<div class="me-6 flex lg:hidden">{/* TODO: theming form responsive */}</div>}
      />
      <div class="relative flex justify-center">
        <div class="hidden lg:relative lg:block lg:flex-none lg:border-solid lg:border-r lg:border-r-slate-200">
          <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 ps-2 pe-2">
            <div class="w-72 px-3">
              <Show when={isMounted()}>
                <div class="space-y-9">
                  <Button onClick={toggleColorScheme}>toggle color scheme</Button>
                  <ThemeGeneratorFormSection title="General">
                    <TextField
                      label="name"
                      placeholder="my-theme"
                      description="The name of the theme."
                      isRequired
                    />
                    <TextField
                      label="css var prefix"
                      placeholder="pg-"
                      description="The prefix of the generated CSS variables."
                    />
                    <Select
                      label="extend"
                      options={["base", "slate"]}
                      defaultValue="base"
                      description="The predefined theme to extend."
                    />
                  </ThemeGeneratorFormSection>
                  <ThemeGeneratorFormSection title="Typography">
                    <TextField
                      label="fontFamily.sans"
                      defaultValue={getCssVarValue("--pg-typography-font-family-sans")}
                    />
                    <TextField
                      label="fontFamily.serif"
                      defaultValue={getCssVarValue("--pg-typography-font-family-serif")}
                    />
                    <TextField
                      label="fontFamily.mono"
                      defaultValue={getCssVarValue("--pg-typography-font-family-mono")}
                    />
                  </ThemeGeneratorFormSection>
                  <ThemeGeneratorFormSection title="Colors"></ThemeGeneratorFormSection>
                  <ThemeGeneratorFormSection title="Shadows">
                    <TextField
                      label="surface.raised"
                      defaultValue={getCssVarValue("--pg-shadows-surface-raised")}
                    />
                    <TextField
                      label="surface.overlay"
                      defaultValue={getCssVarValue("--pg-shadows-surface-overlay")}
                    />
                  </ThemeGeneratorFormSection>
                </div>
              </Show>
            </div>
          </div>
        </div>
        <div
          ref={previewRef}
          data-pg-theme="base"
          data-pg-color-scheme={colorScheme()}
          class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl"
        >
          <article>
            <Prose>
              <Outlet />
            </Prose>
          </article>
          <Footer />
        </div>
      </div>
    </>
  );
}

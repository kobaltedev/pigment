import { useColorScheme } from "@kobalte/pigment";
import { Outlet } from "@solidjs/router";

import { Footer, Header, Prose } from "../../components";

export default function ThemeGeneratorLayout() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <>
      <Header
        drawerContent={<div class="me-6 flex lg:hidden">{/* TODO: theming form responsive */}</div>}
      />
      <div class="relative flex justify-center">
        <div class="hidden lg:relative lg:block lg:flex-none lg:border-solid lg:border-r lg:border-r-slate-200">
          <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 ps-2 pe-2">
            <div class="w-72 px-3"></div>
          </div>
        </div>
        <div
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

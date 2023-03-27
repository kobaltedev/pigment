import { Outlet } from "@solidjs/router";

import { Footer, Header, Prose } from "../../components";

export default function ThemeGeneratorLayout() {
  return (
    <>
      <Header
        drawerContent={<div class="mr-6 flex lg:hidden">{/* TODO: theming form responsive */}</div>}
      />
      <div class="relative flex justify-center">
        <div class="hidden lg:relative lg:block lg:flex-none">
          <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 pl-2 pr-2">
            {/* TODO: theming form */}
          </div>
        </div>
        <div class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl">
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

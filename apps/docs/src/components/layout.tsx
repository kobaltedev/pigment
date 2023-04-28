import { Link, useLocation } from "@solidjs/router";
import { ParentProps, Show } from "solid-js";

import { NavSection } from "../model/navigation";
import { Footer } from "./footer";
import { Header } from "./header";
import { Navigation } from "./navigation";
import { Prose } from "./prose";
import { TableOfContents } from "./table-of-contents";

interface LayoutProps extends ParentProps {
  navSections: NavSection[];
}

export function Layout(props: LayoutProps) {
  const location = useLocation();

  const allLinks = props.navSections.flatMap(section => section.links);
  const linkIndex = () => allLinks.findIndex(link => link.href === location.pathname);
  const previousPage = () => allLinks[linkIndex() - 1];
  const nextPage = () => allLinks[linkIndex() + 1];

  return (
    <>
      <Header
        drawerContent={
          <div class="me-6 flex lg:hidden">
            {/* <MobileNavigation sections={props.navSections} /> */}
          </div>
        }
      />
      <div class="relative flex justify-center">
        <div class="hidden lg:relative lg:block lg:flex-none">
          <div class="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto py-6 ps-2 pe-2">
            <Navigation sections={props.navSections} />
          </div>
        </div>
        <div class="min-w-0 mx-auto max-w-2xl flex-auto px-4 xl:px-16 py-16 lg:max-w-4xl">
          <article>
            <Prose>{props.children}</Prose>
          </article>
          <div class="mt-12 flex border-t border-neutral-200 pt-6 dark:border-neutral-800">
            <Show when={previousPage()}>
              <dl>
                <dt class="font-display text-sm font-medium text-neutral-900 dark:text-white">
                  Previous
                </dt>
                <dd class="mt-1">
                  <Link
                    href={previousPage().href}
                    class="text-base font-semibold text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    <span aria-hidden="true" class="me-1">
                      &larr;
                    </span>
                    <span>{previousPage().title}</span>
                  </Link>
                </dd>
              </dl>
            </Show>
            <Show when={nextPage()}>
              <dl class="ms-auto text-right">
                <dt class="font-display text-sm font-medium text-neutral-900 dark:text-white">
                  Next
                </dt>
                <dd class="mt-1">
                  <Link
                    href={nextPage().href}
                    class="text-base font-semibold text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    <span>{nextPage().title}</span>
                    <span aria-hidden="true" class="ms-1">
                      &rarr;
                    </span>
                  </Link>
                </dd>
              </dl>
            </Show>
          </div>
          <Footer />
        </div>
        <TableOfContents />
      </div>
    </>
  );
}

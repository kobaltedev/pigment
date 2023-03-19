import { As, LinkButton, LinkIconButton } from "@kobalte/pigment";
import { Link, useMatch } from "@solidjs/router";

import { NavSection } from "../model/navigation";
import { LATEST_CORE_CHANGELOG_URL, LATEST_CORE_VERSION_NAME } from "../VERSIONS";
import { GitHubIcon } from "./icons";
import { ThemeSelector } from "./theme-selector";

interface HeaderProps {
  navSections: NavSection[];
}

export function Header(props: HeaderProps) {
  const isChangelogPath = useMatch(() => "/docs/changelog/*");

  return (
    <header class="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white border-b border-b-slate-200 dark:border-b-slate-800 px-4 transition duration-500 lg:px-4 dark:bg-slate-900">
      <div class="mr-6 flex lg:hidden">
        {/*  <MobileNavigation sections={props.navSections} /> */}
      </div>
      <div class="relative flex flex-grow basis-0 items-center space-x-2">
        <Link
          class="text-slate-800 dark:text-white/90 font-medium font-display text-xl leading-none"
          href="/"
        >
          Pigment
          <span class="text-3xl leading-[0] text-blue-600">.</span>
        </Link>
        <span class="rounded bg-slate-100 px-1.5 py-1 text-sm leading-none dark:bg-slate-800 dark:text-slate-300">
          {LATEST_CORE_VERSION_NAME}
        </span>
      </div>

      <div class="relative flex items-center basis-0 justify-end h-14 md:flex-grow">
        <div id="docsearch" class="px-1 flex items-center justify-center" />
        <div class="hidden lg:flex lg:gap-x-1 lg:mr-1">
          <LinkButton variant="ghost" color="neutral" asChild>
            <As
              component={Link}
              href="/docs/core/overview/introduction"
              class={!isChangelogPath() ? "text-slate-900" : "text-slate-700"}
            >
              Documentation
            </As>
          </LinkButton>
          <LinkButton variant="ghost" color="neutral" asChild>
            <As
              component={Link}
              href={LATEST_CORE_CHANGELOG_URL}
              class={isChangelogPath() ? "text-slate-900" : "text-slate-700"}
            >
              Changelog
            </As>
          </LinkButton>
        </div>
        <LinkIconButton variant="ghost" color="neutral" class="mr-1" asChild>
          <As
            component={Link}
            href="https://github.com/kobaltedev/pigment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon class="text-slate-600 h-5 w-5" />
          </As>
        </LinkIconButton>
        <ThemeSelector />
      </div>
    </header>
  );
}

import { As, LinkButton, LinkIconButton } from "@kobalte/pigment";
import { Link, useMatch } from "@solidjs/router";
import { JSX, ParentProps } from "solid-js";

import { LATEST_CORE_CHANGELOG_URL, LATEST_CORE_VERSION_NAME } from "../VERSIONS";
import { ColorSchemeSelector } from "./color-scheme-selector";
import { GitHubIcon } from "./icons";

interface HeaderProps {
  drawerContent?: JSX.Element;
}

interface HeaderLink extends ParentProps {
  href: string;
  isActive: boolean;
}

function HeaderLink(props: HeaderLink) {
  return (
    <LinkButton variant="ghost" color="neutral" asChild>
      <As
        component={Link}
        href={props.href}
        class={
          props.isActive
            ? "text-slate-900 dark:text-slate-50"
            : "font-normal text-slate-700 dark:text-slate-200"
        }
      >
        {props.children}
      </As>
    </LinkButton>
  );
}

export function Header(props: HeaderProps) {
  const isCorePath = useMatch(() => "/docs/core/*");
  const isChangelogPath = useMatch(() => "/docs/changelog/*");
  const isThemeGeneratorPath = useMatch(() => "/docs/theme-generator/*");

  return (
    <header class="sticky top-0 z-10 flex flex-wrap items-center justify-between bg-body border-b border-b-slate-200 dark:border-b-slate-800 px-4 transition duration-500 lg:px-4 ">
      {props.drawerContent}
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
        <div class="hidden lg:flex lg:gap-x-1 lg:me-1">
          <HeaderLink href="/docs/core/overview/introduction" isActive={!!isCorePath()}>
            Documentation
          </HeaderLink>
          <HeaderLink href="/docs/theme-generator" isActive={!!isThemeGeneratorPath()}>
            Theme generator
          </HeaderLink>
          <HeaderLink href={LATEST_CORE_CHANGELOG_URL} isActive={!!isChangelogPath()}>
            Changelog
          </HeaderLink>
        </div>
        <LinkIconButton variant="ghost" color="neutral" class="me-2.5" asChild>
          <As
            component={Link}
            href="https://github.com/kobaltedev/pigment"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon class="h-5 w-5" />
          </As>
        </LinkIconButton>
        <ColorSchemeSelector />
      </div>
    </header>
  );
}

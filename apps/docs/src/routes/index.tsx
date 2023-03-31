import { Alert, As, Button, Checkbox, LinkButton, Select, TextField } from "@kobalte/pigment";
import { createBreakpoints } from "@solid-primitives/media";
import { Link } from "@solidjs/router";

import { Footer, GitHubIcon, Header, SearchIcon } from "../components";

export default function Index() {
  const matches = createBreakpoints({ lg: "1024px" });

  return (
    <>
      <Header />
      <div class="flex flex-col gap-6">
        <section class="relative flex flex-col justify-center h-[calc(100vh-55px)]">
          <div class="flex flex-row justify-center px-4 md:gap-24">
            <div class="flex max-w-3xl flex-col gap-4 sm:gap-0 sm:pb-24">
              <div class="flex flex-col gap-5 mb-5">
                <h1 class="text-[40px] font-bold text-text-bold leading-tight sm:text-5xl lg:text-6xl">
                  <span>UI components for the </span>
                  <span class="text-[40px] font-bold leading-none text-solid-primary-bg sm:text-5xl lg:text-6xl">
                    SolidJS
                  </span>
                  <span> era</span>
                </h1>
                <p class="pr-10 text-base text-content2">
                  Pigment is a full-featured UI library for SolidJS built with Kobalte and Tailwind
                  CSS. It provides ready to use components for building web applications with a
                  consistent look and feel.
                </p>
              </div>
              <div class="flex flex-row flex-wrap items-center gap-2 sm:flex-nowrap sm:gap-4">
                <LinkButton size="lg" asChild>
                  <As component={Link} href="/docs/core/overview/getting-started">
                    Get started
                  </As>
                </LinkButton>
                <LinkButton size="lg" color="neutral" startIcon={<GitHubIcon />} asChild>
                  <As component={Link} target="_blank" href="https://github.com/kobaltedev/pigment">
                    GitHub
                  </As>
                </LinkButton>
              </div>
            </div>
            <div class="hidden w-full max-w-sm flex-col items-center gap-3 -mt-8 lg:flex">
              <TextField
                startDecorator={<SearchIcon class="h-4 w-4 mx-1.5 text-outlined-input-icon" />}
                placeholder="Search"
              />
              <Alert
                variant="soft"
                color="primary"
                title="Software update"
                isMultiline
                class="w-full"
              >
                A new software update is available.
              </Alert>
              <div class="flex w-full justify-center items-start gap-2">
                <Select
                  isOpen={matches.lg}
                  class="w-full max-w-[200px]"
                  defaultValue="Soft"
                  options={["Solid", "Soft", "Outlined", "Ghost"]}
                  placeholder="Select"
                  onInteractOutside={e => e.preventDefault()}
                />
                <div class="flex flex-col space-y-2">
                  <Button>Button</Button>
                  <Checkbox label="Checkbox" isChecked />
                </div>
              </div>
            </div>
          </div>
          <div class="absolute left-1/2 bottom-8 flex items-end justify-center text-text-subtler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="7 13 12 18 17 13"></polyline>
              <polyline points="7 6 12 11 17 6"></polyline>
            </svg>
          </div>
        </section>
        <section class="h-[calc(100vh-55px)] flex flex-col justify-center gap-10 px-4 md:gap-12 lg:py-28 xl:px-0">
          <div class="flex flex-col items-center gap-3">
            <span class="text-center text-lg font-semibold text-primary-600 uppercase">
              Iterate fast
            </span>
            <div class="max-w-lg">
              <h2 class="w-full text-center text-3xl font-bold md:text-4xl">
                With ready to use, simple and accessible components.
              </h2>
            </div>
          </div>
          <div class="mx-auto flex w-full max-w-7xl flex-wrap justify-center justify-items-start gap-4">
            <div class="flex flex-col gap-3 max-w-sm w-full bg-surface-sunken-bg p-6 rounded-md">
              <div class="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-primary-100 text-primary-600 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-3">
                <span class="text-2xl font-semibold">Simple</span>
                <p>Designed to expose a minimalist API that help you speed up your development.</p>
              </div>
            </div>
            <div class="flex flex-col gap-3 max-w-sm w-full bg-surface-sunken-bg p-6 rounded-md">
              <div class="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-primary-100 text-primary-600 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="16" cy="4" r="1"></circle>
                  <path d="m18 19 1-7-5.87.94"></path>
                  <path d="m5 8 3-3 5.5 3-2.21 3.1"></path>
                  <path d="M4.24 14.48c-.19.58-.27 1.2-.23 1.84a5 5 0 0 0 5.31 4.67c.65-.04 1.25-.2 1.8-.46"></path>
                  <path d="M13.76 17.52c.19-.58.27-1.2.23-1.84a5 5 0 0 0-5.31-4.67c-.65.04-1.25.2-1.8.46"></path>
                </svg>
              </div>
              <span class="text-2xl font-semibold">Accessible</span>
              <p>
                Built on top of Kobalte a UI toolkit for building accessible web apps and design
                systems with SolidJS.
              </p>
            </div>
            <div class="flex flex-col gap-3 max-w-sm w-full bg-surface-sunken-bg p-6 rounded-md">
              <div class="flex h-fit w-fit flex-col items-center justify-center rounded-full bg-primary-100 text-primary-600 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="13.5" cy="6.5" r=".5"></circle>
                  <circle cx="17.5" cy="10.5" r=".5"></circle>
                  <circle cx="8.5" cy="7.5" r=".5"></circle>
                  <circle cx="6.5" cy="12.5" r=".5"></circle>
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
              </div>
              <div class="flex flex-col gap-3">
                <span class="text-2xl font-semibold">Consistent</span>
                <p>
                  Comes with predefined themes with support for light and dark modes that ensures a
                  consistent experience in your application.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer class="mt-0" />
      </div>
    </>
  );
}

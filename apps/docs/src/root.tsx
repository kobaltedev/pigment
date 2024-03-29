// @refresh reload
import "./root.css";

import { ColorSchemeProvider, InitColorSchemeScript, ThemeProvider } from "@kobalte/pigment";
import { Suspense } from "solid-js";
import { MDXProvider } from "solid-mdx";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

import { mdxComponents } from "./mdx-components";

export const mods = /*#__PURE__*/ import.meta.glob<
  true,
  any,
  {
    getHeadings: () => {
      depth: number;
      text: string;
      slug: string;
    }[];
  }
>("./routes/docs/**/*.{md,mdx}", {
  eager: true,
  query: {
    meta: "",
  },
});

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Pigment</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <Link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Body>
        <InitColorSchemeScript />
        <ErrorBoundary>
          <Suspense>
            <ColorSchemeProvider>
              <ThemeProvider>
                <MDXProvider components={mdxComponents}>
                  <Routes>
                    <FileRoutes />
                  </Routes>
                </MDXProvider>
              </ThemeProvider>
            </ColorSchemeProvider>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}

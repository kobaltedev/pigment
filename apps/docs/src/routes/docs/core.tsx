import { Outlet } from "@solidjs/router";

import { Layout } from "../../components";
import { NavSection } from "../../model/navigation";

const CORE_NAV_SECTIONS: NavSection[] = [
  {
    title: "Overview",
    links: [
      {
        title: "Introduction",
        href: "/docs/core/overview/introduction",
      },
      {
        title: "Getting started",
        href: "/docs/core/overview/getting-started",
      },
      {
        title: "Polymorphic components",
        href: "/docs/core/overview/polymorphic-components",
      },
      {
        title: "Server side rendering",
        href: "/docs/core/overview/ssr",
      },
    ],
  },
  {
    title: "Theming",
    links: [],
  },
  {
    title: "Components",
    links: [
      {
        title: "Alert",
        href: "/docs/core/components/alert",
      },
      {
        title: "Button",
        href: "/docs/core/components/button",
      },
      {
        title: "Checkbox",
        href: "/docs/core/components/checkbox",
      },
      {
        title: "CloseButton",
        href: "/docs/core/components/close-button",
      },
      {
        title: "TextField",
        href: "/docs/core/components/text-field",
      },
    ],
  },
];

export default function CoreLayout() {
  return (
    <Layout navSections={CORE_NAV_SECTIONS}>
      <Outlet />
    </Layout>
  );
}

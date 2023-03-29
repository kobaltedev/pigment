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
    title: "Customization",
    links: [
      {
        title: "Approaches",
        href: "/docs/core/customization/approaches",
      },
      {
        title: "Global variants",
        href: "/docs/core/customization/global-variants",
      },
      {
        title: "Themed components",
        href: "/docs/core/customization/themed-components",
      },
      {
        title: "Dark mode",
        href: "/docs/core/customization/dark-mode",
      },
      {
        title: "Design tokens",
        href: "/docs/core/customization/design-tokens",
      },
    ],
  },
  {
    title: "Components",
    links: [
      {
        title: "Alert",
        href: "/docs/core/components/alert",
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

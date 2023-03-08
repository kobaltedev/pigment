import { Component, ComponentProps } from "solid-js";

// lucide.dev
function createLucideIcon(SVGPath: Component) {
  return function (props: ComponentProps<"svg">) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      >
        <SVGPath />
      </svg>
    );
  };
}

export const LoaderIcon = createLucideIcon(() => <path d="M21 12a9 9 0 1 1-6.219-8.56" />);

export const SelectorIcon = createLucideIcon(() => <path d="M21 12a9 9 0 1 1-6.219-8.56" />);

export const ChevronLeftIcon = createLucideIcon(() => <polyline points="15 18 9 12 15 6" />);

export const ChevronRightIcon = createLucideIcon(() => <polyline points="9 18 15 12 9 6" />);

export const ChevronUpIcon = createLucideIcon(() => <polyline points="18 15 12 9 6 15" />);

export const ChevronDownIcon = createLucideIcon(() => <polyline points="6 9 12 15 18 9" />);

export const CrossIcon = createLucideIcon(() => (
  <>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </>
));

export const CheckCircleIcon = createLucideIcon(() => (
  <>
    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
    <path d="m9 12 2 2 4-4" />
  </>
));

export const InfoCircleIcon = createLucideIcon(() => (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>
));

export const AlertTriangleIcon = createLucideIcon(() => (
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
));

export const AlertCircleIcon = createLucideIcon(() => (
  <>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </>
));

export const HelpCircleIcon = createLucideIcon(() => (
  <>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </>
));

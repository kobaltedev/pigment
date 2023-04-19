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

export const SelectorIcon = createLucideIcon(() => (
  <>
    <path d="m7 15 5 5 5-5"></path>
    <path d="m7 9 5-5 5 5"></path>
  </>
));

export const ChevronLeftIcon = createLucideIcon(() => <polyline points="15 18 9 12 15 6" />);

export const ChevronRightIcon = createLucideIcon(() => <polyline points="9 18 15 12 9 6" />);

export const ChevronUpIcon = createLucideIcon(() => <polyline points="18 15 12 9 6 15" />);

export const ChevronDownIcon = createLucideIcon(() => <polyline points="6 9 12 15 18 9" />);

export const CheckIcon = createLucideIcon(() => <polyline points="20 6 9 17 4 12" />);

export const MinusIcon = createLucideIcon(() => <line x1="5" y1="12" x2="19" y2="12" />);

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

export const ExclamationTriangleIcon = createLucideIcon(() => (
  <>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </>
));

export const ExclamationCircleIcon = createLucideIcon(() => (
  <>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </>
));

export const EyeIcon = createLucideIcon(() => (
  <>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </>
));

export const EyeOffIcon = createLucideIcon(() => (
  <>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
    <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
    <line x1="2" y1="2" x2="22" y2="22"></line>
  </>
));

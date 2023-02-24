import { Button as KButton, createPolymorphicComponent, useLocale } from "@kobalte/core";
import { mergeDefaultProps, PolymorphicComponent } from "@kobalte/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { cn } from "../utils/cn";

/* -------------------------------------------------------------------------------------------------
 * CSS
 * -----------------------------------------------------------------------------------------------*/

const buttonVariants = cva(
  [
    "pg-appearance-none pg-relative pg-justify-center pg-items-center",
    "pg-border pg-border-solid",
    "pg-font-medium",
    "pg-transition-colors",
    "pg-cursor-pointer",
    "focus-visible:pg-outline focus-visible:pg-outline-2 focus-visible:pg-outline-offset-2 focus-visible:pg-outline-focus-ring",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outlined: "",
        ghost: "",
      },
      color: {
        primary: "",
        neutral: "",
        warning: "",
        danger: "",
      },
      size: {
        xs: "pg-h-7 pg-gap-1 pg-rounded",
        sm: "pg-h-9 pg-gap-2 pg-rounded-md",
        md: "pg-h-11 pg-gap-2 pg-rounded-md",
        lg: "pg-h-13 pg-gap-2.5 pg-rounded-md",
        xl: "pg-h-15 pg-gap-3 pg-rounded-md",
      },
      isIconOnly: {
        true: "pg-p-0 pg-reset-svg",
      },
      isFullWidth: {
        true: "pg-flex pg-w-full",
        false: "pg-inline-flex",
      },
      isLoading: {
        true: "pg-opacity-80 pg-select-none pg-pointer-events-none",
      },
      isDisabled: {
        true: "ui-disabled:pg-text-disabled-text ui-disabled:pg-cursor-not-allowed ui-disabled:pg-select-none",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        color: "primary",
        isDisabled: false,
        class: [
          "pg-text-solid-primary-text hover:pg-text-solid-primary-text-hover active:pg-text-solid-primary-text-active",
          "pg-bg-solid-primary-bg hover:pg-bg-solid-primary-bg-hover active:pg-bg-solid-primary-bg-active",
          "pg-border-solid-primary-border hover:pg-border-solid-primary-border-hover active:pg-border-solid-primary-border-active",
        ],
      },
      {
        variant: "solid",
        color: "neutral",
        isDisabled: false,
        class: [
          "pg-text-solid-neutral-text hover:pg-text-solid-neutral-text-hover active:pg-text-solid-neutral-text-active",
          "pg-bg-solid-neutral-bg hover:pg-bg-solid-neutral-bg-hover active:pg-bg-solid-neutral-bg-active",
          "pg-border-solid-neutral-border hover:pg-border-solid-neutral-border-hover active:pg-border-solid-neutral-border-active",
        ],
      },
      {
        variant: "solid",
        color: "warning",
        isDisabled: false,
        class: [
          "pg-text-solid-warning-text hover:pg-text-solid-warning-text-hover active:pg-text-solid-warning-text-active",
          "pg-bg-solid-warning-bg hover:pg-bg-solid-warning-bg-hover active:pg-bg-solid-warning-bg-active",
          "pg-border-solid-warning-border hover:pg-border-solid-warning-border-hover active:pg-border-solid-warning-border-active",
        ],
      },
      {
        variant: "solid",
        color: "danger",
        isDisabled: false,
        class: [
          "pg-text-solid-danger-text hover:pg-text-solid-danger-text-hover active:pg-text-solid-danger-text-active",
          "pg-bg-solid-danger-bg hover:pg-bg-solid-danger-bg-hover active:pg-bg-solid-danger-bg-active",
          "pg-border-solid-danger-border hover:pg-border-solid-danger-border-hover active:pg-border-solid-danger-border-active",
        ],
      },

      // soft + colors
      {
        variant: "soft",
        color: "primary",
        isDisabled: false,
        class: [
          "pg-text-soft-primary-text hover:pg-text-soft-primary-text-hover active:pg-text-soft-primary-text-active",
          "pg-bg-soft-primary-bg hover:pg-bg-soft-primary-bg-hover active:pg-bg-soft-primary-bg-active",
          "pg-border-soft-primary-border hover:pg-border-soft-primary-border-hover active:pg-border-soft-primary-border-active",
        ],
      },
      {
        variant: "soft",
        color: "neutral",
        isDisabled: false,
        class: [
          "pg-text-soft-neutral-text hover:pg-text-soft-neutral-text-hover active:pg-text-soft-neutral-text-active",
          "pg-bg-soft-neutral-bg hover:pg-bg-soft-neutral-bg-hover active:pg-bg-soft-neutral-bg-active",
          "pg-border-soft-neutral-border hover:pg-border-soft-neutral-border-hover active:pg-border-soft-neutral-border-active",
        ],
      },
      {
        variant: "soft",
        color: "warning",
        isDisabled: false,
        class: [
          "pg-text-soft-warning-text hover:pg-text-soft-warning-text-hover active:pg-text-soft-warning-text-active",
          "pg-bg-soft-warning-bg hover:pg-bg-soft-warning-bg-hover active:pg-bg-soft-warning-bg-active",
          "pg-border-soft-warning-border hover:pg-border-soft-warning-border-hover active:pg-border-soft-warning-border-active",
        ],
      },
      {
        variant: "soft",
        color: "danger",
        isDisabled: false,
        class: [
          "pg-text-soft-danger-text hover:pg-text-soft-danger-text-hover active:pg-text-soft-danger-text-active",
          "pg-bg-soft-danger-bg hover:pg-bg-soft-danger-bg-hover active:pg-bg-soft-danger-bg-active",
          "pg-border-soft-danger-border hover:pg-border-soft-danger-border-hover active:pg-border-soft-danger-border-active",
        ],
      },

      // outlined + colors
      {
        variant: "outlined",
        color: "primary",
        isDisabled: false,
        class: [
          "pg-text-outlined-primary-text hover:pg-text-outlined-primary-text-hover active:pg-text-outlined-primary-text-active",
          "pg-bg-outlined-primary-bg hover:pg-bg-outlined-primary-bg-hover active:pg-bg-outlined-primary-bg-active",
          "pg-border-outlined-primary-border hover:pg-border-outlined-primary-border-hover active:pg-border-outlined-primary-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "neutral",
        isDisabled: false,
        class: [
          "pg-text-outlined-neutral-text hover:pg-text-outlined-neutral-text-hover active:pg-text-outlined-neutral-text-active",
          "pg-bg-outlined-neutral-bg hover:pg-bg-outlined-neutral-bg-hover active:pg-bg-outlined-neutral-bg-active",
          "pg-border-outlined-neutral-border hover:pg-border-outlined-neutral-border-hover active:pg-border-outlined-neutral-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "warning",
        isDisabled: false,
        class: [
          "pg-text-outlined-warning-text hover:pg-text-outlined-warning-text-hover active:pg-text-outlined-warning-text-active",
          "pg-bg-outlined-warning-bg hover:pg-bg-outlined-warning-bg-hover active:pg-bg-outlined-warning-bg-active",
          "pg-border-outlined-warning-border hover:pg-border-outlined-warning-border-hover active:pg-border-outlined-warning-border-active",
        ],
      },
      {
        variant: "outlined",
        color: "danger",
        isDisabled: false,
        class: [
          "pg-text-outlined-danger-text hover:pg-text-outlined-danger-text-hover active:pg-text-outlined-danger-text-active",
          "pg-bg-outlined-danger-bg hover:pg-bg-outlined-danger-bg-hover active:pg-bg-outlined-danger-bg-active",
          "pg-border-outlined-danger-border hover:pg-border-outlined-danger-border-hover active:pg-border-outlined-danger-border-active",
        ],
      },

      // ghost + colors
      {
        variant: "ghost",
        color: "primary",
        isDisabled: false,
        class: [
          "pg-text-ghost-primary-text hover:pg-text-ghost-primary-text-hover active:pg-text-ghost-primary-text-active",
          "pg-bg-ghost-primary-bg hover:pg-bg-ghost-primary-bg-hover active:pg-bg-ghost-primary-bg-active",
          "pg-border-ghost-primary-border hover:pg-border-ghost-primary-border-hover active:pg-border-ghost-primary-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "neutral",
        isDisabled: false,
        class: [
          "pg-text-ghost-neutral-text hover:pg-text-ghost-neutral-text-hover active:pg-text-ghost-neutral-text-active",
          "pg-bg-ghost-neutral-bg hover:pg-bg-ghost-neutral-bg-hover active:pg-bg-ghost-neutral-bg-active",
          "pg-border-ghost-neutral-border hover:pg-border-ghost-neutral-border-hover active:pg-border-ghost-neutral-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "warning",
        isDisabled: false,
        class: [
          "pg-text-ghost-warning-text hover:pg-text-ghost-warning-text-hover active:pg-text-ghost-warning-text-active",
          "pg-bg-ghost-warning-bg hover:pg-bg-ghost-warning-bg-hover active:pg-bg-ghost-warning-bg-active",
          "pg-border-ghost-warning-border hover:pg-border-ghost-warning-border-hover active:pg-border-ghost-warning-border-active",
        ],
      },
      {
        variant: "ghost",
        color: "danger",
        isDisabled: false,
        class: [
          "pg-text-ghost-danger-text hover:pg-text-ghost-danger-text-hover active:pg-text-ghost-danger-text-active",
          "pg-bg-ghost-danger-bg hover:pg-bg-ghost-danger-bg-hover active:pg-bg-ghost-danger-bg-active",
          "pg-border-ghost-danger-border hover:pg-border-ghost-danger-border-hover active:pg-border-ghost-danger-border-active",
        ],
      },

      // disabled + variants
      {
        variant: ["solid", "soft"],
        isDisabled: true,
        class: ["ui-disabled:pg-bg-disabled-bg ui-disabled:pg-border-transparent"],
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: ["ui-disabled:pg-bg-transparent ui-disabled:pg-border-disabled-border"],
      },
      {
        variant: "ghost",
        isDisabled: true,
        class: ["ui-disabled:pg-bg-transparent ui-disabled:pg-border-transparent"],
      },

      // rectangle button (e.g: Button)
      { isIconOnly: false, isFullWidth: false, class: "pg-w-auto" },
      { size: "xs", isIconOnly: false, class: "pg-px-2.5 pg-text-sm" },
      { size: "sm", isIconOnly: false, class: "pg-px-4 pg-text-sm" },
      { size: "md", isIconOnly: false, class: "pg-px-5 pg-text-base" },
      { size: "lg", isIconOnly: false, class: "pg-px-7 pg-text-lg" },
      { size: "xl", isIconOnly: false, class: "pg-px-8 pg-text-xl" },

      // square button (e.g: IconButton)
      { size: "xs", isIconOnly: true, isFullWidth: false, class: "pg-w-7 pg-text-base" },
      { size: "sm", isIconOnly: true, isFullWidth: false, class: "pg-w-9 pg-text-xl" },
      { size: "md", isIconOnly: true, isFullWidth: false, class: "pg-w-11 pg-text-2xl" },
      { size: "lg", isIconOnly: true, isFullWidth: false, class: "pg-w-13 pg-text-3xl" },
      { size: "xl", isIconOnly: true, isFullWidth: false, class: "pg-w-15 pg-text-4xl" },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "sm",
      isIconOnly: false,
      isFullWidth: false,
      isDisabled: false,
    },
  }
);

const buttonIconVariants = cva("pg-shrink-0 pg-reset-svg", {
  variants: {
    size: {
      xs: "",
      sm: "",
      md: "",
      lg: "",
      xl: "",
    },
    isIconOnly: {
      true: "",
    },
  },
  compoundVariants: [
    // start, end and loading icons in rectangle button (e.g: Button)
    { size: "xs", isIconOnly: false, class: "pg-text-sm" },
    { size: "sm", isIconOnly: false, class: "pg-text-base" },
    { size: "md", isIconOnly: false, class: "pg-text-lg" },
    { size: "lg", isIconOnly: false, class: "pg-text-xl" },
    { size: "xl", isIconOnly: false, class: "pg-text-2xl" },

    // only loading icon in square button (e.g: IconButton)
    { size: "xs", isIconOnly: true, class: "pg-text-base" },
    { size: "sm", isIconOnly: true, class: "pg-text-xl" },
    { size: "md", isIconOnly: true, class: "pg-text-2xl" },
    { size: "lg", isIconOnly: true, class: "pg-text-3xl" },
    { size: "xl", isIconOnly: true, class: "pg-text-4xl" },
  ],
});

const loadingContentVariants = cva(
  "pg-inline-flex pg-items-center pg-justify-center pg-opacity-0",
  {
    variants: {
      size: {
        xs: "pg-gap-1",
        sm: "pg-gap-2",
        md: "pg-gap-2",
        lg: "pg-gap-2.5",
        xl: "pg-gap-3",
      },
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

interface ButtonBaseProps
  extends KButton.ButtonRootOptions,
    Omit<VariantProps<typeof buttonVariants>, "isLoading" | "isDisabled"> {
  /** Whether the button is in a loading state. */
  isLoading?: boolean;

  /** The label to show when the button is in a loading state. */
  loadingText?: string;

  /** The icon to show when the button is in a loading state. */
  loadingIcon?: JSX.Element;

  /**
   * The placement of the loading icon when the button is in a loading state
   * and a loading text is provided.
   */
  loadingIconPlacement?: "start" | "end";

  /** The icon to show before the button content. */
  startIcon?: JSX.Element;

  /** The icon to show after the button content. */
  endIcon?: JSX.Element;

  /** The content of the button. */
  children?: JSX.Element;
}

const ButtonBase: PolymorphicComponent<"button", ButtonBaseProps> = createPolymorphicComponent(
  props => {
    const [local, variantProps, contentProps, loadingIconProps, loadingContentProps, others] =
      splitProps(
        props,
        ["class", "isLoading", "loadingText", "loadingIcon", "loadingIconPlacement"],
        ["variant", "color", "size", "isIconOnly", "isFullWidth", "isLoading", "isDisabled"],
        ["size", "startIcon", "endIcon", "children"],
        ["size", "isIconOnly"],
        ["size"]
      );

    const { direction } = useLocale();

    const isRtl = () => direction() === "rtl";

    const isLoadingIconLeft = () => {
      if (isRtl()) {
        return local.loadingIconPlacement === "end";
      } else {
        return local.loadingIconPlacement === "start";
      }
    };

    const content = () => {
      return <ButtonBaseContent isRtl={isRtl()} {...contentProps} />;
    };

    return (
      <KButton.Root
        class={cn(buttonVariants(variantProps), local.class)}
        isDisabled={variantProps.isDisabled}
        {...others}
      >
        <Show when={local.isLoading} fallback={content()}>
          <Show
            when={local.loadingText}
            fallback={
              <>
                <ButtonBaseLoadingIcon class="pg-absolute" {...loadingIconProps} />
                <Show when={!variantProps.isIconOnly}>
                  <span class={loadingContentVariants(loadingContentProps)}>{content()}</span>
                </Show>
              </>
            }
          >
            <Show
              when={isLoadingIconLeft()}
              fallback={
                <>
                  {local.loadingText}
                  <ButtonBaseLoadingIcon {...loadingIconProps} />
                </>
              }
            >
              <ButtonBaseLoadingIcon {...loadingIconProps} />
              {local.loadingText}
            </Show>
          </Show>
        </Show>
      </KButton.Root>
    );
  }
);

/* -------------------------------------------------------------------------------------------------
 * ButtonBaseContent
 * -----------------------------------------------------------------------------------------------*/

interface ButtonBaseContentProps
  extends Pick<ButtonBaseProps, "size" | "startIcon" | "endIcon" | "children"> {
  isRtl: boolean;
}

function ButtonBaseContent(props: ButtonBaseContentProps) {
  const leftIcon = () => {
    return props.isRtl ? props.endIcon : props.startIcon;
  };

  const rightIcon = () => {
    return props.isRtl ? props.startIcon : props.endIcon;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonBaseIcon size={props.size} isIconOnly={false}>
          {leftIcon()}
        </ButtonBaseIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonBaseIcon size={props.size} isIconOnly={false}>
          {rightIcon()}
        </ButtonBaseIcon>
      </Show>
    </>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonBaseIcon
 * -----------------------------------------------------------------------------------------------*/

interface ButtonBaseIconProps
  extends ComponentProps<"span">,
    Pick<ButtonBaseProps, "size" | "isIconOnly"> {}

function ButtonBaseIcon(props: ButtonBaseIconProps) {
  const [local, variantProps, others] = splitProps(props, ["class"], ["size", "isIconOnly"]);

  return (
    <span
      aria-hidden="true"
      class={cn(buttonIconVariants(variantProps), local.class)}
      {...others}
    />
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonBaseLoadingIcon
 * -----------------------------------------------------------------------------------------------*/

function ButtonBaseLoadingIcon(props: ButtonBaseIconProps) {
  props = mergeDefaultProps(
    {
      children: () => <LoaderIcon class="pg-animate-spin" />,
    },
    props
  );

  return <ButtonBaseIcon {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonProps extends Omit<ButtonBaseProps, "isIconOnly"> {}

export const Button: PolymorphicComponent<"button", ButtonProps> = createPolymorphicComponent(
  props => {
    return <ButtonBase isIconOnly={false} {...props} />;
  }
);

/* -------------------------------------------------------------------------------------------------
 * IconButton
 * -----------------------------------------------------------------------------------------------*/

export interface IconButtonProps
  extends Omit<
    ButtonBaseProps,
    | "isIconOnly"
    | "loadingText"
    | "loadingIconPlacement"
    | "startIcon"
    | "endIcon"
    | "isFullWidth"
    | "children"
  > {
  /** An accessible label that describes the button. */
  "aria-label": string;

  /** The icon to be used in the button. */
  children?: JSX.Element;
}

export const IconButton: PolymorphicComponent<"button", IconButtonProps> =
  createPolymorphicComponent(props => {
    return <ButtonBase isIconOnly {...props} />;
  });

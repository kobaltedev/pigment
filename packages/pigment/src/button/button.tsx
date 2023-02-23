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
    "appearance-none relative justify-center items-center rounded-md",
    "border border-solid",
    "font-medium",
    "transition-colors",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outlined: "",
        ghost: "",
      },
      colorScheme: {
        primary: "",
        neutral: "",
        warning: "",
        danger: "",
      },
      size: {
        xs: "h-7 text-sm gap-1",
        sm: "h-9 text-sm gap-2",
        md: "h-10 text-sm gap-2",
        lg: "h-12 text-base gap-2",
        xl: "h-14 text-lg gap-3",
      },
      shrinkOnPress: {
        true: "ui-not-disabled:active:scale-95",
      },
      isSquare: {
        true: "p-0",
      },
      isFullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
      isLoading: {
        true: "opacity-80 select-none pointer-events-none",
      },
      isDisabled: {
        true: "ui-disabled:text-text-disabled ui-disabled:cursor-not-allowed ui-disabled:select-none",
      },
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        colorScheme: "primary",
        isDisabled: false,
        class: [
          "text-text-on-solid-primary hover:text-text-on-solid-primary-hover active:text-text-on-solid-primary-active",
          "bg-background-solid-primary hover:bg-background-solid-primary-hover active:bg-background-solid-primary-active",
          "border-border-solid-primary hover:border-border-solid-primary-hover active:border-border-solid-primary-active",
        ],
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        isDisabled: false,
        class: [
          "text-text-on-solid-neutral hover:text-text-on-solid-neutral-hover active:text-text-on-solid-neutral-active",
          "bg-background-solid-neutral hover:bg-background-solid-neutral-hover active:bg-background-solid-neutral-active",
          "border-border-solid-neutral hover:border-border-solid-neutral-hover active:border-border-solid-neutral-active",
        ],
      },
      {
        variant: "solid",
        colorScheme: "warning",
        isDisabled: false,
        class: [
          "text-text-on-solid-warning hover:text-text-on-solid-warning-hover active:text-text-on-solid-warning-active",
          "bg-background-solid-warning hover:bg-background-solid-warning-hover active:bg-background-solid-warning-active",
          "border-border-solid-warning hover:border-border-solid-warning-hover active:border-border-solid-warning-active",
        ],
      },
      {
        variant: "solid",
        colorScheme: "danger",
        isDisabled: false,
        class: [
          "text-text-on-solid-danger hover:text-text-on-solid-danger-hover active:text-text-on-solid-danger-active",
          "bg-background-solid-danger hover:bg-background-solid-danger-hover active:bg-background-solid-danger-active",
          "border-border-solid-danger hover:border-border-solid-danger-hover active:border-border-solid-danger-active",
        ],
      },

      // soft + colors
      {
        variant: "soft",
        colorScheme: "primary",
        isDisabled: false,
        class: [
          "text-text-on-soft-primary hover:text-text-on-soft-primary-hover active:text-text-on-soft-primary-active",
          "bg-background-soft-primary hover:bg-background-soft-primary-hover active:bg-background-soft-primary-active",
          "border-border-soft-primary hover:border-border-soft-primary-hover active:border-border-soft-primary-active",
        ],
      },
      {
        variant: "soft",
        colorScheme: "neutral",
        isDisabled: false,
        class: [
          "text-text-on-soft-neutral hover:text-text-on-soft-neutral-hover active:text-text-on-soft-neutral-active",
          "bg-background-soft-neutral hover:bg-background-soft-neutral-hover active:bg-background-soft-neutral-active",
          "border-border-soft-neutral hover:border-border-soft-neutral-hover active:border-border-soft-neutral-active",
        ],
      },
      {
        variant: "soft",
        colorScheme: "warning",
        isDisabled: false,
        class: [
          "text-text-on-soft-warning hover:text-text-on-soft-warning-hover active:text-text-on-soft-warning-active",
          "bg-background-soft-warning hover:bg-background-soft-warning-hover active:bg-background-soft-warning-active",
          "border-border-soft-warning hover:border-border-soft-warning-hover active:border-border-soft-warning-active",
        ],
      },
      {
        variant: "soft",
        colorScheme: "danger",
        isDisabled: false,
        class: [
          "text-text-on-soft-danger hover:text-text-on-soft-danger-hover active:text-text-on-soft-danger-active",
          "bg-background-soft-danger hover:bg-background-soft-danger-hover active:bg-background-soft-danger-active",
          "border-border-soft-danger hover:border-border-soft-danger-hover active:border-border-soft-danger-active",
        ],
      },

      // outlined + colors
      {
        variant: "outlined",
        colorScheme: "primary",
        isDisabled: false,
        class: [
          "text-text-on-outlined-primary hover:text-text-on-outlined-primary-hover active:text-text-on-outlined-primary-active",
          "bg-background-outlined-primary hover:bg-background-outlined-primary-hover active:bg-background-outlined-primary-active",
          "border-border-outlined-primary hover:border-border-outlined-primary-hover active:border-border-outlined-primary-active",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "neutral",
        isDisabled: false,
        class: [
          "text-text-on-outlined-neutral hover:text-text-on-outlined-neutral-hover active:text-text-on-outlined-neutral-active",
          "bg-background-outlined-neutral hover:bg-background-outlined-neutral-hover active:bg-background-outlined-neutral-active",
          "border-border-outlined-neutral hover:border-border-outlined-neutral-hover active:border-border-outlined-neutral-active",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "warning",
        isDisabled: false,
        class: [
          "text-text-on-outlined-warning hover:text-text-on-outlined-warning-hover active:text-text-on-outlined-warning-active",
          "bg-background-outlined-warning hover:bg-background-outlined-warning-hover active:bg-background-outlined-warning-active",
          "border-border-outlined-warning hover:border-border-outlined-warning-hover active:border-border-outlined-warning-active",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "danger",
        isDisabled: false,
        class: [
          "text-text-on-outlined-danger hover:text-text-on-outlined-danger-hover active:text-text-on-outlined-danger-active",
          "bg-background-outlined-danger hover:bg-background-outlined-danger-hover active:bg-background-outlined-danger-active",
          "border-border-outlined-danger hover:border-border-outlined-danger-hover active:border-border-outlined-danger-active",
        ],
      },

      // ghost + colors
      {
        variant: "ghost",
        colorScheme: "primary",
        isDisabled: false,
        class: [
          "text-text-on-ghost-primary hover:text-text-on-ghost-primary-hover active:text-text-on-ghost-primary-active",
          "bg-background-ghost-primary hover:bg-background-ghost-primary-hover active:bg-background-ghost-primary-active",
          "border-border-ghost-primary hover:border-border-ghost-primary-hover active:border-border-ghost-primary-active",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "neutral",
        isDisabled: false,
        class: [
          "text-text-on-ghost-neutral hover:text-text-on-ghost-neutral-hover active:text-text-on-ghost-neutral-active",
          "bg-background-ghost-neutral hover:bg-background-ghost-neutral-hover active:bg-background-ghost-neutral-active",
          "border-border-ghost-neutral hover:border-border-ghost-neutral-hover active:border-border-ghost-neutral-active",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "warning",
        isDisabled: false,
        class: [
          "text-text-on-ghost-warning hover:text-text-on-ghost-warning-hover active:text-text-on-ghost-warning-active",
          "bg-background-ghost-warning hover:bg-background-ghost-warning-hover active:bg-background-ghost-warning-active",
          "border-border-ghost-warning hover:border-border-ghost-warning-hover active:border-border-ghost-warning-active",
        ],
      },
      {
        variant: "ghost",
        colorScheme: "danger",
        isDisabled: false,
        class: [
          "text-text-on-ghost-danger hover:text-text-on-ghost-danger-hover active:text-text-on-ghost-danger-active",
          "bg-background-ghost-danger hover:bg-background-ghost-danger-hover active:bg-background-ghost-danger-active",
          "border-border-ghost-danger hover:border-border-ghost-danger-hover active:border-border-ghost-danger-active",
        ],
      },

      // disabled + variants
      {
        variant: ["solid", "soft"],
        isDisabled: true,
        class: ["ui-disabled:bg-background-disabled ui-disabled:border-transparent"],
      },
      {
        variant: "outlined",
        isDisabled: true,
        class: ["ui-disabled:bg-transparent ui-disabled:border-border-disabled"],
      },
      {
        variant: "ghost",
        isDisabled: true,
        class: ["ui-disabled:bg-transparent ui-disabled:border-transparent"],
      },

      // rectangle button (e.g: Button)
      { isSquare: false, isFullWidth: false, class: "w-auto" },
      { size: "xs", isSquare: false, class: "px-2" },
      { size: "sm", isSquare: false, class: "px-3.5" },
      { size: "md", isSquare: false, class: "px-4" },
      { size: "lg", isSquare: false, class: "px-5" },
      { size: "xl", isSquare: false, class: "px-6" },

      // square button (e.g: IconButton)
      { size: "xs", isSquare: true, isFullWidth: false, class: "w-7" },
      { size: "sm", isSquare: true, isFullWidth: false, class: "w-9" },
      { size: "md", isSquare: true, isFullWidth: false, class: "w-10" },
      { size: "lg", isSquare: true, isFullWidth: false, class: "w-12" },
      { size: "xl", isSquare: true, isFullWidth: false, class: "w-14" },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      shrinkOnPress: true,
      isSquare: false,
      isFullWidth: false,
      isDisabled: false,
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonProps
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

  /** The icon to show before the button's label. */
  startIcon?: JSX.Element;

  /** The icon to show after the button's label. */
  endIcon?: JSX.Element;

  /** The label of the button. */
  children?: JSX.Element;
}

export const Button: PolymorphicComponent<"button", ButtonProps> = createPolymorphicComponent(
  props => {
    const [local, variantProps, contentProps, others] = splitProps(
      props,
      ["class", "isLoading", "loadingText", "loadingIcon", "loadingIconPlacement"],
      [
        "variant",
        "colorScheme",
        "size",
        "shrinkOnPress",
        "isSquare",
        "isFullWidth",
        "isLoading",
        "isDisabled",
      ],
      ["startIcon", "endIcon", "children"]
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
      return <ButtonContent isRtl={isRtl()} {...contentProps} />;
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
                <ButtonLoadingIcon class="absolute" />
                <span class="opacity-0">{content()}</span>
              </>
            }
          >
            <Show
              when={isLoadingIconLeft()}
              fallback={
                <>
                  {local.loadingText}
                  <ButtonLoadingIcon />
                </>
              }
            >
              <ButtonLoadingIcon />
              {local.loadingText}
            </Show>
          </Show>
        </Show>
      </KButton.Root>
    );
  }
);

/* -------------------------------------------------------------------------------------------------
 * ButtonContent
 * -----------------------------------------------------------------------------------------------*/

interface ButtonContentProps extends Pick<ButtonProps, "startIcon" | "endIcon" | "children"> {
  isRtl: boolean;
}

function ButtonContent(props: ButtonContentProps) {
  const leftIcon = () => {
    return props.isRtl ? props.endIcon : props.startIcon;
  };

  const rightIcon = () => {
    return props.isRtl ? props.startIcon : props.endIcon;
  };

  return (
    <>
      <Show when={leftIcon()}>
        <ButtonIcon>{leftIcon()}</ButtonIcon>
      </Show>
      {props.children}
      <Show when={rightIcon()}>
        <ButtonIcon>{rightIcon()}</ButtonIcon>
      </Show>
    </>
  );
}

/* -------------------------------------------------------------------------------------------------
 * ButtonLoadingIcon
 * -----------------------------------------------------------------------------------------------*/

function ButtonLoadingIcon(props: ComponentProps<"span">) {
  props = mergeDefaultProps(
    {
      children: () => <LoaderIcon class="text-[1.2em] animate-spin" />,
    },
    props
  );

  return <ButtonIcon {...props} />;
}

/* -------------------------------------------------------------------------------------------------
 * ButtonIcon
 * -----------------------------------------------------------------------------------------------*/

function ButtonIcon(props: ComponentProps<"span">) {
  const [local, others] = splitProps(props, ["class"]);

  return <span aria-hidden="true" class={cn("shrink-0 reset-svg", local.class)} {...others} />;
}

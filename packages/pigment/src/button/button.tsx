import { Button as KButton, createPolymorphicComponent, useLocale } from "@kobalte/core";
import { mergeDefaultProps, PolymorphicComponent } from "@kobalte/utils";
import { cva, VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { ComponentProps, JSX, Show, splitProps } from "solid-js";

import { LoaderIcon } from "../icons";
import { SHAPE_VARIANTS } from "../theme/shape";

/* -------------------------------------------------------------------------------------------------
 * CSS
 * -----------------------------------------------------------------------------------------------*/

const buttonVariants = cva(
  [
    "appearance-none relative justify-center items-center",
    "border border-solid",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus-ring",
    "ui-disabled:opacity-50 ui-disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        solid: "",
        soft: "",
        outlined: "",
        text: "",
      },
      colorScheme: {
        primary: "",
        neutral: "",
        danger: "",
      },
      size: {
        sm: "h-9 text-sm gap-2",
        md: "h-10 text-sm gap-2",
        lg: "h-11 text-base gap-2",
        xl: "h-12 text-base gap-2",
        "2xl": "h-14 text-lg gap-3",
      },
      isSquare: {
        true: "p-0",
        false: "",
      },
      isFullWidth: {
        true: "flex w-full",
        false: "inline-flex",
      },
      ...SHAPE_VARIANTS,
    },
    compoundVariants: [
      // solid + colors
      {
        variant: "solid",
        colorScheme: "primary",
        class: [
          "text-white",
          "bg-primary-600 hover:bg-primary-700 active:bg-primary-800",
          "border-primary-600 hover:border-primary-700 active:border-primary-800",
        ],
      },
      {
        variant: "solid",
        colorScheme: "neutral",
        class: [
          "text-white",
          "bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800",
          "border-neutral-600 hover:border-neutral-700 active:border-neutral-800",
        ],
      },
      {
        variant: "solid",
        colorScheme: "danger",
        class: [
          "text-white",
          "bg-danger-600 hover:bg-danger-700 active:bg-danger-800",
          "border-danger-600 hover:border-danger-700 active:border-danger-800",
        ],
      },

      // soft + colors
      {
        variant: "soft",
        colorScheme: "primary",
        class: [
          "text-primary-700 hover:text-primary-800 active:text-primary-900",
          "bg-primary-50 hover:bg-primary-100 active:bg-primary-200",
          "border-primary-50 hover:border-primary-100 active:border-primary-200",
        ],
      },
      {
        variant: "soft",
        colorScheme: "neutral",
        class: [
          "text-neutral-600 hover:text-neutral-700 active:text-neutral-800",
          "bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300",
          "border-neutral-100 hover:border-neutral-200 active:border-neutral-300",
        ],
      },
      {
        variant: "soft",
        colorScheme: "danger",
        class: [
          "text-danger-700 hover:text-danger-800 active:text-danger-900",
          "bg-danger-50 hover:bg-danger-100 active:bg-danger-200",
          "border-danger-50 hover:border-danger-100 active:border-danger-200",
        ],
      },

      // outlined + colors
      {
        variant: "outlined",
        colorScheme: "primary",
        class: [
          "text-primary-700 hover:text-primary-800 active:text-primary-900",
          "bg-transparent hover:bg-primary-50 active:bg-primary-100",
          "border-primary-300  active:border-primary-400",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "neutral",
        class: [
          "text-neutral-600 hover:text-neutral-700 active:text-neutral-800",
          "bg-transparent hover:bg-neutral-100 active:bg-neutral-200",
          "border-neutral-200  active:border-neutral-300",
        ],
      },
      {
        variant: "outlined",
        colorScheme: "danger",
        class: [
          "text-danger-700 hover:text-danger-800 active:text-danger-900",
          "bg-transparent hover:bg-danger-50 active:bg-danger-100",
          "border-danger-300  active:border-danger-400",
        ],
      },

      // text + colors
      {
        variant: "text",
        colorScheme: "primary",
        class: [
          "text-primary-700 hover:text-primary-800 active:text-primary-900",
          "bg-transparent hover:bg-primary-50 active:bg-primary-100",
          "border-transparent hover:border-primary-50 active:border-primary-100",
        ],
      },
      {
        variant: "text",
        colorScheme: "neutral",
        class: [
          "text-neutral-600 hover:text-neutral-700 active:text-neutral-800",
          "bg-transparent hover:bg-neutral-100 active:bg-neutral-200",
          "border-transparent hover:border-neutral-100 active:border-neutral-200",
        ],
      },
      {
        variant: "text",
        colorScheme: "danger",
        class: [
          "text-danger-700 hover:text-danger-800 active:text-danger-900",
          "bg-transparent hover:bg-danger-50 active:bg-danger-100",
          "border-transparent hover:border-danger-50 active:border-danger-100",
        ],
      },

      // rectangle button (e.g: Button)
      { isSquare: false, isFullWidth: false, class: "w-auto" },
      { size: "sm", isSquare: false, class: "px-3.5" },
      { size: "md", isSquare: false, class: "px-4" },
      { size: "lg", isSquare: false, class: "px-[18px]" },
      { size: "xl", isSquare: false, class: "px-5" },
      { size: "2xl", isSquare: false, class: "px-6" },

      // square button (e.g: IconButton)
      { size: "sm", isSquare: true, isFullWidth: false, class: "w-9" },
      { size: "md", isSquare: true, isFullWidth: false, class: "w-10" },
      { size: "lg", isSquare: true, isFullWidth: false, class: "w-11" },
      { size: "xl", isSquare: true, isFullWidth: false, class: "w-12" },
      { size: "2xl", isSquare: true, isFullWidth: false, class: "w-14" },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "primary",
      size: "md",
      rounded: "md",
      isSquare: false,
      isFullWidth: false,
    },
  }
);

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

export interface ButtonProps
  extends KButton.ButtonRootOptions,
    VariantProps<typeof buttonVariants> {
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
      ["variant", "colorScheme", "size", "rounded", "isSquare", "isFullWidth"],
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
      <KButton.Root class={clsx(buttonVariants(variantProps), local.class)} {...others}>
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

  return <span aria-hidden="true" class={clsx("shrink-0 reset-svg", local.class)} {...others} />;
}

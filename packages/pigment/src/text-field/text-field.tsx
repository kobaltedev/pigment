import { Polymorphic, TextField as KTextField } from "@kobalte/core";
import { mergeDefaultProps } from "@kobalte/utils";
import {
  ComponentProps,
  createMemo,
  JSX,
  Match,
  mergeProps,
  Show,
  splitProps,
  Switch,
} from "solid-js";

import { TablerAlertCircleFilledIcon } from "../icon";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { InputAddonProps, TextFieldProps, TextFieldSlots } from "./text-field.props";
import { inputAddonStyles, textFieldStyles } from "./text-field.styles";

const textFieldStaticClass = makeStaticClass<TextFieldSlots>("text-field");

function getDefaultInputPaddingInline(size: TextFieldProps["size"], hasIcon: boolean) {
  switch (size) {
    case "md":
    default:
      return hasIcon ? "2.5rem" : "0.75rem";
  }
}

export function TextField(props: TextFieldProps) {
  props = mergeThemeProps(
    "TextField",
    {
      type: "text",
      size: "md",
      invalid: false,
      disabled: false,
      inputProps: {},
      errorIcon: () => <TablerAlertCircleFilledIcon />,
    },
    props
  );

  const themeClasses = useThemeClasses<TextFieldSlots>("TextField", props);

  const [local, partialVariantProps, others] = splitProps(
    props,
    [
      "ref",
      "id",
      "class",
      "slotClasses",
      "inputProps",
      "type",
      "placeholder",
      "multiline",
      "invalid",
      "label",
      "description",
      "errorMessage",
      "errorIcon",
      "leadingIcon",
      "trailingIcon",
      "leadingSection",
      "trailingSection",
      "leadingSectionWidth",
      "trailingSectionWidth",
      "leadingAddon",
      "trailingAddon",
    ],
    ["size"]
  );

  const label = createMemo(() => local.label as unknown as JSX.Element);
  const description = createMemo(() => local.description as unknown as JSX.Element);
  const errorMessage = createMemo(() => local.errorMessage as unknown as JSX.Element);
  const leadingIcon = createMemo(() => local.leadingIcon as unknown as JSX.Element);
  const trailingIcon = createMemo(() => local.trailingIcon as unknown as JSX.Element);
  const leadingSection = createMemo(() => local.leadingSection as unknown as JSX.Element);
  const trailingSection = createMemo(() => local.trailingSection as unknown as JSX.Element);
  const leadingAddon = createMemo(() => local.leadingAddon as unknown as JSX.Element);
  const trailingAddon = createMemo(() => local.trailingAddon as unknown as JSX.Element);

  const variantProps = mergeProps(
    {
      get hasLeadingAddon() {
        return leadingAddon() != null;
      },
      get hasTrailingAddon() {
        return trailingAddon() != null;
      },
    },
    partialVariantProps
  );

  const inputPaddingInlineStart = createMemo(() => {
    return (
      local.leadingSectionWidth ?? getDefaultInputPaddingInline(variantProps.size, !!leadingIcon())
    );
  });

  const inputPaddingInlineEnd = createMemo(() => {
    return (
      local.trailingSectionWidth ??
      getDefaultInputPaddingInline(variantProps.size, !!trailingIcon())
    );
  });

  const styles = createMemo(() => textFieldStyles(variantProps));

  return (
    <KTextField.Root
      class={styles().root({
        class: [
          textFieldStaticClass("root"),
          themeClasses.root,
          local.slotClasses?.root,
          local.class,
        ],
      })}
      validationState={local.invalid ? "invalid" : undefined}
      {...others}
    >
      <Show when={label()}>
        <KTextField.Label
          class={styles().label({
            class: [
              description() ? "" : "mb-1",
              textFieldStaticClass("label"),
              themeClasses.label,
              local.slotClasses?.label,
            ],
          })}
        >
          {label()}
          <Show when={others.required}>
            <span class="text-content-danger ui-group-disabled:text-content-disabled ml-0.5">
              *
            </span>
          </Show>
        </KTextField.Label>
      </Show>
      <Show when={description()}>
        <KTextField.Description
          class={styles().supportText({
            class: [
              "text-content-subtle mb-1",
              textFieldStaticClass("description"),
              themeClasses.description,
              local.slotClasses?.description,
            ],
          })}
        >
          {description()}
        </KTextField.Description>
      </Show>
      <Show
        when={!local.multiline}
        fallback={
          <KTextField.TextArea
            {...(local.inputProps as ComponentProps<"textarea">)}
            ref={local.ref as HTMLTextAreaElement}
            id={local.id}
            placeholder={local.placeholder}
            class={styles().textArea({
              class: [
                textFieldStaticClass("input"),
                themeClasses.input,
                local.slotClasses?.input,
                local.inputProps?.class,
              ],
            })}
          />
        }
      >
        <div class="flex items-stretch self-stretch">
          {leadingAddon()}
          <div
            class="relative grow"
            style={{
              "--pg-text-field-input-ps": inputPaddingInlineStart(),
              "--pg-text-field-input-pe": inputPaddingInlineEnd(),
            }}
          >
            <KTextField.Input
              {...(local.inputProps as ComponentProps<"input">)}
              ref={local.ref as HTMLInputElement}
              id={local.id}
              type={local.type}
              placeholder={local.placeholder}
              class={styles().input({
                class: [
                  textFieldStaticClass("input"),
                  themeClasses.input,
                  local.slotClasses?.input,
                  local.inputProps?.class,
                ],
              })}
            />
            <Switch>
              <Match when={leadingSection()}>
                <div
                  data-invalid={local.invalid ? "" : undefined}
                  data-disabled={others.disabled ? "" : undefined}
                  class="absolute inset-y-0 start-0"
                >
                  {leadingSection()}
                </div>
              </Match>
              <Match when={leadingIcon()}>
                <div
                  aria-hidden="true"
                  data-invalid={local.invalid ? "" : undefined}
                  data-disabled={others.disabled ? "" : undefined}
                  class={styles().leadingIcon({
                    class: [
                      textFieldStaticClass("leadingIcon"),
                      themeClasses.leadingIcon,
                      local.slotClasses?.leadingIcon,
                    ],
                  })}
                >
                  {leadingIcon()}
                </div>
              </Match>
            </Switch>
            <Switch>
              <Match when={trailingSection()}>
                <div
                  data-invalid={local.invalid ? "" : undefined}
                  data-disabled={others.disabled ? "" : undefined}
                  class="absolute inset-y-0 end-0"
                >
                  {trailingSection()}
                </div>
              </Match>
              <Match when={trailingIcon()}>
                <div
                  aria-hidden="true"
                  data-invalid={local.invalid ? "" : undefined}
                  data-disabled={others.disabled ? "" : undefined}
                  class={styles().trailingIcon({
                    class: [
                      textFieldStaticClass("trailingIcon"),
                      themeClasses.trailingIcon,
                      local.slotClasses?.trailingIcon,
                    ],
                  })}
                >
                  {trailingIcon()}
                </div>
              </Match>
            </Switch>
          </div>
          {trailingAddon()}
        </div>
      </Show>
      <Show when={local.invalid && errorMessage()}>
        <KTextField.ErrorMessage
          class={styles().supportText({
            class: [
              "flex items-center gap-x-1 text-content-danger mt-1.5",
              textFieldStaticClass("errorMessage"),
              themeClasses.errorMessage,
              local.slotClasses?.errorMessage,
            ],
          })}
        >
          <div
            aria-hidden="true"
            class={styles().errorIcon({
              class: [
                textFieldStaticClass("errorIcon"),
                themeClasses.errorIcon,
                local.slotClasses?.errorIcon,
              ],
            })}
          >
            {local.errorIcon as unknown as JSX.Element}
          </div>
          {errorMessage()}
        </KTextField.ErrorMessage>
      </Show>
    </KTextField.Root>
  );
}

export function InputAddon(props: InputAddonProps) {
  props = mergeDefaultProps(
    {
      size: "md",
      trailing: false,
    },
    props
  );

  const [local, variantProps, others] = splitProps(props, ["class"], ["size", "trailing"]);

  const styles = createMemo(() => inputAddonStyles(variantProps));

  return <Polymorphic as="div" class={styles().root({ class: local.class })} {...others} />;
}

import {
  TextField as KTextField,
  TextFieldInputProps,
  TextFieldTextAreaProps,
} from "@kobalte/core/text-field";
import { isString } from "@kobalte/utils";
import {
  createMemo,
  JSX,
  Match,
  mergeProps,
  Show,
  splitProps,
  Switch,
  ValidComponent,
} from "solid-js";

import { TablerAlertCircleFilledIcon } from "../icon";
import { InputAddon } from "../input";
import { mergeThemeProps, useThemeClasses } from "../theme";
import { makeStaticClass } from "../utils/make-static-class";
import { TextFieldProps, TextFieldSlots } from "./text-field.props";
import { textFieldStyles } from "./text-field.styles";
import { PolymorphicProps } from "@kobalte/core/polymorphic";

const textFieldStaticClass = makeStaticClass<TextFieldSlots>("text-field");

export function TextField<T extends ValidComponent = "div">(
  props: PolymorphicProps<T, TextFieldProps<T>>
) {
  const mergedProps = mergeThemeProps(
    "TextField",
    {
      type: "text",
      size: "md",
      invalid: false,
      disabled: false,
      inputProps: {},
      errorIcon: () => <TablerAlertCircleFilledIcon />,
    },
    props as TextFieldProps
  );

  const themeClasses = useThemeClasses<TextFieldSlots>("TextField", mergedProps);

  const [local, partialVariantProps, others] = splitProps(
    mergedProps,
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
      get hasLeadingIcon() {
        return leadingIcon() != null;
      },
      get hasTrailingIcon() {
        return trailingIcon() != null;
      },
      get hasLeadingAddon() {
        return leadingAddon() != null;
      },
      get hasTrailingAddon() {
        return trailingAddon() != null;
      },
    },
    partialVariantProps
  );

  const styles = createMemo(() => textFieldStyles(variantProps));

  const stateDataAttrs = createMemo(() => ({
    "data-invalid": local.invalid ? "" : undefined,
    "data-disabled": others.disabled ? "" : undefined,
  }));

  return (
    <KTextField
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
            {...(local.inputProps as TextFieldTextAreaProps)}
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
          <Show when={isString(leadingAddon())} fallback={leadingAddon()}>
            <InputAddon size={variantProps.size} placement="leading" {...stateDataAttrs}>
              {leadingAddon()}
            </InputAddon>
          </Show>
          <div
            class="relative grow"
            style={{
              "--pg-text-field-leading-section-width": `${local.leadingSectionWidth ?? 0}px`,
              "--pg-text-field-trailing-section-width": `${local.trailingSectionWidth ?? 0}px`,
            }}
          >
            <KTextField.Input
              {...(local.inputProps as TextFieldInputProps)}
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
                  class={styles().leadingSection({
                    class: [
                      textFieldStaticClass("leadingSection"),
                      themeClasses.leadingSection,
                      local.slotClasses?.leadingSection,
                    ],
                  })}
                  {...stateDataAttrs}
                >
                  {leadingSection()}
                </div>
              </Match>
              <Match when={leadingIcon()}>
                <div
                  aria-hidden="true"
                  class={styles().leadingIcon({
                    class: [
                      textFieldStaticClass("leadingIcon"),
                      themeClasses.leadingIcon,
                      local.slotClasses?.leadingIcon,
                    ],
                  })}
                  {...stateDataAttrs}
                >
                  {leadingIcon()}
                </div>
              </Match>
            </Switch>
            <Switch>
              <Match when={trailingSection()}>
                <div
                  class={styles().trailingSection({
                    class: [
                      textFieldStaticClass("trailingSection"),
                      themeClasses.trailingSection,
                      local.slotClasses?.trailingSection,
                    ],
                  })}
                  {...stateDataAttrs}
                >
                  {trailingSection()}
                </div>
              </Match>
              <Match when={trailingIcon()}>
                <div
                  aria-hidden="true"
                  class={styles().trailingIcon({
                    class: [
                      textFieldStaticClass("trailingIcon"),
                      themeClasses.trailingIcon,
                      local.slotClasses?.trailingIcon,
                    ],
                  })}
                  {...stateDataAttrs}
                >
                  {trailingIcon()}
                </div>
              </Match>
            </Switch>
          </div>
          <Show when={isString(trailingAddon())} fallback={trailingAddon()}>
            <InputAddon size={variantProps.size} placement="trailing" {...stateDataAttrs}>
              {trailingAddon()}
            </InputAddon>
          </Show>
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
            {...stateDataAttrs}
          >
            {local.errorIcon as unknown as JSX.Element}
          </div>
          {errorMessage()}
        </KTextField.ErrorMessage>
      </Show>
    </KTextField>
  );
}

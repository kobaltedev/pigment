import type { Meta, StoryObj } from "@storybook/html";
import type { ComponentProps } from "solid-js";

import { Badge } from "../badge";
import { InfoCircleIcon } from "../icons";
import { Select } from "./select";
import { SelectProps } from "./select.props";

type Story = StoryObj<SelectProps<any, any>>;

export default {
  title: "Select",
  argTypes: {
    variant: {
      options: ["soft", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
    },
    withDropdownIcon: {
      control: { type: "boolean" },
    },
    hasErrorIcon: {
      control: { type: "boolean" },
    },
    invalid: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    disallowEmptySelection: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
  },
  render: props => <Select {...props} />,
} as Meta<ComponentProps<typeof Select>>;

export const Default: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withDropdownIcon: true,
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
  },
};

export const WithDecorator: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withDropdownIcon: true,
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: ["Apple", "Banana", "Blueberry", "Grapes", "Pineapple"],
    startDecorator: () => <InfoCircleIcon class="h-4 w-4 mx-2.5" />,
    endDecorator: () => (
      <Badge size="sm" variant="soft" color="danger" class="mx-2.5">
        +5
      </Badge>
    ),
  },
};

export const WithObject: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withDropdownIcon: true,
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    allowEmptySelection: false,
    placeholder: "Select a fruit",
    label: "Fruit",
    description: "Choose wisely.",
    error: "Please select a fruit.",
    options: [
      { value: "apple", label: "Apple", disabled: false },
      { value: "banana", label: "Banana", disabled: false },
      { value: "blueberry", label: "Blueberry", disabled: false },
      { value: "grapes", label: "Grapes", disabled: true },
      { value: "pineapple", label: "Pineapple", disabled: false },
    ],
  },
};

export const WithOptionGroup: Story = {
  args: {
    variant: "outlined",
    size: "md",
    withDropdownIcon: true,
    withErrorIcon: true,
    invalid: false,
    required: false,
    disabled: false,
    allowEmptySelection: false,
    placeholder: "Select a food",
    label: "Food",
    description: "Choose wisely.",
    error: "Please select a food.",
    options: [
      {
        label: "Fruits",
        options: [
          { value: "apple", label: "Apple", disabled: false },
          { value: "banana", label: "Banana", disabled: false },
          { value: "blueberry", label: "Blueberry", disabled: false },
          { value: "grapes", label: "Grapes", disabled: false },
          { value: "pineapple", label: "Pineapple", disabled: false },
        ],
      },
      {
        label: "Meat",
        options: [
          { value: "beef", label: "Beef", disabled: false },
          { value: "chicken", label: "Chicken", disabled: false },
          { value: "lamb", label: "Lamb", disabled: false },
          { value: "pork", label: "Pork", disabled: false },
        ],
      },
    ],
  },
};

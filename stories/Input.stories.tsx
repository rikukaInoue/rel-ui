import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@rel-ui/components";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isDisabled: { control: "boolean" },
    isRequired: { control: "boolean" },
    isInvalid: { control: "boolean" },
  },
  args: {
    label: "Label",
    placeholder: "Placeholder",
    inputSize: "md",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "Email", placeholder: "you@example.com" },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "you@example.com",
    isInvalid: true,
    errorMessage: "有効なメールアドレスを入力してください",
  },
};

export const Required: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    isRequired: true,
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled",
    isDisabled: true,
  },
};

export const Small: Story = {
  args: { label: "Search", inputSize: "sm", placeholder: "Search..." },
};

export const Large: Story = {
  args: { label: "Name", inputSize: "lg", placeholder: "Full name" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "320px" }}>
      <Input label="Small" inputSize="sm" placeholder="Small input" />
      <Input label="Medium" inputSize="md" placeholder="Medium input" />
      <Input label="Large" inputSize="lg" placeholder="Large input" />
    </div>
  ),
};

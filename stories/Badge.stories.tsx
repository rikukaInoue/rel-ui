import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@rel-ui/components";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "error", "info"],
    },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Success: Story = {
  args: { variant: "success", children: "Active" },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Pending" },
};

export const Error: Story = {
  args: { variant: "error", children: "Failed" },
};

export const Info: Story = {
  args: { variant: "info", children: "Info" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Badge>Default</Badge>
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Failed</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

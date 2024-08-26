import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["neutral", "error", "warning", "success", "brand"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {
  args: {
    label: "Label",
    variant: "neutral",
    size: "sm",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
}

export const Error: Story = {
  args: {
    label: "Label",
    variant: "error",
    size: "sm",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
}

export const Warning: Story = {
  args: {
    label: "Label",
    variant: "warning",
    size: "sm",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
}

export const Success: Story = {
  args: {
    label: "Label",
    variant: "success",
    size: "sm",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
}

export const Brand: Story = {
  args: {
    label: "Label",
    variant: "brand",
    size: "sm",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
      <Badge {...args} size="sm" />
      <Badge {...args} size="md" />
      <Badge {...args} size="lg" />
    </div>
  ),
}

import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "linkColor",
        "linkGray",
        "destructive",
      ],
    },
    size: {
      control: "select",
      options: ["md", "lg", "xl", "xxl"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
        <Button {...args} size="xxl" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" text="" />
        <Button {...args} size="lg" text="" />
        <Button {...args} size="xl" text="" />
        <Button {...args} size="xxl" text="" />
      </div>
    </div>
  ),
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
        <Button {...args} size="xxl" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" text="" />
        <Button {...args} size="lg" text="" />
        <Button {...args} size="xl" text="" />
        <Button {...args} size="xxl" text="" />
      </div>
    </div>
  ),
}

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
        <Button {...args} size="xxl" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" text="" />
        <Button {...args} size="lg" text="" />
        <Button {...args} size="xl" text="" />
        <Button {...args} size="xxl" text="" />
      </div>
    </div>
  ),
}

export const LinkColor: Story = {
  args: {
    variant: "linkColor",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
      <Button {...args} size="xxl" />
    </div>
  ),
}

export const LinkGray: Story = {
  args: {
    variant: "linkGray",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
      <Button {...args} size="xxl" />
    </div>
  ),
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    text: "Button CTA",
    size: "md",
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" />
        <Button {...args} size="lg" />
        <Button {...args} size="xl" />
        <Button {...args} size="xxl" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button {...args} size="md" text="" />
        <Button {...args} size="lg" text="" />
        <Button {...args} size="xl" text="" />
        <Button {...args} size="xxl" text="" />
      </div>
    </div>
  ),
}

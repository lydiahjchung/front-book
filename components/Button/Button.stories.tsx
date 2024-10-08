import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import { StarIcon } from "@public/icons/Icon"

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
    ariaLabel: "Button CTA",
    variant: "primary",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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
    ariaLabel: "Button CTA",
    variant: "secondary",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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
    ariaLabel: "Button CTA",
    variant: "tertiary",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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
    ariaLabel: "Button CTA",
    variant: "linkColor",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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
    ariaLabel: "Button CTA",
    variant: "linkGray",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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
    ariaLabel: "Button CTA",
    variant: "destructive",
    text: "Button CTA",
    size: "md",
    icon: <StarIcon />,
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

import type { Meta, StoryObj } from "@storybook/react"
// import { fn } from "@storybook/test"
import { Button } from "./Button"

const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  // args: {
  //   onClick: fn(),
  // },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: "Primary Button",
    type: "primary",
  },
}

export const Secondary: Story = {
  args: {
    text: "Secondary Button",
    type: "secondary",
  },
}

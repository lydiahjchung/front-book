import type { Meta, StoryObj } from "@storybook/react"
import { TestimonialCard } from "./TestimonialCard"

const meta = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    handle: { control: "text" },
    text: { control: "text" },
  },
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "gradient",
      values: [
        {
          name: "gradient",
          value: "linear-gradient(to bottom right, #F9FAFB, #D2D6DB)",
        },
        { name: "light", value: "#f0f0f0" },
        { name: "dark", value: "#121212" },
      ],
    },
  },
} satisfies Meta<typeof TestimonialCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Sarah Dole",
    handle: "@sarahdole",
    text: "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
}

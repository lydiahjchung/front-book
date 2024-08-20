import type { Meta, StoryObj } from "@storybook/react"
import { ProfileCard } from "./ProfileCard"

const meta = {
  title: "Components/ProfileCard",
  component: ProfileCard,
  tags: ["autodocs"],
  argTypes: {
    name: { control: "text" },
    title: { control: "text" },
    company: { control: "text" },
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
} satisfies Meta<typeof ProfileCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: "Sarah Dole",
    title: "Front End Engineer",
    company: "Microsoft",
    text: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  },
}

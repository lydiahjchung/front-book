import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { TestimonialCard } from "./TestimonialCard"

describe("Testimonial Card", () => {
  test("Render Sarah Dole", () => {
    render(
      <TestimonialCard
        name="Jane Doe"
        handle="@janedoe"
        text="I'm testing this component rendering."
      />,
    )

    const name = screen.getByText("Jane Doe")
    const handle = screen.getByText("@janedoe")
    const text = screen.getByText("I'm testing this component rendering.")

    expect(name).toBeInTheDocument()
    expect(handle).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})

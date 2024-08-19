import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "./Button"

describe("Render Button Component", () => {
  test("Render Primary Button with correct text", () => {
    render(<Button variant="primary" size="lg" text="Click me" />)
    const button = screen.getByRole("button", { name: /Click me/i })
    expect(button).toBeInTheDocument()
  })

  test("Button has correct size classes", () => {
    render(<Button variant="primary" size="xl" text="Large Button" />)
    const button = screen.getByRole("button", { name: /Large Button/i })
    expect(button).toHaveClass("text-base px-5 py-3")
  })

  test("Button has correct variant classes", () => {
    render(<Button variant="secondary" size="md" text="Secondary Button" />)
    const button = screen.getByRole("button", { name: /Secondary Button/i })
    expect(button).toHaveClass(
      "bg-white text-black border-[0.5px] border-solid border-neutral-200",
    )
  })

  test("Button changes style on hover", async () => {
    render(<Button variant="primary" size="md" text="Hover Me" />)
    const button = screen.getByRole("button", { name: /Hover Me/i })

    await userEvent.hover(button)
    expect(button).toHaveClass("hover:bg-indigo-800")
  })

  test("Button changes style on focus", async () => {
    render(<Button variant="primary" size="md" text="Focus Me" />)
    const button = screen.getByRole("button", { name: /Focus Me/i })

    await userEvent.tab()
    expect(button).toHaveFocus()
    expect(button).toHaveClass(
      "focus:bg-indigo-800 focus:ring-4 focus:ring-[#444CE7]/10",
    )
  })

  test("Disabled button has correct styles", () => {
    render(
      <Button variant="primary" size="md" text="Disabled Button" disabled />,
    )
    const button = screen.getByRole("button", { name: /Disabled Button/i })

    expect(button).toBeDisabled()
    expect(button).toHaveClass(
      "disabled:bg-neutral-100 disabled:text-neutral-400",
    )
  })
})

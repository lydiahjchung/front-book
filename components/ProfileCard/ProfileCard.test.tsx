import { describe, expect, test, beforeEach, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ProfileCard } from "./ProfileCard"

describe("ProfileCard", () => {
  const mockProps = {
    name: "John Doe",
    title: "Software Engineer",
    company: "Tech Corp",
    text: "Passionate about coding and technology",
  }

  beforeEach(() => {
    render(<ProfileCard {...mockProps} />)
  })

  test("renders name, title, company, and text correctly", () => {
    expect(screen.getByText(mockProps.name)).toBeInTheDocument()
    expect(
      screen.getByText(`${mockProps.title} @ ${mockProps.company}`),
    ).toBeInTheDocument()
    expect(screen.getByText(mockProps.text)).toBeInTheDocument()
  })

  test('renders "Contact me" button', () => {
    expect(screen.getByText("Contact me")).toBeInTheDocument()
  })

  test("renders social media icons", () => {
    expect(screen.getByRole("button", { name: "GitHub" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "LinkedIn" })).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "Instagram" }),
    ).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument()
  })

  test("clicking on GitHub icon opens correct URL", async () => {
    const user = userEvent.setup()
    window.open = vi.fn()
    await user.click(screen.getByRole("button", { name: "GitHub" }))
    expect(window.open).toHaveBeenCalledWith("https://github.com/", "_blank")
  })

  test("clicking on LinkedIn icon opens correct URL", async () => {
    const user = userEvent.setup()
    window.open = vi.fn()
    await user.click(screen.getByRole("button", { name: "LinkedIn" }))
    expect(window.open).toHaveBeenCalledWith(
      "https://www.linkedin.com/",
      "_blank",
    )
  })

  test("clicking on Instagram icon opens correct URL", async () => {
    const user = userEvent.setup()
    window.open = vi.fn()
    await user.click(screen.getByRole("button", { name: "Instagram" }))
    expect(window.open).toHaveBeenCalledWith(
      "https://www.instagram.com/",
      "_blank",
    )
  })

  test("clicking on X icon opens correct URL", async () => {
    const user = userEvent.setup()
    window.open = vi.fn()
    await user.click(screen.getByRole("button", { name: "X" }))
    expect(window.open).toHaveBeenCalledWith("https://www.x.com/", "_blank")
  })
})

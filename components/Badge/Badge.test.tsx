import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { Badge } from "./Badge"

describe("Render Badge Component", () => {
  test("Render Neutral Badge with correct text", () => {
    render(<Badge label="Label" variant="neutral" size="md" />)
    const badge = screen.getByText("Label")
    expect(badge).toBeInTheDocument()
  })

  test("Badge has correct size classes", () => {
    render(<Badge label="Small Badge" variant="neutral" size="sm" />)
    const badge = screen.getByText("Small Badge")
    expect(badge.parentElement).toHaveClass("px-1.5 py-0.5")
    expect(badge).toHaveClass("text-xs")
  })

  test("Badge has correct variant classes", () => {
    render(<Badge label="Error Badge" variant="error" size="md" />)
    const badge = screen.getByText("Error Badge")
    expect(badge.parentElement).toHaveClass("bg-red-50 border-red-200")
    expect(badge).toHaveClass("text-red-600")
  })

  test("Badge renders with different variants", () => {
    const { rerender } = render(
      <Badge label="Test" variant="neutral" size="md" />,
    )
    expect(screen.getByTestId("badge-container")).toHaveClass("bg-gray-50")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-neutral-600")

    rerender(<Badge label="Test" variant="error" size="md" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("bg-red-50")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-red-600")

    rerender(<Badge label="Test" variant="warning" size="md" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("bg-amber-50")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-amber-700")

    rerender(<Badge label="Test" variant="success" size="md" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("bg-green-50")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-green-700")

    rerender(<Badge label="Test" variant="brand" size="md" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("bg-indigo-50")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-indigo-700")
  })

  test("Badge renders with different sizes", () => {
    const { rerender } = render(
      <Badge label="Test" variant="neutral" size="sm" />,
    )
    expect(screen.getByTestId("badge-container")).toHaveClass("px-1.5 py-0.5")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-xs")

    rerender(<Badge label="Test" variant="neutral" size="md" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("px-2 py-0.5")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-sm")

    rerender(<Badge label="Test" variant="neutral" size="lg" />)
    expect(screen.getByTestId("badge-container")).toHaveClass("px-2.5 py-1")
    expect(screen.getByTestId("badge-label")).toHaveClass("text-sm")
  })

  test("Badge applies custom className", () => {
    render(
      <Badge
        label="Custom Badge"
        variant="neutral"
        size="md"
        className="custom-class"
      />,
    )
    const badge = screen.getByTestId("badge-container")
    expect(badge).toHaveClass("custom-class")
  })
})

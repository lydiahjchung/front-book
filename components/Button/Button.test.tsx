import { describe, expect, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
  const variants = [
    "primary",
    "secondary",
    "tertiary",
    "linkColor",
    "linkGray",
    "destructive",
  ] as const
  const sizes = ["md", "lg", "xl", "xxl"] as const

  variants.forEach((variant) => {
    describe(`${variant} variant`, () => {
      sizes.forEach((size) => {
        test(`renders ${variant} button with ${size} size`, () => {
          render(
            <Button
              variant={variant}
              size={size}
              text={`${variant} ${size} button`}
            />,
          )

          const button = screen.getByRole("button", {
            name: `${variant} ${size} button`,
          })
          expect(button).toBeInTheDocument()
          expect(button).toHaveClass(`button-${variant}`)
          expect(button).toHaveClass(`button-${size}`)
        })
      })

      test(`renders ${variant} button without text (icon-only)`, () => {
        render(<Button variant={variant} text="" />)
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass(`button-${variant}`)
        expect(button).toHaveClass("button-icon-only")
      })
    })
  })

  test("renders disabled button", () => {
    render(<Button text="Disabled Button" disabled />)
    const button = screen.getByRole("button", { name: "Disabled Button" })
    expect(button).toBeDisabled()
  })

  // Add more specific tests if needed
})

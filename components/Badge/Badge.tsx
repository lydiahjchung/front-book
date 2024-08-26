import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@utils/cn"

const BadgeVariants = cva(
  "flex items-center rounded-full border border-solid",
  {
    variants: {
      variant: {
        neutral: "bg-gray-50 border-neutral-200",
        error: "bg-red-50 border-red-200",
        warning: "bg-amber-50 border-amber-200",
        success: "bg-green-50 border-green-200",
        brand: "bg-indigo-50 border-indigo-200",
      },
      size: {
        sm: "px-1.5 py-0.5",
        md: "px-2 py-0.5",
        lg: "px-2.5 py-1",
      },
    },
  },
)

const BadgeLabelVariants = cva("font-normal text-center", {
  variants: {
    variant: {
      neutral: "text-neutral-600",
      error: "text-red-600",
      warning: "text-amber-700",
      success: "text-green-700",
      brand: "text-indigo-700",
    },
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-sm",
    },
  },
})

export interface BadgeProps {
  label: string
  variant: VariantProps<typeof BadgeVariants>["variant"]
  size: VariantProps<typeof BadgeLabelVariants>["size"]
  className?: string
}

export const Badge = ({ label, variant, size, className }: BadgeProps) => {
  return (
    <div
      className={cn(BadgeVariants({ variant, size }), className)}
      data-testid="badge-container"
    >
      <span
        className={cn(BadgeLabelVariants({ variant, size }))}
        data-testid="badge-label"
      >
        {label}
      </span>
    </div>
  )
}

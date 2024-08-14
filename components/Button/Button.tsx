import StarIcon from "@public/icons/StarIcon"

import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@utils/cn"

const ButtonVariants = cva(
  "flex justify-center items-center rounded font-body w-fit h-fit",
  {
    variants: {
      variant: {
        primary:
          "bg-indigo-700 text-white drop-shadow hover:bg-indigo-800 hover:drop-shadow focus:bg-indigo-800 focus:ring-4 focus:ring-[#444CE7]/10 disabled:bg-neutral-100 disabled:text-neutral-400",
        secondary:
          "bg-white text-black border-[0.5px] border-solid border-neutral-200 drop-shadow hover:bg-neutral-50 hover:drop-shadow focus:bg-neutral-50 focus:ring-4 focus:ring-[#444CE7]/10 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-none",
        tertiary:
          "text-indigo-700 hover:bg-neutral-50 focus:bg-neutral-50 focus:ring-4 focus:ring-[#444CE7]/10 disabled:text-neutral-400",
        linkColor:
          "text-indigo-700 hover:text-indigo-800 focus:text-indigo-800 focus:ring-4 focus:ring-[#444CE7]/10 disabled:text-neutral-400",
        linkGray:
          "text-neutral-600 hover:text-neutral-900 focus:text-neutral-900 focus:ring-4 focus:ring-[#444CE7]/10 disabled:text-neutral-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 focus:border-[1px] focus:border-solid focus:border-[#D92D20] focus:ring-4 focus:ring-[#D92D20]/10 disabled:text-neutral-40",
      },
      size: {
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
        xxl: "text-lg",
      },
      hasText: {
        true: "",
        false: "gap-2",
      },
    },
    compoundVariants: [
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "md",
        hasText: true,
        className: "px-3.5 py-2.5 gap-1",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "lg",
        hasText: true,
        className: "px-4 py-2.5 gap-1.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xl",
        hasText: true,
        className: "px-5 py-3 gap-1.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xxl",
        hasText: true,
        className: "px-6 py-4 gap-2.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "md",
        hasText: false,
        className: "p-2.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "lg",
        hasText: false,
        className: "p-3",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xl",
        hasText: false,
        className: "p-3.5",
      },
      {
        variant: ["primary", "secondary", "tertiary", "destructive"],
        size: "xxl",
        hasText: false,
        className: "p-4",
      },
      {
        variant: ["linkColor", "linkGray"],
        size: "md",
        hasText: true,
        className: "px-0.5 gap-1",
      },
      {
        variant: ["linkColor", "linkGray"],
        size: "lg",
        hasText: true,
        className: "px-0.5 gap-1.5",
      },
      {
        variant: ["linkColor", "linkGray"],
        size: "xl",
        hasText: true,
        className: "px-0.5 gap-1.5",
      },
      {
        variant: ["linkColor", "linkGray"],
        size: "xxl",
        hasText: true,
        className: "px-0.5 gap-2.5",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

export interface ButtonProps {
  text: string
  variant: VariantProps<typeof ButtonVariants>["variant"]
  size: VariantProps<typeof ButtonVariants>["size"]
  onClick?: () => void
  disabled?: boolean
}

export const Button = ({
  text,
  variant,
  size,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={cn(ButtonVariants({ variant, size, hasText: text !== "" }))}
      onClick={onClick}
      disabled={disabled}
    >
      {text ? (
        <>
          <StarIcon />
          {text}
          <StarIcon />
        </>
      ) : (
        <StarIcon />
      )}
    </button>
  )
}

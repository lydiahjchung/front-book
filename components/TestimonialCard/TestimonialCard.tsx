export interface TestimonialCardProps {
  name: string
  handle: string
  text: string
}

export const TestimonialCard = ({
  name,
  handle,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="font-body flex flex-col bg-white w-[340px] p-[24px] gap-[16px] rounded-lg shadow">
      <div className="flex flex-row gap-[16px]">
        <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
          <img src="imgs/profile-thumbnail.webp" alt="thumbnail" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-neutral-900">{name}</span>
          <span className="text-sm text-neutral-600">{handle}</span>
        </div>
      </div>
      <p className="text-base text-neutral-600">{text}</p>
    </div>
  )
}

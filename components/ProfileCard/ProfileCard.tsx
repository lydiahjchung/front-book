import { Button } from "@components/Button/Button"
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "@public/icons/Icon"

export interface ProfileCardProps {
  name: string
  title: string
  company: string
  text: string
}

const CardDetails = ({ name, title, company, text }: ProfileCardProps) => {
  return (
    <div className="font-body flex flex-col justify-center items-center gap-[24px]">
      <div className="flex w-[64x] h-[64px] rounded-full overflow-hidden">
        <img src="imgs/profile.webp" alt="profile" />
      </div>
      <div className="flex flex-col gap-[4px]">
        <span className="font-medium text-xl text-center text-neutral-900">
          {name}
        </span>
        <span className="font-normal text-sm text-center text-neutral-600">
          {title} @ {company}
        </span>
      </div>
      <span className="font-normal text-base text-center text-neutral-600">
        {text}
      </span>
    </div>
  )
}

const CardActions = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <Button
        ariaLabel="Contact me"
        variant="primary"
        size="lg"
        text="Contact me"
        className="w-full"
      />
      <div className="flex flex-row justify-center gap-[16px]">
        <Button
          ariaLabel="GitHub"
          variant="tertiary"
          size="lg"
          className="p-[8px]"
          icon={<GithubIcon />}
          onClick={() => window.open("https://github.com/", "_blank")}
        />
        <Button
          ariaLabel="LinkedIn"
          variant="tertiary"
          size="lg"
          className="p-[8px]"
          icon={<LinkedinIcon />}
          onClick={() => window.open("https://www.linkedin.com/", "_blank")}
        />
        <Button
          ariaLabel="Instagram"
          variant="tertiary"
          size="lg"
          className="p-[8px]"
          icon={<InstagramIcon />}
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        />
        <Button
          ariaLabel="X"
          variant="tertiary"
          size="lg"
          className="p-[8px]"
          icon={<XIcon />}
          onClick={() => window.open("https://www.x.com/", "_blank")}
        />
      </div>
    </div>
  )
}

export const ProfileCard = ({
  name,
  title,
  company,
  text,
}: ProfileCardProps) => {
  return (
    <div className="flex flex-col gap-[40px] bg-white w-[340px] px-4 py-6 rounded-lg shadow">
      <CardDetails name={name} title={title} company={company} text={text} />
      <CardActions />
    </div>
  )
}

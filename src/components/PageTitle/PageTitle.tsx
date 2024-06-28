import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react"
import { usePageTitle } from "@/hooks";

interface IPageTitle extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
}

export const PageTitle: FC<IPageTitle> = ({ ...props }): ReactElement<HTMLHeadingElement> => {
  const title = usePageTitle();
  return (
    <h1 className="text-4xl font-semibold text-left text-light-grey m-0" {...props}>
      {title}
    </h1>
  )
}
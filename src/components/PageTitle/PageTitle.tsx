import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react"
import { usePageTitle } from "@/hooks";
import cn from "classnames";

interface IPageTitle extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
}

export const PageTitle: FC<IPageTitle> = ({ className, ...props }): ReactElement<HTMLHeadingElement> => {
  const title = usePageTitle();
  return (
    <h1 className={cn(className, "text-xl font-medium md:text-4xl md:font-semibold text-left text-light-grey m-0")} {...props}>
      {title}
    </h1>
  )
}
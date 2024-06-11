import { DetailedHTMLProps, FC, HTMLAttributes, ReactElement } from "react"
import styles from "./PageTitle.module.scss";
import { usePageTitle } from "@/helpers/getTitle";

interface IPageTitle extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
}

export const PageTitle: FC<IPageTitle> = ({ ...props }): ReactElement<HTMLHeadingElement> => {
  const title = usePageTitle();
  return (
    <h1 className={styles.h1} {...props}>
      {title}
    </h1>
  )
}
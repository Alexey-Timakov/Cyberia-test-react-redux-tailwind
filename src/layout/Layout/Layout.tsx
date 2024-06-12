import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Footer, Header } from "@/layout";
import cn from "classnames";
import styles from "./Layout.module.scss";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

interface ILayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout = ({ children, className, ...props }: ILayout) => {
  return <div className={cn(styles.layout, className)} {...props}>
    <Header className={styles.header} />
    <div className={styles.body}>
      <Breadcrumbs />
      {children}
    </div>
    <Footer className={styles.footer} />
  </div>
};
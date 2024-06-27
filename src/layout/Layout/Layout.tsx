import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Footer, Header } from "@/layout";
import cn from "classnames";
import styles from "./Layout.module.scss";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

interface ILayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout = ({ children, ...props }: ILayout) => {
  return <div className={cn(styles.layout, "grid min-h-screen")} {...props}>
    <Header className={cn(styles.header, "pl-20 pr-20")} />
    <div className={cn(styles.body, "pl-20 pr-20")}>
      <Breadcrumbs />
      {children}
    </div>
    <Footer className={cn(styles.footer, "pl-20 pr-20")} />
  </div>
};
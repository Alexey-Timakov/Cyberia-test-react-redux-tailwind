import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { Footer, Header } from "@/layout";
import cn from "classnames";
import styles from "./Layout.module.scss";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

interface ILayout extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export const Layout = ({ children, ...props }: ILayout) => {
  return <div className={cn(styles.layout, "grid grid-cols-layout md:grid-cols-layout-main min-h-screen")} {...props}>
    <Header className={cn(styles.header, "px-10 md:px-20 mb-[4.6rem] md:mb-0")} />
    <div className={cn(styles.body, "px-10 md:px-20")}>
      <Breadcrumbs />
      {children}
    </div>
    <Footer className={cn(styles.footer, "px-10 md:px-20")} />
  </div>
};
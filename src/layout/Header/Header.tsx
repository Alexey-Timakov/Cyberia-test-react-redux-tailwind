import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import { navigations } from "@/helpers/path";
import { LogoIcon } from "@/icons";
import styles from "./Header.module.scss";
import cn from "classnames";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Header = ({ className, ...props }: IHeader): ReactElement => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <LogoIcon />
      <nav className={styles.menu}>
        {navigations.map(navItem => {
          return (
            <a key={navItem.id} href={`/${navItem.pathName}`}>
              {navItem.title}
            </a>
          )
        })}
      </nav>
    </header>
  )
};
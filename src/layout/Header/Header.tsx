import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import { navigations } from "@/helpers/path";
import { LogoIcon } from "@/icons";
import styles from "./Header.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Header = ({ className, ...props }: IHeader): ReactElement => {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <LogoIcon />
      <nav className={styles.menu}>
        {navigations.map(navItem => {
          return (
            <NavLink className={({ isActive }) => isActive ? styles.active : ""} key={navItem.id} to={`/${navItem.pathName}`}>
              {navItem.title}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
};
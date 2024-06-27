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
    <header className={cn(styles.header, className, "grid content-center h-64")} {...props}>
      <LogoIcon />
      <nav className={cn(styles.menu, "grid grid-cols-5 justify-items-stretch items-center")}>
        {navigations.map(navItem => {
          return (
            <NavLink
              key={navItem.id}
              className={({ isActive }) => cn("w-max text-white text-base font-normal", {
                [styles.active]: isActive
              })}
              to={`/${navItem.pathName}`}
            >
              {navItem.title}
            </NavLink>
          )
        })}
      </nav>
    </header>
  )
};
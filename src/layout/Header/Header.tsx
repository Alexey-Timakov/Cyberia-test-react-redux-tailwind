import { DetailedHTMLProps, HTMLAttributes, ReactElement, useState } from "react";
import { navigations } from "@/helpers/path";
import { LogoIcon } from "@/icons";
import { MenuByrgerIcon } from "@/icons";
import styles from "./Header.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "../MobileMenu/MobileMenu";

interface IHeader extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Header = ({ className, ...props }: IHeader): ReactElement => {
  const [isMenuOpened, toggleMenuOpened] = useState<boolean>(false);

  return (
    <header className={cn(styles.header, className, "relative grid grid-cols-header md:header-main md:grid-cols-header-main items-center content-center h-28 md:h-64 bg-mob-dark md:bg-opacity-0")} {...props}>
      <LogoIcon className={styles.logo} />
      <nav className={cn(styles.menu, "hidden md:grid grid-cols-5 justify-items-stretch items-center")}>
        {navigations.map(navItem => {
          return (
            <NavLink
              key={navItem.id}
              className={({ isActive }) => cn("w-max text-white text-base font-normal hover:mb-[-0.3rem] hover:border-b-[0.3rem] hover:border-white", {
                ["mb-[-0.3rem] border-b-[0.3rem] border-white"]: isActive
              })}
              to={`/${navItem.pathName}`}
            >
              {navItem.title}
            </NavLink>
          )
        })}
      </nav>
      <MenuByrgerIcon className={cn(styles["burger-icon"], "cursor-pointer block md:hidden")} onClick={() => toggleMenuOpened(true)} />
      {isMenuOpened &&
        <MobileMenu action={() => toggleMenuOpened(false)} />
      }
    </header>
  )
};
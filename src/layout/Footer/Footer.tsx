import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";
import { LogoIcon } from "@/icons";
import { navigations } from "@/helpers/path";
import { Link } from "react-router-dom";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({ className, ...props }: IFooter): ReactElement => {
  return (
    <footer className={cn(styles.footer, className, "grid grid-cols-footer md:grid-cols-footer-main bg-dark-grey text-white pt-12 md:pt-52 pb-12 md:pb-60")} {...props}>
      <div className={cn(styles["footer-content"], "grid grid-cols-footer-content md:grid-cols-footer-content-main md:footer-content-main gap-y-12")}>
        <div className={cn(styles.logo, "justify-self-center")}>
          <LogoIcon className="w-[10.2rem] md:w-full mx-auto" />
          <p className="mt-5 max-w-80 text-center md:mt-12 mb-0 font-normal text-mob md:text-base">Веб-разработка и усиление IT-команд</p>
        </div>

        <section className={cn(styles.contacts, "*:block *:w-fit *:text-mob *:md:text-base *:font-normal *:text-left *:mb-9")}>
          <label>+7 999 123 45 67</label>
          <label>
            <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
          </label>
          <label>ул.Ярных, д.35, оф.10</label>
        </section>

        <section className={cn(styles["footer-menu"], "grid grid-rows-3 grid-flow-col justify-between md:justify-start gap-x-16 md:gap-x-28")}>
          {navigations.map(navItem => {
            return (
              <Link className="w-fit text-mob md:text-base md:font-normal" key={navItem.id} to={`/${navItem.pathName}`}>{navItem.title}</Link>
            )
          })}
        </section>
      </div>
    </footer>
  )
};
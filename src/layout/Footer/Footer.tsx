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
    <footer className={cn(styles.footer, className, "grid bg-dark-grey text-white pt-52 pb-60")} {...props}>
      <div className={cn(styles["footer-content"], "grid")}>
        <div className={styles.logo}>
          <LogoIcon />
          <p className="mt-12 mb-0, text-base font-normal">Веб-разработка и усиление IT-команд</p>
        </div>

        <section className={cn(styles.contacts, "*:block *:w-fit *:text-base *:font-normal *:text-left *:mb-9")}>
          <label>+7 999 123 45 67</label>
          <label>
            <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
          </label>
          <label>ул.Ярных, д.35, оф.10</label>
        </section>

        <section className={cn(styles["footer-menu"], "grid grid-rows-3 grid-flow-col gap-x-28")}>
          {navigations.map(navItem => {
            return (
              <Link className="w-fit text-base font-normal" key={navItem.id} to={`/${navItem.pathName}`}>{navItem.title}</Link>
            )
          })}
        </section>
      </div>
    </footer>
  )
};
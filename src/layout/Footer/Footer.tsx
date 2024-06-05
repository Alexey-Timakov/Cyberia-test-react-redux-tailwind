import { DetailedHTMLProps, HTMLAttributes, ReactElement } from "react";
import styles from "./Footer.module.scss";
import cn from "classnames";
import { LogoIcon } from "@/icons";
import { navigations } from "@/helpers/path";

interface IFooter extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({ className, ...props }: IFooter): ReactElement => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles["footer-content"]}>
        <div className={styles.logo}>
          <LogoIcon />
          <p className={styles.tagline}>Веб-разработка и усиление IT-команд</p>
        </div>

        <section className={styles.contacts}>
          <label>+7 999 123 45 67</label>
          <label><a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a></label>
          <label>ул.Ярных, д.35, оф.10</label>
        </section>

        <section className={styles["footer-menu"]}>
          {navigations.map(navItem => {
            return (
              <a key={navItem.id} href={`/${navItem.pathName}`}>{navItem.title}</a>
            )
          })}
        </section>
      </div>
    </footer>
  )
};
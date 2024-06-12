import { mainLink, navigations } from "@/helpers/path";
import { ReactElement } from "react"
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = (): ReactElement<HTMLElement> | null => {
  const { pathname } = useLocation();

  const pathes = pathname.split("/");

  if (pathes[1] === "") return null;

  const firstLevel = mainLink;

  const secondLevel = navigations.find(nav => nav.pathName === pathes[1]);

  return (
    <nav className={styles.crumbs}>
      <NavLink to={`/${firstLevel.pathName}`}>{firstLevel.title}</NavLink>

      {secondLevel &&
        <>
          <a> / </a>
          <NavLink style={({ isActive }) => ({
            cursor: isActive ? "default" : "inherit"
          })}
            className={styles.active}
            to={`/${secondLevel.pathName}`}>{secondLevel.title}</NavLink>
        </>
      }
    </nav>
  )
}
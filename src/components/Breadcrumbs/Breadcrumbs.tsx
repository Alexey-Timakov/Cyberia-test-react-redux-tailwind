import { mainLink, navigations } from "@/helpers/path";
import { ReactElement } from "react"
import { NavLink, useLocation } from "react-router-dom";

export const Breadcrumbs = (): ReactElement<HTMLElement> | null => {
  const { pathname } = useLocation();

  const pathes = pathname.split("/");

  if (pathes[1] === "") return null;

  const firstLevel = mainLink;

  const secondLevel = navigations.find(nav => nav.pathName === pathes[1]);

  return (
    <nav className="mb-12 md:mb-52 *:text-sm *:md:text-base *:font-normal *:text-crumb">
      <NavLink to={`/${firstLevel.pathName}`}>
        {firstLevel.title}
      </NavLink>

      {secondLevel &&
        <>
          <a> / </a>
          <NavLink
            className="[&.active]:text-white [&.active]:cursor-default"
            to={`/${secondLevel.pathName}`}>{secondLevel.title}</NavLink>
        </>
      }
    </nav>
  )
}
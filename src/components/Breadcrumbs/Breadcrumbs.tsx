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
    <nav className="mb-52">
      <NavLink
        className="text-base font-normal text-crumb"
        to={`/${firstLevel.pathName}`}
      >
        {firstLevel.title}
      </NavLink>

      {secondLevel &&
        <>
          <a className="text-base font-normal text-crumb"> / </a>
          <NavLink
            className="text-base font-normal text-crumb [&.active]:text-white [&.active]:cursor-default"
            to={`/${secondLevel.pathName}`}>{secondLevel.title}</NavLink>
        </>
      }
    </nav>
  )
}
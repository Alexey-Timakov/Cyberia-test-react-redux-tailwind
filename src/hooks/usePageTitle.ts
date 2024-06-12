import { useLocation } from "react-router-dom";
import { navigations } from "../helpers/path";

export const usePageTitle = (): string => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return "Главная"
  }

  const pageTitle = navigations.find(nav => nav.pathName === pathname.slice(1))?.title;

  if (pageTitle) {
    return pageTitle
  } else {
    return "Неизвестная страница"
  }
}
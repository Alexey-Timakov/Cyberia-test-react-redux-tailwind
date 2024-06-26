export enum TRoute {
  main,
  agency,
  services,
  cases,
  blog,
  contacts
}

export interface INavLink {
  id: TRoute;
  pathName: string;
  title: string;
}

export const mainLink: INavLink = {
  id: TRoute.main,
  pathName: "",
  title: "Главная"
};

export const navigations: INavLink[] = [
  { pathName: "agency", title: "Агенство", id: TRoute.agency },
  { pathName: "services", title: "Услуги", id: TRoute.services },
  { pathName: "cases", title: "Кейсы", id: TRoute.cases },
  { pathName: "blog", title: "Блог", id: TRoute.blog },
  { pathName: "contacts", title: "Контакты", id: TRoute.contacts },
];
import { navigations } from "@/helpers/path";
import { NavLink } from "react-router-dom";
import { CloseIcon } from "@/icons";
import cn from "classnames";

interface IMobileMenu {
  action: () => void;
}

export const MobileMenu = ({ action }: IMobileMenu) => {

  return (
    <div className="fixed z-10 top-0 left-0 bg-dark-grey md:hidden w-screen h-screen px-10 py-10 flex flex-col">
      <div className="relative">
        <CloseIcon className="absolute right-4 top-0 cursor-pointer" onClick={action} />
      </div>

      <nav className="pt-20 pb-16 flex flex-col gap-y-12 border-b-2 border-[#2B2D3A]">
        {navigations.map(navItem => {
          return (
            <NavLink
              onClick={action}
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

      <section className="pt-[3.8rem] text-crumb pb-16 border-b-2 border-[#2B2D3A]">
        <h2 className="text-base mb-16">Контакты</h2>
        <div className="*:block *:w-fit *:text-[1.6rem] *:font-normal *:text-left *:mb-8">
          <label>+7 999 123 45 67</label>
          <label>
            <a href="mailto:hello@cyberia.studio">hello@cyberia.studio</a>
          </label>
          <label>ул.Ярных, д.35, оф.10</label>
        </div>
      </section>
    </div>
  )
}

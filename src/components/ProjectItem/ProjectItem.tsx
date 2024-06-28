import { IProject } from "@/models"
import styles from "./ProjectItem.module.scss";
import { ReactElement } from "react";
import cn from "classnames";

interface IProjectItem {
  project: IProject
}

export const ProjectItem = ({ project }: IProjectItem): ReactElement<HTMLDivElement> => {
  return (
    // Почему-то в макете размер карточки 387*378, наверное ошибка, поэтому далее не 100% высота (задается за счет padding-bottom)
    <div className={"relative after:block after:pb-[97.5%]"}>
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="relative w-full h-full rounded-[1.2rem] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${project.image})`
          }}>
          <div className={cn("absolute bg-dark-grey rounded-lg top-0 right-0 w-1/3 h-1/3 translate-x-[-2.3rem] translate-y-[2.7rem]")}>
            <div className={cn(styles["title-wrapper"], "relative w-full h-full box-border p-8 flex justify-center items-center")}>
              <span className="text-2xl font-semibold text-white text-center">{project.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
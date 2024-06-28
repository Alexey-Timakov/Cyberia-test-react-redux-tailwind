import { IProject } from "@/models"
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { ReactElement } from "react";

interface IProjectBlock {
  projects: IProject[]
}

export const ProjectsBlock = ({ projects }: IProjectBlock): ReactElement<HTMLElement> => {
  return (
    <section className="grid gap-x-16 gap-y-[3.1rem] justify-between grid-cols-projects-main" >
      {projects && projects.map(project => {
        return (
          <ProjectItem project={project} key={project.id} />
        )
      })
      }
    </section >
  )
}
import { IProject } from "@/models"
import styles from "./ProjectsBlock.module.scss";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { ReactElement } from "react";

interface IProjectBlock {
  projects: IProject[]
}

export const ProjectsBlock = ({ projects }: IProjectBlock): ReactElement<HTMLElement> => {
  return (
    <section className={styles.projects}>
      {projects && projects.map(project => {
        return (
          <ProjectItem project={project} key={project.id} />
        )
      })}
    </section>
  )
}
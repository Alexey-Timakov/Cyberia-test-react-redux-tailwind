import { IProject } from "@/models"
import styles from "./ProjectsBlock.module.scss";
import { ProjectItem } from "../ProjectItem/ProjectItem";
import { ReactElement } from "react";

interface IProjectBlock {
  projects: IProject[]
}

export const ProjectsBlock = ({ projects }: IProjectBlock): ReactElement<HTMLDivElement> => {
  return (
    <div className={styles.projects}>
      {projects && projects.map(project => {
        return (
          <ProjectItem project={project} key={project.id} />
        )
      })}
    </div>
  )
}
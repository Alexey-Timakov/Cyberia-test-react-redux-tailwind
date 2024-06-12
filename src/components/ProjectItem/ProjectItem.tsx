import { IProject } from "@/models"
import styles from "./ProjectItem.module.scss";
import { ReactElement } from "react";

interface IProjectItem {
  project: IProject
}

export const ProjectItem = ({ project }: IProjectItem): ReactElement<HTMLDivElement> => {
  return (
    <div className={styles["cell-wrapper"]}>
      <div className={styles.cell}>
        <div className={styles["project-card"]}
          style={{
            backgroundImage: `url(${project.image})`
          }}>
          <div className={styles["title-block"]}>
            <div>
              <span>{project.title}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
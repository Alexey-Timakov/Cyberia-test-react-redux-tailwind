import { Dispatch } from "redux"
import { IProject, ProjectsActionsTypes, TProjectsActions } from "../reducers/projectsReducer"
import axios from "axios"

export const fetchProjects = () => {
  return async (dispatch: Dispatch<TProjectsActions>) => {
    try {
      dispatch({ type: ProjectsActionsTypes.PROJECTS_FETCH })
      const response = await axios.get<{ items: IProject[] }>("https://api.test.cyberia.studio/api/v1/projects");
      dispatch({ type: ProjectsActionsTypes.PROJECTS_GOT, payload: response.data.items })
    } catch (error) {
      dispatch({ type: ProjectsActionsTypes.PROJECTS_ERROR, payload: "Ошибка при загрузке проектов" })
    }
  }
}
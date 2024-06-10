import { ICategory } from "./categoriesReducer"

export enum ProjectsActionsTypes {
  PROJECTS_FETCH = "PROJECTS_FETCH",
  PROJECTS_ERROR = "PROJECTS_ERROR",
  PROJECTS_GOT = "PROJECTS_GOT",
}

export interface IProject {
  id: number
  title: string
  slug: string
  project_url: string | null
  image: string
  image_dark: string
  description: string
  categories: ICategory[]
}

interface IInitialProjectsState {
  projects: IProject[];
  isLoading: boolean;
  error: string | null
}

export const initialState: IInitialProjectsState = {
  projects: [],
  isLoading: false,
  error: null
}

interface IProjectsActionFetch {
  type: ProjectsActionsTypes.PROJECTS_FETCH;
}

interface IProjectsActionError {
  type: ProjectsActionsTypes.PROJECTS_ERROR;
  payload: string;
}

interface IProjectsActionGot {
  type: ProjectsActionsTypes.PROJECTS_GOT;
  payload: IProject[]
}

export type TProjectsActions = IProjectsActionFetch | IProjectsActionError | IProjectsActionGot;

export const projectsReducer = (state = initialState, action: TProjectsActions): IInitialProjectsState => {
  switch (action.type) {
    case ProjectsActionsTypes.PROJECTS_FETCH:
      return { ...state, isLoading: true }
    case ProjectsActionsTypes.PROJECTS_ERROR:
      return { ...state, isLoading: false, error: action.payload }
    case ProjectsActionsTypes.PROJECTS_GOT:
      return { isLoading: false, error: null, projects: action.payload }
    default:
      return state
  }
};
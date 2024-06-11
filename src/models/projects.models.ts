import { ICategory } from "./categories.models"

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
import { ICategory } from "@/models"
import { ReactElement } from "react"
import { CategoryItem } from "../CategoryItem/CategoryItem";

interface ICategoriesBlock {
  categories: ICategory[]
}

export const CategoriesBlock = ({ categories }: ICategoriesBlock): ReactElement<HTMLDivElement> => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-10">
      {categories.map(cat => {
        return (
          <CategoryItem cat={cat} key={cat.id} />
        )
      })}
    </div>
  )
}
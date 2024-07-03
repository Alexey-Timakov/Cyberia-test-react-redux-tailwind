import { ICategory } from "@/models"
import { ReactElement } from "react"
import { CategoryItem } from "../CategoryItem/CategoryItem";

interface ICategoriesBlock {
  categories: ICategory[]
}

export const CategoriesBlock = ({ categories }: ICategoriesBlock): ReactElement<HTMLDivElement> => {
  return (
    <div className="mb-16 md:mb-[5.2rem] flex flex-row flex-wrap justify-between gap-y-[1.7rem] gap-x-[0.7rem] md:gap-10">
      {categories.map(cat => {
        return (
          <CategoryItem cat={cat} key={cat.id} />
        )
      })}
    </div>
  )
}
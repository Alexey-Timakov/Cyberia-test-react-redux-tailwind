import { ICategory } from "@/models"
import { ReactElement } from "react"
import styles from "./CategoriesBlock.module.scss";
import { CategoryItem } from "../CategoryItem/CategoryItem";

interface ICategoriesBlock {
  categories: ICategory[]
}

export const CategoriesBlock = ({ categories }: ICategoriesBlock): ReactElement<HTMLDivElement> => {
  return (
    <div className={styles.categories}>
      {categories.map(cat => {
        return (
          <CategoryItem cat={cat} key={cat.id} />
        )
      })}
    </div>
  )
}
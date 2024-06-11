import { ICategory } from "@/models"
import { ReactElement } from "react"
import styles from "./CategoryItem.module.scss";
import { useActions, useTypedSelector } from "@/hooks";
import cn from "classnames";

interface ICategoryItem {
  cat: ICategory
}

export const CategoryItem = ({ cat }: ICategoryItem): ReactElement<HTMLButtonElement> => {
  const { changeActiveCategory } = useActions();
  const { activeCatagory } = useTypedSelector(state => state.categories);

  return (
    <button
      key={cat.id}
      className={cn(styles.category, {
        [styles.selected]: activeCatagory === cat
      })}
      onClick={() => changeActiveCategory(cat)}
    >
      {cat.name}
    </button>
  )
}
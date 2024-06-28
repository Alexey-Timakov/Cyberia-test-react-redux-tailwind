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
      className={cn(styles.category, "relative cursor-pointer w-min whitespace-nowrap text-2xl py-4 px-12 text-light-grey bg-dark-grey hover:bg-white hover:text-dark-grey duration-300 border-none rounded-xl overflow-hidden", {
        ["bg-white text-dark-grey"]: activeCatagory === cat
      })}
      onClick={() => changeActiveCategory(cat)}
    >
      {cat.name}
    </button>
  )
}
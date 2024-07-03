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
      className={cn(styles.category, "flex-grow md:flex-grow-0 relative cursor-pointer min-w-[15rem] md:w-min whitespace-nowrap text-sm md:text-2xl py-[0.85rem] md:py-4 md:px-12 text-light-grey bg-dark-grey hover:bg-white hover:text-dark-grey duration-300 border-none rounded-xl overflow-hidden", {
        ["bg-white text-dark-grey"]: activeCatagory === cat
      })}
      onClick={() => changeActiveCategory(cat)}
    >
      {cat.name}
    </button>
  )
}
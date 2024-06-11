import { TStoreDispatch } from "@/store"
import { ICategory } from "@/models"
import { categoriesReducer } from "@/store/reducers"

export const changeActiveCategory = (cat: ICategory | null) => {
  return (dispatch: TStoreDispatch) => {
    dispatch(categoriesReducer.actions.categoriesChangeActive(cat))
  }
}
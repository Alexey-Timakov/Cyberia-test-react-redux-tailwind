import { Dispatch } from "redux"
import { CategoriesActionsTypes, ICategory, TCategoriesActions } from "../reducers/categoriesReducer"
import axios from "axios"

export const fetchCategories = () => {
  return async (dispatch: Dispatch<TCategoriesActions>) => {
    try {
      dispatch({ type: CategoriesActionsTypes.CATEGORIES_FETCH })
      const response = await axios.get<{ items: ICategory[] }>("https://api.test.cyberia.studio/api/v1/project-categories");
      dispatch({ type: CategoriesActionsTypes.CATEGORIES_GOT, payload: response.data.items })
    } catch (error) {
      dispatch({ type: CategoriesActionsTypes.CATEGORIES_ERROR, payload: "Ошибка при загрузке категорий" })
    }
  }
}

export const changeActiveCategory = (cat: ICategory | null) => {
  console.log("Change category to:", cat?.id || null);

  return (dispatch: Dispatch<TCategoriesActions>) => {
    dispatch({ type: CategoriesActionsTypes.CATEGORIES_CHANGE, payload: cat })
  }
}
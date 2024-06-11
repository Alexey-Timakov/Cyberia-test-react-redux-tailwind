// import { Dispatch } from "redux"
// import { CategoriesActionsTypes, categoriesReducer, ICategory, TCategoriesActions } from "../reducers/categoriesReducer"
import { categoriesReducer, ICategory } from "../reducers/categoriesReducer"
import axios from "axios"
import { TStoreDispatch } from ".."
import { createAsyncThunk } from "@reduxjs/toolkit"

// Classic Redux-thunk action:
// export const fetchCategories = () => {
//   return async (dispatch: Dispatch<TCategoriesActions>) => {
//     try {
//       dispatch({ type: CategoriesActionsTypes.CATEGORIES_FETCH })
//       const response = await axios.get<{ items: ICategory[] }>("https://api.test.cyberia.studio/api/v1/project-categories");
//       dispatch({ type: CategoriesActionsTypes.CATEGORIES_GOT, payload: response.data.items })
//     } catch (error) {
//       dispatch({ type: CategoriesActionsTypes.CATEGORIES_ERROR, payload: "Ошибка при загрузке категорий" })
//     }
//   }
// }

// export const changeActiveCategory = (cat: ICategory | null) => {
//   return (dispatch: Dispatch<TCategoriesActions>) => {
//     dispatch({ type: CategoriesActionsTypes.CATEGORIES_CHANGE, payload: cat })
//   }
// }

// RTK thunk action:
// export const fetchCategories = () => {
//   return async (dispatch: TStoreDispatch) => {
//     try {
//       dispatch(categoriesReducer.actions.categoriesFetching())
//       const response = await axios.get<{ items: ICategory[] }>("https://api.test.cyberia.studio/api/v1/project-categories");
//       dispatch(categoriesReducer.actions.categoriesGot(response.data.items))
//     } catch (error) {
//       dispatch(categoriesReducer.actions.categoriesError("Ошибка при загрузке категорий"))
//     }
//   }
// }


// RTK action with createAsyncThunk:
export const fetchCategories = createAsyncThunk<ICategory[], void, { rejectValue: string }>(
  "categories/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<{ items: ICategory[] }>("https://api.test.cyberia.studio/api/v1/project-categories");
      return response.data.items;

    } catch (error) {
      return rejectWithValue("Ошибка при загрузке категорий")
    }
  }
)

// RTK action:
export const changeActiveCategory = (cat: ICategory | null) => {
  return (dispatch: TStoreDispatch) => {
    dispatch(categoriesReducer.actions.categoriesChangeActive(cat))
  }
}
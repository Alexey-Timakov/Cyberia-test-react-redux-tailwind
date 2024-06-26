import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { formApi, projectsApi } from "../services";
import { categoriesApi } from "../services";


export const rootReducer = combineReducers({
  categories: categoriesReducer.reducer,
  [projectsApi.reducerPath]: projectsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [formApi.reducerPath]: formApi.reducer
});

export type TRootState = ReturnType<typeof rootReducer>;

export { categoriesReducer } from "./categoriesReducer";
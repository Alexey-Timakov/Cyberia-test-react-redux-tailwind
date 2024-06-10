import { combineReducers } from "redux";
import { categoriesReducer } from "./categoriesReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { projectsReducer } from "./projectsReducer";

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  projects: projectsReducer
});

export type TRootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
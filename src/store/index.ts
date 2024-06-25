import { configureStore } from "@reduxjs/toolkit/react";
import { rootReducer } from "./reducers";
import { formApi, projectsApi } from "./services";
import { categoriesApi } from "./services";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(projectsApi.middleware, categoriesApi.middleware, formApi.middleware)
})

export type TStoreDispatch = typeof store.dispatch
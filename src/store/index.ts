import { configureStore } from "@reduxjs/toolkit/react";
import { rootReducer } from "./reducers";

// RTK already has all these dependencies
// import { applyMiddleware } from "redux";
// import { legacy_createStore as createStore } from 'redux';
// import { thunk } from "redux-thunk";

// Classic redux store way:
// export const store = createStore(rootReducer, applyMiddleware(thunk));

// Modern RTK way of configuring store:
export const store = configureStore({
  reducer: rootReducer
})

export type TStore = typeof store
export type TStoreDispatch = typeof store.dispatch
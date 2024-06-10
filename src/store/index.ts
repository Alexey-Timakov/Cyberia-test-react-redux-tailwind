import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux';
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";

// Classic redux store way:
export const store = createStore(rootReducer, applyMiddleware(thunk));
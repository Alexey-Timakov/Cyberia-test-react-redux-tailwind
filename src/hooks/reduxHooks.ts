import { TStoreDispatch } from "@/store";
import { actionCreators } from "@/store/actions";
import { TRootState } from "@/store/reducers";
import { bindActionCreators } from "@reduxjs/toolkit/react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<TStoreDispatch>();

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch)
}
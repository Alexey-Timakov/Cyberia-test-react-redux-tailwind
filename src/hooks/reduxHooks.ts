import { TStoreDispatch } from "@/store";
import { TRootState } from "@/store/reducers";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<TStoreDispatch>();

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

export { useDispatch, useSelector };

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

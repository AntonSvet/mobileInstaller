import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createAPI } from "./http/http";
import { AxiosInstance } from "axios";
 
export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
        serializableCheck: false,
      }) 
  });
};
export interface ThunkExtraArg {
  api: AxiosInstance;
}
export interface ThunkConfig {
  extra: ThunkExtraArg;
  dispatch: AppDispatch;
  state: RootState;
}
 
export const $api = createAPI( );
const extraArg: ThunkExtraArg = {
  api: $api,
};
const rootReducer = combineReducers({
 
});
const store = createReduxStore();
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore["dispatch"];

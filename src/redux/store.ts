import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { airportsReducer, routesReducer } from "./slices/index";
import { RootState, DispatchFunc } from "./interfaces";

const logger = createLogger();
let middleware: any = [];
//disable logger on production
if (process.env.NODE_ENV !== "production") {
  middleware = (getDefaultMiddleware: Function) =>
    getDefaultMiddleware().concat(logger);
} else {
  middleware = (getDefaultMiddleware: Function) => getDefaultMiddleware();
}

export const store = configureStore({
  reducer: {
    airports: airportsReducer,
    routes: routesReducer
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV !== "production"
});

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

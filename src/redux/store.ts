import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { airportsReducer, routesReducer } from "./slices/index";
import { RootState, DispatchFunc } from "./interfaces";

export const store = configureStore({
  reducer: {
    airports: airportsReducer,
    routes: routesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production"
});

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

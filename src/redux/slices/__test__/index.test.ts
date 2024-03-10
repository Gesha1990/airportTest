import { configureStore } from "@reduxjs/toolkit";
import axiosInstance from "src/redux/api/config";
import airportsReducer from "../airportsSlice";
import { fetchAirportsByName } from "../airportsSlice";
import routesReducer from "../routesSlice";
import { fetchRoutesByIcao } from "../routesSlice";

jest.mock("src/redux/api/config", () => {
  return {
    get: () => {
      return { data: "value" };
    }
  };
});

describe("Checking  reducers work", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("Check airport reduce for dispatching pending action, result loading should be true", async () => {
    const store = configureStore({ reducer: airportsReducer });
    await store.dispatch({ type: "fetchAirportsByName/pending" });

    expect(store.getState().loading).toEqual(true);
  });
  test("Check routes reducer for dispatching pending action, result loading should be true", async () => {
    const store = configureStore({ reducer: routesReducer });
    await store.dispatch({ type: "fetchRoutesByIcao/pending" });
    expect(store.getState().loading).toEqual(true);
  });
  test("Check working fetchAirportsByName thunk", async () => {
    const store = configureStore({ reducer: routesReducer });
    const mockGet = jest.spyOn(axiosInstance, "get");
    await store.dispatch(fetchAirportsByName(""));
    expect(mockGet).toBeCalledTimes(1);
  });
  test("Check working fetchRoutesByIcao thunk", async () => {
    const store = configureStore({ reducer: routesReducer });
    const mockGet = jest.spyOn(axiosInstance, "get");
    await store.dispatch(fetchRoutesByIcao(""));
    expect(mockGet).toBeCalledTimes(1);
  });
});

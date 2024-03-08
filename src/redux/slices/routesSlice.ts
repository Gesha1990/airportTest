import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/config";
import { RoutsState, IRoutesResponse } from "./interfaces";

const initialState: RoutsState = {
  routes: [],
  loading: false,
  error: ""
};

export const fetchRoutesByIcao = createAsyncThunk(
  "fetchRoutesByIcao",
  async (icao: string) => {
    try {
      const response: IRoutesResponse = await axiosInstance.get(
        `/airports/icao/${icao}/stats/routes/daily?limit=10`
      );
      return response.data.routes;
    } catch (e) {
      console.error("An error occurred:", e);
    }
  }
);
export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRoutesByIcao.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRoutesByIcao.fulfilled, (state, action) => {
      state.routes = action.payload || [];
      state.loading = false;
    });
    builder.addCase(fetchRoutesByIcao.rejected, (state) => {
      state.error = "Something went wrong";
    });
  }
});

export default routesSlice.reducer;

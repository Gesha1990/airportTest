import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../api/config";
import { AirportState, IAirportResponse } from "./interfaces";

const initialState: AirportState = {
  airports: [],
  loading: false,
  error: ""
};

export const fetchAirportsByName = createAsyncThunk(
  "fetchAirportsByName",
  async (airportName: string) => {
    try {
      const response: IAirportResponse = await axiosInstance.get(
        `/airports/search/term?q=${airportName}&limit=10`
      );
      return response.data.items;
    } catch (e) {
      console.error("An error occurred:", e);
    }
  }
);
export const airportsSlice = createSlice({
  name: "airports",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAirportsByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAirportsByName.fulfilled, (state, action) => {
      state.airports = action.payload || [];
      state.loading = false;
    });
    builder.addCase(fetchAirportsByName.rejected, (state) => {
      state.error = "Something went wrong";
    });
  }
});

export default airportsSlice.reducer;

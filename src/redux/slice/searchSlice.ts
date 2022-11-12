import { createSlice, configureStore } from "@reduxjs/toolkit";
import { ISearchData } from "../../types/ISearchData";
import { RootState } from "../store";
import { getSearchData } from "./searchAPI";

interface CounterState {
  data: ISearchData[];
  status: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  data: [],
  status: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchData.pending, (state) => {
        state.status = true;
      })
      .addCase(getSearchData.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.status = false;
      })
      .addCase(getSearchData.rejected, (state) => {
        state.status = false;
      });
  },
});

export const selectSearch = (state: RootState) => state.search;

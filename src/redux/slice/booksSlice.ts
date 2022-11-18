import { createSlice, configureStore } from "@reduxjs/toolkit";
import { IBooksData, IBooksItem } from "../../types/IBooksData";
import { RootState } from "../store";
import { getInformationBook, getSearchData } from "./booksAPI";

interface CounterState {
  data: IBooksData[];
  dataBook: IBooksItem[];
  isLoading: boolean;
  errorBook: boolean;
}

const initialState: CounterState = {
  data: [],
  dataBook: [],
  isLoading: false,
  errorBook: false,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearSearchData(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      //getSearchData
      .addCase(getSearchData.pending, (state) => {
        state.isLoading = true;
        state.errorBook = false;
      })
      .addCase(getSearchData.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getSearchData.rejected, (state) => {
        state.isLoading = false;
        state.errorBook = true;
      })
      //getInformationBook
      .addCase(getInformationBook.pending, (state) => {
        state.isLoading = true;
        state.errorBook = false;
      })
      .addCase(getInformationBook.fulfilled, (state, action) => {
        state.dataBook.push(action.payload);
        state.isLoading = false;
      })
      .addCase(getInformationBook.rejected, (state) => {
        state.isLoading = false;
        state.errorBook = true;
      });
  },
});
export const { clearSearchData } = booksSlice.actions;
export const selectSearch = (state: RootState) => state.books;

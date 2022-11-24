import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBooksData, IBooksItem } from "../../types/IBooksData";
import { RootState } from "../store";

const baseURL = process.env.REACT_APP_GOOGL_BOOK_BASURL;
const apiKey = process.env.REACT_APP_GOOGL_BOOK_KEI;

export const getSearchData = createAsyncThunk<
  IBooksData,
  void,
  { state: RootState }
>("books/getsearch", async (_, { getState, rejectWithValue }) => {
  const { valueSearch, countPage } = getState().books;
  try {
    const response = await axios.get<IBooksData>(
      `${baseURL}/volumes?q=${valueSearch}&filter=paid-ebooks&key=${apiKey}&startIndex=${countPage}&maxResults=40`
    );
    return response.data;
  } catch (error) {
    return rejectWithValue(new Error("ERROR: books/getsearch"));
  }
});

export const getInformationBook = createAsyncThunk(
  "books/getInformationBook",
  async (value: string, ThunkAPI) => {
    try {
      const response = await axios.get<IBooksItem>(
        `${baseURL}/volumes/${value}?key=${apiKey}`
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(
        new Error("ERROR: books/getInformationBook")
      );
    }
  }
);

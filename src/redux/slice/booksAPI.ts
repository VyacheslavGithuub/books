import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBooksData, IBooksItem } from "../../types/IBooksData";

const baseURL = process.env.REACT_APP_GOOGL_BOOK_BASURL;
const apiKey = process.env.REACT_APP_GOOGL_BOOK_KEI;

export const getSearchData = createAsyncThunk(
  "books/getsearch",
  async (value: string, ThunkAPI) => {
    try {
      const response = await axios.get<IBooksData>(
        `${baseURL}/volumes?q=${value}&key=${apiKey}&maxResults=40`
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(new Error("ERROR: books/getsearch"));
    }
  }
);

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

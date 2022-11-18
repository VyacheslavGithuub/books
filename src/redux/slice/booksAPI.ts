import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IBooksData, IBooksItem } from "../../types/IBooksData";

export const getSearchData = createAsyncThunk(
  "books/getsearch",
  async (value: string, ThunkAPI) => {
    try {
      const response = await axios.get<IBooksData>(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI&maxResults=40`
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
        `https://www.googleapis.com/books/v1/volumes/${value}?key=AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI`
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(
        new Error("ERROR: books/getInformationBook")
      );
    }
  }
);

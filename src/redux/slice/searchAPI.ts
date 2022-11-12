import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ISearchData } from "../../types/ISearchData";

export const getSearchData = createAsyncThunk(
  "search/getsearch",
  async (_, ThunkAPI) => {
    try {
      const response = await axios.get<ISearchData>(
        "https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI&maxResults=40"
      );
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue("Не коректный запрос");
    }
  }
);

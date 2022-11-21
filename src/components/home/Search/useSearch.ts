import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getSearchData } from "../../../redux/slice/booksAPI";
import {
  addValueSearch,
  clearSearchData,
} from "../../../redux/slice/booksSlice";

export const useSearch = () => {
  const { data } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const handleSearch = (e: any) => {
    e.preventDefault();
    let searchValue: string = e.target[0].value;
    if (data) {
      dispatch(clearSearchData());
    }

    dispatch(addValueSearch(searchValue));
    dispatch(getSearchData());

    e.target[0].value = "";
  };
  return {
    handleSearch,
  };
};

import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getSearchData } from "../../../redux/slice/booksAPI";
import { clearSearchData } from "../../../redux/slice/booksSlice";

export const useSearch = () => {
  const { data } = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  const handleSearch = (e: any) => {
    e.preventDefault();
    let searchValue = e.target[0].value;
    if (data) {
      dispatch(clearSearchData());
    }
    dispatch(getSearchData(searchValue));
  };
  return {
    handleSearch,
  };
};

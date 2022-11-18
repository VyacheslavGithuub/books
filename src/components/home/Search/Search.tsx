import React, { useState } from "react";
import IconLupa from "../../../Icon/IconLupa";
import { useSearchStyle } from "./style";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getSearchData } from "../../../redux/slice/booksAPI";
import { clearSearchData } from "../../../redux/slice/booksSlice";

const Search = () => {
  const { SearchWrapSC, SearchSC, SearcButtonSC } = useSearchStyle();
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
  return (
    <SearchWrapSC onSubmit={handleSearch}>
      <SearchSC placeholder="Enter Your Book Name" required />
      <SearcButtonSC>
        <IconLupa />
      </SearcButtonSC>
    </SearchWrapSC>
  );
};

export default Search;

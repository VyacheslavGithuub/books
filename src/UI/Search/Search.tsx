import React, { useState } from "react";
import IconLupa from "../../Icon/IconLupa";
import { useSearchStyle } from "./style";
import { useAppDispatch } from "../../redux/hooks";
import { getSearchData } from "../../redux/slice/searchAPI";

const Search = () => {
  const { SearchWrapSC, SearchSC, SearcButtonSC } = useSearchStyle();
  const dispatch = useAppDispatch();

  const handleSearch = (e: any) => {
    e.preventDefault();
    let searchValue = e.target[0].value;

    dispatch(getSearchData(searchValue));
  };
  return (
    <SearchWrapSC onSubmit={handleSearch}>
      <SearchSC placeholder="Enter Your Book Name" />
      <SearcButtonSC>
        <IconLupa />
      </SearcButtonSC>
    </SearchWrapSC>
  );
};

export default Search;

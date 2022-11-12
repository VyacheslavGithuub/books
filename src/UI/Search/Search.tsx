import React, { useState } from "react";
import IconLupa from "../../Icon/IconLupa";
import { useSearchStyle } from "./style";
import { useAppDispatch } from "../../redux/hooks";
import { getSearchData } from "../../redux/slice/searchAPI";

const Search = () => {
  const { SearchWrapSC, SearchSC, SearcButtonSC } = useSearchStyle();
  const dispatch = useAppDispatch();

  const handleSearch = (e: any) => {
    dispatch(getSearchData());
  };
  return (
    <SearchWrapSC onSubmit={(e) => e.preventDefault()}>
      <SearchSC placeholder="Enter Your Book Name" />
      <SearcButtonSC onClick={handleSearch}>
        <IconLupa />
      </SearcButtonSC>
    </SearchWrapSC>
  );
};

export default Search;

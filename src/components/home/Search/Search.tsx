import React, { useState } from "react";
import IconLupa from "../../../Icon/IconLupa";
import { useSearchStyle } from "./style";
import { useSearch } from "./useSearch";

const Search = () => {
  const { SearchWrapSC, SearchSC, SearcButtonSC } = useSearchStyle();
  const { handleSearch } = useSearch();

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

import React from "react";
import Search from "../Search/Search";
import { useSearchSectionStyle } from "./style";

const SearchSection = () => {
  const {
    BooksSectionSC,
    SearchSectionWrapSC,
    SearchTitleSC,
    SearchChildrenSC,
    SearchSectionSC,
  } = useSearchSectionStyle();

  return (
    <SearchSectionWrapSC>
      <BooksSectionSC />
      <SearchSectionSC>
        <SearchTitleSC>Find Your Book</SearchTitleSC>
        <Search />
        <SearchChildrenSC />
      </SearchSectionSC>
    </SearchSectionWrapSC>
  );
};

export default SearchSection;

import React, { useState } from "react";
import IconLupa from "../../Icon/IconLupa";
import { useSearchStyle } from "./style";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getSearchData } from "../../redux/slice/searchAPI";

const Search = () => {
  const { SearchWrapSC, SearchSC, SearcButtonSC } = useSearchStyle();
  const { data, status } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  console.log(status);
  console.log(data);

  const handleSearch = (e: any) => {
    // axios
    //   .get(
    //     `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI`
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err: any) => console.log(err));
    dispatch(getSearchData());
  };
  return (
    <SearchWrapSC onSubmit={(e) => e.preventDefault()}>
      <SearchSC
        placeholder="Enter Your Book Name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearcButtonSC onClick={handleSearch}>
        <IconLupa />
      </SearcButtonSC>
    </SearchWrapSC>
  );
};

export default Search;

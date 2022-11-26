import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getSearchData } from "../../../redux/slice/booksAPI";
import { addCountPage } from "../../../redux/slice/booksSlice";

export const useHomeItemCards = () => {
  const { data, isLoading, errorBook } = useAppSelector((state) => state.books);

  const dispatch = useAppDispatch();
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) ===
      0
    ) {
      dispatch(addCountPage());
      dispatch(getSearchData());
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return { data, errorBook, isLoading };
};

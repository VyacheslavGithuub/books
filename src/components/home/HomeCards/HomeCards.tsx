import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getSearchData } from "../../../redux/slice/booksAPI";
import { addCountPage } from "../../../redux/slice/booksSlice";
import Loader from "../../../UI/Loader/Loader";
import LoaderEllipsis from "../../../UI/Loader/LoaderEllipsis/LoaderEllipsis";
import HomeItemCards from "./HomeItemCards/HomeItemCards";
import { styleHomeCards } from "./style";

const HomeCards = () => {
  const { HomeCardsSC, HomeCardsTitleSC, LoaderSC } = styleHomeCards();
  const { data, isLoading, errorBook, valueSearch } = useAppSelector(
    (state) => state.books
  );

  const dispatch = useAppDispatch();
  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) ===
        0 &&
      valueSearch.length > 0
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

  return (
    <>
      <HomeCardsSC>
        <>
          {errorBook && (
            <HomeCardsTitleSC>Google service not responding </HomeCardsTitleSC>
          )}
          {!data[0] && !isLoading && !errorBook === true && (
            <HomeCardsTitleSC>
              Используйте поисковую строку для получения книг
            </HomeCardsTitleSC>
          )}
          {data?.map((page) => {
            return page.items.map((card) => {
              const id = card?.id;
              const thumbnail = card?.volumeInfo?.imageLinks?.thumbnail;
              const amount = card?.saleInfo?.listPrice?.amount;
              return (
                <HomeItemCards
                  key={id}
                  id={id}
                  thumbnail={thumbnail}
                  amount={amount}
                />
              );
            });
          })}
        </>
      </HomeCardsSC>
      <LoaderSC>{isLoading && <LoaderEllipsis />}</LoaderSC>
    </>
  );
};

export default React.memo(HomeCards);

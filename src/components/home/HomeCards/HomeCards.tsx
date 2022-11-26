import React from "react";
import LoaderEllipsis from "../../../UI/Loader/LoaderEllipsis/LoaderEllipsis";
import ScrollTopUI from "../../../UI/ScrollTopUI/ScrollTopUI";
import HomeItemCards from "./HomeItemCards/HomeItemCards";
import { styleHomeCards } from "./style";
import { useHomeItemCards } from "./useHomeItemCard";

const HomeCards = () => {
  const { HomeCardsSC, HomeCardsTitleSC, LoaderSC, HomeCardsScrollSC } =
    styleHomeCards();
  const { data, errorBook, isLoading } = useHomeItemCards();

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
      <HomeCardsScrollSC>
        <ScrollTopUI />
      </HomeCardsScrollSC>
    </>
  );
};

export default React.memo(HomeCards);

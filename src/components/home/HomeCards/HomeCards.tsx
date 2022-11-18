import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import Loader from "../../../UI/Loader/Loader";
import HomeItemCards from "./HomeItemCards/HomeItemCards";
import { styleHomeCards } from "./style";

const HomeCards = () => {
  const { HomeCardsSC } = styleHomeCards();
  const { data, isLoading, errorBook } = useAppSelector((state) => state.books);

  return (
    <HomeCardsSC>
      {isLoading && <Loader />}
      {errorBook && <h2>Google service not responding </h2>}
      {data[0]?.items.map((card, index) => {
        const id = card?.id;
        const thumbnail = card?.volumeInfo?.imageLinks?.thumbnail;
        const amount = card?.saleInfo?.listPrice?.amount;

        if (thumbnail && amount) {
          return (
            <HomeItemCards
              key={index}
              id={id}
              thumbnail={thumbnail}
              amount={amount}
            />
          );
        }
      })}
    </HomeCardsSC>
  );
};

export default HomeCards;

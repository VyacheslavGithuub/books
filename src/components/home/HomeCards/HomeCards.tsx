import React, { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Loader from "../../../UI/Loader/Loader";
import HomeItemCards from "./HomeItemCards/HomeItemCards";
import { styleHomeCards } from "./style";

const HomeCards = () => {
  const { HomeCardsSC, LoadingSC } = styleHomeCards();
  const { data, status } = useAppSelector((state) => state.search);
  if (data) {
    console.log(data[0]?.items);
  }

  return (
    <HomeCardsSC>
      <LoadingSC>{status && <Loader />}</LoadingSC>

      {data[0]?.items.map((card, index) => {
        let thumbnail =
          card.volumeInfo.imageLinks && card.volumeInfo.imageLinks.thumbnail;
        return <HomeItemCards thumbnail={thumbnail} key={index} />;
      })}
    </HomeCardsSC>
  );
};

export default HomeCards;

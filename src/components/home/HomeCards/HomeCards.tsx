import React, { useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import HomeItemCards from "./HomeItemCards/HomeItemCards";
import { styleHomeCards } from "./style";

const HomeCards = () => {
  const { HomeCardsSC } = styleHomeCards();
  const { data, status } = useAppSelector((state) => state.search);
  //@ts-ignore
  // console.log(data[0].items);

  return (
    <HomeCardsSC>
      {status && <h2>Loading...</h2>}
      {data[0]?.items.map((card) => {
        let thumbnail =
          card.volumeInfo.imageLinks &&
          card.volumeInfo.imageLinks.smallThumbnail;
        return (
          <>
            <HomeItemCards thumbnail={thumbnail} />
          </>
        );
      })}
    </HomeCardsSC>
  );
};

export default HomeCards;

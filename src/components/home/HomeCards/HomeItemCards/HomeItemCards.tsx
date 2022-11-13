import React from "react";
import { styleHICards } from "./style";

const HomeItemCards = ({ thumbnail }: any) => {
  const {
    ItemCardWrapSC,
    ItemCardSC,
    CardDescriptionsSC,
    CardDesTitleSC,
    CardDPrice,
  } = styleHICards();

  return (
    <ItemCardWrapSC>
      <ItemCardSC>
        <img src={thumbnail} alt="icon" />
        <CardDescriptionsSC>
          <CardDesTitleSC>React js</CardDesTitleSC>
          <CardDPrice>1000 rub</CardDPrice>
        </CardDescriptionsSC>
      </ItemCardSC>
    </ItemCardWrapSC>
  );
};

export default HomeItemCards;

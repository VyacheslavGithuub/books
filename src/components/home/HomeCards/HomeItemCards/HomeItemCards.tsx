import React from "react";
import { ISearchData } from "../../../../types/ISearchData";
import { styleHICards } from "./style";

const HomeItemCards = ({ thumbnail }: any) => {
  const { HomeItemCardsSC } = styleHICards();

  return (
    <HomeItemCardsSC>
      <img src={thumbnail} alt="icon" />
    </HomeItemCardsSC>
  );
};

export default HomeItemCards;

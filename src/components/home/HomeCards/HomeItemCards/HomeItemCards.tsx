import React from "react";
import { Link } from "react-router-dom";
import { styleHICards } from "./style";

interface IHomeItemCardsProps {
  id: string;
  thumbnail: string;
  amount: number;
}

const HomeItemCards = ({ thumbnail, amount, id }: IHomeItemCardsProps) => {
  const { ItemCardWrapSC, ItemCardSC, CardDPrice } = styleHICards();

  return (
    <ItemCardWrapSC>
      <Link to={"/about_book/" + id}>
        <ItemCardSC>
          <img src={thumbnail} alt="icon" />
          <CardDPrice>{amount} rub</CardDPrice>
        </ItemCardSC>
      </Link>
    </ItemCardWrapSC>
  );
};

export default HomeItemCards;

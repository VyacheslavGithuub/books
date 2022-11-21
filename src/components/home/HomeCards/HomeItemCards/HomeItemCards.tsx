import React from "react";
import { Link } from "react-router-dom";
import SkeletonUI from "../../../../UI/SkeletonUI/SkeletonUI";
import { styleHICards } from "./style";
import { IHomeItemCardsProps } from "./type";

const HomeItemCards = ({ thumbnail, amount, id }: IHomeItemCardsProps) => {
  const { ItemCardWrapSC, ItemCardSC, CardDPrice } = styleHICards();

  return (
    <ItemCardWrapSC>
      <Link to={"/about_book/" + id}>
        <ItemCardSC>
          {thumbnail ? (
            <img src={thumbnail} alt="icon" />
          ) : (
            <SkeletonUI height="220" radius="8" />
          )}
          <CardDPrice>{amount} rub</CardDPrice>
        </ItemCardSC>
      </Link>
    </ItemCardWrapSC>
  );
};

export default HomeItemCards;

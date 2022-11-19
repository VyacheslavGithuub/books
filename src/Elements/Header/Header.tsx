import React from "react";
import { Link } from "react-router-dom";
import menuObj from "./menuObj.json";
import { useHeaderStyled } from "./style";

const Header = () => {
  const { HeaderSC, HeaderItemSC } = useHeaderStyled();

  return (
    <HeaderSC>
      {menuObj.map((i, index) => (
        <HeaderItemSC key={index}>
          <Link to={i.link}>{i.title}</Link>
        </HeaderItemSC>
      ))}
    </HeaderSC>
  );
};

export default Header;

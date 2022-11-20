import React from "react";
import { useAB_HeaderStyle } from "./style";

interface IAB_Header {
  title: string;
  categories: string;
}

const AB_Header = ({ title, categories }: IAB_Header) => {
  const { AB_TitleSC, AB_CategoriesSC } = useAB_HeaderStyle();
  return (
    <>
      <AB_CategoriesSC>{categories}</AB_CategoriesSC>
      <AB_TitleSC>{title}</AB_TitleSC>
    </>
  );
};

export default AB_Header;

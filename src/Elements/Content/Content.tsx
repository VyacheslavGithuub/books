import React from "react";
import HomePaje from "../../Pajes/HomePaje/HomePaje";
import { useContentStyled } from "./style";

const Content = () => {
  const { ContentSC } = useContentStyled();

  return (
    <ContentSC>
      <HomePaje />
    </ContentSC>
  );
};

export default Content;

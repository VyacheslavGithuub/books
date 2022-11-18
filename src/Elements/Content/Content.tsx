import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutBookPaje from "../../Pajes/AboutBookPaje/AboutBookPaje";

import HomePaje from "../../Pajes/HomePaje/HomePaje";
import { useContentStyled } from "./style";

const Content = () => {
  const { ContentSC } = useContentStyled();

  return (
    <ContentSC>
      <Routes>
        <Route path="*" element={<HomePaje />} />
        <Route path="/about_book/:id" element={<AboutBookPaje />} />
      </Routes>
    </ContentSC>
  );
};

export default Content;

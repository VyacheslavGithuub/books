import { Route, Routes } from "react-router-dom";
import AboutBookPaje from "../../Pajes/AboutBookPaje/AboutBookPaje";
import AboutProject from "../../Pajes/AboutProject/AboutProject";
import Categori from "../../Pajes/Categori/Categori";

import HomePaje from "../../Pajes/HomePaje/HomePaje";
import ScrollTopUI from "../../UI/ScrollTopUI/ScrollTopUI";
import { useContentStyled } from "./style";

const Content = () => {
  const { ContentSC, ContentScrollTopSC } = useContentStyled();

  return (
    <ContentSC>
      <Routes>
        <Route path="*" element={<HomePaje />} />
        <Route path="/about_book/:id" element={<AboutBookPaje />} />
        <Route path="/books" element={<Categori />} />
        <Route path="/about_project" element={<AboutProject />} />
      </Routes>
      <ContentScrollTopSC>
        <ScrollTopUI />
      </ContentScrollTopSC>
    </ContentSC>
  );
};

export default Content;

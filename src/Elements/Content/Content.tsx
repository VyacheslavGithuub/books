import { Route, Routes } from "react-router-dom";
import AboutBookPaje from "../../Pajes/AboutBookPaje/AboutBookPaje";
import AboutProject from "../../Pajes/AboutProject/AboutProject";
import Categori from "../../Pajes/Categori/Categori";

import HomePaje from "../../Pajes/HomePaje/HomePaje";
import { useContentStyled } from "./style";

const Content = () => {
  const { ContentSC } = useContentStyled();

  return (
    <ContentSC>
      <Routes>
        <Route path="*" element={<HomePaje />} />
        <Route path="/about_book/:id" element={<AboutBookPaje />} />
        <Route path="/category" element={<Categori />} />
        <Route path="/about_project" element={<AboutProject />} />
      </Routes>
    </ContentSC>
  );
};

export default Content;

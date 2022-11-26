import { Route, Routes } from "react-router-dom";
import AboutBookPaje from "../../Pajes/AboutBookPaje/AboutBookPaje";
import AboutProject from "../../Pajes/AboutProject/AboutProject";
import HomePaje from "../../Pajes/HomePaje/HomePaje";
import MyBooks from "../../Pajes/MyBooks/MyBooks";
import { useContentStyled } from "./style";

const Content = () => {
  const { ContentSC } = useContentStyled();

  return (
    <ContentSC>
      <Routes>
        <Route path="*" element={<HomePaje />} />
        <Route path="/about_book/:id" element={<AboutBookPaje />} />
        <Route path="/my_books" element={<MyBooks />} />
        <Route path="/about_project" element={<AboutProject />} />
      </Routes>
    </ContentSC>
  );
};

export default Content;

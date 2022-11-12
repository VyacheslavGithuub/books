import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Content from "../Elements/Content/Content";
import Footer from "../Elements/Footer/Footer";
import Header from "../Elements/Header/Header";
import IconBulb from "../Icon/IconBulb";
import { dark_theme, light_theme } from "../theme/theme";
import { useMainLayoutStyle } from "./style";
import { useApp } from "./useMainLayout";

// https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI
// AIzaSyBpZ_JLAw0k9rD7yeZ_Wy66uEfgU12nnwI
function MainLayout() {
  const { MainLayoutSC, IconBulbSC, MainLayoutContainerSC } =
    useMainLayoutStyle();
  const { isTheme, hendleChangeTheme } = useApp();

  return (
    <ThemeProvider theme={isTheme ? dark_theme : light_theme}>
      <MainLayoutSC>
        {/*Переключаем тему */}
        <IconBulbSC onClick={hendleChangeTheme}>
          <IconBulb />
        </IconBulbSC>
        {/* Контейнер для всего содержимого сайта */}
        <MainLayoutContainerSC>
          <Header />
          <Content />
          <Footer />
        </MainLayoutContainerSC>
      </MainLayoutSC>
    </ThemeProvider>
  );
}

export default MainLayout;

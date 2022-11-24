import React from "react";
import { useAboutProjectStyle } from "./style";

const AboutProject = () => {
  const { AP_TitleSC, AboutProjectSC, AP_Description_SC } =
    useAboutProjectStyle();

  return (
    <AboutProjectSC>
      <ol>
        <li>
          <AP_TitleSC>Функционал</AP_TitleSC>
          <ul>
            <li>Две темы</li>
            <li>Адаптивная верстка</li>
            <li>Личная книжная Google полка</li>
            <li>
              Проект работает с{" "}
              <a href="https://developers.google.com/books" target="_blank">
                Google Books APIs
              </a>{" "}
            </li>
          </ul>
        </li>
        <li>
          <AP_TitleSC>Стек</AP_TitleSC>
          <ul>
            <li>Axios</li>
            <li>React.js</li>
            <li>Typescript</li>
            <li>Redux ToolKit</li>
            <li>Styled-components</li>
          </ul>
        </li>
        <li>
          <AP_TitleSC>О проекте</AP_TitleSC>
          <AP_Description_SC>
            Данный проект, является сборником книг со всего интернета, в котором
            можно найти интересующею книгу, посмотреть к ней краткое описаие,
            добавить в коллекцию Googl книг.{" "}
          </AP_Description_SC>
        </li>
      </ol>
    </AboutProjectSC>
  );
};

export default AboutProject;

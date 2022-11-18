import React from "react";
import { Link } from "react-router-dom";
import { IBook } from "../../../types/IBooksData";
import { useAboutBookStyle } from "./style";
import { useAboutBook } from "./useAboutBook";

const AboutBook = ({ book }: IBook) => {
  const {
    AboutBookSC,
    AboutBookTopSC,
    AboutBookImgSC,
    ABDescriptionSC,
    AboutBookMainInfoSC,
    AB_TitleSC,
    AB_ParasSC,
    AB_ParasTitleSC,
    AB_Description,
    AB_OpenGoogleBook,
  } = useAboutBookStyle();
  const {
    authors,
    categories,
    description,
    publisher,
    title,
    previewLink,
    publishedDate,
    printedPageCount,
    photoSmall,
    listPrice,
  } = useAboutBook({ book });
  console.log(description);

  return (
    <AboutBookSC>
      <AboutBookTopSC>
        <AboutBookImgSC href={previewLink} target="_blank">
          <img src={photoSmall} alt="IconError" />
        </AboutBookImgSC>
        <AboutBookMainInfoSC>
          {categories}
          <AB_TitleSC>{title}</AB_TitleSC>
          <AB_ParasSC>
            <AB_ParasTitleSC>
              <li>Authors:</li>
              <li>Издательство:</li>
              <li>Опубликована:</li>
              <li>Всего страниц:</li>
              <li>Язык:</li>
              <li>Цена:</li>
            </AB_ParasTitleSC>
            <AB_Description>
              <li>{authors}</li>
              <li>{publisher}</li>
              <li>{publishedDate}</li>
              <li>{printedPageCount}</li>
              <li>ru</li>
              <li>{listPrice} rub</li>
            </AB_Description>
          </AB_ParasSC>

          <AB_OpenGoogleBook>
            <a href={previewLink} target="_blank">
              open google book
            </a>
          </AB_OpenGoogleBook>
        </AboutBookMainInfoSC>
      </AboutBookTopSC>
      <ABDescriptionSC>{description}</ABDescriptionSC>
    </AboutBookSC>
  );
};

export default React.memo(AboutBook);

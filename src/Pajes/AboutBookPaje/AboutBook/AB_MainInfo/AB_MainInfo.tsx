import React from "react";
import CalendarDateUI from "../../../../UI/CalendarDateUI/CalendarDateUI";
import { useAB_MainInfoStyle } from "./style";

interface IAB_MainInfoProps {
  authors: string;
  language: string;
  publisher: string;
  listPrice: number;
  publishedDate: string;
  printedPageCount: number;
}
const AB_MainInfo = ({
  authors,
  language,
  publisher,
  listPrice,
  publishedDate,
  printedPageCount,
}: IAB_MainInfoProps) => {
  const { AB_ParasSC, AB_DescriptionSC, AB_ParasTitleSC } =
    useAB_MainInfoStyle();

  return (
    <AB_ParasSC>
      <AB_ParasTitleSC>
        <li>Authors:</li>
        <li>Издательство:</li>
        <li>Опубликована:</li>
        <li>Всего страниц:</li>
        <li>Язык:</li>
        <li>Цена:</li>
      </AB_ParasTitleSC>

      <AB_DescriptionSC>
        <li>{authors}</li>
        <li>{publisher}</li>
        <li>
          <CalendarDateUI data={publishedDate} />{" "}
        </li>
        <li>{printedPageCount}</li>
        <li>{language}</li>
        <li>{listPrice} rub</li>
      </AB_DescriptionSC>
    </AB_ParasSC>
  );
};

export default AB_MainInfo;

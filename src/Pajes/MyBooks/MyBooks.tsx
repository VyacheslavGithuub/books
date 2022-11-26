import React from "react";
import { useMyBooksStyle } from "./style";
const MyBooks = () => {
  const { MyBooksSC, MyBooks_Notes_SC, MyBooks_Description_SC } =
    useMyBooksStyle();
  return (
    <MyBooksSC>
      <MyBooks_Notes_SC>
        <MyBooks_Description_SC>
          <b>!!! Примечание.</b> Создание и удаление книжных полок, а также
          изменение настроек конфиденциальности для книжных полок в настоящее
          время возможно только через сайт{" "}
          <a href="https://books.google.com/" target="_blank">
            Google Книги
          </a>{" "}
          .
        </MyBooks_Description_SC>
      </MyBooks_Notes_SC>
    </MyBooksSC>
  );
};

export default MyBooks;

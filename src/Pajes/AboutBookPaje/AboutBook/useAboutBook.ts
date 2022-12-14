import React from "react";
import { IBook } from "../../../types/IBooksData";

export const useAboutBook = ({ book }: IBook) => {
  //book
  const volumeInfo = book?.volumeInfo;
  const saleInfo = book?.saleInfo;

  //volumeInfo
  const authors = volumeInfo?.authors[0];
  const language = volumeInfo?.language;
  const categories = volumeInfo?.categories[0];
  const description = volumeInfo?.description;
  const publisher = volumeInfo?.publisher;
  const title = volumeInfo?.title;
  const previewLink = volumeInfo?.previewLink;
  const publishedDate = volumeInfo?.publishedDate;
  const printedPageCount = volumeInfo?.printedPageCount;
  //photo
  const imageLinks = volumeInfo?.imageLinks;
  const photoSmall = imageLinks?.small;
  //saleInfo
  const listPrice = saleInfo?.listPrice.amount;

  return {
    title,
    authors,
    language,
    publisher,
    listPrice,
    photoSmall,
    categories,
    description,
    previewLink,
    publishedDate,
    printedPageCount,
  };
};

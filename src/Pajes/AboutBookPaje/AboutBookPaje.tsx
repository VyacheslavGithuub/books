import React, { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getInformationBook } from "../../redux/slice/booksAPI";
import { IBooksItem, VolumeInfo } from "../../types/IBooksData";
import Loader from "../../UI/Loader/Loader";
import AboutBook from "./AboutBook/AboutBook";

const AboutBookPaje = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, dataBook, errorBook } = useAppSelector(
    (state) => state.books
  );
  useEffect(() => {
    id && dispatch(getInformationBook(id));
  }, []);

  return (
    // style={{ height: "calc(100vh - 155px)" }}
    <div>
      {isLoading && <Loader />}
      {errorBook && <h2>Google service not responding </h2>}
      {dataBook && <AboutBook book={dataBook[0]} />}
    </div>
  );
};

export default AboutBookPaje;

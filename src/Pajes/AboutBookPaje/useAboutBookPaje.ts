import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getInformationBook } from "../../redux/slice/booksAPI";

export const useAboutBookPaje = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, dataBook, errorBook } = useAppSelector(
    (state) => state.books
  );
  useEffect(() => {
    id && dispatch(getInformationBook(id));
  }, []);
  return { isLoading, dataBook, errorBook };
};

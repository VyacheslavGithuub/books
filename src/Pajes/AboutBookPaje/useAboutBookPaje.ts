import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getInformationBook } from "../../redux/slice/booksAPI";
import { clearDataBook } from "../../redux/slice/booksSlice";

export const useAboutBookPaje = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isLoading, dataBook, errorBook } = useAppSelector(
    (state) => state.books
  );
  useEffect(() => {
    if (id) {
      dispatch(clearDataBook());
      dispatch(getInformationBook(id));
    }
  }, []);
  return { isLoading, dataBook, errorBook };
};

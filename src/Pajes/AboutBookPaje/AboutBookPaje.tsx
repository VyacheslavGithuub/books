import Loader from "../../UI/Loader/Loader";
import AboutBook from "./AboutBook/AboutBook";
import { useAboutBookPaje } from "./useAboutBookPaje";

const AboutBookPaje = () => {
  const { isLoading, dataBook, errorBook } = useAboutBookPaje();

  return (
    <>
      {isLoading && <Loader />}
      {errorBook && <h2>Google service not responding </h2>}
      {dataBook && <AboutBook book={dataBook[0]} />}
    </>
  );
};

export default AboutBookPaje;

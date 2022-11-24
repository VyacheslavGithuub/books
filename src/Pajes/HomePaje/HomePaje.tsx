import React from "react";
import HomeCards from "../../components/home/HomeCards/HomeCards";
import SearchSection from "../../components/home/SearchSection/SearchSection";
import { useHomePajeStyle } from "./style";

const HomePaje = () => {
  const { HomePajeSC } = useHomePajeStyle();

  return (
    <HomePajeSC>
      <SearchSection />
      <HomeCards />
    </HomePajeSC>
  );
};

export default HomePaje;

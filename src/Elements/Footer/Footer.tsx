import React from "react";
import IconBulb from "../../Icon/IconBulb";
import { useFooterStyled } from "./style";

interface IFooter {
  revTheme: () => void;
}

const Footer = ({ revTheme }: IFooter) => {
  const { FooterSC, IconBulbSC } = useFooterStyled();

  return (
    <FooterSC>
      <div>
        Github:{" "}
        <a target="_blank" href="https://github.com/VyacheslavGithuub">
          {" "}
          VyacheslavGithuub
        </a>
      </div>
      {/*Переключаем тему */}
      <IconBulbSC onClick={revTheme}>
        <IconBulb />
      </IconBulbSC>
    </FooterSC>
  );
};

export default Footer;

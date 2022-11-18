import React from "react";
import { useFooterStyled } from "./style";

const Footer = () => {
  const { FooterSC } = useFooterStyled();

  return (
    <FooterSC>
      Github:{" "}
      <a target="_blank" href="https://github.com/VyacheslavGithuub">
        {" "}
        VyacheslavGithuub
      </a>
    </FooterSC>
  );
};

export default Footer;

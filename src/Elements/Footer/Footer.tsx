import React from "react";
import { useFooterStyled } from "./style";

const Footer = () => {
  const { FooterSC } = useFooterStyled();

  return <FooterSC>Footer</FooterSC>;
};

export default Footer;

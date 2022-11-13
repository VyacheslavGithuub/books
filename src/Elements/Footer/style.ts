import styled from "styled-components";

const FooterSC = styled.footer`
  height: 40px;
  padding: 15px;
  background-color: ${({ theme }) => theme.business};
  color: ${({ theme }) => theme.background};

  a {
    color: ${({ theme }) => theme.invertBackground};
  }
`;

export const useFooterStyled = () => ({
  FooterSC,
});

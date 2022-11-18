import styled from "styled-components";

const FooterSC = styled.footer`
  height: 40px;
  padding: 15px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.background};

  a {
    color: ${({ theme }) => theme.textMain};
  }
`;

export const useFooterStyled = () => ({
  FooterSC,
});

import styled from "styled-components";

const FooterSC = styled.footer`
  position: sticky;
  bottom: 0px;
  left: calc(50% - 600px);
  width: 1200px;
  height: 70px;
  background-color: ${({ theme }) => theme.business};

  @media (max-width: 1200px) {
    width: 100%;
    left: 0px;
  }
`;

export const useFooterStyled = () => ({
  FooterSC,
});

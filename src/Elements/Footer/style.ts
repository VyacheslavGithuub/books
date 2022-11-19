import styled from "styled-components";

const FooterSC = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 15px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.footer};
  color: ${({ theme }) => theme.background};

  a {
    color: ${({ theme }) => theme.textMain};
  }
`;
const IconBulbSC = styled.div`
  /* position: absolute;
  right: 5%;
  top: 1%; */
  /* margin-top: -5px; */
  fill: ${({ theme }) => theme.background};
  cursor: pointer;
`;
export const useFooterStyled = () => ({
  FooterSC,
  IconBulbSC,
});

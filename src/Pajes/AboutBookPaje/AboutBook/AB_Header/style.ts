import styled from "styled-components";

const AB_TitleSC = styled.h2`
  font-size: 30px;
  font-weight: 500;
  margin: 10px 0px 30px 0px;
  @media (max-width: 800px) {
    font-size: 26px;
  }
  @media (max-width: 750px) {
    font-size: 24px;
  }
  @media (max-width: 650px) {
    font-size: 22px;
  }
  @media (max-width: 650px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    text-align: center;
    margin-bottom: 10px;
    font-size: 24px;
  }
  @media (max-width: 450px) {
    text-align: left;
    margin-bottom: 10px;
    font-size: 22px;
  }
`;
const AB_CategoriesSC = styled.div`
  color: gray;
  font-weight: 400;
`;

export const useAB_HeaderStyle = () => ({
  AB_TitleSC,
  AB_CategoriesSC,
});

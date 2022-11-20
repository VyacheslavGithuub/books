import styled from "styled-components";

const AB_ParasSC = styled.div`
  display: flex;
  @media (max-width: 750px) {
    font-size: 14px;
  }
`;
const AB_ParasTitleSC = styled.ol`
  list-style-type: disc;
  padding-left: 15px;

  @media (max-width: 750px) {
    padding-left: 15px;
    min-width: 125px;
    width: 30%;
  }
`;
const AB_DescriptionSC = styled.ol`
  list-style-type: none;
  @media (max-width: 750px) {
    width: 70%;
    padding-left: 15px;
  }
`;

export const useAB_MainInfoStyle = () => ({
  AB_ParasSC,
  AB_DescriptionSC,
  AB_ParasTitleSC,
});

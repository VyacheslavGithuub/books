import styled from "styled-components";

const ItemCardWrapSC = styled.div`
  width: calc(100% / 5);
  display: flex;
  justify-content: center;

  @media (max-width: 1100px) {
    width: calc(100% / 4);
  }
  @media (max-width: 900px) {
    width: calc(100% / 3);
  }
  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
  @media (max-width: 350px) {
    width: calc(100% / 1);
  }
`;
const ItemCardSC = styled.div`
  /* background-color: ${({ theme }) => theme.intermediate}; */
  background-color: rgba(0, 0, 0, 0.5);
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;

  img {
    width: 100%;
    height: 250px;
  }
`;
const CardDescriptionsSC = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 500;
`;
const CardDesTitleSC = styled.div``;
const CardDPrice = styled.button`
  background-color: ${({ theme }) => theme.auxiliary};
  width: 100%;
  font-size: 18px;
  line-height: 150%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: none;
`;
export const styleHICards = () => ({
  ItemCardWrapSC,
  ItemCardSC,
  CardDescriptionsSC,
  CardDesTitleSC,
  CardDPrice,
});

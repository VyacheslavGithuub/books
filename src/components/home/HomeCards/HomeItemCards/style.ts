import styled from "styled-components";

const ItemCardWrapSC = styled.div`
  width: calc(100% / 5);
  display: flex;
  justify-content: center;

  a {
    display: flex;
    justify-content: center;
    min-width: 220px;
  }

  @media (max-width: 1100px) {
    width: calc(100% / 4);
  }
  @media (max-width: 900px) {
    width: calc(100% / 3);
  }
  @media (max-width: 600px) {
    width: calc(100% / 2);
  }
  @media (max-width: 450px) {
    a {
      min-width: 180px;
    }
  }
  @media (max-width: 350px) {
    width: 100%;
    a {
      width: 80%;
    }
  }
`;
const ItemCardSC = styled.div`
  min-height: 250px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.7);
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  img {
    width: 100%;
    height: 250px;
    border-radius: 8px;
  }
  @media (max-width: 450px) {
    padding: 10px;

    img {
      height: 200px;
    }
  }
`;

const CardDPrice = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.auxiliary};
  color: ${({ theme }) => theme.textMain};
  width: 100%;
  margin-top: 5px;
  font-size: 18px;
  line-height: 150%;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: none;
  border-radius: 8px;
`;
export const styleHICards = () => ({
  ItemCardWrapSC,
  ItemCardSC,
  CardDPrice,
});

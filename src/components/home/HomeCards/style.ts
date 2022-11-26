import styled from "styled-components";

const HomeCardsSC = styled.div`
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.ordinary};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px 0px;
`;
const HomeCardsTitleSC = styled.h2`
  text-align: center;
  /* margin-top: 50px; */

  @media (max-width: 600px) {
    margin-top: 0px;
    font-size: 20px;
    /* position: absolute;
    top: 50%;
    left: calc(50% - 250px); */
  }
`;
const LoaderSC = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 10px;
`;
const HomeCardsScrollSC = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    position: sticky;
    bottom: 30px;
    left: 13px;
  }
`;

export const styleHomeCards = () => ({
  LoaderSC,
  HomeCardsSC,
  HomeCardsTitleSC,
  HomeCardsScrollSC,
});

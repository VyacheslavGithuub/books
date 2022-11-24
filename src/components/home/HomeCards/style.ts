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
  @media (max-width: 600px) {
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 40px);
  }
`;
export const styleHomeCards = () => ({
  LoaderSC,
  HomeCardsSC,
  HomeCardsTitleSC,
});

import styled from "styled-components";

const HomeCardsSC = styled.div`
  position: relative;
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.ordinary};

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px 0px;
`;
const HomeCardsTitleSC = styled.h2`
  text-align: center;
  margin-top: 50px;

  @media (max-width: 600px) {
    font-size: 20px;
    margin-top: 100px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
  }
`;
export const styleHomeCards = () => ({
  HomeCardsSC,
  HomeCardsTitleSC,
});

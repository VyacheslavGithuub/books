import styled from "styled-components";

const HomeCardsSC = styled.div`
  position: relative;

  min-height: 150px;
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.ordinary};

  display: flex;
  flex-wrap: wrap;
  gap: 25px 0px;
`;
const HomeCardsTitleSC = styled.h2`
  position: absolute;
  bottom: 0%;
  left: calc(50% - 310px);
`;
export const styleHomeCards = () => ({
  HomeCardsSC,
  HomeCardsTitleSC,
});

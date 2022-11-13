import styled from "styled-components";

const HomeCardsSC = styled.div`
  position: relative;

  min-height: 200px;
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.ordinary};

  display: flex;
  flex-wrap: wrap;
  gap: 25px 0px;
`;
const LoadingSC = styled.div`
  position: absolute;
  left: calc(50% - 40px);
  bottom: calc(50% - 40px);
`;

export const styleHomeCards = () => ({
  HomeCardsSC,
  LoadingSC,
});

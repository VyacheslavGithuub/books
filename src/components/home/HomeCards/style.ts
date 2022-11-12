import styled from "styled-components";

const HomeCardsSC = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 15px 0px;
  background-color: ${({ theme }) => theme.ordinary};

  display: flex;
  flex-wrap: wrap;
  gap: 25px 0px;
`;

export const styleHomeCards = () => ({
  HomeCardsSC,
});

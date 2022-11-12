import styled from "styled-components";

const ContentSC = styled.main`
  width: 100%;
  margin: 15px 0px;
  background-color: ${({ theme }) => theme.auxiliary};
`;

export const useContentStyled = () => ({
  ContentSC,
});

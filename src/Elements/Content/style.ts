import styled from "styled-components";

const ContentSC = styled.main`
  width: 100%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.auxiliary};
`;

export const useContentStyled = () => ({
  ContentSC,
});

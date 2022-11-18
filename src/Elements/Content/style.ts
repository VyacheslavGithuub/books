import styled from "styled-components";

const ContentSC = styled.main`
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  background-color: ${({ theme }) => theme.ordinary};
`;

export const useContentStyled = () => ({
  ContentSC,
});

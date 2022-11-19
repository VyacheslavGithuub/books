import styled from "styled-components";

const ContentSC = styled.main`
  width: 100%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.ordinary};
  color: ${({ theme }) => theme.textAxilary};
  min-height: calc(100vh - 155px);
`;

export const useContentStyled = () => ({
  ContentSC,
});

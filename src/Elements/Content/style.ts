import styled from "styled-components";

const ContentSC = styled.main`
  width: 100%;
  margin-top: 15px;
  background-color: ${({ theme }) => theme.ordinary};
  color: ${({ theme }) => theme.textAxilary};
  min-height: calc(100vh - 165px);

  @media (max-width: 600px) {
    min-height: calc(100vh - 135px);
  }
`;
const ContentScrollTopSC = styled.div`
  display: none;
  @media (max-width: 1200px) {
    display: block;
    position: sticky;
    bottom: 30px;
    left: 13px;
  }
`;

export const useContentStyled = () => ({
  ContentSC,
  ContentScrollTopSC,
});
